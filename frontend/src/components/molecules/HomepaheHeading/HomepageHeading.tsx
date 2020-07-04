import React from 'react';
import H1 from 'components/atoms/H1/H1';
import H2 from 'components/atoms/H2/H2';
import { StyledWrapper, StyledAccent } from './styles';

const HomepageHeading = () => {
	return (
		<StyledWrapper>
			<H1> Search for inspiration </H1>
			<H2>
				Or just srape the <StyledAccent> idea </StyledAccent> ;)
			</H2>
		</StyledWrapper>
	);
};

export default HomepageHeading;
