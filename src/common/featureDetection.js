/* eslint-disable */


export const supportsTouch = () =>
  (('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch);
