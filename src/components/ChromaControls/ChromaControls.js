import "./ChromaControls.css";
import ChromaRange from "../ChromaRange";

function ChromaControls({ values, setValues }) {
  return (
    <section class="chromacontrols">
      <h2>Fargemetning</h2>
      <div class="chromacontrols__ranges">
        <ChromaRange
          value={values.high}
          setValue={setValues.high}
        />
        <ChromaRange
          value={values.centerhigh}
          setValue={setValues.centerhigh}
        />
        <ChromaRange
          value={values.center}
          setValue={setValues.center}
        />
        <ChromaRange
          value={values.lowcenter}
          setValue={setValues.lowcenter}
        />
        <ChromaRange
          value={values.low}
          setValue={setValues.low}
        />
      </div>
    </section>
  );
}

export default ChromaControls;
