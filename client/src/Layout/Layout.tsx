import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';

import styles from './Layout.module.scss';
import { Header } from './Header/Header';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.pseudoSidebar}></div>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
