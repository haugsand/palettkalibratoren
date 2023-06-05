import "./Gradientbar.css";

function Gradientbar({ gradient }) {
  let background = "linear-gradient(to left";

  const part = 100 / gradient.length;

  for (let i = 0; i < gradient.length; i++) {
    const start = part * i + "%";
    const end = part * (i + 1) + "%";

    background += ", " + gradient[i] + " " + start + " " + end;
  }

  background += ")";

  return <div class="gradientbar" style={{ background: background }}></div>;
}

export default Gradientbar;
