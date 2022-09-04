# Decode | Graphql Learning 🔥

- Fundamentos de GraphQL na prática
- Backend da aplicação seguindo padrão code first
- Stacks: Node.js + React
  
## Problemas que o GraphQL resolve

- **Overfetching**
  
Overfetching significa que um cliente baixa mais informações do que realmente é necessário no aplicativo. Imagine, por exemplo, uma tela que precise exibir uma lista de usuários apenas com seus nomes. Em uma API REST, esse aplicativo geralmente atinge o endpoint /users e recebe uma matriz JSON com dados do usuário. Essa resposta, no entanto, pode conter mais informações sobre os usuários retornados, por exemplo, seus aniversários ou endereços - informações que são inúteis para o cliente porque ele só precisa exibir os nomes dos usuários.

```txt
http://localhost:3000/user
DB (usuarios, enderecos)
```

- **Underfetching**

Underfetching geralmente significa que um endpoint específico não fornece informações suficientes. O cliente terá que fazer solicitações adicionais para buscar tudo o que precisa. Isso pode levar a uma situação em que um cliente precisa primeiro fazer download de uma lista de elementos, mas depois precisa fazer uma solicitação adicional por elemento para buscar os dados necessários.

```txt
http://localhost:3000/user
DB (usuarios)
```

O GraphQL bascicamente acessa uma unica rota e a partir dela realiza querys patra trazer os dadps e Mutations para manipular os mesmos

```gql
# http://localhost:3000/unica-rota

query {
  users {
    id
    name
    github

    addresses {
      city
      state
      country
    }
  }
}
```
