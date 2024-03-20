
const {Spanner} = require('@google-cloud/spanner');
const spanner = new Spanner();

const instance = spanner.instance('my-instance');
const database = instance.database('my-database');

const query = 'SELECT * FROM Singers';

database.run(query, function(err, rows) {
  if (err) {
    // Error handling omitted.
  }

  // Move the call to the next row.
  query.moveCall({
    type: 'next'
  }, function(err, rows) {
    if (err) {
      // Error handling omitted.
    }
  });
});

//-
// If the callback is omitted, we'll return a Promise.
//-
database.run(query).then(function(data) {
  const rows = data[0];

  return query.moveCall({
    type: 'next'
  }).then(function(data) {
    const rows = data[0];
  });
});

