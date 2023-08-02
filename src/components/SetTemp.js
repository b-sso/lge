import React, { useState } from 'react';

const SetTemp = () => {
  const [tempControl, setTempControl] = useState(23.5);

  return (
    <div class="comp-set type-temp">
      <h4>Current Temp</h4>
      <div className="status">25.0</div>
      <div className="control">
        <a className="btn-down" onClick={() => setTempControl(tempControl - 0.5)}></a>
        <span className="addon">Set Temp.</span>
        <span className="set">{tempControl}</span>
        <a className="btn-up" onClick={() => setTempControl(tempControl + 0.5)}></a>
      </div>
    </div>
  );
}

export default SetTemp;
