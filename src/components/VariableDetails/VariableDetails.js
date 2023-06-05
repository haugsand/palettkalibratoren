import "./VariableDetails.css";
import { STEPS } from "./../../constants";

function VariableDetails({
  activeVariable,
  palette,
  gradient,
  cardcolors,
  set_cardcolors,
  activePalette,
}) {
  return (
    <section class="variabledetails">
      <div
        class={
          !cardcolors[activeVariable]["palette"]
            ? "variabledetails__palette variabledetails__palette--active"
            : "variabledetails__palette"
        }
      >
        <p class="variabledetails__palettetitle">Aktiv palett</p>
        <ul class="variabledetails__paletteswatches">
          {STEPS.map((step) => (
            <li
              class={
                cardcolors[activeVariable]["step"] === step
                  ? "variabledetails__paletteswatch variabledetails__paletteswatch--active"
                  : "variabledetails__paletteswatch"
              }
            >
              <button
                class="variabledetails__palettebutton"
                onClick={(e) =>
                  set_cardcolors[activeVariable]({
                    palette: false,
                    step: step,
                  })
                }
                style={{
                  "--color":
                    gradient[activePalette][palette[activePalette][step]],
                }}
              >
                {step}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {Object.keys(gradient).map((n) => (
        <div
          class={
            cardcolors[activeVariable]["palette"] === n
              ? "variabledetails__palette variabledetails__palette--active"
              : "variabledetails__palette"
          }
        >
          <p class="variabledetails__palettetitle">Palett {n}</p>
          <ul class="variabledetails__paletteswatches">
            {STEPS.map((step) => (
              <li
                class={
                  cardcolors[activeVariable]["step"] === step
                    ? "variabledetails__paletteswatch variabledetails__paletteswatch--active"
                    : "variabledetails__paletteswatch"
                }
              >
                <button
                  class="variabledetails__palettebutton"
                  onClick={(e) =>
                    set_cardcolors[activeVariable]({
                      palette: n,
                      step: step,
                    })
                  }
                  style={{ "--color": gradient[n][palette[n][step]] }}
                >
                  {step}
                  {cardcolors[activeVariable]["step"] === step && (
                    <span>x</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default VariableDetails;
