import React, { useRef, useState } from 'react';
import WidgetProjector from '../../components/widget/Projector';
import WidgetDisplay from '../../components/widget/Display';

const DashboardCard = () => {
  const card = useRef(null);

  const [isChecked, setIsChecked] = useState(false);
	const handleChkClick = (event) => {
    setIsChecked(event.target.checked);
  };

  const [hoveredItem, setHoveredItem] = useState(null);
  const showHover = (item) => {
    setHoveredItem(item);
    card.current.classList.add('hidden');
  };

  const backClick = () => {
    if (hoveredItem) {
      setHoveredItem(null)
      card.current.classList.remove('hidden');
    }
  };

  return (
  <div className="dashboard-card">
    <ul>
      <li className="bundle" ref={card}>
        <div className="control">
          <div className="anchor">
            {hoveredItem ? (
              <span className="btn-back" onClick={backClick}>뒤로</span>
            ) : (
              <span className="num">VIP Room1</span>
            )}
          </div>
          <div className={`comp-onoff ${isChecked ? 'checked' : ''}`}>
            <label data-off="out" data-on="in">
              <input type="checkbox" name="" checked={isChecked} onChange={handleChkClick} />
              <span className="round"></span>
            </label>
          </div>
        </div>
        <div className="original">
          <div className="bar">
            <div className="time"><span className="addon">Time</span>00:00:00</div>
            <div className="hidden"></div>
          </div>
          <ul>
            <li onClick={() => showHover('project')}><span className="device-icon type-projector"></span></li>
            <li onClick={() => showHover('display')}><span className="device-icon type-display on error"></span></li>
            <li><span className="device-icon type-lighting error"></span></li>
            <li><span className="device-icon type-conditioner"></span></li>
            <li><span className="device-icon type-purifier"></span></li>
            <li><span className="device-icon type-golf"></span></li>
            <li><span className="device-icon type-styler"></span></li>
          </ul>
        </div>
        {hoveredItem === 'project' && <WidgetProjector />}
        {hoveredItem === 'display' && <WidgetDisplay />}
      </li>
    </ul>
  </div>
  );
};

export default DashboardCard;