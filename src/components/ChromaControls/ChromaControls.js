import "./ChromaControls.css";
import ChromaRange from "../ChromaRange";

function ChromaControls({ values, setValues, activePalette }) {
  return (
    <section class="chromacontrols">
      <h2>Fargemetning</h2>
      <div class="chromacontrols__ranges">
        <ChromaRange
          value={values.high}
          setValue={setValues.high}
          property='high'
          activePalette={activePalette}
        />
        <ChromaRange
          value={values.centerhigh}
          setValue={setValues.centerhigh}
          property='centerhigh'
          activePalette={activePalette}
        />
        <ChromaRange
          value={values.center}
          setValue={setValues.center}
          property='center'
          activePalette={activePalette}
        />
        <ChromaRange
          value={values.lowcenter}
          setValue={setValues.lowcenter}
          property='lowcenter'
          activePalette={activePalette}
        />
        <ChromaRange
          value={values.low}
          setValue={setValues.low}
          property='low'
          activePalette={activePalette}
        />
      </div>
    </section>
  );
}

export default ChromaControls;
