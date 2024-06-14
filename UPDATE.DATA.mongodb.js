/// UPDATE COM MONGODB

// UPDATEONE
use('libri-database');

db['libri-collection'].updateOne(
  {titulo:'As Cavernas de Aço'},
  {
    $set:{valor: 250}
  }
);

// UPDATE MANY
use('libri-database');

db['libri-collection'].updateO  ne(
  {titulo:'As Cavernas de Aço'},
  {
    $set:{valor: 250}
  }
);