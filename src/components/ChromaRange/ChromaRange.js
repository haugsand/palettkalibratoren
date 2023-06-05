import "./ChromaRange.css";

function ChromaRange({ value, setValue }) {
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
        onInput={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

export default ChromaRange;
