import React from 'react';
import { LoaderWrapper } from './styles';
import { ReactComponent as LoaderImg } from '../../../assets/loader.svg';

const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderImg />
		</LoaderWrapper>
	);
};

export default Loader;
