import '~/styles/globals.css';
import '~/styles/github-markdown.css';
import type { AppProps } from 'next/app';
import Layout from '~/components/Layout/Layout';
import { ThemeProvider } from '@emotion/react';
import useThemeHandler from '~/hooks/theme/useThemeHandler';
import Theme from '~/styles/Theme';
import ThemeControlProvider from '~/hooks/theme/ThemeControlContext';

export default function App({ Component, pageProps }: AppProps) {
	const { themes, toggleTheme } = useThemeHandler();
	return (
		<ThemeControlProvider value={{ toggleTheme }}>
			<ThemeProvider theme={Theme[themes]}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</ThemeControlProvider>
	);
}
