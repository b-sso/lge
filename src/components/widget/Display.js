import React, { useState } from 'react';
import Range from "../Range";
import stringTable, { useLanguage } from '../../Lang';

const Display = () => {
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
		<div className={`widget widget-display ${isDeviceWork ? 'status-on' : 'status-off'}`}>
			<div className="title">
				<span className={`device-icon type-display ${isDeviceWork ? 'on' : ''}`}></span>
				<h3>{stringTable[lang].titleDisplay}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" checked={isDeviceWork} onChange={handleChkClick} /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<Range type="type-vol" title={stringTable[lang].rangeVol} value={volRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<Range type="type-bright" title={stringTable[lang].rangeBright} value={brightRange} handleChange={handleRangeChange} disabled={!isDeviceWork} />
				<div className="select-row">
					<span className="label">{stringTable[lang].labelPicMode}</span>
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
					<span className="label">{stringTable[lang].labelInput}</span>
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

export default Display;