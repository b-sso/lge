import WidgetDisplay from '../widget/Display';
import WidgetPurifier from '../widget/Purifier';
import WidgetConditioner from '../widget/Conditioner';
import WidgetRobot from '../widget/Robot';
import stringTable, { useLanguage } from '../../Lang';

const Comm = () => {
  const { lang } = useLanguage();

  const example = {
    height: '50%'
  };
  const example2 = {
    height: '100%'
  };
  const example3 = {
    height: '10%'
  };
  return (
    <div className="column-comm">
      <h2>{stringTable[lang].commTitle}</h2>
      <div className="slider-wrap"> {/* FIXME: 4개 이상일 때 active 클래스가 추가되고 슬라이드 작동 <div className="slider-wrap active">*/}
        {/* FIXME: 클릭 시 이전으로, 마지막이면 end 클래스 추가 */}
        <a href="" className="btn-slider-prev end"></a>
        <ul>
          <li>
            <div className="comm-box comm-robot">
              <div className="title">
                <h3>{stringTable[lang].titleRobot}</h3>
                <div className="count">30</div>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <h4>{stringTable[lang].robotUse}</h4>
                    <div className="status">
                      <div className="count">50</div>
                      <div className="current" style={example}></div>
                    </div>
                  </li>
                  <li>
                    <h4>{stringTable[lang].robotCharging}</h4>
                    <div className="status">
                      <div className="count">100</div>
                      <div className="current" style={example2}></div>
                    </div>
                  </li>
                  <li>
                    <h4>{stringTable[lang].robotCheck}</h4>
                    <div className="status">
                      <div className="count">10</div>
                      <div className="current" style={example3}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="/robots" className="link-control">{stringTable[lang].robotControl}</a>
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