import styled from 'styled-components';

export const StyledWrapper = styled.div`
	position: relative;
	overflow: hidden;
	transition: transform 0.2s ease-in-out;
	height: 250px;

	&:hover {
		transform: scale(1.26);
		z-index: 999;
		box-shadow: 0 0 15px ${({ theme }) => theme.shadowColor};
	}
`;

export const StyledTopSection = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledStarWrapper = styled.div`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.primary};
	display: flex;
	align-items: center;
	opacity: 0;
	transform: translateX(200%);
	transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

	img {
		margin-left: 5px;
	}

	${StyledWrapper}:hover & {
		transform: translateX(0);
		opacity: 1;
	}
`;

export const StyledThumbnail = styled.img`
	height: 100%;
	width: auto;
	object-fit: cover;
`;

export const StyledBottomSection = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 17px 10px 10px;
	text-align: center;
	backdrop-filter: blur(7px);
	background-color: rgba(255, 255, 255, 0.4);
	color: #000;
	transform: translateY(13px);
	transition: transform 0.2s ease-in-out;

	${StyledWrapper}:hover & {
		transform: translateY(0);
	}
`;

export const StyledDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	margin-top: 6px;
	opacity: 0;
	transform: translateY(100%);
	transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out;

	a {
		position: relative;
		text-decoration: none;
		color: inherit;

		&::before {
			content: '';
			position: absolute;
			bottom: 1px;
			left: 0;
			width: 100%;
			height: 0.5rem;
			background-color: ${({ theme }) => theme.shadowPrimary};
			z-index: -1;
		}

		&:hover {
			&::before {
				transform: translateY(-2px) scaleY(2);
			}
		}
	}

	${StyledWrapper}:hover & {
		opacity: 1;
		transform: translateY(0);
	}
`;
