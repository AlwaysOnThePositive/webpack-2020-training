function createAnalytics() {
  let counter = 0;
  let isDestoyed = false;

  const listener = () => counter++;
  document.addEventListener("click", listener);

  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestoyed = true;
    },
    getClicks() {
      return isDestoyed ? "Analytics is destroyed" : counter;
    },
  };
}

window.analytics = createAnalytics();
