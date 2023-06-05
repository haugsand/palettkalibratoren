import "./CardCalibrator.css";

function CardCalibrator({ cardcolors, activeVariable, setActiveVariable }) {
  function changeActiveVariable(variable) {
    if (variable === activeVariable) {
      setActiveVariable(false);
    } else {
      setActiveVariable(variable);
    }
  }

  return (
    <>
      {Object.keys(cardcolors).map((name) => (
        <div
          class={"cardcalibrator__container cardcalibrator__container--" + name}
        >
          <button
            class={name === activeVariable ? 'cardcalibrator__button cardcalibrator__button--active' : 'cardcalibrator__button'}
            onClick={(e) => changeActiveVariable(name)}
          >
            {name}
          </button>
        </div>
      ))}
    </>
  );
}

export default CardCalibrator;
