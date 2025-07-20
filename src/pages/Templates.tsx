import { FileText, Store, Coffee, Wrench, Heart, Briefcase, Eye, Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Retail",
      category: "Retail",
      icon: <Store size={24} />,
      description: "Clean, professional design perfect for retail stores",
      features: ["Logo placement", "Tax calculations", "Item details", "Customer info"],
      color: "from-blue-500 to-cyan-500",
      preview: "bg-gradient-to-br from-blue-50 to-cyan-50",
      popular: true
    },
    {
      id: 2,
      name: "Cafe & Restaurant",
      category: "Food & Beverage",
      icon: <Coffee size={24} />,
      description: "Warm design tailored for cafes and restaurants",
      features: ["Menu items", "Table numbers", "Service charges", "Tips section"],
      color: "from-orange-500 to-red-500",
      preview: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      id: 3,
      name: "Service Professional",
      category: "Services",
      icon: <Wrench size={24} />,
      description: "Professional layout for service-based businesses",
      features: ["Service descriptions", "Hourly rates", "Materials cost", "Labor breakdown"],
      color: "from-green-500 to-emerald-500",
      preview: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      id: 4,
      name: "Healthcare & Wellness",
      category: "Healthcare",
      icon: <Heart size={24} />,
      description: "Clean, trustworthy design for healthcare providers",
      features: ["Patient details", "Treatment codes", "Insurance info", "Appointment slots"],
      color: "from-purple-500 to-pink-500",
      preview: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      id: 5,
      name: "Corporate Business",
      category: "Business",
      icon: <Briefcase size={24} />,
      description: "Formal template for corporate transactions",
      features: ["Company branding", "Purchase orders", "Terms & conditions", "Payment methods"],
      color: "from-gray-600 to-slate-600",
      preview: "bg-gradient-to-br from-gray-50 to-slate-50"
    },
    {
      id: 6,
      name: "Creative Studio",
      category: "Creative",
      icon: <Star size={24} />,
      description: "Artistic design for creative professionals",
      features: ["Portfolio showcase", "Project details", "Creative rates", "Usage rights"],
      color: "from-indigo-500 to-purple-500",
      preview: "bg-gradient-to-br from-indigo-50 to-purple-50"
    }
  ];

  const categories = ["All", "Retail", "Food & Beverage", "Services", "Healthcare", "Business", "Creative"];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 font-['DynaPuff']">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center px-6">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mb-8 shadow-sm">
          <h2 className="font-semibold text-slate-900 uppercase">Templates</h2>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent mb-6">
          Professional Receipt Templates
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Choose from our collection of industry-specific templates. Each design is crafted to match your business type and create professional impressions.
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  index === 0 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="w-full h-96 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front Side */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br ${template.color} text-white rounded-xl shadow-lg overflow-hidden`}>
                  {template.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      {template.icon}
                      <span className="ml-2 text-sm opacity-75">{template.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{template.name}</h3>
                    <p className="text-sm opacity-90 mb-6 flex-1">{template.description}</p>
                    
                    {/* Mock Receipt Preview */}
                    <div className={`${template.preview} rounded-lg p-4 text-gray-800 text-xs`}>
                      <div className="border-b border-gray-300 pb-2 mb-2">
                        <div className="font-bold">Your Business Name</div>
                        <div>Receipt #001</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Item 1</span>
                          <span>$25.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Item 2</span>
                          <span>$15.00</span>
                        </div>
                        <div className="border-t border-gray-300 pt-1 mt-2 font-bold flex justify-between">
                          <span>Total</span>
                          <span>$40.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${template.color} text-white rounded-xl shadow-lg flex flex-col p-6`}>
                  <h3 className="text-lg font-bold mb-4">{template.name}</h3>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2 text-sm">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 py-2 px-4 rounded-lg transition flex items-center justify-center">
                      <Eye size={16} className="mr-2" />
                      Preview
                    </button>
                    <button className="flex-1 bg-white text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg transition flex items-center justify-center font-semibold">
                      <Download size={16} className="mr-2" />
                      Use
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-6 bg-[#D5C7A3]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Fully Customizable</h2>
          <p className="text-xl text-gray-700 mb-12">Every template can be personalized to match your brand</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Add Your Logo</h3>
              <p className="text-gray-600 text-sm">Upload your business logo and it will appear on all receipts</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Brand Colors</h3>
              <p className="text-gray-600 text-sm">Customize colors to match your brand identity perfectly</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Info</h3>
              <p className="text-gray-600 text-sm">Add your contact details, address, and business information</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Creating Beautiful Receipts
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Choose your favorite template and customize it to match your brand in minutes
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg"
            >
              Get Started Free
            </Link>
            <Link
              to="/features"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-4 rounded-lg transition-all text-lg"
            >
              View Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Templates;