import React, { FunctionComponent } from 'react';
import TopBar from 'components/molecules/TopBar/TopBar';

const MainTemplate: FunctionComponent = ({ children }) => {
	return (
		<div>
			<TopBar />
			{children}
		</div>
	);
};

export default MainTemplate;
