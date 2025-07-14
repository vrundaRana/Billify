import { useState, useEffect } from 'react';
import { Receipt, Calendar, Phone, User, Package, DollarSign, Search } from 'lucide-react';
import axios from 'axios';
import Popup from './Popup';

interface ReceiptItem {
  name: string;
  quantity: number;
  price: number;
}

interface ReceiptData {
  _id: string;
  customerName: string;
  customerPhone: string;
  items: ReceiptItem[];
  totalAmount: number;
  receiptNumber: string;
  issuedAt: string;
  createdAt: string;
}

interface MyReceiptProps {
  isDark?: boolean;
}

const API = import.meta.env.VITE_API_URL;

const MyReceipt = ({ isDark = false }: MyReceiptProps) => {
  const [receipts, setReceipts] = useState<ReceiptData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [popup, setPopup] = useState<{ message: string; type: 'error' | 'success'; isVisible: boolean }>({
    message: '', type: 'error', isVisible: false
  });

  const showPopup = (message: string, type: 'error' | 'success') => {
    setPopup({ message, type, isVisible: true });
  };

  const fetchReceipts = async () => {
    try {
      const response = await axios.get(`${API}/api/receipts`, {
        withCredentials: true
      });
      setReceipts(response.data.receipts);
    } catch (error) {
      showPopup('Failed to fetch receipts', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  const filteredReceipts = receipts.filter((receipt) =>
    receipt.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receipt.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receipt.customerPhone.includes(searchTerm)
  );
  return (
    <main className="p-3 sm:p-6">
      <Popup
        message={popup.message}
        type={popup.type}
        isVisible={popup.isVisible}
        onClose={() => setPopup({ ...popup, isVisible: false })}
      />

      <section className="mb-6 sm:mb-8">
        <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mb-4">
          <span className="font-semibold text-slate-900 text-xs sm:text-sm uppercase">My Receipts</span>
        </div>
        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-2 ${isDark
            ? 'bg-gradient-to-r from-white via-green-300 to-blue-300'
            : 'bg-gradient-to-r from-gray-900 via-green-800 to-blue-700'
          }`}>
          Receipt History
        </h1>
        <p className={`text-sm sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>View all your generated receipts</p>
      </section>
      <section className="mb-6 sm:mb-8">
        <div className={`flex items-center px-4 py-3 rounded-lg border-2 transition-all ${
          isDark
            ? 'bg-gray-800 border-gray-600 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        }`}>
          <Search className={`w-5 h-5 mr-3 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Search by customer name, receipt number, or phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`flex-1 bg-transparent outline-none placeholder-gray-500 ${
              isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </section>
      {filteredReceipts.length === 0 ? (
        <div className={`text-center py-12 rounded-lg ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600'
          }`}>
          <Receipt size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">{searchTerm ? 'No matching receipts found' : 'No receipts found'}</p>
          <p className="text-sm mt-2">{searchTerm ? 'Try adjusting your search terms' : 'Create your first receipt to see it here'}</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6">
          {filteredReceipts.map((receipt) => (
            <div key={receipt._id} className={`rounded-lg shadow-lg border transition-all hover:shadow-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
              <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${isDark ? 'border-gray-700' : 'border-gray-100'
                }`}>
                <div className="flex items-center gap-3">
                  <Receipt className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {receipt.receiptNumber}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {formatDate(receipt.issuedAt)}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <User className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Customer</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {receipt.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {receipt.customerPhone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Items</span>
                  </div>
                  <div className="space-y-2">
                    {receipt.items.map((item, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded border ${isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
                        }`}>
                        <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            Qty: {item.quantity}
                          </span>
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            ₹{item.price}
                          </span>
                          <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            ₹{item.quantity * item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`flex justify-between items-center pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                  <div className="flex items-center gap-2">
                    <DollarSign className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Total Amount</span>
                  </div>
                  <span className={`text-xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                    ₹{receipt.totalAmount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyReceipt;
