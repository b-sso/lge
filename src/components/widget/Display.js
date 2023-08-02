import React, { useState } from 'react';
import Range from "../Range";

const Display = () => {
  const [volRange, setVolRange] = useState(50);
  const [brightRange, setBrightRange] = useState(80);
  const handleRangeChange = (type, event) => {
    const value = event.target.value;
    if (type === 'type-vol') {
      setVolRange(value);
    } else if (type === 'type-bright') {
      setBrightRange(value);
    }
  };

	const [isDeviceWork, setIsDeviceWork] = useState(true);
	const handleChkClick = (event) => {
    setIsDeviceWork(event.target.checked);
  };

	return (
		<div className={`widget widget-display ${isDeviceWork ? 'status-on' : 'status-off'}`}>
			<div className="title">
				<span className={`device-icon type-display ${isDeviceWork ? 'on' : ''}`}></span>
				<h3>Display</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" checked={isDeviceWork} onChange={handleChkClick} /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<Range type="type-vol" title="Volume" value={volRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<Range type="type-bright" title="Brightness" value={brightRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<div class="select-row">
					<span class="label">Picture Mode</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">General</option>
					</select>
				</div>
				<div class="select-row">
					<span class="label">Input</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">HDML2_DTV</option>
					</select>
				</div>
 			</div>
		</div>
  );
};

export default Display;