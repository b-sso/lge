const Robots = () => {
  return (
  <div id="page-robots">
    <h2>Robots</h2>
    <section>
      <div className="menu">
        <ul>
          <li className="active"><a href="">All<span className="count">(30)</span></a></li>
          <li><a href="">In Use<span className="count">(30)</span></a></li>
          <li><a href="">Charging<span className="count">(30)</span></a></li>
          <li><a href="">Check<span className="count">(30)</span></a></li>
        </ul>
      </div>
      <div className="list">
        <ul>
          <li>
            <div className="box">
              <h3>robot's name</h3>
              <div className="status">
                <h4>Status</h4>
                <div className="current">Moving to <span>Room 000</span></div>
              </div>
              <div className="move">
                <h4>Select a Destination</h4>
                <select name="" class="comp-select">
                  <option value="">Room 000</option>
                </select>
                <a href="" className="btn-move">Move</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
  );
};

export default Robots;