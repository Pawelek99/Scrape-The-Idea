import React from 'react';
import logo from '../../../assets/logo.svg';
import { StyledWrapper } from './styles';

const TopBar = () => {
	return (
		<StyledWrapper>
			<img src={logo} alt="" />
		</StyledWrapper>
	);
};

export default TopBar;
