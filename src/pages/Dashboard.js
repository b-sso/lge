import { useState } from "react";

import DisplayList from "./dashboard/List";
import DisplayCard from "./dashboard/Card";
import DisplayDot from "./dashboard/Dot";
import Chart from "../components/Chart";

const Dashboard = () => {
  const [activeDisplayType, setActiveDisplayType] = useState('list');
  const handleDisplayClick = (item) => {
    setActiveDisplayType(item);
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
              <Chart id="chart1" value="80, 100" type="type-room" current={40} total={50} />
            </div>
          </li>
          <li>
            <div className="chart-box">
              <h3>Bay</h3>
              <Chart id="chart2" value="20, 100" type="type-bay" current={10} total={50} />
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
          <li className={`type-list ${activeDisplayType === 'list' ? 'active' : ''}`} onClick={() => handleDisplayClick('list')}></li>
          <li className={`type-card ${activeDisplayType === 'card' ? 'active' : ''}`} onClick={() => handleDisplayClick('card')}></li>
          <li className={`type-dot ${activeDisplayType === 'dot' ? 'active' : ''}`} onClick={() => handleDisplayClick('dot')}></li>
        </ul>
        <select name="" className="comp-select">
          <option value="">All</option>
          <option value="">nn개</option>
          <option value="">숨긴 룸 보기</option>
        </select>
      </div>
      {activeDisplayType === 'list' && <DisplayList />}
      {activeDisplayType === 'dot' && <DisplayDot />}
      {activeDisplayType === 'card' && <DisplayCard />}
    </section>
  </div>
  );
};

export default Dashboard; 