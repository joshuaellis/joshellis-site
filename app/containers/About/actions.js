/*
 *
 * About actions
 *
 */

export function closeWindow() {
  return {
    type: 'CLOSE_WINDOW',
    id: 0,
    windowShowing: false,
  };
}

export function openWindow() {
  return {
    type: 'OPEN_WINDOW',
    id: 1,
  };
}
