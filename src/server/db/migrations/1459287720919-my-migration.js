const { User } = require('../models');

async function up() {
  await User.create({ email: 'mdesmet@gmail.com', name: 'Michiel De Smet' });
}

async function down() {
  await User.deleteOne({ email: 'mdesmet@gmail.com' });
}

module.exports = {
  down,
  up,
};
