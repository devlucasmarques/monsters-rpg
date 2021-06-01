import mongoose from 'mongoose';

class Connection {
  constructor() {
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
    mongoose
      .connect(url, {
        serverSelectionTimeoutMS: 2000,
      })
      .then(() => console.log('Mongodb - ok'))
      .catch((err) => console.log(`Mongo - error: ${err}`));
  }
}

export default new Connection();
