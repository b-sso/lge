import { useState } from 'react';
import stringTable, { useLanguage } from '../Lang';

import DisplayList from "./dashboard/List";
import DisplayCard from "./dashboard/Card";
import DisplayDot from "./dashboard/Dot";
import Chart from "../components/Chart";

const Dashboard = () => {
  const { lang } = useLanguage();
  
  const [activeDisplayType, setActiveDisplayType] = useState('list');
  const handleDisplayClick = (item) => {
    setActiveDisplayType(item);
  };

  return (
  <div id="page-dashboard">
    <section className="sec-status">
      <h2>{stringTable[lang].status}</h2>
      <div className="slider-wrap"> {/* FIXME: 4개 이상일 때 active 클래스가 추가되고 슬라이드 작동 <div className="slider-wrap active">*/}
        {/* FIXME: 클릭 시 이전으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-prev end"></a>
        <ul>
          <li>
            <div className="chart-box">
              <h3>{stringTable[lang].room}</h3>
              <Chart id="chart1" value="80, 100" type="type-room" current={40} total={50} />
            </div>
          </li>
          <li>
            <div className="chart-box">
              <h3>{stringTable[lang].bay}</h3>
              <Chart id="chart2" value="20, 100" type="type-bay" current={10} total={50} />
            </div>
          </li>
          <li>
            <div className="count-box">
              <h3>{stringTable[lang].roomEnding}</h3>
              <div className="row">
                <h4>{stringTable[lang].room}</h4>
                <div className="count">
                  6
                  <span className="addon">{stringTable[lang].cases}</span>
                </div>
              </div>
              <div className="row">
                <h4>{stringTable[lang].bay}</h4>
                <div className="count">
                  6
                  <span className="addon">{stringTable[lang].cases}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="count-box">
              <h3>{stringTable[lang].deviceError}</h3>
              <div className="row">
                <h4>{stringTable[lang].room}</h4>
                <div className="count">
                  6 
                  <span className="addon">{stringTable[lang].cases}</span>
                </div>
              </div>
              <div className="row">
                <h4>{stringTable[lang].bay}</h4>
                <div className="count">
                  6 
                  <span className="addon">{stringTable[lang].cases}</span>
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
            <li className="active"><a href="">{stringTable[lang].room}</a></li>
            <li><a href="">{stringTable[lang].bay}</a></li>
          </ul>
          <div className="guide">
            <span className="icon">!</span>
            <span className="layer">{stringTable[lang].deviceError}</span>
          </div>
        </div>
        <ul className="status">
          <li className="active"><a href="">{stringTable[lang].byRoom}</a></li>
          <li><a href="">{stringTable[lang].byError}</a></li>
        </ul>
        <ul className="display">
          <li className={`type-list ${activeDisplayType === 'list' ? 'active' : ''}`} onClick={() => handleDisplayClick('list')}></li>
          <li className={`type-card ${activeDisplayType === 'card' ? 'active' : ''}`} onClick={() => handleDisplayClick('card')}></li>
          <li className={`type-dot ${activeDisplayType === 'dot' ? 'active' : ''}`} onClick={() => handleDisplayClick('dot')}></li>
        </ul>
        <select name="" className="comp-select">
          <option value="">{stringTable[lang].all}</option>
          <option value="">{stringTable[lang].checkIn}</option>
          <option value="">{stringTable[lang].checkOut}</option>
          <option value="">{stringTable[lang].hideRoom}</option>
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