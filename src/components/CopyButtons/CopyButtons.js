import "./CopyButtons.css";
import { copyToClipboard } from "./../../helpers";
import { STEPS, SWATCH_SIZE } from "./../../constants";

function CopyButtons({ gradient, palette }) {

  const copyPalette = () => {

    let value = '<svg width="' + SWATCH_SIZE * STEPS.length + '" height="' + SWATCH_SIZE + '">';

    STEPS.forEach((step, i) => {
      value += '<rect width="' + SWATCH_SIZE + '" height="' + SWATCH_SIZE + '" x="' + SWATCH_SIZE * i + '" y="0" id="color/' + step + '" fill="' + gradient[palette[step]] + '" />';
    })

    value += '</svg>';

    copyToClipboard(value).then(
      () => {
        console.log('suksess');
      }
    );
  };

  return (
    <section class="copybuttons">
      <h2>Bruk fargepaletten</h2>
      <button onClick={copyPalette}>Kopier til Figma</button>
    </section>
  );
}

export default CopyButtons;
