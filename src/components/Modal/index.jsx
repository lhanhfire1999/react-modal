import clsx from 'clsx';
import React from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
  const modalRef = React.useRef();
  const { children, show, onHideModal, hideCloseBtn } = props;

  React.useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        onHideModal();
      }
    };
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    };
  }, [show]);

  return (
    <div
      ref={modalRef}
      className={clsx(styles.modal, { [styles.active]: show })}
    >
      <div className={styles.modal__content}>
        {!hideCloseBtn && (
          <span onClick={onHideModal} className={styles.modal__close}>
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default React.memo(Modal);

export const ModalHeader = ({ children }) => {
  return <div className={styles.modal__header}>{children}</div>;
};
export const ModalBody = ({ children }) => {
  return <div className={styles.modal__body}>{children}</div>;
};
export const ModalFooter = ({ children }) => {
  return <div className={styles.modal__footer}>{children}</div>;
};
