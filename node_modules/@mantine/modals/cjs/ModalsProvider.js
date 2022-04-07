'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var context = require('./context.js');
var ConfirmModal = require('./ConfirmModal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const _a = props, {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels
  } = _a, others = __objRest(_a, [
    "id",
    "children",
    "onCancel",
    "onConfirm",
    "closeOnConfirm",
    "closeOnCancel",
    "cancelProps",
    "confirmProps",
    "groupProps",
    "labels"
  ]);
  return __spreadValues({ id }, others);
}
function ModalsProvider({ children, modalProps, labels, modals }) {
  var _a;
  const [state, handlers] = hooks.useListState([]);
  const [currentModal, setCurrentModal] = React.useState({
    id: null,
    props: null,
    type: "content"
  });
  const closeAll = () => {
    state.forEach((modal) => {
      var _a2, _b;
      return (_b = (_a2 = modal.props) == null ? void 0 : _a2.onClose) == null ? void 0 : _b.call(_a2);
    });
    handlers.setState([]);
  };
  const openModal = (props) => {
    const id = props.id || hooks.randomId();
    handlers.append({ id, props, type: "content" });
    setCurrentModal({ id, props, type: "content" });
    return id;
  };
  const openConfirmModal = (props) => {
    const id = props.id || hooks.randomId();
    handlers.append({ id, props, type: "confirm" });
    setCurrentModal({ id, props, type: "confirm" });
    return id;
  };
  const openContextModal = (modal, props) => {
    const id = props.id || hooks.randomId();
    handlers.append({ id, props, type: "context", ctx: modal });
    setCurrentModal({ id, props, type: "context", ctx: modal });
    return id;
  };
  const closeModal = (id) => {
    var _a2, _b;
    const index = state.findIndex((item) => item.id === id);
    if (state.length <= 1) {
      closeAll();
    } else {
      const modal = state.find((item) => item.id === id);
      (_b = (_a2 = modal == null ? void 0 : modal.props) == null ? void 0 : _a2.onClose) == null ? void 0 : _b.call(_a2);
      index !== -1 && handlers.remove(index);
      setCurrentModal(state[state.length - 2] || {
        id: null,
        props: null,
        type: "content"
      });
    }
  };
  const ContextModal = (currentModal == null ? void 0 : currentModal.type) === "context" ? modals[currentModal == null ? void 0 : currentModal.ctx] : () => null;
  const ctx = {
    modals: state,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll
  };
  const content = (currentModal == null ? void 0 : currentModal.type) === "context" ? /* @__PURE__ */ React__default.createElement(ContextModal, __spreadValues({
    context: ctx,
    id: currentModal == null ? void 0 : currentModal.id
  }, currentModal == null ? void 0 : currentModal.props)) : (currentModal == null ? void 0 : currentModal.type) === "confirm" ? /* @__PURE__ */ React__default.createElement(ConfirmModal.ConfirmModal, __spreadProps(__spreadValues({}, currentModal.props), {
    id: currentModal.id,
    labels: currentModal.props.labels || labels
  })) : (_a = currentModal == null ? void 0 : currentModal.props) == null ? void 0 : _a.children;
  return /* @__PURE__ */ React__default.createElement(context.modalsContext.Provider, {
    value: ctx
  }, /* @__PURE__ */ React__default.createElement(core.Modal, __spreadProps(__spreadValues(__spreadValues({}, modalProps), (currentModal == null ? void 0 : currentModal.type) === "confirm" ? extractConfirmModalProps(currentModal == null ? void 0 : currentModal.props) : currentModal == null ? void 0 : currentModal.props), {
    opened: state.length > 0,
    onClose: () => closeModal(currentModal == null ? void 0 : currentModal.id)
  }), content), children);
}

exports.ModalsProvider = ModalsProvider;
//# sourceMappingURL=ModalsProvider.js.map
