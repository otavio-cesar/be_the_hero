const execSync = require('child_process').execSync;

execSync('npx knex migrate:rollback', {stdio:[0, 1, 2]});
