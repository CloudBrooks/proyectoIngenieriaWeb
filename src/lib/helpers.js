const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

helpers.matchPassword = async(pwd, savedPassword) => {
    try {
        return await bcrypt.compare(pwd, savedPassword)

    } catch (e) {
        console.log(e);
    }
};

module.exports = helpers;