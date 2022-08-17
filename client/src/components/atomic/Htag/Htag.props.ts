import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: 'h1' | 'h2' | 'h3' | 'h4';
	size: 'little' | 'small' | 'medium' | 'average' | 'large' | 'extra-large' | 'major';
	children: ReactNode;
	color?: 'green' | 'saturated' | 'pale'; //зеленый, насыщенный и тусклый
}
