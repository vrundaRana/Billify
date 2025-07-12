import { FileText, Palette, Download, Cloud, Smartphone, BarChart3, Shield, Zap, Users, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

const Features = () => {
  const features = [
    {
      icon: <FileText size={32} />,
      title: "Smart Templates",
      description: "Choose from 2+ professional templates",
      details: "Industry-specific designs for retail, services, restaurants, and more. Fully customizable with your branding.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette size={32} />,
      title: "Brand Customization",
      description: "Add your logo, colors, and style",
      details: "Upload your logo, set brand colors, and customize fonts to match your business identity perfectly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Download size={32} />,
      title: "Instant PDF Export",
      description: "Download receipts in seconds",
      details: "High-quality PDF generation with print-ready formatting. Batch export multiple receipts at once.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Storage",
      description: "Access receipts anywhere, anytime",
      details: "Secure cloud backup with 99.9% uptime. Search and organize receipts with smart filters.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Optimized",
      description: "Create receipts on any device",
      details: "Responsive design works perfectly on phones, tablets, and desktops. Native mobile app coming soon.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics Dashboard",
      description: "Track sales and customer insights",
      details: "Detailed reports on sales trends, top customers, and revenue analytics. Export data to Excel/CSV.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    { icon: <Shield />, text: "Bank-level security" },
    { icon: <Zap />, text: "Lightning fast generation" },
    { icon: <Users />, text: "Multi-user support" },
    { icon: <Globe />, text: "Works worldwide" }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 font-['DynaPuff']">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center px-6">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mb-8 shadow-sm">
          <h2 className="font-semibold text-slate-900 uppercase">Features</h2>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent mb-6">
          Everything You Need to Create Perfect Receipts
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Powerful features designed to make receipt creation effortless and professional. From templates to analytics, we've got you covered.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full h-80 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front Side */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br ${feature.color} text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6`}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-sm opacity-90 text-center">{feature.description}</p>
                </div>
                {/* Back Side */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${feature.color} text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6`}>
                  <h3 className="text-lg font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-sm text-center leading-relaxed">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#D5C7A3]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Billify?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <p className="font-semibold text-gray-800">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">Start free, upgrade when you need more</p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Free Plan */}
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-lg border-2 border-gray-200 h-full">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                $0<span className="text-lg text-gray-500">/month</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />50 receipts/month</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />5 templates</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Basic customization</li>
              </ul>
              <Link to={"/register"}>
                <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col p-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl transform scale-105 h-full">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">
                $9<span className="text-lg opacity-75">/month</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" />Unlimited receipts</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" />All templates</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" />Full customization</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" />Analytics dashboard</li>
              </ul>
              <Link to={"/register"}>
                <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;