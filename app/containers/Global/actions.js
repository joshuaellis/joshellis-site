/*
 *
 * Global app actions
 *
 */

export function dispatchCloseModal(modalID) {
  return {
    type: 'CLOSE_MODAL',
    modalID,
    showModal: false,
  };
}

export function dispatchOpenModal(modalID) {
  return {
    type: 'OPEN_MODAL',
    modalID,
    showModal: true,
  };
}
