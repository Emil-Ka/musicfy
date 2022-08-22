import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TrackCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	genre: string;
}
