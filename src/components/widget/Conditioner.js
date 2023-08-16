import SetTemp from "../SetTemp";
import stringTable, { useLanguage } from '../../Lang';

const Conditioner = () => {
  const { lang } = useLanguage();

	return (
		<div className="widget widget-conditioner">
			<div className="title">
				<span className="device-icon type-conditioner"></span>
				<h3>{stringTable[lang].titleConditioner}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<SetTemp />
				<div className="select-row">
					<span className="label">{stringTable[lang].labelMode}</span>
					<select name="" className="comp-select">
						<option value="">{stringTable[lang].modeCool}</option>
						<option value="">{stringTable[lang].modeAirDry}</option>
						<option value="">{stringTable[lang].modeFan}</option>
						<option value="">{stringTable[lang].modeAuto}</option>
						<option value="">{stringTable[lang].modeAirClean}</option>
						<option value="">{stringTable[lang].modeAroma}</option>
						<option value="">{stringTable[lang].modeEnergySaving}</option>
					</select>
				</div>
				<div className="select-row">
					<span className="label">{stringTable[lang].labelSpeed}</span>
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

export default Conditioner;