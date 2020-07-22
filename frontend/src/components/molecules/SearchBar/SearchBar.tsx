import React, { useState } from 'react';
import { StyledWrapper, StyledInput, StyledButton } from './styles';

interface SearchProps {
	getPhrase: (phrase: string) => void;
}

const SearchBar: React.SFC<SearchProps> = ({getPhrase}) => {

	const [phrase, setPhrase] = useState('')

	const onClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') getPhrase(phrase);
	}

	return (
		<StyledWrapper>
			<StyledInput
				type="text"
				placeholder="This is the part where you search..."
				onChange = {(e) => setPhrase(e.target.value)}
				value = {phrase}
				onKeyDown={onClickEnter}
			/>
			<StyledButton onClick={() => getPhrase(phrase)}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.9534 15.0067H17.0068L23.6601 21.6733L21.6734 23.66L15.0068 17.0067V15.9533L14.6468 15.58C13.1268 16.8867 11.1534 17.6733 9.00675 17.6733C4.22009 17.6733 0.340088 13.7933 0.340088 9.00666C0.340088 4.22 4.22009 0.339996 9.00675 0.339996C13.7934 0.339996 17.6734 4.22 17.6734 9.00666C17.6734 11.1533 16.8868 13.1267 15.5801 14.6467L15.9534 15.0067ZM3.00675 9.00666C3.00675 12.3267 5.68676 15.0067 9.00675 15.0067C12.3268 15.0067 15.0068 12.3267 15.0068 9.00666C15.0068 5.68666 12.3268 3.00666 9.00675 3.00666C5.68676 3.00666 3.00675 5.68666 3.00675 9.00666Z"
						fill="#ABABAB"
					/>
				</svg>
			</StyledButton>
		</StyledWrapper>
	);
};

export default SearchBar;
