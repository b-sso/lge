const DashboardDot = () => {
  return (
  <div className="dashboard-dot">
    {/* FIXME: 입실상태 : in, 퇴실상태 : out, 에러상태 : error */}
    <ul>
      {/* case1 : 입실 */}
      <li className="in">
        <div className="num">Room 000</div>
        <div className="time">00:00:00</div>
      </li>
      {/* case2 : 입실 + 시간제한 */}
      <li className="in">
        <div className="num">Room 000</div>
        {/* FIXME: 시간이 5분 이하일 경우 on 추가 */}
        <div className="time on">00:00:00</div>
      </li>
      {/* case3 : 입실 + 에러*/}
      <li className="in error">
        <div className="num">Room 000</div>
        <div className="time">00:00:00</div>
      </li>
      {/* case4 : 입실 + 에러 + 시간제한 */}
      <li className="in error">
        <div className="num">Room 000</div>
        <div className="time on">00:00:00</div>
      </li>
      {/* case5 : 퇴실 */}
      <li className="out">
        <div className="num">Room 000</div>
        <div className="time">00:00:00</div>
      </li>
      {/* case6 : 퇴실 + 에러 */}
      <li className="out error">
        <div className="num">Room 000</div>
        <div className="time">00:00:00</div>
      </li>
    </ul>
  </div>
);
};

export default DashboardDot;