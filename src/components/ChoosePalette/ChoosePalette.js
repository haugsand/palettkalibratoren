import "./ChoosePalette.css";

function ChoosePalette({ setActivePalette, activePalette, gradient, palette }) {
  return (
    <section class="choosepalette">
      <div class="choosepalette__swatches">
      {Object.keys(gradient).map((i) => (
        <label class="choosepalette__label" style={{'--color': gradient[i][palette[i][500]]}}>
          <input
            class="choosepalette__radio"
            type="radio"
            name="activepalette"
            value={i}
            onClick={(e) => setActivePalette(i)}
            checked={activePalette == i}
            />
          <span class="choosepalette__swatch">{i}</span>
        </label>
      ))}
      </div>
    </section>
  );
}

export default ChoosePalette;
