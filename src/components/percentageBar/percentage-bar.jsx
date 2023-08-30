
import "./percentage-bar.css";

const PercentageBar = ({ percentage }) => {
  return (
    
    <div className="percentage-bar">
      <div className="filled" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};



export default PercentageBar;
