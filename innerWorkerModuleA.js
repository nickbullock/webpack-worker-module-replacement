const myModule = require('MY_MODULE_PATH');
console.log('>>> in worker inner A!', myModule)

require('./innerWorkerModuleB')