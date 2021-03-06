import React from 'react';
import { createPortal } from 'react-dom';
import './_modal.scss';
import Button from '@/components/button/Button';
import { IconClose } from '@/misc/icons';

type ModalProps = {
    isOpen: boolean;
    handleClose(): void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    if (!isOpen) return null;
    return createPortal(
        <div className="modal__wrapper">
            <div className="modal__overlay" onClick={handleClose}></div>
            <div className="modal__container">
                <Button handleClick={handleClose}>
                    <IconClose />
                </Button>
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
};

export default Modal;
