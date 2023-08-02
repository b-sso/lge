const Styler = () => {
	return (
		<div className="widget widget-styler">
			<div className="title">
				<span className="device-icon type-styler"></span>
				<h3>Styler</h3>
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
				<div class="select-row">
					<span class="label">Styling Mode</span>
					<select name="" className="comp-select">
						<option value="">Special Care</option>
					</select>
				</div>
				<div class="status">
					<h4>Current State</h4>
					<span className="current">Drying</span>
				</div>
				<div className="time">
					<span className="addon">End Time</span>
					<p>14:32</p>
				</div>
			</div>
		</div>
  );
};

export default Styler;