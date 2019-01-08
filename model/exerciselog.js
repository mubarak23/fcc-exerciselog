var mongoose = require("mongoose");

ExerciselogSchema = new mongoose.Schema({
	userId: { type:String, unique: true},
	description: String,
	duration: Date,
	date: Date
});

module.export = mongoose.model("exerciseLog", ExerciselogSchema);
