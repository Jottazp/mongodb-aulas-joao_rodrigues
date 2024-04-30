/* DEFINE O NOME DO BSNCO DE DADOS */
const database = 'libri-database';

/* DEFINE O NOME DA COLLECTION */
const collection = 'libri-collection';

// ACESSA O BANCO DE DADOS LIBRI-DATABASE
use(database);

//CRIA A COLLECTION libri-collection
db.createCollection(collection);