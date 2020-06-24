import React, { useState, MouseEvent } from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import HomepageHeading from 'components/molecules/HomepaheHeading/HomepageHeading';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import H3 from 'components/atoms/H3/H3';
import GridContainer from 'components/atoms/GridContainer/GridContainer';
import Post from 'components/organisms/Post/Post';
import Modal from '../../components/organisms/Modal/Modal';

const posts = [
	{
		id: '1',
		website: 'DRIBBBLE',
		author: 'Tran Mau Tri Tam',
		title: 'Blurr_ Animation',
		uploadedBy: 'Jun 22, 2020',
		link: 'https://dribbble.com/shots/12209806-Blurr-Animation',
		thumbnail:
			'https://cdn.dribbble.com/users/427857/screenshots/12209806/media/6ce72bed67a906b06b7b7fa4af5a56fb.jpg',
		stars: 1243,
	},
	{
		id: '2',
		website: 'DRIBBBLE',
		author: 'Jay Fletcher',
		title: 'Eisbach pt. VII',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://dribbble.com/shots/12236561-Eisbach-pt-VII',
		thumbnail:
			'https://cdn.dribbble.com/users/52758/screenshots/12236561/media/fe5672b5d2e4d8e9fbd5b098ac21ab5d.jpg',
		stars: 295,
	},
	{
		id: '3',
		website: 'DRIBBBLE',
		author: 'Toma Li',
		title: 'Delivery Dashboard',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://dribbble.com/shots/12237982-Delivery-Dashboard',
		thumbnail:
			'https://cdn.dribbble.com/users/1675913/screenshots/12237982/media/b472f9d25d3054ab4e5f2a73dbc45c3c.png',
		stars: 110,
	},
	{
		id: '4',
		website: 'UPLABS',
		author: 'sarla devi',
		title: 'Messanger Chat App UI',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://www.uplabs.com/posts/messanger-chat-app-ui',
		thumbnail:
			'https://assets.materialup.com/uploads/e12508b4-d55d-44eb-a8c1-c4cf4b8baf23/preview.png',
		stars: 119,
	},
	{
		id: '5',
		website: 'UPLABS',
		author: 'Shivangi Mahajan',
		title: 'Hobbies Landining Page',
		uploadedBy: 'Jun 20, 2020',
		link: 'https://www.uplabs.com/posts/hobbies-landining-page',
		thumbnail:
			'https://assets.materialup.com/uploads/e80b00b9-e703-4f98-ae87-cf0212802d20/preview.png',
		stars: 15,
	},
	{
		id: '6',
		website: 'UPLABS',
		author: 'Saydul Moon',
		title: 'House rent app',
		uploadedBy: 'Jun 19, 2020',
		link:
			'https://www.uplabs.com/posts/house-rent-app-44fb80a6-1b17-4a73-879a-f1a6fb7f52b1',
		thumbnail:
			'https://assets.materialup.com/uploads/7fca46c2-5f63-47d7-9340-a62f1ec7b256/preview.png',
		stars: 19,
	},
	{
		id: '7',
		website: 'DRIBBBLE',
		author: 'Tran Mau Tri Tam',
		title: 'Blurr_ Animation',
		uploadedBy: 'Jun 22, 2020',
		link: 'https://dribbble.com/shots/12209806-Blurr-Animation',
		thumbnail:
			'https://cdn.dribbble.com/users/427857/screenshots/12209806/media/6ce72bed67a906b06b7b7fa4af5a56fb.jpg',
		stars: 1243,
	},
	{
		id: '8',
		website: 'DRIBBBLE',
		author: 'Jay Fletcher',
		title: 'Eisbach pt. VII',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://dribbble.com/shots/12236561-Eisbach-pt-VII',
		thumbnail:
			'https://cdn.dribbble.com/users/52758/screenshots/12236561/media/fe5672b5d2e4d8e9fbd5b098ac21ab5d.jpg',
		stars: 295,
	},
	{
		id: '9',
		website: 'DRIBBBLE',
		author: 'Toma Li',
		title: 'Delivery Dashboard',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://dribbble.com/shots/12237982-Delivery-Dashboard',
		thumbnail:
			'https://cdn.dribbble.com/users/1675913/screenshots/12237982/media/b472f9d25d3054ab4e5f2a73dbc45c3c.png',
		stars: 110,
	},
	{
		id: '10',
		website: 'UPLABS',
		author: 'sarla devi',
		title: 'Messanger Chat App UI',
		uploadedBy: 'Jun 23, 2020',
		link: 'https://www.uplabs.com/posts/messanger-chat-app-ui',
		thumbnail:
			'https://assets.materialup.com/uploads/e12508b4-d55d-44eb-a8c1-c4cf4b8baf23/preview.png',
		stars: 119,
	},
	{
		id: '11',
		website: 'UPLABS',
		author: 'Shivangi Mahajan',
		title: 'Hobbies Landining Page',
		uploadedBy: 'Jun 20, 2020',
		link: 'https://www.uplabs.com/posts/hobbies-landining-page',
		thumbnail:
			'https://assets.materialup.com/uploads/e80b00b9-e703-4f98-ae87-cf0212802d20/preview.png',
		stars: 15,
	},
	{
		id: '12',
		website: 'UPLABS',
		author: 'Saydul Moon',
		title: 'House rent app',
		uploadedBy: 'Jun 19, 2020',
		link:
			'https://www.uplabs.com/posts/house-rent-app-44fb80a6-1b17-4a73-879a-f1a6fb7f52b1',
		thumbnail:
			'https://assets.materialup.com/uploads/7fca46c2-5f63-47d7-9340-a62f1ec7b256/preview.png',
		stars: 19,
	},
];

