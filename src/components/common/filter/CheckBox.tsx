//TODO: make this into a core component

import './checkBox.css';

const CheckBox = ({ text, toggled, onClick, forJobcard = false }: any) => {
  return (
    // TODO: style me
    <button
      className={forJobcard ? 'check-box-ellipse-parent for-job-card' : 'check-box-ellipse-parent'}
      onClick={onClick ? onClick : () => {}}
    >
      <div
        className={toggled ? 'check-box-ellipse check-box-ellipse-toggled' : 'check-box-ellipse'}
      />
      <div className="check-box-label">{text}</div>
    </button>
  );
};

export default CheckBox;
