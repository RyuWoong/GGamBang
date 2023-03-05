import { css } from '@emotion/react';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {}

function Logo({ ...props }: Props) {
	return <Image width={44} height={44} css={Container} {...props} />;
}

const Container = css({
	width: '44px',
	height: '44px',
	borderRadius: '50%',
});

export default Logo;