const Home = () => {

	const [isModal, setIsModal] = useState(true);
	const [activePost, setActivePost] = useState({
		id: '1',
		website: 'Dribbble',
		author: 'Tran Mau Tri Tam',
		title: 'Blurr_ Animation',
		uploadedBy: 'Jun 22, 2020',
		link: 'https://dribbble.com/shots/12209806-Blurr-Animation',
		thumbnail:
			'https://cdn.dribbble.com/users/427857/screenshots/12209806/media/6ce72bed67a906b06b7b7fa4af5a56fb.jpg',
		stars: 1243,
	});

	// const showModal = (e: MouseEvent<HTMLDivElement>) => {
	// 	setIsModal(true);
	// 	setActivePost(e.target);
	// 	console.log(e.target);
	// }

	return (
		<>
			<MainTemplate>
				<header>
					<HomepageHeading />
					<SearchBar />
				</header>
				<main>
					<H3> Recently uploaded </H3>
					<GridContainer>
						{posts
							.sort(() => 0.5 - Math.random())
							.map(
								({
									id,
									title,
									author,
									uploadedBy,
									stars,
									website,
									thumbnail,
									link,
								}) => (
									<Post
										onClick={() => {console.log('ahaha')}}
										key={id}
										author={author}
										title={title}
										uploadedBy={uploadedBy}
										stars={stars}
										website={website}
										thumbnail={thumbnail}
										link={link}
									/>
								)
							)}
					</GridContainer>

					<H3> Most liked </H3>
					<GridContainer>
						{posts
							.sort(() => 0.5 - Math.random())
							.map(
								({
									id,
									title,
									author,
									uploadedBy,
									stars,
									website,
									thumbnail,
									link,
								}) => (
									<Post
										key={`2${id}`}
										author={author}
										title={title}
										uploadedBy={uploadedBy}
										stars={stars}
										website={website}
										thumbnail={thumbnail}
										link={link}
									/>
								)
							)}
					</GridContainer>
				</main>
			</MainTemplate>
			{isModal && <Modal isModal={setIsModal} id={activePost.id} website={activePost.website} author={activePost.author} link={activePost.link} uploadedBy={activePost.uploadedBy} thumbnail={activePost.thumbnail} stars={activePost.stars}/>}
		</>
	);
};

export default Home;
