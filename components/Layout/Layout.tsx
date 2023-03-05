import { css, Theme, useTheme } from '@emotion/react';
import Header from './Header';

interface Props {
	children: React.ReactNode;
}

function Layout({ children }: Props) {
	const theme = useTheme();
	return (
		<div css={Container(theme)}>
			<Header />
			{children}
		</div>
	);
}

const Container = (theme: Theme) =>
	css({
		width: '100%',
		height: '100vh',
		backgroundColor: 'rgb(var(----background-start-rgb))',
	});

export default Layout;
