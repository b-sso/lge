const Golf = () => {
	return (
		<div className="widget widget-golf">
			<div className="title">
				<span className="device-icon type-golf"></span>
				<h3>Golf Simulator</h3>
				<div className="comp-chk">
					<label>
						<input type="checkbox" name="" /><span className="round"></span>
					</label>
				</div>
			</div>
			<div className="content">
				<h4>Golf Simulator Program</h4>
				<div className="control">
					<a href="" className="btn-start">Start</a>
					<a href="" className="btn-stop">Stop</a>
				</div>
				<div className="status">
					<h4>Game Time</h4>
					<div className="time">00:00:00</div>
				</div>
			</div>
		</div>
  );
};

export default Golf;