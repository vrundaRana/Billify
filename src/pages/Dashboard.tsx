import {
  Plus,
  FileText,
  Settings as SettingsIcon,
  Home,
  BarChart3,
  Users,
  LogOut,
  Layout,
  Moon,
  Sun
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import axios from 'axios';
import CreateRecipte from '../components/CreateRecipte';
import HomeDash from '../components/HomeDash';
import Template from '../components/Template';
import MyReceipt from '../components/MyReceipt';


const API = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [dashboardStats, setDashboardStats] = useState<{ totalReceipts: number; totalRevenue: number; totalCustomers: number; receiptGrowth: string; revenueGrowth: string; newCustomersThisWeek: number; } | null>(null);
  
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'create') {
      setActiveComponent('Create Receipt');
    }
  }, [searchParams]);
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await axios.get(`${API}/api/analytics/basicAnalytics`, { withCredentials: true });
        setDashboardStats(res.data);
      } catch (err) {
        console.error('Failed to fetch dashboard stats:', err);
      }
    };

    fetchDashboardStats();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, {
        withCredentials: true,
      });
      window.location.href = '/';
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

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
    <div className={`min-h-screen flex font-['DynaPuff'] transition-colors duration-300 ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      }`}>
      <aside className={`w-16 md:w-64 shadow-xl flex flex-col border-r transition-colors duration-300 ${isDark
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200'
        }`}>
        <div className={`p-6 border-b transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
          <h1 className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Billify</h1>
          <div className="md:hidden w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { name: 'Dashboard', icon: <Home size={20} /> },
            { name: 'Create Receipt', icon: <Plus size={20} /> },
            { name: 'Templates', icon: <Layout size={20} /> },
            { name: 'My Receipts', icon: <FileText size={20} /> },
          ].map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setActiveComponent(name)}
              className={`flex items-center justify-center md:justify-start p-3 rounded-lg transition-all w-full text-left cursor-pointer ${activeComponent === name
                  ? isDark
                    ? 'text-blue-400 bg-blue-900/30 font-semibold'
                    : 'text-blue-600 bg-blue-50 font-semibold'
                  : isDark
                    ? 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-900/ hover:to-purple-900 hover:text-blue-400'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-400/40 hover:text-blue-600'
                }`}
            >
              <span className="mr-0 md:mr-3">{icon}</span>
              <span className="hidden md:inline">{name}</span>
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`flex items-center justify-center md:justify-start w-full p-3 rounded-lg transition-all transform hover:scale-105 cursor-pointer ${isDark
                ? 'text-yellow-400 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {isDark ? <Sun size={24} className="mr-0 md:mr-3" /> : <Moon size={24} className="mr-0 md:mr-3" />}
            <span className="hidden md:inline">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </nav>

        <div className={`p-4 space-y-2 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>

          <button 
            onClick={handleLogout}
            className={`flex items-center justify-center md:justify-start w-full p-3 text-red-600 rounded-lg transition-all transform hover:scale-105 cursor-pointer ${isDark ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
            }`}>
            <LogOut size={24} className="mr-0 md:mr-3" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex flex-col flex-1  mt-20">
        {activeComponent === 'Dashboard' && <HomeDash isDark={isDark} quickActions={quickActions} dashboardStats={dashboardStats} />}
        {activeComponent === 'Create Receipt' && <CreateRecipte isDark={isDark} />}
        {activeComponent === 'Templates' && <Template isDark={isDark} />}
        {activeComponent === 'My Receipts' && <MyReceipt isDark={isDark} />}
      </div>
    </div>
  );
};

export default Dashboard;
