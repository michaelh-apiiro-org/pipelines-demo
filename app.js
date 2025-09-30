const app = require('express')();

const test = "test";

process.on('SIGINT', () => process.exit(0));

app.get('/', (req, res) => res.send('success!'));

app.listen(3000, () => console.log('server is up'));
