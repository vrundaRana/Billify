import {
  Plus,
  FileText,
  Settings,
  Home,
  BarChart3,
  Users,
  LogOut,
  TrendingUp,
  Clock,
  Star,
  Layout,
  Moon,
  Sun
} from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const quickActions = [
    {
      title: "Create Receipt",
      description: "Generate new receipt",
      icon: <Plus size={24} />,
      color: "from-blue-500 to-cyan-500",
      action: "New Receipt"
    },
    {
      title: "My Receipts",
      description: "View all receipts",
      icon: <FileText size={24} />,
      color: "from-green-500 to-emerald-500",
      action: "View All"
    },
    {
      title: "Analytics",
      description: "View insights",
      icon: <BarChart3 size={24} />,
      color: "from-purple-500 to-pink-500",
      action: "View Reports"
    }
  ];

  return (
    <div className={`min-h-screen flex font-['DynaPuff'] transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      <aside className={`w-16 md:w-64 shadow-xl flex flex-col border-r transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className={`p-6 border-b transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h1 className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Billify</h1>
          <div className="md:hidden w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { name: 'Dashboard', icon: <Home size={20} />, href: '#', active: true },
            { name: 'Create Receipt', icon: <Plus size={20} />, href: '#' },
            { name: 'Templates', icon: <Layout size={20} />, href: '#' },
            { name: 'My Receipts', icon: <FileText size={20} />, href: '#' },
            { name: 'Analytics', icon: <BarChart3 size={20} />, href: '#' },
            { name: 'Customers', icon: <Users size={20} />, href: '#' },
            { name: 'Settings', icon: <Settings size={20} />, href: '#' },
          ].map(({ name, icon, href, active }) => (
            <a
              key={name}
              href={href}
              className={`flex items-center justify-center md:justify-start p-3 rounded-lg transition-all ${
                active 
                  ? isDark 
                    ? 'text-blue-400 bg-blue-900/30 font-semibold' 
                    : 'text-blue-600 bg-blue-50 font-semibold'
                  : isDark 
                    ? 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-900/ hover:to-purple-900 hover:text-blue-400' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-100 hover:text-blue-600'
              }`}
            >
              <span className="mr-0 md:mr-3">{icon}</span>
              <span className="hidden md:inline">{name}</span>
            </a>
          ))}
                    <button 
            onClick={() => setIsDark(!isDark)}
            className={`flex items-center justify-center md:justify-start w-full p-3 rounded-lg transition-all transform hover:scale-105 ${
              isDark 
                ? 'text-yellow-400 hover:bg-gray-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun size={20} className="mr-0 md:mr-3" /> : <Moon size={20} className="mr-0 md:mr-3" />}
            <span className="hidden md:inline">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </nav>

        <div className={`p-4 space-y-2 border-t transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>

          <button className={`flex items-center justify-center md:justify-start w-full p-3 text-red-600 rounded-lg transition-all transform hover:scale-105 ${
            isDark ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
          }`}>
            <LogOut size={20} className="mr-0 md:mr-3" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>
      
      <div className="flex flex-col flex-1">
        <main className="p-6">
          <section className="mb-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mb-4">
              <span className="font-semibold text-slate-900 text-sm uppercase">Dashboard</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-2 ${
              isDark 
                ? 'bg-gradient-to-r from-white via-blue-300 to-purple-300' 
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700'
            }`}>
              Welcome Back!
            </h1>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Here's what's happening with your business today.</p>
          </section>
          
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold opacity-90">Total Receipts</h3>
                  <p className="text-3xl font-bold">24</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={16} className="mr-1" />
                    <span className="text-sm opacity-90">+12% this month</span>
                  </div>
                </div>
                <FileText size={40} className="opacity-80" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold opacity-90">Revenue</h3>
                  <p className="text-3xl font-bold">$2,450</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={16} className="mr-1" />
                    <span className="text-sm opacity-90">+8% this month</span>
                  </div>
                </div>
                <BarChart3 size={40} className="opacity-80" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold opacity-90">Customers</h3>
                  <p className="text-3xl font-bold">18</p>
                  <div className="flex items-center mt-2">
                    <Star size={16} className="mr-1" />
                    <span className="text-sm opacity-90">3 new this week</span>
                  </div>
                </div>
                <Users size={40} className="opacity-80" />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <div key={index} className={`bg-gradient-to-br ${action.color} text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all cursor-pointer`}>
                  <div className="flex flex-col items-center text-center">
                    {action.icon}
                    <h3 className="text-lg font-bold mt-3 mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{action.description}</p>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition font-semibold text-black cursor-pointer">
                      {action.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={`rounded-xl shadow-lg border transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-100'
          }`}>
            <div className={`px-6 py-4 border-b transition-colors duration-300 ${
              isDark ? 'border-gray-700' : 'border-gray-100'
            }`}>
              <div className="flex items-center">
                <Clock size={20} className={`mr-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <h2 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Recent Activity</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Clock size={24} className={`${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                </div>
                <p className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>No recent activity to show</p>
                <p className={`text-sm mt-2 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>Your recent receipts and actions will appear here</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
