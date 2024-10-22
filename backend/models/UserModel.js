import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true }, // Date of Birth
    doctor: { type: String, required: false }, // Doctor's name
    expectedDelivery: { type: Date, required: false }, // Expected delivery date
    lifestyleDiseases: { type: [String], default: [] } // Array of lifestyle diseases
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model('user', userScheme);
export default userModel;