import React from 'react';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const SimpleModal = ({open, handleClose, children}) => {
  const onClose = () => {
    if (handleClose) {
      handleClose();
    } else {
      open.set(false);
    }
  };

  return (
    <>
      <Modal
        isVisible={open.get()}
        animationIn="fadeInUp"
        animationOutTiming={300}
        animationOut="fadeOutDown"
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={0}
        onBackdropPress={onClose}>
        {children}
      </Modal>
    </>
  );
};

export default SimpleModal;
