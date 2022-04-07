import { createContext } from 'react';

const modalsContext = createContext({
  modals: [],
  openModal: () => null,
  openConfirmModal: () => null,
  openContextModal: () => null,
  closeAll: () => {
  },
  closeModal: () => {
  }
});

export { modalsContext };
//# sourceMappingURL=context.js.map
