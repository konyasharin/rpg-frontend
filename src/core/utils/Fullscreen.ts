export class Fullscreen {
  public static async openFullscreen(element: HTMLElement) {
    if (element.requestFullscreen) await element.requestFullscreen();
  }

  public static async closeFullscreen() {
    if (document.exitFullscreen) await document.exitFullscreen();
  }

  public static get isFullscreen() {
    return !!document.fullscreenElement;
  }

  public static async toggleFullscreen(element: HTMLElement) {
    if (this.isFullscreen) return await this.closeFullscreen();
    return await this.openFullscreen(element);
  }
}
