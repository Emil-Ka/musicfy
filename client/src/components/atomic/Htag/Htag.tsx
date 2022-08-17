import cn from 'classnames';

import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';

export const Htag = ({ tag, size, children, color = 'saturated', className, ...props }: HtagProps) => {
	switch (tag) {
		case 'h1':
			return (
				<h1 {...props} className={cn(className, { [styles[size]]: true, [styles[color]]: true, [styles[color]]: true })}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 {...props} className={cn(className, { [styles[size]]: true, [styles[color]]: true, [styles[color]]: true })}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 {...props} className={cn(className, { [styles[size]]: true, [styles[color]]: true, [styles[color]]: true })}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 {...props} className={cn(className, { [styles[size]]: true, [styles[color]]: true, [styles[color]]: true })}>
					{children}
				</h4>
			);
		default:
			return (
				<h2 {...props} className={cn(className, { [styles[size]]: true, [styles[color]]: true, [styles[color]]: true })}>
					{children}
				</h2>
			);
	}
};
