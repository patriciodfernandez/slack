
const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App ({
    token: 'xoxb-4077033331937-4105870885442-NVRJmkQTmcSnC9Yv8BZ2b8Hw',
    signingSecret: '219e55d8d24c3b4b05ca82b6ed96d051',
    port: process.envPORT || 3000
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();


app.shortcut('who_am_i', async ({ shortcut, ack, client, logger }) => {

  try {
    // Acknowledge shortcut request
    await ack();

    // Call the views.open method using one of the built-in WebClients
    const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "My App"
        },
        close: {
          type: "plain_text",
          text: "Close"
        },
        blocks: [{
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Hello Congrats!!!"
            }
        }]
      }
    });

    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});