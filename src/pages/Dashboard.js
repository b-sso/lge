import { useState } from "react";

import List from "./dashboard/List";
import Card from "./dashboard/Card";
import Dot from "./dashboard/Dot";
import Chart from "../components/Chart";

const Dashboard = () => {
  const [activeTabType, setActiveTabType] = useState('list');
  const handleTabClickType = (item) => {
    setActiveTabType(item);
  };

  return (
  <div id="page-dashboard">
    <section className="sec-status">
      <h2>Status</h2>
      <div className="slider-wrap">
        {/* FIXME: 클릭 시 이전으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-prev end"></a>
        <ul>
          <li>
            <div className="chart-box">
              <h3>Room</h3>
              <Chart id="chart1" dashArrayValue="80, 100" type="type-room" current={40} total={50} />
            </div>
          </li>
          <li>
            <div className="chart-box">
              <h3>Bay</h3>
              <Chart id="chart2" dashArrayValue="20, 100" type="type-bay" current={10} total={50} />
            </div>
          </li>
          <li>
            <div className="count-box">
              <h3>Service ending soon</h3>
              <div className="row">
                <h4>Room</h4>
                <div className="count">
                  6
                  <span className="addon">case(s)</span>
                </div>
              </div>
              <div className="row">
                <h4>Bay</h4>
                <div className="count">
                  6
                  <span className="addon">case(s)</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="count-box">
              <h3>Device Error</h3>
              <div className="row">
                <h4>Room</h4>
                <div className="count">
                  6 
                  <span className="addon">case(s)</span>
                </div>
              </div>
              <div className="row">
                <h4>Bay</h4>
                <div className="count">
                  6 
                  <span className="addon">case(s)</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* FIXME: 클릭 시 다음으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-next"></a>
      </div>
    </section>
    <section className="sec-control">
      <div className="control-bar">
        <div className="tab">
          <ul>
            <li className="active"><a href="">Room</a></li>
            <li><a href="">Bay</a></li>
          </ul>
          <div className="guide">
            <span className="icon">!</span>
            <span className="layer">Device error</span>
          </div>
        </div>
        <ul className="status">
          <li className="active"><a href="">by Room</a></li>
          <li><a href="">by Device Error</a></li>
        </ul>
        <ul className="display">
          <li className={`type-list ${activeTabType === 'list' ? 'active' : ''}`} onClick={() => handleTabClickType('list')}></li>
          <li className={`type-card ${activeTabType === 'card' ? 'active' : ''}`} onClick={() => handleTabClickType('card')}></li>
          <li className={`type-dot ${activeTabType === 'dot' ? 'active' : ''}`} onClick={() => handleTabClickType('dot')}></li>
        </ul>
        <select name="" className="comp-select type-big">
          <option value="">All</option>
          <option value="">nn개</option>
          <option value="">숨긴 룸 보기</option>
        </select>
      </div>
      {activeTabType === 'list' && <List />}
      {activeTabType === 'dot' && <Dot />}
      {activeTabType === 'card' && <Card />}
    </section>
  </div>
  );
};

export default Dashboard; 