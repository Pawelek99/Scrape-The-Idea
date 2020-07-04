import React from 'react';
import Palette from 'react-palette';
import {
	Container,
	ModalWrapper,
	Description,
	AuthorWrapper,
	StyledDetails,
} from './styles';

interface ModalProps {
	isModal: (show: boolean) => void;
	id?: string;
	website?: string;
	author?: string;
	title?: string;
	uploadedBy?: string;
	link?: string;
	thumbnail?: string;
	stars?: number;
}

const Modal: React.SFC<ModalProps> = ({
	isModal,
	id,
	website,
	author,
	link,
	thumbnail,
	stars,
}) => {
	return (
		<Container onClick={() => isModal(false)}>
			<ModalWrapper
				backgroundImg={thumbnail}
				onClick={(e) => e.stopPropagation()}
			>
				<Description>
					<AuthorWrapper>
						<h1>{website}</h1>
						<StyledDetails>
							<div>
								by <a href={link}> {author}</a> {stars} ★
							</div>
						</StyledDetails>
					</AuthorWrapper>
				</Description>
			</ModalWrapper>
		</Container>
	);
};

export default Modal;
