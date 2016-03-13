import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class IShellView {
  abstract render(props: {
    layoutView: any,
    launcherView: any
  }): any;
}

@autoinject()
@transient(IShellView)
export class ShellView implements IShellView {
  render({layoutView, launcherView}) {
    return (
      <div>
        {launcherView}
        {layoutView}
      </div>
    );
  }
}
