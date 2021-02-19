# artists

O projeto desenvolvido em ionic cumpre os requisitos pedidos para a primeira parte do Projeto Final do Processo Seletivo Interno para Tech Lead da EJCM. Dados como  nome, imagem, quantidade de seguidores e popularidade encontrados a partir de uma chamada http e uso da API do aplicativo Spotify são apresentados em cards presentes em uma homepage desenvolvida com uso dos conceitos de UI e UX.
### Tecnologias
* [Ionic](https://ionicframework.com/docs)

### Pré-requistos
O projeto deve ser clonado e dados os primeiros comandos de instalação.
```
$ git clone https://github.com/miloyolla/artists.git
```
#### Instale as dependências
```
$ npm install
```
### Consumindo a API
Para seu funcionamento, deve-se anteriormente ter configurado o token gerado pela API SPOTIFY.

Passo a passo para gerar token:
* Acesse ao [link](https://developer.spotify.com/console/get-several-artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy%2C3dBVyJ7JuOMt4GE9607Qin)
* Clique em "get Token"
* Clique em "Request Token"
* Confirme sua conta do spotify
* Aceite os termos

Criar arquivo src/environments/environment.ts que será usado em seu ambiente de produção:
```
export const environment = {
  production: false
};
```

O token gerado deve ser copiado e salvo como string em uma variável exportável nomeada como API_KEY no arquivo src/environments/environment.ts conforme exemplificado a seguir
```
export const API_KEY = "insira aqui o token";
```

Após todas as configurações feitas, a aplicação pode ser executada.
```
$ ionic serve
```
