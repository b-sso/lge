import WidgetRobot from '../components/widget/Robot';

const Robots = () => {
  return (
  <div id="page-robots">
    <h2>Robots</h2>
    <section>
      <div className="menu">
        <ul>
          <li className="active"><a href="">All<span className="count">00</span></a></li>
          <li><a href="">In Use<span className="count">00</span></a></li>
          <li><a href="">Charging<span className="count">00</span></a></li>
          <li><a href="">Check<span className="count">00</span></a></li>
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
          <li>
            <WidgetRobot battery={100} type="waiting" />
          </li>
        </ul>
      </div>
    </section>
  </div>
  );
};

export default Robots;