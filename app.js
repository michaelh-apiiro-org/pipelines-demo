const app = require('express')();

app.get('/', (req, res) => res.send('success!'));

app.listen(3000, () => console.log('server is up'));
