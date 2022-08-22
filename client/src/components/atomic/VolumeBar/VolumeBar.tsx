import { useRef, useState } from 'react';
import cn from 'classnames';

import { VolumeBarProps } from './VolumeBar.props';
import UpIcon from './assets/volume-up.svg';
import DownIcon from './assets/volume-down.svg';

import styles from './VolumeBar.module.scss';

export const VolumeBar = ({ volume, className, ...props }: VolumeBarProps) => {
	const [currentVolume, setCurrentVolume] = useState<number>(volume);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeVolume = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setCurrentVolume(() => {
			const newCurrentVolume = Number(event.target.value);

			if (inputRef.current) {
				inputRef.current.style.backgroundSize = `${newCurrentVolume}% 100%`;
			}

			return newCurrentVolume;
		});
	};

	return (
		<div className={cn(className, styles.volumeBar)} {...props}>
			<div>
				<DownIcon className={styles.icon} />
			</div>
			<input ref={inputRef} className={styles.input} type="range" min={0} value={currentVolume} max={100} onChange={changeVolume} />
			<div>
				<UpIcon className={styles.icon} />
			</div>
		</div>
	);
};
