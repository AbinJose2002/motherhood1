import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Doctor's Name
    specialization: { type: String, required: true }, // Doctor's Specialization
    qualification: { type: String, required: true }, // Doctor's Qualification
    experience: { type: Number, required: true }, // Experience in years
    workingHospital: { type: String, required: true }, // Working Hospital Name
    phoneNumber: { type: String, required: true, unique: true } // Phone Number
}, { minimize: false });

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);
export default doctorModel;