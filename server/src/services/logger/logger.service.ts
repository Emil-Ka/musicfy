import { Logger } from 'tslog';
import { ILogger } from './logger.interface';

export class LoggerService implements ILogger {
	public logger: Logger;

	constructor() {
		this.logger = new Logger({
			displayInstanceName: false, //Не нужно задавать имя
			displayLoggerName: false, //Имя логгеру не задаем. У нас будет 1 логгер на все приложение
			displayFilePath: 'hidden', //Определяет, должны ли отображаться путь к файлу и строка
			displayFunctionName: false, //Определяет, должны ли отображаться имя класса и метода или функции.
		});
	}

	log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		this.logger.error(...args);
	}

	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
}
