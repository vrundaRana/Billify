import { useState } from 'react';
import { User, Mail, Phone, Upload, Save } from 'lucide-react';
import Popup from './Popup';

interface SettingsProps {
  isDark?: boolean;
}

const Settings = ({ isDark = false }: SettingsProps) => {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [popup, setPopup] = useState<{ message: string; type: 'error' | 'success'; isVisible: boolean }>({
    message: '', type: 'error', isVisible: false
  });

  const showPopup = (message: string, type: 'error' | 'success') => {
    setPopup({ message, type, isVisible: true });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onload = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    showPopup('Settings saved successfully!', 'success');
  };

  return (
    <main className="p-3 sm:p-6">
      <Popup 
        message={popup.message} 
        type={popup.type} 
        isVisible={popup.isVisible} 
        onClose={() => setPopup({ ...popup, isVisible: false })} 
      />
      
      <section className="mb-6 sm:mb-8">
        <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mb-4">
          <span className="font-semibold text-slate-900 text-xs sm:text-sm uppercase">Settings</span>
        </div>
        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-2 ${
          isDark
            ? 'bg-gradient-to-r from-white via-purple-300 to-pink-300'
            : 'bg-gradient-to-r from-gray-900 via-purple-800 to-pink-700'
        }`}>
          Account Settings
        </h1>
        <p className={`text-sm sm:text-lg ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>Manage your profile and business information</p>
      </section>

      <div className={`max-w-2xl mx-auto rounded-lg sm:rounded-xl shadow-xl border transition-colors duration-300 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-100'
        }`}>
          <h2 className={`text-lg sm:text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Profile Information</h2>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <User size={16} />
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter your business name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={`w-full p-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>

          <div>
            <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Mail size={16} />
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>

          <div>
            <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Phone size={16} />
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`w-full p-3 rounded-lg border-2 transition-all ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>

          <div>
            <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Upload size={16} />
              Company Logo
            </label>
            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
              isDark ? 'border-gray-600 bg-gray-700/50' : 'border-gray-300 bg-gray-50'
            }`}>
              {logoPreview ? (
                <div className="space-y-4">
                  <img src={logoPreview} alt="Logo preview" className="mx-auto h-20 w-20 object-contain rounded" />
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Logo uploaded successfully</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className={`mx-auto h-8 w-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Click to upload your company logo</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className={`inline-block mt-3 px-4 py-2 rounded-lg cursor-pointer transition-all ${
                  isDark
                    ? 'bg-gray-600 hover:bg-gray-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                Choose File
              </label>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-semibold"
          >
            <Save size={20} />
            Save Settings
          </button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
