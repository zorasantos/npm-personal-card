# Cartão Pessoal em NPX - Zoranildo Santos

<p align="center">
  <img src="https://res.cloudinary.com/doampncx5/image/upload/v1569548523/Capturar.png"/>  
</p>

O desenvolvimento desse package que simula um cartão pessoal faz parte dos meus exercícios de aprendizagem. Desenvolvemos o nosso card baseado 
no repositório do **[Tierney Cyren](https://twitter.com/bitandbang)**

## Recursos Utilizados:

- **[Visual Studio Code](http://bit.ly/2KoflJH)**
- Javascript
- **[Node.Js](https://nodejs.org/en/)**
- **[Npm](https://www.npmjs.com/)**
- Pacotes:
    - **[boxen](https://www.npmjs.com/package/boxen)**
    - **[chalk](https://www.npmjs.com/package/chalk)**
    - **[standard](https://www.npmjs.com/package/standard)**
    - **[commander](https://www.npmjs.com/package/commander)**
    
    ## Construindo um simples NPM Card
    
    1. Criar uma pasta com o seu nome. Siga os passos abaixo:
    
    ```  
    > mkdir zorasantos && cd zorasantos
    > npm init -y
    > crie o arquivo card.js
    ```
    2. Fça a instalação dos pacotes com os seguintes comandos:
    
    ```
    > npm install standard --save-dev
    ```

    ```
    > npm install chalk --save
    ```

    ```
    > npm install boxen --save
    ```

    ```
    > npm install commander --save
    ```
    3. Copie o codigo abaixo e cole dentro do aquivo card.js(Não esqueça de substituir os dados pessoais):
    ```
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


    // Aqui colocaremos a nossa saída numa única variável

    const output = heading + newline + newline + working + newline + npm + newline + githubing + newline + linkedining + newline + mediuming + newline + newline + carding

    console.log(chalk.green(boxen(output, options)));
    ```
    4. Pra finalizar execute o comando abaixo para visualizar seu cartão:
    
    ```
    npx zorasantos
    ```
      
      Se por acaso o comando **npx** não funcionar tente este comando:
    
    ```
    node card.js
    ```
    
