import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import HomepageHeading from 'components/molecules/HomepaheHeading/HomepageHeading';
import SearchBar from 'components/molecules/SearchBar/SearchBar';

const Home = () => {
	return (
		<div>
			<MainTemplate>
				<header>
					<HomepageHeading />
					<SearchBar />
				</header>
			</MainTemplate>
		</div>
	);
};

export default Home;
