const Hermes = require('hermesjs');
const app = new Hermes();
const { cyan, gray } = require('colors/safe');
const buffer2string = require('./middlewares/buffer2string');
const string2json = require('./middlewares/string2json');
const json2string = require('./middlewares/json2string');
const logger = require('./middlewares/logger');
const errorLogger = require('./middlewares/error-logger');
const config = require('../lib/config');
const MqttAdapter = require('hermesjs-mqtt');
const cardPresented = require('./routes/card-presented.js');
const stopPushed = require('./routes/stop-pushed.js');


app.addAdapter(MqttAdapter, config.broker.mqtt);

app.use(buffer2string);
app.use(string2json);
app.use(logger);

// Channels
app.use(cardPresented);
app.use(stopPushed);

app.use(errorLogger);
app.useOutbound(logger);
app.useOutbound(json2string);

app
  .listen()
  .then((adapters) => {
    console.log(cyan.underline(`${config.app.name} ${config.app.version}`), gray('is ready!'), '\n');
    adapters.forEach(adapter => {
      console.log('🔗 ', adapter.name(), gray('is connected to '), config.broker.mqtt.url);
      console.log('🙏 Solace for providing a great MQTT on the cloud')
      console.log('🙏 Tamimi  from Solace for fixing authentication for the AsyncAPI generator for node.js. 🐦 Follow him: https://twitter.com/TweetTamimi')
      console.log('🐦 Follow me for more of this! https://twitter.com/nohorbee')
    });
  })
  .catch(console.error);
