const execSync = require('child_process').execSync;

const arg = process.argv[2];

execSync('npx knex migrate:make ' + arg, {stdio:[0, 1, 2]});
