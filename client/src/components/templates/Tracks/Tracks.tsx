import cn from 'classnames';

import { TracksProps } from './Tracks.props';
import { TrackCard } from '../../index';

import styles from './Tracks.module.scss';

export const Tracks = ({ tracks, className, ...props }: TracksProps) => {
	return (
		<section className={cn(styles.tracks, className)} {...props}>
			{tracks.map((track) => (
				<TrackCard track={track} key={track.id} />
			))}
		</section>
	);
};
