import { css, Theme, useTheme } from '@emotion/react';
import Image from 'next/image';
import Logo from '~/components/Layout/Logo';

function NotFoundPage() {
	const theme = useTheme();
	return (
		<div css={Container(theme)}>
			<Image src={'/image/profile_circle.png'} alt="logo" width={100} height={100} />
			<h1>404</h1>
			<p>페이지를 찾을 수 없어요!</p>
		</div>
	);
}

const Container = (theme: Theme) =>
	css({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		img: {
			borderRadius: '50%',
			border: `5px solid ${theme.primaryColor}`,
		},
		h1: {
			fontSize: '8rem',
			transform: 'translateY(-30px)',
			color: theme.primaryColor,
		},
		p: {
			position: 'absolute',
			fontSize: '2rem',
			fontWeight: 'bold',
			transform: 'translateY(80px)',
			color: theme.primaryColor,
		},
	});

export default NotFoundPage;
