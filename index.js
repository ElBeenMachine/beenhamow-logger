const chalk = require("chalk");
const moment = require("moment");

module.exports = class logger {
	static log (content) {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		const type = ` LOG `
		return console.log(`[${chalk.gray(date)}][${chalk.white.bgGreen(type)}]: ${content}`);
	}

	static warn (content) {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		const type = ` WARN `
		return console.log(`[${chalk.gray(date)}][${chalk.white.bgHex('#F9000')(type)}]: ${content}`);
	}

	static error (content) {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		const type = ` ERROR `
		return console.log(`[${chalk.gray(date)}][${chalk.white.bgRed(type)}]: ${content}`);
	}

	static debug (content) {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		const type = ` DEBUG `
		return console.log(`[${chalk.gray(date)}][${chalk.white.bgBlue(type)}]: ${content}`);
	}
};