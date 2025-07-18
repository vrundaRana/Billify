export const getBusinessInfo = () => {
  return {
    logoUrl: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
    bussinessName: 'Your Business Name',
    bussinessAddress: '1234 Business Street, City, State - 123456',
    bussinessPhone: '+91-9876543210'
  };
};

export const formatReceiptData = (receipt: any) => {
  const businessInfo = getBusinessInfo();
  
  return {
    ...businessInfo,
    invoiceNo: receipt.receiptNumber,
    date: receipt.issuedAt,
    customerName: receipt.customerName,
    phone: receipt.customerPhone,
    items: receipt.items.map((item: any) => ({
      name: item.name,
      qty: item.quantity,
      rate: item.price
    })),
    total: receipt.totalAmount
  };
};