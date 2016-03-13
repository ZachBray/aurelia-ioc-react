import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ISelectorView} from './ISelectorView';

@autoinject()
@transient(ISelectorView)
export class ComboBoxView<T> implements ISelectorView<T> {
  render({value, options, onChange}) {
    console.log(value);
    const selectedIndex = options.indexOf(value);
    const handleChange = e => {
      const selectedIndex = e.target.value;
      if (selectedIndex === -1) return;
      const selectedValue = options[selectedIndex];
      onChange(selectedValue);
    };
    return (
      <select value={selectedIndex} onChange={handleChange}>
        <option value={-1}>Select ...</option>
        {options.map((option, i) => <option key={i} value={i}>{option.toString()}</option>)}
      </select>
    );
  }
}
