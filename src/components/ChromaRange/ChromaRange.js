import "./ChromaRange.css";

function ChromaRange({ value, setValue, activePalette, property }) {

  function changeValue(value) {
    setValue(value)
    const key = activePalette + "_" + property;
    localStorage.setItem(key, value);

  }

  return (
    <div class="chromarange">
      <input
        type="range"
        min="0"
        max="0.4"
        step="0.001"
        orient="vertical"
        class="chromarange__range"
        value={value}
        onInput={(e) => changeValue(Number(e.target.value))}
      />
    </div>
  );
}

export default ChromaRange;
