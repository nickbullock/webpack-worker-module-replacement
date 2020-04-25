const myModule = require('MY_MODULE_PATH');

console.log('>>> in application!', myModule)

const piWorker = new Worker('./worker.js', { type: 'module' });
piWorker.onmessage = event => {
    console.log('pi: ' + event.data);
};
piWorker.postMessage(42);