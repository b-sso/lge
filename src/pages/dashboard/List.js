import React, { useState } from 'react';
import stringTable, { useLanguage } from '../../Lang';

import WidgetProjector from '../../components/widget/Projector';
import WidgetDisplay from '../../components/widget/Display';
import WidgetLighting from '../../components/widget/Lighting';
import WidgetConditioner from '../../components/widget/Conditioner';
import WidgetPurifier from '../../components/widget/Purifier';
import WidgetGolf from '../../components/widget/Golf';
import WidgetStyler from '../../components/widget/Styler';

const DashboardList = () => {
  const { lang } = useLanguage();

  const [isBundleOpen, setIsBundleOpen] = useState(true);
	const [isBundleWork, setIsBundleWork] = useState(false);
	const handleChkClick = (event) => {
    setIsBundleWork(event.target.checked);
  };

  return (
  <div className="dashboard-list">
    <ul>
      <li className={`bundle ${isBundleOpen ? 'active' : ''} ${isBundleWork ? 'status-in' : 'status-out'}`}>
        <div className="fold">
          <div className="left">
            <div className="btn-move"></div>
            <div className="num">Room 000</div>
            <div className="use">
              <div className={`comp-onoff ${isBundleWork ? 'checked' : ''}`}>
                <label data-off={`${stringTable[lang].toggleOut}`} data-on={`${stringTable[lang].toggleIn}`}>
                  <input type="checkbox" name="" checked={isBundleWork} onChange={handleChkClick} />
                  <span className="round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="device" onClick={() => setIsBundleOpen(true)}>
              {/* FIXME: 활성화 된 상태면 on 클래스 추가 / 에러 발생시 error 클래스 추가 <span className="device-icon type-projector on error"></span> */}
              <span className="device-icon type-projector"></span>
              <span className="device-icon type-display"></span>
              <span className="device-icon type-conditioner"></span>
              <span className="device-icon type-purifier"></span>
              <span className="device-icon type-styler"></span>
              <span className="device-icon type-golf"></span>
              <span className="device-icon type-lighting"></span>
            </div>
          </div>
          <div className="right">
            <div className="time"><span className="addon">Time</span>00:00:00</div> {/* FIXME: 5분 이하 남았을 경우 on 추가 <div className="time on"> */}
            <div className="btn-hide"></div> {/* FIXME: 숨김상태면 on 추가 <div className="btn-hide on">*/}
          </div>
          <span className="btn-toggle" onClick={() => setIsBundleOpen(!isBundleOpen)}></span>
        </div>
        <div className="expand">
          <ul>
            <li>
              <WidgetProjector />
            </li>
            <li>
              <WidgetDisplay />
            </li>
            <li>
              <WidgetConditioner />
            </li>
            <li>
              <WidgetPurifier />
            </li>
            <li>
              <WidgetStyler />
            </li>
            <li>
              <WidgetGolf />
            </li>
            <li>
              <WidgetLighting />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  );
};

export default DashboardList;