import "./App.css";
import { useState } from "preact/hooks";

import {
  PALETTES,
  DEFAULT_OKLCH,
  DEFAULT_PALETTE,
} from "./../../defaultvalues";
import { STEPS } from "./../../constants";
import { interpolateColors, getColorsFromState } from "./../../helpers";

import CardContainer from "../CardContainer";
import ChoosePalette from "../ChoosePalette";
import ChromaControls from "../ChromaControls";
import ColorDetails from "../ColorDetails";
import CopyButtons from "../CopyButtons";
import Gradientbar from "../Gradientbar";
import HueRange from "../HueRange";
import Swatches from "../Swatches";

function App() {
  // Oppsett av verktøy
  const [activePalette, setActivePalette] = useState(1);
  const [activeColor, setActiveColor] = useState(false);
  const [activeVariable, setActiveVariable] = useState(false);

  // Ny gradient basert på oklch

  const gradient = {};

  const oklchValues = {};
  const set_oklchValues = {};

  PALETTES.forEach((n) => {
    oklchValues[n] = {};
    set_oklchValues[n] = {};

    [oklchValues[n]["hue"], set_oklchValues[n]["hue"]] = useState(
      DEFAULT_OKLCH[n]["hue"]
    );
    [oklchValues[n]["low"], set_oklchValues[n]["low"]] = useState(
      DEFAULT_OKLCH[n]["low"]
    );
    [oklchValues[n]["lowcenter"], set_oklchValues[n]["lowcenter"]] = useState(
      DEFAULT_OKLCH[n]["lowcenter"]
    );
    [oklchValues[n]["center"], set_oklchValues[n]["center"]] = useState(
      DEFAULT_OKLCH[n]["center"]
    );
    [oklchValues[n]["centerhigh"], set_oklchValues[n]["centerhigh"]] = useState(
      DEFAULT_OKLCH[n]["centerhigh"]
    );
    [oklchValues[n]["high"], set_oklchValues[n]["high"]] = useState(
      DEFAULT_OKLCH[n]["high"]
    );

    gradient[n] = interpolateColors(getColorsFromState(oklchValues[n]), 99);
  });

  // Oppsett av state for valg av palettfargene

  const palette = {};
  const set_palette = {};

  PALETTES.forEach((n) => {
    palette[n] = {};
    set_palette[n] = {};

    STEPS.forEach((step) => {
      [palette[n][step], set_palette[n][step]] = useState(
        DEFAULT_PALETTE[n][step]
      );
    });
  });

  return (
    <main>
      <Gradientbar gradient={gradient[activePalette]} />

      <ChoosePalette
        activePalette={activePalette}
        setActivePalette={setActivePalette}
        gradient={gradient}
        palette={palette}
      />
      <div class="column-left">
        <HueRange
          value={oklchValues[activePalette]["hue"]}
          setValue={set_oklchValues[activePalette]["hue"]}
          gradient={gradient}
          chroma={oklchValues[activePalette]["center"]}
        />

        <ChromaControls
          values={oklchValues[activePalette]}
          setValues={set_oklchValues[activePalette]}
        />

        <Swatches
          gradient={gradient[activePalette]}
          palette={palette[activePalette]}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        {activeColor && (
          <ColorDetails
            gradient={gradient[activePalette]}
            value={palette[activePalette][activeColor]}
            setValue={set_palette[activePalette][activeColor]}
            color={gradient[activePalette][palette[activePalette][activeColor]]}
          />
        )}

        <CopyButtons
          gradient={gradient[activePalette]}
          palette={palette[activePalette]}
        />
      </div>
      <div class="column-right">
        <CardContainer
          activeVariable={activeVariable}
          setActiveVariable={setActiveVariable}
          palette={palette}
          gradient={gradient}
          activePalette={activePalette}
        />
      </div>
    </main>
  );
}

export default App;
