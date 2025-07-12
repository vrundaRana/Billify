import {
  Plus,
  FileText,
  Settings,
  Home,
  BarChart3,
  Users,
  LogOut,
} from 'lucide-react';

const Dashboard = () => {


  return (
    <div className='min-h-screen flex'>
      <aside className='fiexed inset-y-0 left-0 z-30 w-16 md:w-64 bg-[#cdc8b9] mt-16'>
        <div className='flex justify-between flex-col m-4'>
          <nav className="flex-1 p-4 space-y-2">
            {[
              { name: 'Dashboard', icon: <Home size={20} />, href: '#' },
              { name: 'Create Receipt', icon: <Plus size={20} />, href: '#' },
              { name: 'My Receipts', icon: <FileText size={20} />, href: '#' },
              { name: 'Analytics', icon: <BarChart3 size={20} />, href: '#' },
              { name: 'Customers', icon: <Users size={20} />, href: '#' },
              { name: 'Settings', icon: <Settings size={20} />, href: '#' },
            ].map(({ name, icon, href }) => (
              <a
                key={name}
                href={href}
                className="flex items-center justify-center md:justify-start p-3 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="mr-0 md:mr-3">{icon}</span>
                <span className="hidden md:inline">{name}</span>
              </a>
            ))}
          </nav>

        </div>
        <div className="p-4 border-t">
          <button className="flex items-center justify-center md:justify-start w-full p-3 text-red-600 rounded-lg hover:bg-red-50 transition">
            <LogOut size={20} className="mr-0 md:mr-3" />
            <span className="hidden md:inline">Logout</span>
          </button>

        </div>
      </aside>
      <div className='flex flex-col flex-1'>
        <main className='px-4'>
          <section className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Receipts</h3>
                  <p className="text-2xl font-bold text-blue-600">24</p>
                </div>
                <FileText className="text-blue-500" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">This Month</h3>
                  <p className="text-2xl font-bold text-green-600">$2,450</p>
                </div>
                <BarChart3 className="text-green-500" size={32} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Customers</h3>
                  <p className="text-2xl font-bold text-purple-600">18</p>
                </div>
                <Users className="text-purple-500" size={32} />
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Select Template</h2>
            </div>
            <div className="p-6 text-center text-gray-500">
              No recent activity to show.
            </div>
          </section>
        </main>
      </div>

    </div>
  );
};

export default Dashboard;
