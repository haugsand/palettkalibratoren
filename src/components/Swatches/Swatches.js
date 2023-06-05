import "./Swatches.css";
import { STEPS } from "./../../constants";

function Swatches({ gradient, palette, setActiveColor, activeColor }) {
  function changeActiveColor(step) {
    if (step === activeColor) {
      setActiveColor(false);
    } else {
      setActiveColor(step);
    }
  }

  return (
    <section class="swatches">
      <h2>Fargepalett</h2>
      <ul class="swatches__list">
        {STEPS.map((step) => (
          <li class={step === activeColor ? 'swatches__listitem swatches__listitem--active' : 'swatches__listitem' }>
            <button
              class="swatches__swatch"
              onClick={(e) => changeActiveColor(step)}
              style={{ backgroundColor: gradient[palette[step]] }}
            ></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Swatches;
