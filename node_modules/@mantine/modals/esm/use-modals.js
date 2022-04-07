import { useContext } from 'react';
import { modalsContext } from './context.js';

function useModals() {
  const ctx = useContext(modalsContext);
  if (!ctx) {
    throw new Error("[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component");
  }
  return ctx;
}

export { useModals };
//# sourceMappingURL=use-modals.js.map
