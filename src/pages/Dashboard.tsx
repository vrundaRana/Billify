import { Receipt, Plus, FileText, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Receipt className="text-blue-600 mr-2" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Billify Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-red-600 transition"
            >
              <LogOut size={20} className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Create Receipt</h3>
                <p className="text-gray-600">Generate new receipt</p>
              </div>
              <Plus className="text-blue-600" size={24} />
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              New Receipt
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">My Receipts</h3>
                <p className="text-gray-600">View all receipts</p>
              </div>
              <FileText className="text-green-600" size={24} />
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              View All
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                <p className="text-gray-600">Manage account</p>
              </div>
              <Settings className="text-purple-600" size={24} />
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Configure
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-center py-8">No recent activity to show</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;