'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const modalsContext = React.createContext({
  modals: [],
  openModal: () => null,
  openConfirmModal: () => null,
  openContextModal: () => null,
  closeAll: () => {
  },
  closeModal: () => {
  }
});

exports.modalsContext = modalsContext;
//# sourceMappingURL=context.js.map
