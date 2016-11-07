
# EDIT THE SEED FILE
- Change all instances where you find the following comment `-- UPDATE THIS PATH WITH YOUR OWN!`
- Update it with your own ABSOLUTE path to the `migration.sql` file

# Steps to seed database (ORDER IS IMPORTANT)
1. `dropdb allthemovies`
2. `createdb allthemovies`
3. `psql -d allthemovies -f ./db/migration.sql`

# helpful commands
`\du` in psql to see all users
