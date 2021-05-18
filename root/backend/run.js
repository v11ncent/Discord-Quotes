// this link might be useful in the future
// https://zaiste.net/posts/nodejs-child-process-spawn-exec-fork-async-await/

const { spawn } = require('child_process');

function server() {
    const serverProc = spawn('node', ['server.js']);
    serverProc.stdout.on('data', (data) => {
        // console.log() is formatted version of process.stdout.write()
        // console.log() adds a \n
        process.stdout.write(`${(new Date()).toLocaleTimeString()} [Server]: ${data}`);
    });
      
    serverProc.stderr.on('data', (data) => {
        console.error(`${(new Date()).toLocaleTimeString()} [Server Error]: ${data}`);
    });
}

function bot() {
    const botProc = spawn('python', ['bot.py']);
    botProc.stdout.on('data', (data) => {
        process.stdout.write(`${(new Date()).toLocaleTimeString()} [Bot]: ${data}`);
    });
      
    botProc.stderr.on('data', (data) => {
        console.error(`${(new Date()).toLocaleTimeString()} [Bot Error]: ${data}}`);
    }); 
}

(function run() {
    server();
    bot();
})();
