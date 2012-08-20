var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var logMessageSchema = new Schema({
	application : String,
	host : String,
	context : String,
	severity : String,
	clientTimestamp : Date,
	serverTimestamp : { type : Date, default : Date.now },
	message : String,
	payload : {}
});

module.exports = mongoose.model('LogMessage', logMessageSchema);
