import React, { useState } from 'react';
import stringTable, { useLanguage } from '../Lang';

const SetDimming = () => {
  const { lang } = useLanguage();
  const [dimmingControl, setDimmingControl] = useState(80);

  return (
    <div className="comp-set type-dimming">
      <div className="control">
        <a className="btn-down" onClick={() => setDimmingControl(dimmingControl - 5)}></a>
        <span className="addon">{stringTable[lang].setDimming}</span>
        <span className="set">{dimmingControl}</span>
        <a className="btn-up" onClick={() => setDimmingControl(dimmingControl + 5)}></a>
      </div>
    </div>
  );
}

export default SetDimming;
