import React, { useState } from 'react';
import stringTable, { useLanguage } from '../Lang';

const SetTemp = () => {
  const { lang } = useLanguage();
  const [tempControl, setTempControl] = useState(23.5);

  return (
    <div className="comp-set type-temp">
      <h4>{stringTable[lang].currentTemp}</h4>
      <div className="status">25.0</div>
      <div className="control">
        <a className="btn-down" onClick={() => setTempControl(tempControl - 0.5)}></a>
        <span className="addon">{stringTable[lang].setTemp}</span>
        <span className="set">{tempControl}</span>
        <a className="btn-up" onClick={() => setTempControl(tempControl + 0.5)}></a>
      </div>
    </div>
  );
}

export default SetTemp;
