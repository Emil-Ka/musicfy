import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITrack } from '../../types/track.type';

export interface TrackCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	track: ITrack;
}
