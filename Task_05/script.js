/**
 * 1. Popule a base de dados: 
 *  - 1 Adicione 4 usuários à sua coleção usuários com nome
 *    "pedro", "alice", "maria", "joão". Os outros atributos são de 
 *    sua escolha.
 */
db.usuarios.insertMany([
  { 
    nome: "pedro", 
    idade: 22,
    senha: "123",
    email: "pedro@email.com"  
  },
  { 
    nome: "alice", 
    idade: 25,
    senha: "123456",
    email: "aliceo@email.com"  
  },
  {
    nome: "maria",
    idade: 28,
    senha: "password123",
    email: "maria@email.com"
  },
  {
    nome: "joao",
    idade: 25,
    senha: "password1233231123781092asjhdwqyueioqjk@@2137129873!&**!",
    email: "joao@email.com"
  }
]);


/**
 * 2. Elabore as seguintes consultas:
 */
//    1. Obtenha todos os usuários que possuem mais de 25 anos
var criteria = { idade: { "$gt": 25 } }
db.usuarios.find(criteria).pretty();

//    2. Obtenha um usuário que possui o nome igual a "joao"
var criteria = { nome: { "$eq": "joao" } }
db.usuarios.find(criteria).pretty();

//   3. Obtenha todos os usuários que tem nome igual a "joao" e idade igual a 25 anos
var criteria = { 
  "$and": [
    { nome: "joao" },
    { idade: 25 }
  ]
}
db.usuarios.find(criteria).pretty();

//   4. Obtenha todos os usuários que tem idade maior que 26 anos e nome diferente de "joao"

var criteria = {
  "$and": [
    { nome: { "$ne": "joao" } },
    { idade: { "$gt": 26 } }
  ]
}
db.usuarios.find(criteria).pretty();

//   5. Obtenha todos os usuários que tem nome "joao" ou (idade maior que 25 e nome igual a "pedro")

var criteria = {
  "$or": [
    { nome: { "$eq": "joao" }},
    { "$and": [
        { idade: { "$gt": 25 }},
        { nome: { "$eq": "pedro" } }
      ]
    }
  ]
}
db.usuarios.find(criteria).pretty();