import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Home from './pages/Home/Home';
import GlobalStyle from './utils/GlobalStyle';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
}

export default App;
