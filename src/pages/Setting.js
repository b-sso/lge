const Setting = ({ mode, onModeChange }) => {
  return (
  <div id="page-setting">
     <div>
      <label>
        <input type="radio" name="mode" value="1" checked={mode === "1"} onChange={() => onModeChange("1")} />
        White Mode
      </label>
      <label>
        <input type="radio" name="mode" value="2" checked={mode === "2"} onChange={() => onModeChange("2")} />
        Dark Mode
      </label>
    </div>
  </div>
);
};

export default Setting;