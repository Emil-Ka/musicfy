import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface VolumeBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	volume: number;
}
