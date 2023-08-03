const Robot = ({ battery, type }) => {
  const batteryStyle = {
    width: `${battery}%`,
  };

  let status;
  switch (type) {
    case 'charging':
      status = 'Charging';
      break;
    case 'standby':
      status = 'Standby';
      break;
    case 'error':
      status = 'Need to check';
      break;
    case 'waiting':
      status = 'Waiting';
      break;
  }

  return (
    <div className={`widget widget-robot ${type}`}>
      <div className="top">
        <div className="battery">
          <div className="text">{battery}%</div>
          <div className="icon">
            <div className="inner"><span style={batteryStyle}></span></div>
          </div>
        </div>
        <h3>robot's name</h3>
      </div>
      <div className="status">
        <h4>Status</h4>
        <div className="spot">
          {(type === 'moving' || type === 'arrive') && (
            <div>
              {type === 'moving' && <span className="addon">Moving to</span>}
              {type === 'arrive' && <span className="addon">Arrive at</span>}
              <span className="num">Room 000</span>
            </div>
          )}
          {status}
        </div>
      </div>
      <div className="move">
        <h4>Select a Destination</h4>
        <div className="go">
          <select name="" class="comp-select">
            <option value="">Room 000</option>
          </select>
          <a href="" className="btn-move">Move</a>
        </div>
      </div>
    </div>
  );
};

export default Robot;