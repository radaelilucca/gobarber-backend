module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  port: '5432',
  database: 'gobarber',
  define: {
    tiestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
