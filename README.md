<p align="center"><img src="https://raw.githubusercontent.com/radaelilucca/gobarber/master/src/assets/GoBarber.png" alt="goBarber" align="center"/>
  </p>

# GoBarber
>Aplicativo de agendamentos de serviços de barbearia, que conecta usuários à barbeiros, de forma simples e rápida.

## Getting Starterd
Essas são as instruções para você conseguir rodar o projeto em sua máquina local, para desenvolvimento ou testes!

## Pré-requisitos
``` sh
NodeJS 12.14.1 ou superior, package manager - (Yarn/NPM), Docker, Insomnia.
```
## Instalação
```sh
1 - Baixe o projeto com Gitclone ou donwload direto.

2 - Entre na pasta do projeto e execute o comando Yarn, para baixar todos os pacotes e suas dependências.

3 - Suba os containers no Docker com PostgreSQL, MongoDB e Redis.

4 - Crie um arquivo .env na raiz do projeto e edite suas variáveis de ambiente, tendo como base o .envexample.

5 - Rode o comando yarn dev - para iniciar o servidor, e yarn queue - para iniciar o serviço de background jobs.

- Se os containers e as variáveis ambiente estiverem okay, tudo estará funcionando normalmente.
```
<h1 align="center" color="#7159c1">Tecnologias Utilizadas</h1>

## Backend: Javascript - API em NodeJS.
>Express, Nodemon, Sucrase, JsonWebToken, BcryptJS, Yup, date-fns, Multer, Sequelize, Sentry.io, Youch, dotenv, Mongoose, PostgreSQL, MongoDB, Docker, EsLint e Prettier. 

##### Express: 
>Framework Node que facilita a criação de APIs com abstração de rotas, middlewares e outras muitas funções.

##### Nodemon: 
>Monitora alterações nos arquivos e reinicia automaticamente o servidor quando as alterações forem salvas.

##### Sucrase:
>Permite a utilização de funções mais novas do JS como a sintaxe de "import from e export default".

##### JsonWebToken:
>Permite utilizar do método JWT (autenticação por meio de tokens). 

##### BcryptJS:
>Permite a encriptação, decriptação, comparação de dados criptografados, entre outras funções de criptografia. Usuado para gerar os hashs de senhas, evitando assim armazenar as reais senhas dos usuários no banco de dados.

##### Yup:
>Framework para validação de dados (campo obrigatório, mínimo de caractéres, igualdade entre campos, etc...)

##### date-fns:
>Facilita lidar com vários aspectos em relação às datas, como formatação, transformação, timezones, locales, etc.

##### Multer
>Um node.js middleware para lidar com multipart/form-data, utilizado para upload de arquivos, nesse caso o avatar dos providers.

##### Sequelize:
>ORM (Object-Relational Mapper) para Node.js, que tem suporte a diversos bancos de dados relacionais, como ORM ele faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript. Permite criar, buscar, alterar e remover dados utilizando métodos JS, além de permitir a modificação da estrutura das tabelas

##### Sentry.io
>Monitora e reporta erros de forma automática.

##### Youch
>Reporta os erros em formato de HTML ou JSON.

##### dotenv
>Carrega as variáveis ambiente configuradas no arquivo .env.

##### Mongoose:
>Proporciona uma solução baseada em esquemas para modelar dados. Possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios. Fornece um mapeamento de objetos do MongoDB similar ao ORM (ODM - Object Data Mapping, no caso do Mongoose), ou seja, traduz os dados da DB para objetos JS.

##### PostgreSQL:
>Banco de Dados SQL open source.

##### MongoDB:
>Banco de dados open source, de alta performance, schema free e orientado à documentos.

##### Docker:
>Plataforma que facilita a criação e administração de ambientes isolados, neste caso rodando um container PostgresSQL.

##### Eslint:
>Ferramenta de lint plugável para JavaScript e JSX. 

##### Prettier:
>Code formatter que tem por finalidade "forçar" um padrão de código. Analisa e altera o código de acordo com regras pré-definidas.
