import React from 'react';
import stringTable, { useLanguage } from '../Lang';

const Setting = ({ mode, onModeChange }) => {
  const { lang, handleLangChange } = useLanguage();
  const onLangChange = (event) => {
    handleLangChange(event);
  };

  return (
    <div id="page-setting">
      <h2>
        {stringTable[lang].setting}
        <button type="submit" name="" className="btn-save" disabled>{stringTable[lang].settingComplete}</button> {/* FIXME: 입력하지 않으면 disabled */}
      </h2>
      <section className="sec-system">
        <h3>{stringTable[lang].loginTitle}</h3>
        <ul>
          <li>
            <h4>System 00</h4>
            <span className="badge-ok">{stringTable[lang].loginConnected}</span>
            <div className="info">
              <div className="info-id">te*****</div>
              <div className="info-pw">*****</div>
              <a href="" className="btn-logout">{stringTable[lang].logout}</a>
            </div>
          </li>
          <li>
            <h4>System 00</h4>
            <form name="" action="">
            <input type="text" name="" placeholder={stringTable[lang].settingLoginIdPlace} />
              <input type="password" name="" placeholder={stringTable[lang].settingLoginPwPlace} />
              <button type="submit" name="" className="btn-login">{stringTable[lang].login}</button>
            </form>
          </li>
          <li>
            <h4>System 00</h4>
            <form name="" action="">
              <input type="text" name="" placeholder={stringTable[lang].settingLoginIdPlace} />
              <input type="password" name="" placeholder={stringTable[lang].settingLoginPwPlace} />
              <button type="submit" name="" className="btn-login" disabled>{stringTable[lang].login}</button> {/* FIXME: 입력하지 않으면 disabled */}
            </form>
          </li>
        </ul>
      </section>
      <div className="row">
        <section className="sec-lang">
          <h3>{stringTable[lang].lang}</h3>
          <div className="comp-radio">
            <label><input type="radio" name="lang" value="en" checked={lang === 'en'} onChange={() => onLangChange('en')} /><span>English</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="lang" value="ko" checked={lang === 'ko'} onChange={() => onLangChange('ko')} /><span>{stringTable[lang].langKo}</span></label>
          </div>
        </section>
        <section className="sec-theme">
          <h3>{stringTable[lang].modeTitle}</h3>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="1" checked={mode === 'light'} onChange={() => onModeChange('light')} /><span>{stringTable[lang].modeLight}</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="mode" value="2" checked={mode === 'dark'} onChange={() => onModeChange('dark')} /><span>{stringTable[lang].modeDark}</span></label>
          </div>
        </section>
      </div>
      <section className="sec-room">
        <h3>{stringTable[lang].room}/{stringTable[lang].bay}</h3>
        <div className="view">
          <h4>{stringTable[lang].viewType}</h4>
          <div className="comp-radio">
            <label><input type="radio" name="view" /><span>{stringTable[lang].viewTypeSingle}</span></label>
          </div>
          <div className="comp-radio">
            <label><input type="radio" name="view" checked /><span>{stringTable[lang].viewTypeMixed}</span></label>
          </div>
        </div>
        <div className="data">
          <h4>{stringTable[lang].viewSettings}</h4>
          <div className="control-bar">
            <select name="" className="comp-select">
              <option value="">{stringTable[lang].room}</option>
              <option value="">{stringTable[lang].bay}</option>
            </select>
            <div className="search">
              <input type="text" name="" placeholder={stringTable[lang].roomSearchPlace} />
              <button type="submit" name="" className="btn-search"></button>
            </div>
            <a href="" className="btn-add">{stringTable[lang].roomAdd}</a>
          </div>
          <ul className="layout title">
            <li>
              <div className="col name">{stringTable[lang].roomLabelName}</div>
              <div className="col create">{stringTable[lang].roomLabelCreated}</div>
              <div className="col edit">{stringTable[lang].roomLabelEdit}</div>
              <div className="col del">{stringTable[lang].roomLabelDelete}</div>
            </li>
          </ul>
          <ul className="layout list">
            <li>
              <div className="col name">Room 000</div>
              <div className="col create">20/06/2023</div>
              <div className="col edit">
                <a href="" className="btn-edit">{stringTable[lang].roomLabelEdit}</a>
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
                <a href="" className="btn-ok">{stringTable[lang].roomLabelOk}</a>
              </div>
              <div className="col del">
                <a href="" className="btn-del"></a>
              </div>
            </li>
          </ul>
          <div className="pagination">
            <a href="" className="first"></a>
            <a href="" className="prev"></a>
            <div className="nums">
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
            <a href="" className="next"></a>
            <a href="" className="last"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;