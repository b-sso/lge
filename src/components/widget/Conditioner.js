import SetTemp from "../SetTemp";

const Conditioner = () => {
	return (
		<div className="widget widget-conditioner">
			<div className="title">
				<span className="device-icon type-conditioner"></span>
				<h3>Air Conditioner</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<SetTemp />
				<div class="select-row">
					<span class="label">Mode</span>
					<select name="" className="comp-select">
						<option value="">Cool</option>
					</select>
				</div>
				<div class="select-row">
					<span class="label">Speed</span>
					<select name="" className="comp-select">
						<option value="">Auto</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default Conditioner;