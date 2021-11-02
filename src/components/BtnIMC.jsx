import React from 'react';

export default function BtnIMC(props) {
  return (
    <div className="col-auto">
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={(e) => props.onClick(e.target.value)}
      >
        Calcular IMC
      </button>
    </div>
  );
}
