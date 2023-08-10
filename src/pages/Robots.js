import WidgetRobot from '../components/widget/Robot';
import stringTable, { useLanguage } from '../Lang';

const Robots = () => {
  const { lang } = useLanguage();

  return (
  <div id="page-robots">
    <h2>{stringTable[lang].titleRobot}</h2>
    <section>
      <div className="menu">
        <ul>
          <li className="active"><a href="">{stringTable[lang].all}<span className="count">00</span></a></li>
          <li><a href="">{stringTable[lang].robotUse}<span className="count">00</span></a></li>
          <li><a href="">{stringTable[lang].robotCharging}<span className="count">00</span></a></li>
          <li><a href="">{stringTable[lang].robotCheck}<span className="count">00</span></a></li>
        </ul>
      </div>
      <div className="list">
        <ul>
          <li>
            <WidgetRobot battery={100} type="moving" />
          </li>
          <li>
            <WidgetRobot battery={100} type="arrive" />
          </li>
          <li>
            <WidgetRobot battery={100} type="charging" />
          </li>
          <li>
            <WidgetRobot battery={100} type="error" />
          </li>
          <li>
            <WidgetRobot battery={100} type="standby" />
          </li>
        </ul>
      </div>
    </section>
  </div>
  );
};

export default Robots;