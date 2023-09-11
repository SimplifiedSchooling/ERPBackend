const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      trim: true,
    },
    actions: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
