import React from 'react';
import stringTable, { useLanguage } from '../Lang';

const Setting = ({ mode, onModeChange }) => {
  const { lang, handleLangChange } = useLanguage();

  const handleChange = (event) => {
    handleLangChange(event.target.value);
  };

  return (
    <div id="page-setting">
      <h2>
        {stringTable[lang].setting}
        <button type="submit" name="" class="btn-save" disabled>Setup complete</button> {/* FIXME: 입력하지 않으면 disabled */}
      </h2>
      <section className="sec-system">
        <h3>{stringTable[lang].loginTitle}</h3>
        <ul>
          <li>
            <h4>System 00</h4>
            <span className="badge-ok">{stringTable[lang].connected}</span>
            <div className="info">
              <div className="info-id">te*****</div>
              <div className="info-pw">*****</div>
              <a href="" className="btn-logout">{stringTable[lang].logout}</a>
            </div>
          </li>
          <li>
            <h4>System 00</h4>
            <form name="" action="">
              <input type="text" name="" placeholder="Enter your ID" />
              <input type="password" name="" placeholder="Enter your PW" />
              <button type="submit" name="" className="btn-login">{stringTable[lang].login}</button>
            </form>
          </li>
          <li>
            <h4>System 00</h4>
            <form name="" action="">
              <input type="text" name="" placeholder="Enter your ID" />
              <input type="password" name="" placeholder="Enter your PW" />
              <button type="submit" name="" className="btn-login" disabled>{stringTable[lang].login}</button> {/* FIXME: 입력하지 않으면 disabled */}
            </form>
          </li>
        </ul>
      </section>
      <div className="row">
        <section className="sec-lang">
          <h3>{stringTable[lang].lang}</h3>
          <div className="comp-radio">
            <label><input type="radio" name="lang" value="en" checked={lang === 'en'} onChange={handleChange} /><span>English</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="lang" value="ko" checked={lang === 'ko'} onChange={handleChange} /><span>Korean</span></label>
          </div>
        </section>
        <section className="sec-theme">
          <h3>{stringTable[lang].theme}</h3>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="1" checked={mode === '1'} onChange={() => onModeChange('1')} /><span>Light mode</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="2" checked={mode === '2'} onChange={() => onModeChange('2')} /><span>Dark mode</span></label>
          </div>
        </section>
      </div>
      <section className="sec-room">
        <h3>{stringTable[lang].room}/{stringTable[lang].bay}</h3>
        <div className="view">
          <h4>View Type</h4>
          <div className="comp-radio">
            <label><input type="radio" name="view" /><span>Single</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="view" checked /><span>Mixed</span></label>
          </div>
        </div>
        <div className="data">
          <h4>Settings</h4>
          <div className="control-bar">
            <select name="" className="comp-select">
              <option value="">{stringTable[lang].roomTitle}</option>
            </select>
            <div className="search">
              <input type="text" name="" placeholder="Search This View" />
              <button type="submit" name="" className="btn-search"></button>
            </div>
            <a href="" className="btn-add">add</a>
          </div>
          <ul className="layout title">
            <li>
              <div className="col name">Name</div>
              <div className="col create">Created On</div>
              <div className="col edit">Edit</div>
              <div className="col del">Delete</div>
            </li>
          </ul>
          <ul className="layout list">
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
            {/* FIXME: 수정 상태면 status-edit 클래스 추가 */}
            <li className="status-edit">
              <div className="col name"><input type="text" name="" /></div>
              <div className="col create">20/06/2023</div>
              <div className="col edit">
                <a href="" className="btn-ok">OK</a>
              </div>
              <div className="col del">
                <a href="" className="btn-del"></a>
              </div>
            </li>
          </ul>
          <div class="pagination">
            <a href="" class="first"></a>
            <a href="" class="prev"></a>
            <div class="nums">
              <strong>1</strong>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
              <a href="">5</a>
              <a href="">6</a>
              <a href="">7</a>
              <a href="">8</a>
              <a href="">9</a>
              <a href="">10</a>
            </div>
            <a href="" class="next"></a>
            <a href="" class="last"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;