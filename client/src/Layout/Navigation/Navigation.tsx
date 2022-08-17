import Link from 'next/link';
import cn from 'classnames';

import { NavigationProps } from './Navigation.props';

import HomeIcon from './assets/home.svg';
import SearchIcon from './assets/search.svg';
import LibraryIcon from './assets/library.svg';

import styles from './Navigation.module.scss';

export const Navigation = ({ className, ...props }: NavigationProps) => {
	return (
		<nav className={cn(styles.navigation, className)} {...props}>
			<Link href="/">
				<a className={cn(styles.item, styles.item_active)}>
					<HomeIcon />
					<span className={styles.text}>Главная</span>
				</a>
			</Link>
			<Link href="/">
				<a className={styles.item}>
					<SearchIcon />
					<span className={styles.text}>Поиск</span>
				</a>
			</Link>
			<Link href="/">
				<a className={styles.item}>
					<LibraryIcon />
					<span className={styles.text}>Ваша библиотека</span>
				</a>
			</Link>
		</nav>
	);
};
