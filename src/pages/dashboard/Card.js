import React, { useRef, useState } from 'react';

import WidgetProjector from '../../components/widget/Projector';
import WidgetDisplay from '../../components/widget/Display';
import WidgetLighting from '../../components/widget/Lighting';
import WidgetConditioner from '../../components/widget/Conditioner';
import WidgetPurifier from '../../components/widget/Purifier';
import WidgetGolf from '../../components/widget/Golf';
import WidgetStyler from '../../components/widget/Styler';

const DashboardCard = () => {
  const bundle = useRef(null);

	const [isBundleWork, setIsBundleWork] = useState(false);
	const handleChkClick = (event) => {
    setIsBundleWork(event.target.checked);
  };

  const [isOpenWidget, setIsOpenWidget] = useState(null);
  const handleWidgetClick = (item) => {
    setIsOpenWidget(item);
    bundle.current.classList.add('active');
  };
  const handleBackClick = () => {
    if (isOpenWidget) {
      setIsOpenWidget(null)
      bundle.current.classList.remove('active');
    }
  };

  return (
  <div className="dashboard-card">
    <ul>
      <li className={`bundle ${isBundleWork ? 'status-in' : 'status-out'}`} ref={bundle}>
        <span className="num">Room 000</span>
        {isOpenWidget && ( <span className="btn-back" onClick={handleBackClick}></span> )}
        <div className="fold">
          <div className="time-bar">
            <div className={`comp-onoff ${isBundleWork ? 'checked' : ''}`}>
              <label data-off="out" data-on="in">
                <input type="checkbox" name="" checked={isBundleWork} onChange={handleChkClick} />
                <span className="round"></span>
              </label>
            </div>
            <div className="time"><span className="addon">Time</span>00:00:00</div> {/* FIXME: 5분 이하 남았을 경우 on 추가 <div className="time on"> */}
            <div className="btn-hide"></div> {/* FIXME: 숨김상태면 on 추가 <div className="btn-hide on">*/}
          </div>
          <ul>
            {/* FIXME: 활성화 된 상태면 on 클래스 추가 / 에러 발생시 error 클래스 추가 <span className="device-icon type-projector on error"></span> */}
            <li onClick={() => handleWidgetClick('project')}><span className="device-icon type-projector"></span></li>
            <li onClick={() => handleWidgetClick('display')}><span className="device-icon type-display"></span></li>
            <li onClick={() => handleWidgetClick('conditioner')}><span className="device-icon type-conditioner"></span></li>
            <li onClick={() => handleWidgetClick('purifier')}><span className="device-icon type-purifier"></span></li>
            <li onClick={() => handleWidgetClick('styler')}><span className="device-icon type-styler"></span></li>
            <li onClick={() => handleWidgetClick('golf')}><span className="device-icon type-golf"></span></li>
            <li onClick={() => handleWidgetClick('lighting')}><span className="device-icon type-lighting"></span></li>
          </ul>
        </div>
        {isOpenWidget === 'project' && <WidgetProjector />}
        {isOpenWidget === 'display' && <WidgetDisplay />}
        {isOpenWidget === 'conditioner' && <WidgetConditioner />}
        {isOpenWidget === 'purifier' && <WidgetPurifier />}
        {isOpenWidget === 'styler' && <WidgetStyler />}
        {isOpenWidget === 'golf' && <WidgetGolf />}
        {isOpenWidget === 'lighting' && <WidgetLighting />}
      </li>
    </ul>
  </div>
  );
};

export default DashboardCard;