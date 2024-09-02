const { Connection } = require('./utils/connection');

async function startBot(){
    const bot = await Connection();
}

startBot();