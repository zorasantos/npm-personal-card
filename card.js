#!/usr/bin/env node

//Aqui declaramos os módulos
const chalk = require('chalk');
const boxen = require('boxen');

//Aqui definimos as opções para o módulo 'boxen'

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    float: "center",
    borderColor: "#ff4879",
    backgroundColor: "black"
};

//Aqui incluímos os textos e as definições do módulo 'chalk'

const data = {
    name: chalk.white('           Zoranildo Santos /'),
    handle: chalk.cyan('zorasantos'),
    work: chalk.cyan('Front-End Developer | Procuradoria Geral'),
    npm: chalk.gray('https://npmjs.com/') + chalk.blue('zorasantos'),
    github: chalk.gray('https://github.com/') + chalk.blue('zorasantos'),
    linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('zorasantos'),
    medium: chalk.gray('https://medium.com/') + chalk.blue('@zoranildo22'),
    npx: chalk.white('npx zorasantos'),

    labelwork: chalk.green.bold('   Work:'),
    labelnpm: chalk.red.bold('   NPM'),
    labelGitHub: chalk.yellow.bold('   GitHub:'),
    labelLinkedIn: chalk.blue.bold('   LinkedIn:'),
    labelMedium: chalk.white.bold('   Medium:'),
    labelCard: chalk.red.bold('   Card:')
};

//Aqui será a saída do cartão pessoal pelo comando NPX
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelwork} ${data.work}`
const npm = `${data.labelnpm} ${data.npm}`
const githubing = `${data.labelGitHub} ${data.github}`
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`
const mediuming = `${data.labelMedium} ${data.medium}`
const carding = `${data.labelCard} ${data.npx}`


// Aqui colocaremos a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:

const output = heading + newline + newline + working + newline + npm + newline + githubing + newline + linkedining + newline + mediuming + newline + newline + carding

console.log(chalk.green(boxen(output, options)));







