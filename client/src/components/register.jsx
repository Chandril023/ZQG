import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    team: '',
    transactionId: '',
    transactionScreenshot: null,
    token: Math.random().toString(36).substr(2, 8).toUpperCase(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, transactionScreenshot: e.target.files[0] });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.username || !formData.phone)) {
      alert("Please fill all required fields");
      return;
    }
    if (step === 2) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.transactionId || !formData.transactionScreenshot) {
      alert("Please provide transaction details");
      return;
    }
    alert("Registration complete!");
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center px-5 id:register">
      <div className="relative sm:max-w-xl sm:mx-auto">
        <div className="relative bg-transparent px-3 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl">
                <h2>Complete Your Registration</h2>
                <p className="text-sm">Step {step} of 3</p>
              </div>
            </div>

            <div className="w-full bg-gray-800 h-2 mt-4 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 space-y-4">
                {step === 1 && (
                  <>
                    <div className="flex flex-col">
                      <label>Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="px-4 py-2 border rounded-md text-gray-600" required />
                    </div>
                    <div className="flex flex-col">
                      <label>Username *</label>
                      <input type="text" name="username" value={formData.username} onChange={handleChange} className="px-4 py-2 border rounded-md text-gray-600" required />
                    </div>
                    <div className="flex flex-col">
                      <label>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="px-4 py-2 border rounded-md text-gray-600" required />
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">Pay Here</p>
                      <img src="/path-to-qr-code.png" alt="QR Code" className="w-40 h-40" />
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="flex flex-col">
                      <label>Upload Transaction Screenshot *</label>
                      <input type="file" accept="image/*" onChange={handleFileChange} className="px-4 py-2 border rounded-md text-gray-600" required />
                    </div>
                    <div className="flex flex-col">
                      <label>Transaction ID *</label>
                      <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} className="px-4 py-2 border rounded-md text-gray-600" required />
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                {step > 1 && (
                  <button type="button" onClick={handleBack} className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-md hover:bg-gray-600">
                     Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" onClick={handleNext} className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600">
                    Next 
                  </button>
                ) : (
                  <button type="submit" className="flex-1 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600">
                    Register
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
