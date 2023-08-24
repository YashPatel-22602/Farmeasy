var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	fname:String,
	lname:String,
	email: String,
	// username: String,
	password: String,
	state: String,
	mobileno: Number
	// passwordConf: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;