const IconSwitch = ({ icon, onSwitch }) => {
    return (
      <div className="icon-switch" onClick={onSwitch}>
        <i className="material-icons">{icon}</i>
      </div>
    );
  }
  
export default IconSwitch;
