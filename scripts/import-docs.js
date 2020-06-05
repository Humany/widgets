const ncp = require('ncp').ncp;

ncp('C:/Development/Humany/humany-widget-mono/docs', 'docs/', (err) => {
  if (err) throw err;
});
