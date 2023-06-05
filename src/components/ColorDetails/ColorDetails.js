import "./ColorDetails.css";
import GradientRange from "./../GradientRange";
import { getContrastRatio, getContrastIcon } from "./../../helpers";

function ColorDetails({ gradient, color, value, setValue }) {
  const contrastWhite = getContrastRatio("white", color);
  const contrastIcon = getContrastIcon(contrastWhite);

  return (
    <section class="colordetails" style={{ "--color": color }}>
      <GradientRange value={value} setValue={setValue} gradient={gradient} />
      <p class="colordetails__contrast">
        {contrastWhite}
        {contrastIcon}
      </p>
    </section>
  );
}

export default ColorDetails;
