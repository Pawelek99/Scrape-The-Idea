import React from 'react';

interface PostProps {
	website?: string;
	author?: string;
	title?: string;
	uploadedBy?: string;
	thumbnail?: string;
	stars?: number;
}

const Post: React.SFC<PostProps> = ({
	title,
	author,
	uploadedBy,
	stars,
	website,
	thumbnail,
}) => {
	return (
		<div>
			<img src={thumbnail} alt="" />
			{title}
		</div>
	);
};

export default Post;
