export type PostData = {
	id: number;
	title: string;
	category: string;
	summary: string;
	content: string;
	date: string;
};

export type PostJson = Omit<PostData, 'content'>;
