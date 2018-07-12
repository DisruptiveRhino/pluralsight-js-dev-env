import chalk from 'chalk';

//note that we are using a line level disable on linting - it requires the 'eslint-disable-line' and then the rule you want to disable
console.log(chalk.green("Starting app in DEV mode...")); // eslint-disable-line no-console
console.log(chalk.red("this is a red color for fun. Ignore me.")) // eslint-disable-line no-console
