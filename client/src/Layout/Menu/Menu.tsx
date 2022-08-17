import Link from 'next/link';
import cn from 'classnames';

import { MenuProps } from './Menu.props';
import AddIcon from './assets/add.svg';
import LikedIcon from './assets/liked.svg';
import AlbumsIcon from './assets/albums.svg';
import GenreIcon from './assets/genres.svg';
import ArtistsIcon from './assets/artists.svg';

import styles from './Menu.module.scss';
import { Artist } from './../../../../server/src/models/artist.model';

export const Menu = ({ className, ...props }: MenuProps) => {
	return (
		<section className={cn(styles.menu, className)} {...props}>
			<nav className={cn(styles.navigation, className)} {...props}>
				<Link href="/">
					<a className={cn(styles.item, styles.item_active)}>
						<AddIcon />
						<span className={styles.text}>Создать плейлист</span>
					</a>
				</Link>
				<Link href="/">
					<a className={styles.item}>
						<LikedIcon />
						<span className={styles.text}>Любимые треки</span>
					</a>
				</Link>
				<Link href="/">
					<a className={styles.item}>
						<GenreIcon />
						<span className={styles.text}>Жанры</span>
					</a>
				</Link>
				<Link href="/">
					<a className={styles.item}>
						<ArtistsIcon />
						<span className={styles.text}>Исполнители</span>
					</a>
				</Link>
				<Link href="/">
					<a className={styles.item}>
						<AlbumsIcon />
						<span className={styles.text}>Альбомы</span>
					</a>
				</Link>
			</nav>
		</section>
	);
};
