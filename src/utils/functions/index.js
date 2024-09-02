const readline = require("readline");

function InputText(message) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => rl.question(message, resolve));
};

module.exports = InputText;