import stringTable, { useLanguage } from '../../Lang';

const Golf = () => {
  const { lang } = useLanguage();

	return (
		<div className="widget widget-golf">
			<div className="title">
				<span className="device-icon type-golf"></span>
				<h3>{stringTable[lang].titleGolf}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<h4>{stringTable[lang].golfControlTitle}</h4>
				<div className="control">
					<a href="" className="btn-start">{stringTable[lang].start}</a>
					<a href="" className="btn-stop">{stringTable[lang].stop}</a>
				</div>
				<div className="time">
					<h4>{stringTable[lang].golfTimeTitle}</h4>
					<div className="current">00:00:00</div>
				</div>
			</div>
		</div>
  );
};

export default Golf;