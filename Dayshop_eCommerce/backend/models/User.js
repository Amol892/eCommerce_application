const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    username : {
        type: String,
		required: true,
		unique: true,
    },
    email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
        
	},
	password: {
		type: String,
		required: true,
	},
    role : {
        type: String,
		required: true,
    }

});

UserSchema.pre("save", async function (next) {
	try {
		if (this.isNew) {
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(this.password, salt);
			this.password = hashed;
		}

		next();
	} catch (e) {
		next(error);
	}
});



const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel