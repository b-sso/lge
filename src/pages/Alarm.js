import stringTable, { useLanguage } from '../Lang';

const Alarm = () => {
  const { lang } = useLanguage();

  return (
  <div id="page-alarm">
    <h2>{stringTable[lang].alarm}</h2>
    <section>
      <div className="list">
        <ul>
          <li>
            <div className="inner">
              <div className="title">제목 노출 영역</div>
              <div className="guide">
                내용 노출 영역
              </div>
            </div>
          </li>
          <li>
            <div className="inner">
              <div className="title">제목 노출 영역</div>
              <div className="guide">
                긴 내용이 들어갔을 때<br />
                어떤 내용의 양이 들어갈 지 확정되지 않아서 <br />
                길게 길게 스크롤로 처리<br />
                긴 내용이 들어갔을 때<br />
                어떤 내용의 양이 들어갈 지 확정되지 않아서 <br />
                길게 길게 스크롤로 처리<br />
                긴 내용이 들어갔을 때<br />
                어떤 내용의 양이 들어갈 지 확정되지 않아서 <br />
                길게 길게 스크롤로 처리<br />
                긴 내용이 들어갔을 때<br />
                어떤 내용의 양이 들어갈 지 확정되지 않아서 <br />
                길게 길게 스크롤로 처리<br />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
  );
};

export default Alarm;