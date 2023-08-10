import stringTable, { useLanguage } from '../../Lang';

const Purifier = () => {
  const { lang } = useLanguage();

	return (
		<div className="widget widget-purifier">
			<div className="title">
				<span className="device-icon type-purifier"></span>
				<h3>{stringTable[lang].titlePurifier}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<div className="status">
					<h4>Overall Air Quaility</h4>
					{/* FIXME: 상태에 따라 클래스 및 텍스트 변경
						* good : <span className="current type-good">GOOD</span>
						* normal : <span className="current type-normal">NORMAL</span>
						* bad : <span className="current type-bad">BAD</span>
						* worst : <span className="current type-worst">VERY BAD</span>
					*/}
					<span className="current type-good">GOOD</span>
				</div>
				<div className="select-row">
					<span className="label">Mode</span>
					<select name="" className="comp-select">
						<option value="">{stringTable[lang].modeClean}</option>
						<option value="">{stringTable[lang].modeSleep}</option>
						<option value="">{stringTable[lang].modeSlient}</option>
						<option value="">{stringTable[lang].modeHumidity}</option>
						<option value="">{stringTable[lang].modeCirculator}</option>
						<option value="">{stringTable[lang].modeBaby}</option>
						<option value="">{stringTable[lang].modeDual}</option>
						<option value="">{stringTable[lang].modeAuto}</option>
						<option value="">{stringTable[lang].modeFast}</option>
						<option value="">{stringTable[lang].modeSmart}</option>
					</select>
				</div>
				<div className="select-row">
					<span className="label">Speed</span>
					<select name="" className="comp-select">
						<option value="">{stringTable[lang].modeAuto}</option>
						<option value="">{stringTable[lang].modeSpeedLow}</option>
						<option value="">{stringTable[lang].modeSpeedMiddle}</option>
						<option value="">{stringTable[lang].modeSpeedHigh}</option>
						<option value="">{stringTable[lang].modeSpeedTurbo}</option>
					</select>
				</div>
				<div className="select-row">
					<span className="label">Boost Speed</span>
					<select name="" className="comp-select">
						<option value="">{stringTable[lang].modeAuto}</option>
						<option value="">{stringTable[lang].modeSpeedLow}</option>
						<option value="">{stringTable[lang].modeSpeedMiddle}</option>
						<option value="">{stringTable[lang].modeSpeedHigh}</option>
						<option value="">{stringTable[lang].modeSpeedTurbo}</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default Purifier;