import { css, Theme, useTheme } from '@emotion/react';
import { promises as fs } from 'fs';
import { GetStaticPropsContext } from 'next';
import path from 'path';
import CustomHead from '~/components/Head/CustomHead';
import Markdown from '~/components/Markdown/Makrdown';
import { PostData } from '~/types/post';

interface Props {
	data: PostData;
}

function Post({ data }: Props) {
	const theme = useTheme();
	return (
		<div css={Main}>
			<CustomHead title={`${data.category} - ${data.title}`} description={data.summary} url={''} />
			<header css={Header(theme)}>
				<p>{data.category}</p>
				<h1>{data.title}</h1>
				<span>작성일. {data.date}</span>
			</header>
			<Markdown>{data.content}</Markdown>
		</div>
	);
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
	const id = ctx.params!.id;
	const basePath = path.join(process.cwd(), 'post');
	const postInfo = await fs.readFile(basePath + `/${id}.json`, 'utf8');
	const content = await fs.readFile(basePath + `/${id}.MD`, 'utf8');
	const info = JSON.parse(postInfo) as Omit<PostData, 'content'>;

	return {
		props: {
			data: { ...info, content },
		},
	};
}

export async function getStaticPaths() {
	const basePath = path.join(process.cwd(), 'post');
	const files = (await fs.readdir(basePath)).filter((file) => file.endsWith('.json'));

	const paths = files.map((file) => ({ params: { id: file.replace(/\.json$/, '') } }));
	return {
		paths,
		fallback: true,
	};
}

const Main = css({
	maxWidth: '1100px',
	margin: '0 auto',
	padding: '60px 20px',
});

const Header = (theme: Theme) =>
	css({
		marginBottom: '60px',
		p: {
			fontSize: '0.9rem',
			color: theme.subColor,
		},
		h1: {
			fontSize: '3rem',
			fontWeight: 'bold',
			color: theme.color,
		},
		span: {
			fontSize: '0.8rem',
			color: theme.primaryColor,
		},
	});

export default Post;
