
var crypto = require('crypto');

module.exports = User;

function User(user){
	this.id = user.id;
	this.username = user.username;
	this.password = user.password;

}

User.prototype.hashPassword(password){
	var thisPass = password.slice(0);
	crypto.createHash('md5').update(thisPass).digest("hex");
	crypto.createHash('md5').update(thisPass).digest("hex");
	return thisPass;
}

User.prototype.testPassword(password){
	return this.password == this.hashPassword(password);
}
