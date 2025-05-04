const options = {
  fpsLimit: 100,
  fullScreen: { enable: !1 },
  background: { color: "#0a0a0a" },
  interactivity: {
    events: {
      onClick: { enable: !0, mode: "push" },
      onHover: { enable: !0, mode: ["grab", "connect"] },
    },
    modes: { push: { quantity: 10 }, grab: { distance: 400 } },
  },
  particles: {
    color: { value: "#87CEFA" },
    number: { value: 100, density: { enable: !0, value_area: 600 } },
    links: { enable: !0, opacitiy: 1, color: "#90EE90", distance: 150 },
    move: { enable: !0, speed: { min: 1, max: 3 } },
    opacitiy: { value: { min: 0.3, max: 0.7 } },
    size: { value: { min: 1, max: 3 } },
  },
};
tsParticles.load("tsparticles", options);
