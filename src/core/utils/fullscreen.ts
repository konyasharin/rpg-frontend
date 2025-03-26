export const openFullscreen = async (element: HTMLElement) => {
  if (element.requestFullscreen) await element.requestFullscreen();
};

export const closeFullscreen = async () => {
  if (document.exitFullscreen) await document.exitFullscreen();
};
