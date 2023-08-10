import React, { useState } from 'react';
import Range from "../Range";
import stringTable, { useLanguage } from '../../Lang';

const Projector = () => {
  const { lang } = useLanguage();
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
				<h3>{stringTable[lang].titleProjector}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" checked={isDeviceWork} onChange={handleChkClick} /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<Range type="type-vol" title="Volume" value={volRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<Range type="type-bright" title="Brightness" value={brightRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<div className="select-row">
					<span className="label">Picture Mode</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">{stringTable[lang].modePicMall}</option>
						<option value="">{stringTable[lang].modePicGeneral}</option>
						<option value="">{stringTable[lang].modePicCorp}</option>
						<option value="">{stringTable[lang].modePicTrans}</option>
						<option value="">{stringTable[lang].modePicEdu}</option>
						<option value="">{stringTable[lang].modePicHospital}</option>
						<option value="">{stringTable[lang].modePicExpert}</option>
						<option value="">{stringTable[lang].modePicCelibration}</option>
					</select>
				</div>
				<div className="select-row">
					<span className="label">Sound Mode</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">{stringTable[lang].modeSoundStandard}</option>
						<option value="">{stringTable[lang].modeSoundCinema}</option>
						<option value="">{stringTable[lang].modeSoundClear}</option>
						<option value="">{stringTable[lang].modeSoundSports}</option>
						<option value="">{stringTable[lang].modeSoundMusic}</option>
						<option value="">{stringTable[lang].modeSoundGame}</option>
					</select>
				</div>
				<div className="select-row">
					<span className="label">Input</span>
					<select name="" className="comp-select" disabled={!isDeviceWork}>
						<option value="">{stringTable[lang].modeInputHdmi1}</option>
						<option value="">{stringTable[lang].modeInputHdmi2}</option>
						<option value="">{stringTable[lang].modeInputHdBase}</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default Projector;