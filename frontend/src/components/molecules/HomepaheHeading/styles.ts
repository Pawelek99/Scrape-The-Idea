import styled from 'styled-components';

export const StyledWrapper = styled.div`
	text-align: center;
	margin: 30px 0;
	line-height: 1.8;
`;

export const StyledAccent = styled.span`
	color: ${({ theme }) => theme.primary};
`;
