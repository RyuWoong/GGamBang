import { css, Theme, useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { PostJson } from '~/types/post';

interface Props {
	data: PostJson;
}

function PostCard({ data }: Props) {
	const theme = useTheme();
	return (
		<Link css={Container(theme)} href={`post/${data.id}`}>
			<article>
				<div css={ImageCard(theme)}>
					<Image src={'/image/profile_coding.png'} width={150} height={150} alt="card" />
					<p>{data.category}</p>
				</div>
				<header css={Header(theme)}>
					<h2>{data.title}</h2>
					<p>{data.summary}</p>
				</header>
			</article>
		</Link>
	);
}

export default PostCard;

const Container = (theme: Theme) =>
	css({
		flex: 1,
		minWidth: 280,
		maxWidth: 360,
		transition: 'all 0.3s ease',
		'&:hover': {
			transform: 'translateY(-10px)',
		},
		h1: {
			color: theme.color,
		},
	});

const ImageCard = (theme: Theme) =>
	css({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: 200,
		jsutifyContent: 'center',
		alignItems: 'center',
		p: {
			position: 'absolute',
			color: theme.primaryColor,
			fontSize: '1.2rem',
			fontWeight: 'bold',
			textAlign: 'center',
			left: 0,
			right: 0,
			bottom: 30,
		},
	});

const Header = (theme: Theme) =>
	css({
		h2: {
			wdith: '100%',
			color: theme.color,
			fontSize: '1.5rem',
			fontWeight: 'bold',
			marginBottom: '0.5rem',
			lineHeight: 1.2,
			whiteSpace: 'nowrap',
			height: '1.2em',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		p: {
			color: theme.subColor,
			fontSize: '0.9rem',
			fontWeight: 400,
		},
	});
