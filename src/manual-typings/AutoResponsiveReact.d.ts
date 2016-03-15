declare module 'autoresponsive-react' {
  import * as React from 'react';

  interface IAutoResponsiveProps {
    containerWidth?: number;
    containerHeight?: number;
    gridWidth?: number;
    prefixClassName?: string;
    itemClassName?: string;
    itemMargin?: number;
    horizontalDirection?: string;
    verticalDirection?: string;
    closeAnimation?: boolean;
    transitionDuration?: number;
    transitionTimingFunction?: string;
    onItemDidLayout?: (item: any) => void;
    onContainerDidLayout?: () => void;

  }

  class AutoResponsive extends React.Component<IAutoResponsiveProps, {}> {
  }

  export default AutoResponsive;
}
