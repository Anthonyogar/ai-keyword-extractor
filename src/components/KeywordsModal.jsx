/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress
} from '@chakra-ui/react'

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
        <Modal isOpen={ isOpen } onClose={ closeModal }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Keywords
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    { loading
                      ? (
                        <CircularProgress isIndeterminate color='#64d77f' />
                        )
                      : (
                        <Text>
                            { keywords }
                        </Text>
                        ) }
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='purple' mr={3} onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default KeywordsModal
