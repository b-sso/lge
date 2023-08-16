import stringTable, { useLanguage } from '../Lang';

const Login = () => {
  const { lang } = useLanguage();

  return (
  <div id="page-login">
    <form name="" action="">
      <div className="box">
        <h2>Login</h2>
        <h3>Sports Entertainment System</h3>
        <div className="input type-id">
          <input type="text" name="" placeholder={stringTable[lang].loginMailPlace} />
        </div>
        <div className="input type-pw">
          <input type="password" name="" placeholder={stringTable[lang].loginPwPlace} />
        </div>
        <div className="guide">
          {stringTable[lang].loginGuide}<br />
          {stringTable[lang].loginGuide2} <a href="mailto:lgeadmin@lge.co.kr">lgeadmin@lge.co.kr</a>
        </div>
        {/* FIXME: 아무것도 입력 안하면 disabled <button type="submit" className="btn-login" disabled> */}
        <button type="submit" className="btn-login">{stringTable[lang].login}</button>
      </div>
    </form>
  </div>
);
};

export default Login;