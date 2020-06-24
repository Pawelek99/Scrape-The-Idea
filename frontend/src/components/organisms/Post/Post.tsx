import React from 'react';
import dribbble from '../../../assets/dribbble.svg';
import uplabs from '../../../assets/uplabs.svg';
import star from '../../../assets/star.svg';
import H4 from 'components/atoms/H4/H4';
import {
	StyledWrapper,
	StyledTopSection,
	StyledStarWrapper,
	StyledThumbnail,
	StyledBottomSection,
	StyledDetails,
} from './styles';

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
	website?: string;
	author?: string;
	title?: string;
	uploadedBy?: string;
	thumbnail?: string;
	stars?: number;
	link?: string;
}

type websitesOptions = {
	[key: string]: string;
};

const websites: websitesOptions = {
	DRIBBBLE: dribbble,
	UPLABS: uplabs,
};

const Post: React.SFC<PostProps> = ({
	title,
	author,
	uploadedBy,
	stars,
	website,
	thumbnail,
	link,
}) => {
	return (
		<StyledWrapper>
			<StyledTopSection>
				<a href={website}>
					<img src={website ? websites[website] : ''} alt="" />
				</a>

				<StyledStarWrapper>
					{stars}
					<img src={star} alt="" />
				</StyledStarWrapper>
			</StyledTopSection>
			<StyledThumbnail src={thumbnail} alt={title} />
			<StyledBottomSection>
				<H4> {title} </H4>
				<StyledDetails>
					<div>
						by <a href={link}> {author} </a>{' '}
					</div>
					<div>{uploadedBy}</div>
				</StyledDetails>
			</StyledBottomSection>
		</StyledWrapper>
	);
};

export default Post;
