// this link might be useful in the future
// https://zaiste.net/posts/nodejs-child-process-spawn-exec-fork-async-await/

const { spawn } = require('child_process');

function server() {
    const serverProc = spawn('node', ['server.js']);
    serverProc.stdout.on('data', (data) => {
        // console.log() is formatted version of process.stdout.write()
        // console.log() adds a \n
        process.stdout.write(`Server: ${data}`);
    });
      
    serverProc.stderr.on('data', (data) => {
        console.error(`Server err: ${data}`);
    });
}

function bot() {
    const botProc = spawn('python', ['bot.py']);
    botProc.stdout.on('data', (data) => {
        process.stdout.write(`${data}`);
    });
      
    botProc.stderr.on('data', (data) => {
        console.error(`Bot Error: ${data}`);
    }); 
}

(function run() {
    server();
    bot();
})();
