
const Range = ({ type, value, handleChange, title, disabled }) => {
  const handleMuteClick = () => {
    if (!disabled) {
      handleChange(type, { target: { value: 0 } });
    }
  };
  const isMuted = value == 0;

  return (
    <div className={`comp-range ${type} ${disabled ? 'off' : ''}`}>
      <div className="bar">
        {title} <span className="current">{value}</span>
        {type === "type-vol" && <a className={`btn-mute ${isMuted ? 'on' : ''}`} onClick={handleMuteClick}></a>}
      </div>
      <input type="range" min={0} max={100} value={value} disabled={disabled} onChange={(e) => handleChange(type, e)} />
    </div>
  );
}

export default Range;
