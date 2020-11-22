import React from 'react';
import {Input, DatePicker} from 'antd';
import moment from 'moment';
import {inputStyles} from '../styles';

const {RangePicker} = DatePicker;

function AddEvent (props) {
  return (
    <React.Fragment>
      {/* <Input
        type="text"
        placeholder="Add Title"
        defaultvalue={props.title}
        style={inputStyles}
        size="large"
        autoFocus={true}
        onChange={props.onTitleChange}
      /> */}
      <h1>{props.title}</h1>
      <p>{props.date}</p> <p>{props.start}</p>
      <p>OHIP: {props.ohip_id}</p>
      <p>CPSO: {props.cpso_id}</p>
      {/* <RangePicker
        style={{width: '100%'}}
        value={[moment (props.start), moment (props.end)]}
        onChange={props.onTimeChange}
        showTime={{
          format: 'HH:mm',
          hourStep: 1,
          minuteStep: 15,
          defaultValue: [moment (props.start), moment (props.end)],
        }}
        format="MMM Do, YYYY hh:mm a"
      /> */}
    </React.Fragment>
  );
}

export default AddEvent;
