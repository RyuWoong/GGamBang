import Head from 'next/head';

interface Props {
	title: string;
	description: string;
	url: string;
}

function CustomHead({ title, description, url }: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="" />
			<meta property="og:url" content="" />
		</Head>
	);
}

export default CustomHead;
