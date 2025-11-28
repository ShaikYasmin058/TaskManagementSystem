const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');

fs.readFile(envPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading .env file:', err);
    } else {
        console.log('.env file content:\n', data);
    }
});
