import stringTable, { useLanguage } from '../Lang';

const Popup = ({ popupProgress }) => {
  const { lang } = useLanguage();

  return (
    <div className="popup-layer">
      <div className="popup-content">
        <h3>{stringTable[lang].titleProgress}</h3>
        <div className="content">
          <table className="title">
            <colgroup>
              <col width="210" />
              <col width="260" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>{stringTable[lang].progressName}</th>
                <th>{stringTable[lang].progressDevice}</th>
                <th>{stringTable[lang].progressStatus}</th>
              </tr>
            </thead>
          </table>
          <div className="scroll">
            <table className="list">
              <colgroup>
                <col width="210" />
                <col width="260" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>{stringTable[lang].room} 00</td>
                  <td><span className="device-icon type-projector"></span>{stringTable[lang].titleProjector}</td>
                  <td>{stringTable[lang].progressStatusFail}</td>
                </tr>
                <tr>
                  <td>{stringTable[lang].room} 00</td>
                  <td><span className="device-icon type-projector on"></span>{stringTable[lang].titleProjector}</td>
                  <td>{stringTable[lang].progressStatusWaiting}</td>
                </tr>
                <tr>
                  <td>{stringTable[lang].bay} 00</td>
                  <td><span className="device-icon type-conditioner"></span>{stringTable[lang].titleConditioner}</td>
                  <td>{stringTable[lang].progressStatusSuccess}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="btn-bar">
          <button className="btn btn-retry">{stringTable[lang].progressRetry}</button>
          <button className="btn btn-close" onClick={popupProgress}>{stringTable[lang].progressClose}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
