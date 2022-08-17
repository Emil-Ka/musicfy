import Image from 'next/image';
import Link from 'next/link';

import avatar from './assets/avatar.jpg';
import styles from './Avatar.module.scss';

export const Avatar = () => {
	return (
		<Link href="/">
			<a>
				<div className={styles.avatar}>
					<div className={styles.icon}>
						<Image src={avatar} width={37} height={37} quality={100} />
					</div>
					<span className={styles.name}>Angel</span>
				</div>
			</a>
		</Link>
	);
};
