const execSync = require('child_process').execSync;

execSync('npx knex migrate:latest', {stdio:[0, 1, 2]});
