import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import img from '../../../../../assets/cover1.jpg';
import { TrackCardProps } from './TrackCard.props';

import styles from './TrackCard.module.scss';
import { Htag } from '../index';

export const TrackCard = ({ track, className, ...props }: TrackCardProps) => {
	const { title } = track;

	return (
		<div className={cn(styles.trackCard, className)} {...props}>
			<div className={styles.coverWrapper}>
				<Image src={img} />
			</div>
			<Htag className={styles.title} tag="h3" size="average">
				Я в моменте
			</Htag>
			<Link href="#">
				<a className={styles.link}>Дима Билан</a>
			</Link>
		</div>
	);
};
