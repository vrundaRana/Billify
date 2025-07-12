import { useState } from 'react';
import { Plus, Trash2, Receipt } from 'lucide-react';
import { z } from 'zod';
import axios from 'axios';
import Popup from './Popup';

const itemSchema = z.object({
  name: z.string().min(1, 'Item name is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  price: z.number().min(0.01, 'Price must be greater than 0')
});

const receiptSchema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  customerPhone: z.string().min(10, 'Phone number must be at least 10 digits'),
  items: z.array(itemSchema).min(1, 'At least one item is required')
});

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface CreateReceiptProps {
  isDark?: boolean;
}

const CreateReceipt = ({ isDark = false }: CreateReceiptProps) => {
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [items, setItems] = useState<Item[]>([{ name: '', quantity: 1, price: 0 }]);
  const [loading, setLoading] = useState<boolean>(false);
  const [popup, setPopup] = useState<{ message: string; type: 'error' | 'success'; isVisible: boolean }>({ message: '', type: 'error', isVisible: false });

  const handleItemChange = (index: number, field: keyof Item, value: string | number) => {
    const updatedItems = [...items];
    if (field === 'quantity' || field === 'price') {
      (updatedItems[index] as any)[field] = Number(value);
    } else {
      (updatedItems[index] as any)[field] = value as string;
    }
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const showPopup = (message: string, type: 'error' | 'success') => {
    setPopup({ message, type, isVisible: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = receiptSchema.parse({
        customerName,
        customerPhone,
        items
      });

      const response = await axios.post('http://localhost:5000/api/receipts', validatedData, {
        withCredentials: true
      });
      
      showPopup('Receipt created successfully!', 'success');
      setCustomerName('');
      setCustomerPhone('');
      setItems([{ name: '', quantity: 1, price: 0 }]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        showPopup(error.issues[0].message, 'error');
      } else {
        showPopup('Network error. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <main className="p-3 sm:p-6">
      <section className="mb-6 sm:mb-8">
        <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mb-4">
          <span className="font-semibold text-slate-900 text-xs sm:text-sm uppercase">Create Receipt</span>
        </div>
        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-2 ${
          isDark 
            ? 'bg-gradient-to-r from-white via-blue-300 to-purple-300' 
            : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700'
        }`}>
          New Receipt
        </h1>
        <p className={`text-sm sm:text-lg ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>Generate a new receipt for your customer</p>
      </section>

      <div className={`max-w-4xl mx-auto rounded-lg sm:rounded-xl shadow-xl border transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-100'
        }`}>
          <div className="flex items-center">
            <Receipt size={20} className={`mr-2 sm:mr-3 sm:w-6 sm:h-6 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <h2 className={`text-lg sm:text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Receipt Details</h2>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Customer Name</label>
                <input
                  type="text"
                  placeholder="Enter customer name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-lg border-2 transition-all text-sm sm:text-base ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Customer Phone</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-lg border-2 transition-all text-sm sm:text-base ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
                <label className={`block text-sm font-semibold ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Items</label>
                <button
                  type="button"
                  onClick={addItem}
                  className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 font-semibold text-sm sm:text-base"
                >
                  <Plus size={14} className="sm:w-4 sm:h-4" /> Add Item
                </button>
              </div>
              
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border transition-colors ${
                    isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="sm:col-span-5">
                      <label className={`block text-xs font-medium mb-1 sm:hidden ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Item Name</label>
                      <input
                        type="text"
                        placeholder="Item name"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                        className={`w-full p-2 rounded border transition-all text-sm sm:text-base ${
                          isDark 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={`block text-xs font-medium mb-1 sm:hidden ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Quantity</label>
                      <input
                        type="number"
                        placeholder="Qty"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                        className={`w-full p-2 rounded border transition-all text-sm sm:text-base ${
                          isDark 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        required
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className={`block text-xs font-medium mb-1 sm:hidden ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Price</label>
                      <input
                        type="number"
                        placeholder="Price"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                        className={`w-full p-2 rounded border transition-all text-sm sm:text-base ${
                          isDark 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        required
                      />
                    </div>
                    <div className="sm:col-span-1 flex items-center justify-between sm:justify-center">
                      <span className={`text-sm sm:text-base font-semibold ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        ₹{(item.quantity * item.price).toFixed(2)}
                      </span>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all sm:hidden"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    <div className="hidden sm:flex sm:col-span-1 items-center justify-center">
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`border-t pt-4 sm:pt-6 transition-colors ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                <span className={`text-lg sm:text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Total Amount:</span>
                <span className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>₹{totalAmount.toFixed(2)}</span>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 font-bold text-base sm:text-lg shadow-lg"
              >
                {loading ? 'Creating Receipt...' : 'Create Receipt'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <Popup 
        message={popup.message}
        type={popup.type}
        isVisible={popup.isVisible}
        onClose={() => setPopup({ ...popup, isVisible: false })}
      />
    </main>
  );
};

export default CreateReceipt;