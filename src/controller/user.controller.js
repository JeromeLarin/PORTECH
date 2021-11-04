const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
	try {
		const { username, password, type } = req.body;
		const isExist = await User.findOne({ username });
		if (isExist) {
			throw { name: 'userExist', message: 'user already exist' };
		}
		const regEx = /^[0-9a-zA-Z]+$/;
		if (!username.match(regEx)) {
			throw { name: 'typoError', message: 'Please use only alphanumeric' };
		}
		if (username.length < 5) {
			throw { name: 'usernameShort', message: 'Username too short' };
		}
		if (password.length < 6) {
			throw { name: 'passwordError', message: 'Password too short' };
		}
		const salt = await bcrypt.genSalt(10);
		const newPassword = await bcrypt.hash(password, salt);

		const createUser = new User({
			username,
			password: newPassword,
			type
		});
		await createUser.save();
		res.send('user created');
	} catch (error) {
		res.send(error);
	}
};

exports.getAll = async (req, res) => {
	try {
		const getUsers = await User.find();
		res.send(getUsers);
	} catch (error) {}
};

exports.getUser = async (req, res) => {
	try {
		const { username } = req.params;
		// console.log(req.params);
		const getUser = await User.findOne({ username });
		res.send(getUser);
	} catch (error) {
		console.log(error);
	}
};
