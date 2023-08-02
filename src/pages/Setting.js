const Setting = ({ mode, onModeChange }) => {
  return (
    <div id="page-setting">
      <h2>
        Setting
        <button type="submit" name="" class="btn-save">Setup complete</button>
      </h2>
      <section className="sec-system">
        <h3>Login intergration</h3>
        <ul>
          <li>
            <h4>System 00</h4>
            <span className="badge-ok">Connected</span>
            <div className="info">
              <div className="info-id">te*****</div>
              <div className="info-pw">*****</div>
              <a href="" className="btn-logout">Logout</a>
            </div>
          </li>
          <li>
            <h4>System 00</h4>
            <form name="" action="">
              <input type="text" name="" placeholder="Enter your ID" />
              <input type="password" name="" placeholder="Enter your PW" />
              <button type="submit" name="" className="btn-login">Login</button>
            </form>
          </li>
        </ul>
      </section>
      <div className="row">
        <section className="sec-lang">
          <h3>Language</h3>
          <div className="comp-radio">
            <label><input type="radio" name="lang" checked /><span>English</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="lang" /><span>Korean</span></label>
          </div>
        </section>
        <section className="sec-theme">
          <h3>Screen Theme</h3>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="1" checked={mode === '1'} onChange={() => onModeChange('1')} /><span>Light mode</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="2" checked={mode === '2'} onChange={() => onModeChange('2')} /><span>Dark mode</span></label>
          </div>
        </section>
      </div>
      <section className="sec-room">
        <h3>Room/Bay</h3>
        <div className="view">
          <h4>View Type</h4>
          <div className="comp-radio">
            <label><input type="radio" name="view" /><span>Single</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="view" checked /><span>Mixed</span></label>
          </div>
        </div>
        <div className="list">
          <h4>Settings</h4>
          <div className="control-bar">
            <select name="" className="comp-select">
              <option value="">Room</option>
            </select>
            <div className="search">
              <input type="text" name="" placeholder="Search This View" />
              <button type="submit" name="" className="btn-search"></button>
            </div>
            <a href="" className="btn-add">add</a>
          </div>
          <ul>
            <li className="title">
              <div className="col name">Name</div>
              <div className="col create">Created On</div>
              <div className="col edit">Edit</div>
              <div className="col del">Delete</div>
            </li>
            <li>
              <div className="col name">Room 000</div>
              <div className="col create">20/06/2023</div>
              <div className="col edit">
                <a href="" className="btn-edit">Edit</a>
              </div>
              <div className="col del">
                <a href="" className="btn-del"></a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Setting;