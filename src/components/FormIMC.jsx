import React from 'react';

import InputIMC from './InputIMC';
import BtnIMC from './BtnIMC';

export default function FormIMC(props) {
  return (
    <div>
      <InputIMC
        type="number"
        id="altura"
        placeholder="Digite sua altura"
        label="Altura:"
        onChange={props.altura}
      />
      <InputIMC
        type="number"
        id="peso"
        placeholder="Digite sua peso"
        label="Peso:"
        onChange={props.peso}
      />
      <BtnIMC onClick={props.event} />
    </div>
  );
}
