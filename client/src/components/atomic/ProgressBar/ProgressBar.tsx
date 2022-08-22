import { useRef, useState } from 'react';
import cn from 'classnames';

import { secToMinutes } from '../../../helpers/secToMinutes';
import { ProgressBarProps } from './ProgressBar.props';

import styles from './ProgressBar.module.scss';

export const ProgressBar = ({ duration, className, ...props }: ProgressBarProps) => {
	const [currentTime, setCurrentTime] = useState<number>(0);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setCurrentTime(() => {
			const newCurrentTime = Number(event.target.value);

			if (inputRef.current) {
				inputRef.current.style.backgroundSize = `${Math.floor((newCurrentTime / duration) * 100)}% 100%`;
			}

			return newCurrentTime;
		});
	};

	return (
		<div className={cn(className, styles.progressBar)} {...props}>
			<span className={styles.start}>{secToMinutes(currentTime)}</span>
			<input ref={inputRef} className={styles.input} type="range" min={0} value={currentTime} max={duration} onChange={changeCurrentTime} />
			<span className={styles.end}>{secToMinutes(duration)}</span>
		</div>
	);
};
