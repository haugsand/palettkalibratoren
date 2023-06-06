import {
  wcagContrast,
  round,
  clampChroma,
  interpolate,
  samples,
  formatHex,
} from "culori";

export function getContrastRatio(color1, color2) {
  const approx = round(2);

  const contrastRatio = approx(wcagContrast(color1, color2));

  return contrastRatio;
}

export function getContrastIcon(contrastRatio) {
  let contrastIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  if (contrastRatio < 4.5) {
    contrastIcon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 9L9 15"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 9L15 15"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  return contrastIcon;
}

export function copyToClipboard(value) {
  return navigator.clipboard.writeText(value);
}

export function interpolateColors(colors, steps) {
  const clamped_colors = colors.map((color) => clampChroma(color, color.mode));
  const interpolated_colors = interpolate(clamped_colors, "oklch");
  const gradient = samples(steps).map(interpolated_colors).map(formatHex);

  return gradient;
}

export function getColorsFromState(state) {
  const colors = [
    {
      mode: "oklch",
      l: 0.983,
      c: state.low,
      h: state.hue,
    },
    {
      mode: "oklch",
      l: 0.775,
      c: state.lowcenter,
      h: state.hue,
    },
    {
      mode: "oklch",
      l: 0.567,
      c: state.center,
      h: state.hue,
    },
    {
      mode: "oklch",
      l: 0.404,
      c: state.centerhigh,
      h: state.hue,
    },
    {
      mode: "oklch",
      l: 0.24,
      c: state.high,
      h: state.hue,
    },
  ];

  return colors;
}

export function getLinearGradient(colors, angle = "to right") {
  let background = "linear-gradient(" + angle;

  const part = 100 / colors.length;

  for (let i = 0; i < colors.length; i++) {
    const start = part * i + "%";
    const end = part * (i + 1) + "%";

    background += ", " + colors[i] + " " + start + " " + end;
  }

  background += ")";

  return background;
}
