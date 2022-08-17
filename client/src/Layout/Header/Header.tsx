import cn from 'classnames';

import { Avatar } from '../../components/index';
import { HeaderProps } from './Header.props';

import styles from './Header.module.scss';

export const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Avatar />
		</header>
	);
};
