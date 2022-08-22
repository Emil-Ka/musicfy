import Link from 'next/link';
import { Htag } from '../index';
import styles from './GenreCard.module.scss';

export const GenreCard = () => {
	return (
		<Link href="/">
			<a>
				<div className={styles.genreCard}>
					<Htag className={styles.title} tag="h3" size="major">
						Поп
					</Htag>
				</div>
			</a>
		</Link>
	);
};
