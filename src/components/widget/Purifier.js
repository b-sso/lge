const Purifier = () => {
	return (
		<div className="widget widget-purifier">
			<div className="title">
				<span className="device-icon type-purifier"></span>
				<h3>Air Purifier</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<div className="status">
					<h4>Overall Air Quaility</h4>
					<span className="current type-good">GOOD</span>
				</div>
				<div class="select-row">
					<span class="label">Mode</span>
					<select name="" className="comp-select">
						<option value="">Circulator</option>
					</select>
				</div>
				<div class="select-row">
					<span class="label">Speed</span>
					<select name="" className="comp-select">
						<option value="">Low</option>
					</select>
				</div>
				<div class="select-row">
					<span class="label">Boost Speed</span>
					<select name="" className="comp-select">
						<option value="">Turbo</option>
					</select>
				</div>
			</div>
		</div>
  );
};

export default Purifier;