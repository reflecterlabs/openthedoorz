function animateValue(element: HTMLElement, target: number) {
  const durationMs = 1200;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / durationMs, 1);
    const value = target * progress;

    if (target === 99.95) {
      element.textContent = `${value.toFixed(2)}%`;
    } else if (target === 5) {
      element.textContent = `${Math.round(value)} min`;
    } else {
      element.textContent = `${Math.round(value)}`;
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

const nodes = document.querySelectorAll<HTMLElement>("[data-target]");
for (const node of nodes) {
  const target = Number(node.dataset.target);
  if (!Number.isFinite(target)) {
    continue;
  }
  animateValue(node, target);
}
