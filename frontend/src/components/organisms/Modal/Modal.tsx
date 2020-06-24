import React from 'react'
import { Container, ModalWrapper, Description } from './styles'

interface ModalProps {
	isModal: Function;
}

const Modal: React.SFC<ModalProps> = ({isModal}) => {
    return (
        <Container onClick={() => isModal(false)}>
            <ModalWrapper>
                <Description>

                </Description>
            </ModalWrapper>
        </Container>
    )
}

export default Modal
