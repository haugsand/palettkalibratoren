import { getLinearGradient } from "./../../helpers";
import "./GradientRange.css";

function GradientRange({ value, setValue, gradient }) {
  const background = getLinearGradient(gradient, "to left");

  return (
    <div class="gradientrange" style={{ background: background }}>
      <input
        type="range"
        min={(gradient.length - 1) * -1}
        max="0"
        step="1"
        value={value * -1}
        onInput={(e) => setValue(e.target.value * -1)}
        class="gradientrange__input"
      />
    </div>
  );
}

export default GradientRange;
