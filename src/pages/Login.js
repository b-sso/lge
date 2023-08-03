const Login = () => {
  return (
  <div id="page-login">
    <form name="" action="">
      <div className="box">
        <h2>Login</h2>
        <h3>Sports Entertainment System</h3>
        <div className="input type-id">
          <input type="text" name="" placeholder="Please enter your email address" />
        </div>
        <div className="input type-pw">
          <input type="password" name="" placeholder="Please enter your password" />
        </div>
        <div className="guide">
          If you have lost your password,<br />
          please contact the administrator at <a href="mailto:lgeadmin@lge.co.kr">lgeadmin@lge.co.kr</a>
        </div>
        <button type="submit" className="btn-login">Login</button>
      </div>
    </form>
  </div>
);
};

export default Login;