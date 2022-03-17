import React from 'react'
import Modal from 'react-native-modal'

const SwipableModal = ({ open, handleClose, children }) => {
  const onClose = () => {
    if (handleClose) {
      handleClose()
    } else {
      open.set(false)
    }
  }

  return (
    <Modal
      isVisible={open.get()}
      onSwipeComplete={onClose}
      useNativeDriverForBackdrop
      swipeDirection={['down', 'up']}
      // animationIn="slideInUp"
      // animationOutTiming={600}
      // animationOut="zoomOutUp"
      // backdropTransitionInTiming={400}
      // backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
    >
      {children}
    </Modal>
  )
}

export default SwipableModal
