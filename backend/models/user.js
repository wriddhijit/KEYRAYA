const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  aadharNumber: { type: String, required: true, unique: true },
  drivingLicenseNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});
/**userSchema.pre('save', async function(next) {
 
  if (!this.isModified('passwordHash')) return next();

  
  next();
});
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};**/

module.exports = mongoose.model('User', userSchema);
