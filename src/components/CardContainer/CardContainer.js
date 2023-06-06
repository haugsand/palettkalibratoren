import "./CardContainer.css";
import { useState } from "preact/hooks";

import CardCalibrator from "../CardCalibrator";
import CardDesign from "../CardDesign";
import VariableDetails from "../VariableDetails";
import VariableDetailsPlaceholder from "../VariableDetailsPlaceholder";

function CardContainer({
  activeVariable,
  setActiveVariable,
  palette,
  gradient,
  activePalette,
}) {
  const cardcolors = {};
  const set_cardcolors = {};

  [cardcolors["carddesign_color"], set_cardcolors["carddesign_color"]] =
    useState({
      palette: false,
      step: 900,
    });
  [cardcolors["cardheader_color"], set_cardcolors["cardheader_color"]] =
    useState({
      palette: false,
      step: 800,
    });
  [cardcolors["small_color"], set_cardcolors["small_color"]] = useState({
    palette: false,
    step: 700,
  });
  [
    cardcolors["button-hover_background-color"],
    set_cardcolors["button-hover_background-color"],
  ] = useState({
    palette: false,
    step: 600,
  });
  [
    cardcolors["button_background-color"],
    set_cardcolors["button_background-color"],
  ] = useState({
    palette: false,
    step: 500,
  });
  [cardcolors["icon_fill"], set_cardcolors["icon_fill"]] = useState({
    palette: false,
    step: 400,
  });
  [cardcolors["listitem_border"], set_cardcolors["listitem_border"]] = useState(
    {
      palette: false,
      step: 300,
    }
  );
  [
    cardcolors["cardheader_background-color"],
    set_cardcolors["cardheader_background-color"],
  ] = useState({
    palette: false,
    step: 200,
  });
  [
    cardcolors["carddesign_background-color"],
    set_cardcolors["carddesign_background-color"],
  ] = useState({
    palette: false,
    step: 100,
  });

  const colorVariables = {};
  Object.keys(cardcolors).forEach((name) => {
    let palette_id = activePalette;

    if (cardcolors[name].palette) {
      palette_id = cardcolors[name].palette;
    }

    const step_id = palette[palette_id][cardcolors[name].step];
    colorVariables["--" + name] = gradient[palette_id][step_id];
  });

  return (
    <div class="cardcontainer" style={colorVariables}>
      <CardDesign />
      <CardCalibrator
        cardcolors={cardcolors}
        activeVariable={activeVariable}
        setActiveVariable={setActiveVariable}
      />
      {activeVariable ? (
        <VariableDetails
          palette={palette}
          gradient={gradient}
          cardcolors={cardcolors}
          set_cardcolors={set_cardcolors}
          activeVariable={activeVariable}
          activePalette={activePalette}
        />
      ) : (
        <VariableDetailsPlaceholder />
      )}
    </div>
  );
}

export default CardContainer;
