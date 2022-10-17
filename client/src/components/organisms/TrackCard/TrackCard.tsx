import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import img from '../../../../../../assets/cover1.jpg';
import { TrackCardProps } from './TrackCard.props';

import styles from './TrackCard.module.scss';
import { Htag } from '../../index';
import { shortWord } from '../../../helpers/shortWord';

export const TrackCard = ({ track, className, ...props }: TrackCardProps) => {
	const { title, cover, file } = track;

	return (
		<div className={cn(styles.trackCard, className)} {...props}>
			<div className={styles.coverWrapper}>
				<Image src={cover} layout="fill" />
			</div>
			<Htag className={styles.title} tag="h3" size="average">
				{shortWord(title, 11)}
			</Htag>
			<Link href="#">
				<a className={styles.link}>Дима Билан</a>
			</Link>
		</div>
	);
};
