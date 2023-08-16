import stringTable, { useLanguage } from '../../Lang';

const Styler = () => {
  const { lang } = useLanguage();

	return (
		<div className="widget widget-styler">
			<div className="title">
				<span className="device-icon type-styler"></span>
				<h3>{stringTable[lang].titleStyler}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<div className="control">
					<a href="" className="btn-play"></a>
					<a href="" className="btn-pause"></a>
				</div>
				<div className="status">
					<h4>{stringTable[lang].stylerStatusTitle}</h4>
					{/* FIXME: 
						<span className="current">{stringTable[lang].stylerStatusPause}</span>
						<span className="current">{stringTable[lang].stylerStatusEnd}</span>
						<span className="current">{stringTable[lang].stylerStatusError}</span>
						<span className="current">{stringTable[lang].stylerStatusNightDry}</span>
						<span className="current">{stringTable[lang].stylerStatusSteam}</span>
						<span className="current">{stringTable[lang].stylerStatusSterilize}</span>
					*/}
					<span className="current">{stringTable[lang].stylerStatusDrying}</span>
				</div>
				<div className="time">
					<h4>{stringTable[lang].stylerTimeTitle}</h4>
					<div className="current">14:32</div>
				</div>
			</div>
		</div>
  );
};

export default Styler;