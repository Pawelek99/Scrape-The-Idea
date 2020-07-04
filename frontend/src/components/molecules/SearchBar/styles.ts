import styled from 'styled-components';

export const StyledWrapper = styled.div`
	background: #fff;
	display: flex;
	margin: 0 auto;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.textSecondary};
	border-radius: 5px;
	width: 100%;
	max-width: 696px;
	overflow: hidden;
	box-shadow: 0 2px 10px ${({ theme }) => theme.shadowColor};

	@media (min-width: 768px) {
		font-size: 1.8rem;
	}
`;

export const StyledInput = styled.input`
	background: #fff;
	padding: 19px 15px;
	width: 100%;
	border: none;
`;

export const StyledButton = styled.button`
	border: none;
	background: none;
	width: 57px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	svg path {
		transition: fill 0.15s ease-in-out;
		will-change: fill;
	}

	&:hover {
		svg path {
			fill: ${({ theme }) => theme.primary};
		}
	}

	@media (min-width: 768px) {
		width: 60px;
	}
`;
