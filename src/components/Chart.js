import { useEffect } from "react";

const Chart = ({ id, dashArrayValue, type, current, total }) => {
  useEffect(() => {
    const updateDashArray = () => {
      const circlePath = document.getElementById(id);
      circlePath.setAttribute('stroke-dasharray', dashArrayValue);
    };

    updateDashArray();
  }, [id, dashArrayValue]);

  return (
    <div className={`comp-chart ${type}`}>
      <svg className="rate" viewBox="0 0 36 36">
        <path id={id} className="circle" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
      </svg>
      <div className="count">
        <span className="current">{current}</span>
        <span className="total">{total}</span>
      </div>
    </div>
    
  );
}


export default Chart;
