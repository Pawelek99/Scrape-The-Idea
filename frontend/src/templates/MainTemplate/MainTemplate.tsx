import React, { FunctionComponent } from 'react';
import TopBar from 'components/molecules/TopBar/TopBar';
import { StyledContent } from './styles';

const MainTemplate: FunctionComponent = ({ children }) => {
	return (
		<div>
			<TopBar />
			<StyledContent>{children}</StyledContent>
		</div>
	);
};

export default MainTemplate;
