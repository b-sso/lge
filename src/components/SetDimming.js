import React, { useState } from 'react';

const SetDimming = () => {
  const [dimmingControl, setDimmingControl] = useState(80);

  return (
    <div class="comp-set type-dimming">
      <div className="control">
        <a className="btn-down" onClick={() => setDimmingControl(dimmingControl - 5)}></a>
        <span className="addon">Dimming</span>
        <span className="set">{dimmingControl}</span>
        <a className="btn-up" onClick={() => setDimmingControl(dimmingControl + 5)}></a>
      </div>
    </div>
  );
}

export default SetDimming;
