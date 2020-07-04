import React from 'react';
//import {usePalette}  from 'color-thief-react'
import Palette from 'react-palette';
import {
	Container,
	ModalWrapper,
	Description,
	AuthorWrapper,
	StyledDetails,
} from './styles';

interface ModalProps {
	isModal: Function;
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
	//const {data} = usePalette(thumbnail)
	//const { data, loading, error } = usePalette(thumbnail ? thumbnail : '')
	//console.log(data)
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
					{/* <colorThief.Palette src={thumbnail} colorCount={7}>
                        {({ data }: {data: any}) => (
                            <div style={{ color: data[0], backgroundColor: data[1] }}>
                            Text with the predominant color
                            </div>
                        )}
                    </colorThief.Palette> */}
					<Palette src={thumbnail ? thumbnail : ''}>
						{({ data }: { data: any }) => (
							<div style={{ color: data.vibrant }}>
								Text with the vibrant color
							</div>
						)}
					</Palette>
				</Description>
			</ModalWrapper>
		</Container>
	);
};

export default Modal;
