import { useState } from 'react';
import { useNavigate } from 'react-router';

interface TemplateProps {
  isDark?: boolean;
}

const templates = [
  {
    id: 1,
    name: "Modern Retail",
    image: "/public/T1.png",
    description: "Clean, professional design perfect for retail stores"
  },
  {
    id: 2,
    name: "Cafe & Restaurant",
    image: "/public/T2.png",
    description: "Warm design tailored for cafes and restaurants"
  },
  {
    id: 3,
    name: "Service Professional",
    image: "/public/T3.png",
    description: "Professional layout for service-based businesses"
  },
  {
    id: 4,
    name: "Healthcare & Wellness",
    image: "/public/T4.png",
    description: "Clean, trustworthy design for healthcare providers"
  }
];


const Template = ({ isDark = false }: TemplateProps) => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  
  const handleSelectTemplate = (templateId: number) => {
    localStorage.setItem('selectedTemplate', templateId.toString());
    navigate('/dashboard?tab=create');
  };
  
  return (
    <div className={`min-h-screen p-6 font-['DynaPuff'] ${isDark 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white' 
      : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900'}`}>
      
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mb-4">
        <span className="font-semibold text-slate-900 text-sm uppercase">Templates</span>
      </div>
      
      <h1 className={`text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent ${isDark
        ? 'bg-gradient-to-r from-white via-blue-300 to-purple-300'
        : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700'}`}>
        Select a Template
      </h1>
      
      <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Choose from our professionally designed templates for your receipts
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map(template => (
          <div 
            key={template.id} 
            className={`border rounded-xl overflow-hidden shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${selectedTemplate === template.id ? 'ring-2 ring-blue-500 scale-[1.02]' : ''} ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="h-72 overflow-hidden">
              <img 
                src={template.image} 
                alt={template.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{template.name}</h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{template.description}</p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTemplate(template.id);
                }}
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all transform hover:scale-[1.02] font-semibold shadow-md cursor-pointer"
              >
                Use This Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Template
