var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var logMessageSchema = new Schema({
	message : String,
	serverTimestamp : { type : Date, default : Date.now }
});

module.exports = mongoose.model('LogMessage', logMessageSchema);
