import stringTable, { useLanguage } from '../../Lang';

const Robot = ({ battery, type }) => {
  const { lang } = useLanguage();
  const batteryStyle = {
    width: `${battery}%`,
  };

  let status;
  switch (type) {
    case 'charging':
      status = stringTable[lang].robotStatusCharging;
      break;
    case 'standby':
      status = stringTable[lang].robotStatusStandby;
      break;
    case 'error':
      status = stringTable[lang].robotStatusError;
      break;
    case 'return':
      status = stringTable[lang].robotStatusReturn;
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
        <h4>{stringTable[lang].robotStatus}</h4>
        <div className="spot">
          {(type === 'moving' || type === 'arrive') && (
            <div className="at">
              {type === 'moving' && <span className="addon">{stringTable[lang].robotStatusMoving}</span>}
              {type === 'arrive' && <span className="addon">{stringTable[lang].robotStatusArrive}</span>}
              <span className="num">{stringTable[lang].room} 000</span>
            </div>
          )}
          {status}
        </div>
      </div>
      <div className="move">
        <h4>{stringTable[lang].robotMoveGo}</h4>
        <div className="go">
          <select name="" className="comp-select">
            <option value="">{stringTable[lang].room} 000</option>
            <option value="">{stringTable[lang].robotMoveStand}</option>
            <option value="">{stringTable[lang].robotMoveCharging}</option>
            <option value="">{stringTable[lang].robotMoveReturn}</option>
          </select>
          <a href="" className="btn-move">{stringTable[lang].robotMove}</a>
        </div>
      </div>
    </div>
  );
};

export default Robot;