import "./ColorDetails.css";
import GradientRange from "./../GradientRange";
import { getContrastRatio, getContrastIcon } from "./../../helpers";

function ColorDetails({ gradient, color, value, setValue, step, activePalette }) {
  const contrastWhite = getContrastRatio("white", color);
  const contrastIcon = getContrastIcon(contrastWhite);

  function changeValue(value) {
    const key = activePalette + "_" + step;
    localStorage.setItem(key, value);

    setValue(value)
  }

  return (
    <section class="colordetails" style={{ "--color": color }}>
      <GradientRange value={value} setValue={changeValue} gradient={gradient} />
      <p class="colordetails__contrast">
        {contrastWhite}
        {contrastIcon}
      </p>
    </section>
  );
}

export default ColorDetails;
