import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

const CustomModal = ({ isOpen, handleClose, children, className }) => {
  const onClose = () => {
    if (handleClose) {
      handleClose()
    } else {
      isOpen.set(false)
    }
  }

  return (
    <Modal
      className="custom-modal"
      open={isOpen.get()}
      onClose={onClose}
      closeAfterTransition>
      <Fade in={isOpen.get()}>
        <Box className={[className, 'modal-container'].join(' ')}>
          {children}
        </Box>
      </Fade>
    </Modal>
  )
}

export default CustomModal
