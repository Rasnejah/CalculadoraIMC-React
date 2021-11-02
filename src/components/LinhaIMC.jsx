import React from 'react';
//import MostrarIMC from '../MostrarIMC';

export default function LinhaIMC({ imc, mostrarIMC }) {
  return (
    <>
      <label htmlFor="customRange3" className="form-label">
        <h2>{imc.toFixed(2)}</h2>
        <h2>{mostrarIMC}</h2>
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="100"
        step="0.5"
        id="customRange3"
        defaultValue={imc}
      />
    </>
  );
}
// peso idal 19 - 24
// sobrepeso 25 - 29
// obesidade grau 1 - 30 -24
// obesidade grau 2 - 35 - 39
// obesidade grau 3 - 40 +
