import styled from 'styled-components'

interface ModalProps {
    readonly backgroundImg?: string
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(22px);
`

export const ModalWrapper = styled.div<ModalProps>`
    width: 1185px;
    height: 777px;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
    background: #ad7fa8;
    display: flex;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
`

export const Description = styled.div`
    width: 100%;
    height: 177px;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(22px);
    align-self: flex-end;
    padding: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & h1 {
        font-size: 4.8rem;
        font-weight: 600;
        margin: 0;
        color: #515151;
    }

`

export const StyledDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.8rem;
	margin-top: 6px;

	a {
		text-decoration: none;
		color: inherit;
        position: relative;
        font-weight: 600;

		&::before {
			content: '';
			position: absolute;
			bottom: 1px;
			left: 0;
			width: 100%;
			height: 0.5rem;
			background-color: ${({ theme }) => theme.shadowPrimary};
			z-index: -1;
		}

		&:hover {
			&::before {
				transform: translateY(-2px) scaleY(2);
			}
		}
	}

`;

export const Palette = styled.div`

`