import styled from 'styled-components';

export const StyledWrapper = styled.div`
	background: #fff;
	padding: 20px 25px;
	box-shadow: 0 5px 20px ${({ theme }) => theme.shadowColor};

	@media (min-width: 768px) {
		padding: 23px 60px;
	}
`;
