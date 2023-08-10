import SetDimming from "../SetDimming";
import stringTable, { useLanguage } from '../../Lang';

const Lighting = () => {
  const { lang } = useLanguage();

	return (
		<div className="widget widget-lighting">
			<div className="title">
			<span className="device-icon type-lighting"></span>
				<h3>{stringTable[lang].titleLighting}</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<div className="unit">
					<h4>Lighting 1</h4>
					<SetDimming />
				</div>
				<div className="unit">
					<h4>Lighting 2</h4>
					<SetDimming />
				</div>
				<div className="unit">
					<h4>Lighting 3</h4>
					<SetDimming />
				</div>
			</div>
		</div>
  );
};

export default Lighting;