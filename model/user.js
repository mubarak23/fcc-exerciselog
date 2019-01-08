var mongoose = require("mongoose");

UsernameSchema = new mongoose.Schema({
		username: { type: String, lowercase: true},
});

module.export = mongoose.model("username", UsernameSchema);
