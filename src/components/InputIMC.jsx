import React from 'react';

export default function InputIMC(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="col-6 form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
