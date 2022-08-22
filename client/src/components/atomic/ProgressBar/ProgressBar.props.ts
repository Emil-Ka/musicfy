import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProgressBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	duration: number;
}
