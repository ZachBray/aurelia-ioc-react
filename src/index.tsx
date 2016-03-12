/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />
/// <reference path="../node_modules/aurelia-pal/dist/aurelia-pal.d.ts" />
/// <reference path="../node_modules/aurelia-metadata/dist/aurelia-metadata.d.ts" />
/// <reference path="../node_modules/aurelia-dependency-injection/dist/aurelia-dependency-injection.d.ts" />
import 'aurelia-polyfills';
import * as _ from 'lodash';
import * as React from 'react';
import {Container} from 'aurelia-dependency-injection';
import {IRootController} from './core/IRootController';
import {RootPresenter} from './core/RootPresenter';
import {render} from 'react-dom';
import 'file?name=[name].[ext]!./index.html';

bootstrapApplication();

function bootstrapApplication() {
  const container = bootstrapContainer();
  const rootController = container.get(IRootController);
  render(<RootPresenter view$={rootController.view$} />, document.getElementById('root'));
}


function bootstrapContainer() {
  const container = new Container();
  const serviceExports = getContainerExports();
  container.autoRegisterAll(serviceExports);
  return container;
}

function getContainerExports() {
  const requireContext = require.context('./modules', true, /^\.\/.*\.tsx?$/);
  const moduleObjects = requireContext.keys().map(requireContext);
  const moduleExports = _.flatten(moduleObjects.map(moduleObject => Object.keys(moduleObject).map(k => moduleObject[k])));
  const serviceExports = moduleExports.filter(moduleExport => moduleExport.inject !== undefined);
  return serviceExports;
}
