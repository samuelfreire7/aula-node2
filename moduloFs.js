// const fs = require('fs')
// let caminhoArquivo = './criadoArq.js'
// let conteudo = 'Olá Mundo'


// fs.writeFile( caminhoArquivo, conteudo, (err) => {
// 	if(err) throw err
// 	console.log('O arquivo foi salvo com sucesso!')
// })

// const fs = require('fs')
// let caminhoArquivo = './criadoArq.js'
// let codificacao = 'utf8'


// fs.readFile( caminhoArquivo, codificacao, (err, dados) => {
// 	if(err) throw err
// 	console.log(dados)
// })

// const fs = require('fs')
// let caminhoArquivo = './arquivo2.js'
// let conteudo = 'Olá Luan'


// fs.writeFile( caminhoArquivo, conteudo, (err) => {
// 	if(err) throw err
// 	console.log('O arquivo foi salvo com sucesso!')
// })

// const { error } = require('console')
// const fs = require('fs')

// const arquivo1 ='./arquivo1.txt'
// const conteudo1 = 'Hoje estamos tendo aula do seguinte tema:'

// const arquivo2 ='./arquivo2.txt'
// const conteudo2 ='Node e manipulação de arquivos com f1'

// const arquivoConcatenado ='./arquivoConcatenado.txt'

// fs.writeFile( arquivo1, conteudo1, (err) => {
// 	if(err) throw err
// 	console.log("Criado com Sucesso!")
// })

// fs.writeFile( arquivo2, conteudo2, (err) => {
// 	if(err) throw err
// 	console.log("Criado com Sucesso!")
// })

// const conteudoFinal = conteudo1 + conteudo2

// fs.writeFile(arquivoConcatenado, conteudoFinal, (err) =>
// {
//     if (err) {
//         console.log("Erro ao criar ao criar o arquivo");
//         return;
//     }
//     console.log("Arquivo criado com sucesso!");
// })

FileSystem.readFile(arquivo1, 1utf8, (err, conteudo1) =>{
    if (err) {
        console.log("Erro ao criar o arquivo", err);
        return;
        
    }
})