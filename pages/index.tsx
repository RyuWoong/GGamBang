import { css, keyframes, Theme, useTheme } from '@emotion/react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import path from 'path';
import { promises as fs } from 'fs';
import { PostData } from '~/types/post';
import PostCard from '~/components/PostCard/PostCard';

interface Props {
	newList: Omit<PostData, 'content'>[];
}

export default function Home({ newList }: Props) {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>깜깜한 방에서 코딩하기</title>
				<meta
					name="description"
					content="깜깜한 방에서 코딩하기! next.js로 만들어졌으며, vercel을 통해 배포됩니다 ❤️."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="깜깜한 방 안에서 코딩하기" />
				<meta
					property="og:description"
					content="깜깜한 방에서 코딩하기! next.js로 만들어졌으며, vercel을 통해 배포됩니다 ❤️."
				/>
				<meta property="og:image" content="" />
				<meta property="og:url" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section css={Box(theme)}>
				<div>
					<h1>안녕하세요!</h1>
					<p>깜깜한 방에서 코딩하는 RyuWoong 입니다.</p>
				</div>
				<div css={Character}>
					<Image src={'/image/profile_coding.png'} width={300} height={300} alt="main" />
				</div>
			</section>
			<main css={Main}>
				<section>
					<h1>New Post 🔥</h1>
					<div>
						{newList.map((post) => (
							<PostCard key={post.id} data={post} />
						))}
					</div>
				</section>
			</main>
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const basePath = path.join(process.cwd(), '/post');
	const files = (await fs.readdir(basePath)).filter((file) => file.endsWith('.json'));
	const list = await Promise.all(
		files.map(async (file) => {
			const data = await fs.readFile(basePath + '/' + file, { encoding: 'utf8' });
			return JSON.parse(data) as Omit<PostData, 'content'>;
		}),
	);

	return {
		props: {
			newList: list.slice(-3),
		},
	};
}

const moving = keyframes`
	from,to,20%,60%  {
		transform: rotate(3deg);
	}

	40%,80% {
		transform: rotate(-3deg);
	}
`;

const Character = css({
	width: 'calc(100% - 10%)',
	maxWidth: '300px',
	img: {
		width: '100%',
		aspectRatio: 1,
		height: 'auto',
		animation: `${moving} 1s ease-in infinite`,
	},
});

const Box = (theme: Theme) =>
	css({
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	});

const Main = css({
	maxWidth: '1100px',
	margin: '0 auto',
	padding: '0 20px',
	section: {
		h1: { padding: '20px 0', fontSize: '1.5rem' },
		div: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			gap: 10,
		},
	},
});
