declare module 'react-mdl' {
  import * as React from 'react';
  export class Textfield extends React.Component<{
    disabled?: boolean,
    error?: string,
    expandable?: boolean,
    expandableIcon?: string,
    floatingLabel?: boolean,
    inputClassName?: string,
    label?: string,
    maxRows?: number,
    onChange?: (e: any) => void,
    pattern?: string,
    required?: boolean,
    rows?: number,
    style?: any,
    value?: string
  }, {}> { }
}
