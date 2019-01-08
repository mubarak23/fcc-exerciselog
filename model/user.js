var mongoose = require("mongoose");

UsernameSchema = new mongoose.Schema({
		username: { type: String, lowercase: true},
		_id: {
    type: String,
    index: true
  }
});

module.export = mongoose.model("username", UsernameSchema);
