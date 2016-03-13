import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class ILauncherView {
  abstract render(props: {
    selector: any
  }): any;
}

@autoinject()
@transient(ILauncherView)
export class LauncherView implements ILauncherView {
  render({selector}) {
    return (
      <div>
        {selector}
      </div>
    );
  }
}
