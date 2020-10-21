const execSync = require('child_process').execSync;

execSync('npx knex migrate:list', {stdio:[0, 1, 2]});
