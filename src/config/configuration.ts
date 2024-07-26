export default () => ({
  mongo: {
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB_NAME,
    auth: {
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      source: process.env.MONGO_AUTH_SOURCE,
    },
  },
});
