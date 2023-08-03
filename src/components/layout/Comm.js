import WidgetDisplay from '../widget/Display';
import WidgetPurifier from '../widget/Purifier';
import WidgetConditioner from '../widget/Conditioner';
import WidgetRobot from '../widget/Robot';

const Comm = () => {
  const robotStatus = {
    height: '30%'
  };
  const robotStatus2 = {
    height: '90%'
  };

  return (
    <div className="column-comm">
      <h2>Common area</h2>
      <div className="slider-wrap"> {/* FIXME: 4개 이상일 때 active 클래스가 추가되고 슬라이드 작동 <div className="slider-wrap active">*/}
        {/* FIXME: 클릭 시 이전으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-prev end"></a>
        <ul>
          <li>
            <div className="comm-box comm-robot">
              <div className="title">
                <h3>Robots</h3>
                <div className="count">30</div>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <h4>in use</h4>
                    <div className="count">15</div>
                    <div className="status" style={robotStatus}></div>
                  </li>
                  <li>
                    <h4>charging</h4>
                    <div className="count">15</div>
                    <div className="status" style={robotStatus2}></div>
                  </li>
                  <li>
                    <h4>check</h4>
                    <div className="count">15</div>
                    <div className="status" style={robotStatus}></div>
                  </li>
                </ul>
              </div>
              <a href="/robots" className="link-control">Control</a>
            </div>
          </li>
          {/* FIXME: 로봇이 한 개인 경우 */}
          <li className="comm-box comm-robot-only">
            <WidgetRobot battery={100} type="arrive" />
          </li>
          <li>
            <div className="comm-box comm-display">
              <WidgetDisplay />
            </div>
          </li>
          <li>
            <div className="comm-box comm-purifier">
              <WidgetPurifier />
            </div>
          </li>
          <li>
            <div className="comm-box comm-conditioner">
              <WidgetConditioner />
            </div>
          </li>
        </ul>
        {/* FIXME: 클릭 시 다음으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-next"></a>
      </div>
    </div>
  );
};

export default Comm;