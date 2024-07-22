// What were trying to do here when creating the new schema with postgresql

// Need to run commands to shell / terminal to backup and restore database
// Backup DB: pg_dump -n my_schema -f '/path/to/file.pgsql' my_db
// Rename DB: run "ALTER SCHEMA schemaname RENAME TO schemaname_copy"
// Restore Original DB: psql my_db -f '/path/to/file.pgsql'

// Answer can be found here: https://dba.stackexchange.com/questions/10474/postgresql-how-to-create-full-copy-of-database-schema-in-same-database

export default function handler(req, res) {
    const execSync = require('child_process').execSync;
    // import { execSync } from 'child_process';  // replace ^ if using ES modules

    const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
    // const output = execSync('pg_dump -n dev -f /path/to/file.pgsql my', { encoding: 'utf-8' });
    const splitted = output.split(/\r?\n/);  
    const filtered = splitted.filter( e => {
        return e !== '';
    });

    res.status(200).json(JSON.stringify(filtered))
}

// After this we need to execute the comand via the createshop function:
// async execCommand() {
//     const req = await fetch("/api/execute");
//     const data = await req.json();
//     console.log(data);
// }