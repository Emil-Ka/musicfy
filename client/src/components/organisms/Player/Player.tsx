import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { ProgressBar, VolumeBar } from '../../index';
import { PlayerProps } from './Player.props';
import cover from './assets/cover.jpg';
import LikeOffIcon from './assets/like-off.svg';
import LikeOnIcon from './assets/like-on.svg';
import ShuffleIcon from './assets/shuffle.svg';
import ReplayIcon from './assets/replay.svg';
import PlayIcon from './assets/play.svg';
import PauseIcon from './assets/pause.svg';
import PrevIcon from './assets/prev.svg';
import NextIcon from './assets/next.svg';

import styles from './Player.module.scss';

export const Player = ({ className, ...props }: PlayerProps) => {
	const isLiked = false;
	const isPlay = false;

	return (
		<div className={cn(styles.player, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.track}>
					<Image src={cover} width={70} height={70} quality={100} />
					<div className={styles.description}>
						<Link href="/">
							<a className={styles.name}>Dreaming On</a>
						</Link>
						<Link href="/">
							<a className={styles.artist}>Дима Билан</a>
						</Link>
					</div>
					{isLiked ? <LikeOnIcon /> : <LikeOffIcon />}
				</div>
				<div className={styles.progress}>
					<div className={styles.buttons}>
						<ShuffleIcon className={styles.icon} />
						<PrevIcon className={styles.icon} />
						{isPlay ? <PlayIcon className={styles.icon} /> : <PauseIcon className={styles.icon} />}
						<NextIcon className={styles.icon} />
						<ReplayIcon className={styles.icon} />
					</div>
					<ProgressBar duration={186} />
				</div>
				<div className={styles.volume}>
					<VolumeBar volume={60} />
				</div>
			</div>
		</div>
	);
};
