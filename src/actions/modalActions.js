import { OPEN_MODAL, CLOSE_MODAL, OPEN_HELPER, CLOSE_HELPER } from './modalTypes';
///import * as Form from '../components/Form/';

/* modalType:
    form,
    content
*/
export function openModal(gid, modalType) {
  return {
    type: "OPEN_MODAL",
    payload: {
      gid: gid,
      modalType: modalType,
      show: true
    }
  }
}

export function closeModal() {
  return {
    type: "CLOSE_MODAL",
    payload: {
      show: false
    }
  }
}

export function openHelper() {
  return {
    type: "OPEN_HELPER",
    payload: {
      show: true
    }
  }
}

export function closeHelper() {
  return {
    type: "CLOSE_HELPER",
    payload: {
      show: false
    }
  }
}