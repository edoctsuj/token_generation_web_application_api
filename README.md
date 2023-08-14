- npx knex migrate:latest --env development --knexfile db/knexfile.js

- npx knex migrate:rollback --env development --knexfile db/knexfile.js

- npx knex migrate:make create_users_table --env development --knexfile db/knexfile.js

- node server.js
