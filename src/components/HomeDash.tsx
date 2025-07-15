import { TrendingUp, FileText, BarChart3, Star, Users, Clock } from 'lucide-react';

interface HomeDashProps {
  isDark: boolean;
  quickActions: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    action: string;
  }>;
  dashboardStats: {
    totalReceipts: number;
    totalRevenue: number;
    totalCustomers: number;
    receiptGrowth: string;
    revenueGrowth: string;
    newCustomersThisWeek: number;
  } | null
}

const HomeDash = ({ isDark, quickActions, dashboardStats }: HomeDashProps) => {
  return (
    <main className="p-6">
      <section className="mb-8">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mb-4">
          <span className="font-semibold text-slate-900 text-sm uppercase">Dashboard</span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-2 ${isDark
          ? 'bg-gradient-to-r from-white via-blue-300 to-purple-300'
          : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700'
          }`}>
          Welcome Back!
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Here's what's happening with your business today.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Total Receipts</h3>
              <p className="text-3xl font-bold">{dashboardStats?.totalReceipts || 0}</p>
              <div className="flex items-center mt-2">
                <TrendingUp size={16} className="mr-1" />
                <span className="text-sm opacity-90">+{dashboardStats?.receiptGrowth || 0}% this month</span>
              </div>
            </div>
            <FileText size={40} className="opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Revenue</h3>
              <p className="text-3xl font-bold">₹{dashboardStats?.totalRevenue || 0}</p>
              <div className="flex items-center mt-2">
                <TrendingUp size={16} className="mr-1" />
                <span className="text-sm opacity-90">+{dashboardStats?.revenueGrowth || 0}% this month</span>
              </div>
            </div>
            <BarChart3 size={40} className="opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Customers</h3>
              <p className="text-3xl font-bold">{dashboardStats?.totalCustomers || 0}</p>
              <div className="flex items-center mt-2">
                <Star size={16} className="mr-1" />
                <span className="text-sm opacity-90">{dashboardStats?.newCustomersThisWeek || 0} new this week</span>
              </div>
            </div>
            <Users size={40} className="opacity-80" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
          }`}>Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <div key={index} className={`bg-gradient-to-br ${action.color} text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all cursor-pointer`}>
              <div className="flex flex-col items-center text-center">
                {action.icon}
                <h3 className="text-lg font-bold mt-3 mb-2">{action.title}</h3>
                <p className="text-sm opacity-90 mb-4">{action.description}</p>
                <button
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg transition font-semibold text-black cursor-pointer"
                >
                  {action.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`rounded-xl shadow-lg border transition-colors duration-300 ${isDark
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-100'
        }`}>
        <div className={`px-6 py-4 border-b transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-100'
          }`}>
          <div className="flex items-center">
            <Clock size={20} className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Clock size={24} className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>No recent activity to show</p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Your recent receipts and actions will appear here</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeDash
