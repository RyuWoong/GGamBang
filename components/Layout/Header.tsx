import { css, useTheme } from '@emotion/react';
import Link from 'next/link';
import Logo from './Logo';
import GitHub from '~/public/image/github-mark.svg';
import Dark from '~/public/image/dark.svg';
import Light from '~/public/image/light.svg';
import useThemeControlContext from '~/hooks/theme/useThemeContext';

function Header() {
	const theme = useTheme();
	const { toggleTheme } = useThemeControlContext();
	return (
		<header css={Container}>
			<Link href={'/'}>
				<Logo src={'/image/profile_circle.png'} alt="logo" />
			</Link>

			<nav>
				<ul css={MenuList}>
					<li>
						<span onClick={toggleTheme}>
							{theme.type === 'dark' ? <Dark fill={theme.color} /> : <Light fill={theme.color} />}
						</span>
					</li>
					<li>
						<a href="https://github.com/RyuWoong" target="_blank">
							<GitHub width={44} height={44} fill={theme.color} />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

const Container = css({
	maxWidth: '1100px',
	position: 'sticky',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	height: '80px',
	padding: '0 20px',
	margin: '0 auto',
	borderBottom: '1px solid #eaeaea',
});

const MenuList = css({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '10px',
	li: {
		listStyle: 'none',
	},
});

export default Header;
