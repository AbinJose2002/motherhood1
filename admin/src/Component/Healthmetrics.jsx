import React, { useState } from 'react';

const Healthmetrics = () => {
  const [formData, setFormData] = useState({
    systolicBP: '',
    diastolicBP: '',
    bloodSugar: '',
    heartRate: '',
    bodyTemperature: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:', formData);
    // You can replace the console.log with an API call or any other logic
  };

  return (
    <div className="disease-form">
      <h2>Enter Your Health Conditions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Systolic BP:</label>
          <input
            type="number"
            name="systolicBP"
            value={formData.systolicBP}
            onChange={handleChange}
            placeholder="Enter Systolic BP"
            required
          />
        </div>
        <div>
          <label>Diastolic BP:</label>
          <input
            type="number"
            name="diastolicBP"
            value={formData.diastolicBP}
            onChange={handleChange}
            placeholder="Enter Diastolic BP"
            required
          />
        </div>
        <div>
          <label>Blood Sugar (BS):</label>
          <input
            type="number"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            placeholder="Enter Blood Sugar level"
            required
          />
        </div>
        <div>
          <label>Heart Rate:</label>
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleChange}
            placeholder="Enter Heart Rate"
            required
          />
        </div>
        <div>
          <label>Body Temperature:</label>
          <input
            type="number"
            name="bodyTemperature"
            value={formData.bodyTemperature}
            onChange={handleChange}
            placeholder="Enter Body Temperature"
            required
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Healthmetrics;
