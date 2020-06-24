import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		primary: string;
		background: string;
		textPrimary: string;
		textInverse: string;
		textSecondary: string;
		shadowColor: string;
	}
}
