import styled from 'styled-components';

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 15px;

	@media (min-width: 560px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 1300px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export default GridContainer;
