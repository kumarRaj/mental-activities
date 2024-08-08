// mappers/userMapper.js

const User = require('../user');

const toDomain = (mongoUser) => {
  return new User(
    mongoUser.username,
    mongoUser.email,
    mongoUser.password
  );
};

const toMongo = (domainUser) => {
  return {
    username: domainUser.username,
    email: domainUser.email,
    password: domainUser.password,
  };
};

module.exports = {
  toDomain,
  toMongo,
};
