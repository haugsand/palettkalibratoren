import { getLinearGradient } from "./../../helpers";
import { clampChroma, formatHex } from "culori";

import "./HueRange.css";

function HueRange({ value, setValue, chroma }) {
  const LIGHTNESS = 0.567;

  const gradient = [];

  for (let i = 0; i < 360; i++) {
    const color = {
      mode: "oklch",
      l: LIGHTNESS,
      c: chroma,
      h: i,
    };

    gradient.push(formatHex(clampChroma(color, color.mode)));
  }

  const background = getLinearGradient(gradient);

  return (
    <section class="huerange">
      <h2>Fargetone</h2>

      <p class="huerange__rangecontainer" style={{ background: background }}>
        <input
          type="range"
          class="huerange__range"
          min="0"
          max="359"
          step="1"
          value={value}
          onInput={(e) => setValue(e.target.value)}
        />
      </p>
    </section>
  );
}

export default HueRange;
