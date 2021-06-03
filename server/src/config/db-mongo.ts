/* eslint class-methods-use-this: off */

import mongoose from 'mongoose';

class Connection {
  constructor() {
    this.connect();
  }

  async connect(): Promise<boolean> {
    const MONGO_USERNAME = 'root';
    const MONGO_PASSWORD = 'root';
    const MONGO_HOSTNAME = 'mongo';
    const MONGO_PORT = '27017';
    const MONGO_DB = 'monsters-rpg';

    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    console.log('Establish new connection with url', url);
    mongoose.Promise = global.Promise;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    return mongoose
      .connect(url, {
        serverSelectionTimeoutMS: 5000
      })
      .then(() => {
        console.log('Mongodb - ok');
        return true;
      })
      .catch((err) => {
        console.log(`Mongo - error: ${err}`);
        return false;
      });
  }
}

export default new Connection();
