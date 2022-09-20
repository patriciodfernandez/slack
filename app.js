const {App} = require('@slack/bolt')

const app = new App ({
    token: 'xoxb-4077033331937-4105870885442-BFnhNhLvbzXWexpqClev0fMs',
    signingSecret: '219e55d8d24c3b4b05ca82b6ed96d051',
    port: process.envPORT || 3000
});


(async()=>{
    await app.start();
     
})