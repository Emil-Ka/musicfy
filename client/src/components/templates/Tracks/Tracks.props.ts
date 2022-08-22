import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITrack } from '../../../types/track.type';

export interface TracksProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	tracks: ITrack[];
}
