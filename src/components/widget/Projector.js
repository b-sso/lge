import React, { useState } from 'react';
import Range from "../Range";

const Projector = () => {
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
		<div className={`widget widget-projector ${isDeviceWork ? 'status-on' : 'status-off'}`}>
			<div className="title">
				{/* FIXME: 활성화 된 상태면 on 클래스 추가 / 에러 발생시 error 클래스 추가 <span className="device-icon type-projector on error"></span> */}
				<span className={`device-icon type-projector ${isDeviceWork ? 'on' : ''}`}></span>
				<h3>Projector</h3>
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
					<span class="label">Sound Mode</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">Standard</option>
					</select>
				</div>
				<div class="select-row">
					<span class="label">Input</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">HDML1_DTV</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default Projector;