const execSync = require('child_process').execSync;

const arg = process.argv[2];

execSync('npx knex migrate:up ' + (arg ? arg : ""), {stdio:[0, 1, 2]});
