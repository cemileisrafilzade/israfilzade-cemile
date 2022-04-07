/// <reference types="react" />
import { ModalProps } from '@mantine/core';
import type { ConfirmModalProps } from './ConfirmModal';
export declare type ModalSettings = Partial<Omit<ModalProps, 'opened'>>;
export declare type ConfirmLabels = Record<'confirm' | 'cancel', string>;
export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {
}
export interface OpenContextModal extends ModalSettings {
}
export declare type ModalState = {
    id: string;
    props: ModalSettings;
    type: 'content';
} | {
    id: string;
    props: OpenConfirmModal;
    type: 'confirm';
} | {
    id: string;
    props: Record<string, any>;
    type: 'context';
    ctx: string;
};
export interface ModalsContext {
    modals: ModalState[];
    openModal: (props: ModalSettings) => string;
    openConfirmModal: (props: OpenConfirmModal) => string;
    openContextModal: (modal: string, props: Record<string, any>) => string;
    closeModal: (id: string) => void;
    closeAll: () => void;
}
export declare const modalsContext: import("react").Context<ModalsContext>;
//# sourceMappingURL=context.d.ts.map