export type AnimationVariant = "circle" | "circle-blur" | "polygon" | "gif"
export type AnimationStart =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"

interface Animation {
  name: string
  css: string
}

const getPositionCoords = (position: AnimationStart) => {
  switch (position) {
    case "top-left":
      return { cx: "0", cy: "0" }
    case "top-right":
      return { cx: "40", cy: "0" }
    case "bottom-left":
      return { cx: "0", cy: "40" }
    case "bottom-right":
      return { cx: "40", cy: "40" }
  }
}

const generateSVG = (variant: AnimationVariant, start: AnimationStart) => {
  if (start === "center") return

  const positionCoords = getPositionCoords(start)
  if (!positionCoords) {
    throw new Error(`Invalid start position: ${start}`)
  }
  const { cx, cy } = positionCoords

  if (variant === "circle") {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="${cx}" cy="${cy}" r="20" fill="white"/></svg>`
  }

  if (variant === "circle-blur") {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="${cx}" cy="${cy}" r="18" fill="white" filter="url(%23blur)"/></svg>`
  }

  return ""
}

const getTransformOrigin = (start: AnimationStart) => {
  switch (start) {
    case "top-left":
      return "top left"
    case "top-right":
      return "top right"
    case "bottom-left":
      return "bottom left"
    case "bottom-right":
      return "bottom right"
  }
}

export const createAnimation = (
  variant: AnimationVariant,
  start: AnimationStart,
  url?: string
): Animation => {
  const svg = generateSVG(variant, start)
  const transformOrigin = getTransformOrigin(start)

  if (variant === "polygon") {
    return {
      name: `${variant}-${start}`,
      css: `
       ::view-transition-group(root) {
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light;
        will-change: clip-path;
        backface-visibility: hidden;
        transform: translateZ(0);
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark;
        will-change: clip-path;
        backface-visibility: hidden;
        transform: translateZ(0);
      }

      @keyframes reveal-dark {
        0% {
          clip-path: polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%);
        }
        50% {
          clip-path: polygon(50% -20%, -20% 50%, 20% 120%, 120% 50%);
        }
        100% {
          clip-path: polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%);
        }
      }

      @keyframes reveal-light {
        0% {
          clip-path: polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%);
        }
        50% {
          clip-path: polygon(120% 50%, 50% 120%, 20% 50%, 50% 20%);
        }
        100% {
          clip-path: polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%);
        }
      }
      `,
    }
  }
  if (variant === "circle" && start == "center") {
    return {
      name: `${variant}-${start}`,
      css: `
       ::view-transition-group(root) {
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light;
        will-change: clip-path;
        backface-visibility: hidden;
        transform: translateZ(0);
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark;
        will-change: clip-path;
        backface-visibility: hidden;
        transform: translateZ(0);
      }

      @keyframes reveal-dark {
        0% {
          clip-path: circle(0% at 50% 50%);
        }
        30% {
          clip-path: circle(30% at 50% 50%);
        }
        100% {
          clip-path: circle(100% at 50% 50%);
        }
      }

      @keyframes reveal-light {
        0% {
           clip-path: circle(0% at 50% 50%);
        }
        30% {
          clip-path: circle(30% at 50% 50%);
        }
        100% {
          clip-path: circle(100% at 50% 50%);
        }
      }
      `,
    }
  }
  if (variant === "gif") {
    return {
      name: `${variant}-${start}`,
      css: `
      ::view-transition-group(root) {
  animation-timing-function: var(--expo-in);
}

::view-transition-new(root) {
  mask: url('${url}') center / 0 no-repeat;
  animation: scale 3s;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: scale 3s;
}

@keyframes scale {
  0% {
    mask-size: 0;
  }
  10% {
    mask-size: 50vmax;
  }
  90% {
    mask-size: 50vmax;
  }
  100% {
    mask-size: 2000vmax;
  }
}`,
    }
  }

  return {
    name: `${variant}-${start}`,
    css: `
      ::view-transition-group(root) {
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
      }
      ::view-transition-new(root) {
        mask: url('${svg}') ${start.replace("-", " ")} / 0 no-repeat;
        mask-origin: content-box;
        animation: scale-${start} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-origin: ${transformOrigin};
        will-change: mask-size, transform;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale-${start} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-origin: ${transformOrigin};
        z-index: -1;
        will-change: mask-size, transform;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      @keyframes scale-${start} {
        0% {
          mask-size: 0;
        }
        20% {
          mask-size: 50vmax;
        }
        100% {
          mask-size: 300vmax;
        }
      }
    `,
  }
}
