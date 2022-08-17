import cn from 'classnames';

import Logo from '../assets/logo.svg';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.scss';
import { Menu } from '../Menu/Menu';
import { Navigation } from '../Navigation/Navigation';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
	return (
		<section className={cn(styles.sidebar, className)} {...props}>
			<Logo className={styles.logo} width={150} height={50} />
			<Navigation className={styles.navigation} />
			<Menu />
		</section>
	);
};
