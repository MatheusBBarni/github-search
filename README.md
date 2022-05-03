# O que

Aplicação que busca os dados e os repositorios de um usuário do github.

## API

https://developer.github.com/v3/

## Endpoints

Detalhes de um usuário: https://api.github.com/users/{username}
Repositórios de um usuário: https://api.github.com/users/{username}/repos

## Requisitos

- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;

## Definição de pronto

- Não é obrigatório o uso de um framework ou lib, mas recomendamos React, Angular ou Vue.
- É obrigatório o uso de rotas.
