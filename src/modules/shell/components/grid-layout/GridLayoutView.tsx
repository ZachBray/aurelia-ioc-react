import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';
//import AutoResponsive from 'autoresponsive-react';

export abstract class IGridLayoutView {
  abstract render(props: {
    items: any[]
  }): any;
}

@transient(IGridLayoutView)
@autoinject()
export class GridLayoutView implements IGridLayoutView {
  render({items}) {
    return <div>{items}</div>;
    /*
    return (
      <AutoResponsive closeAnimation={true}>
        {items}
      </AutoResponsive>
    );
    */
  }
}
