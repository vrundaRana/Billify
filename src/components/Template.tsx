import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import { getBusinessInfo } from '../utils/businessInfo';

const data = {
  ...getBusinessInfo(),
  invoiceNo: 'INV-1023',
  date: '2025-07-15T22:28:00',
  customerName: 'John Doe',
  phone: '8983070416',
  items: [
    { name: 'Item A', qty: 2, rate: 150 },
    { name: 'Item B', qty: 1, rate: 200 },
  ],
  total: 500,
};


const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  
  const getTemplateComponent = () => {
    switch (selectedTemplate) {
      case 1: return <Template1 data={data} />;
      case 2: return <Template2 data={data} />;
      case 3: return <Template3 data={data} />;
      case 4: return <Template4 data={data} />;
      default: return <Template1 data={data} />;
    }
  };
  
  return (
    <div className='min-h-screen m-4'>
      <div className='mb-4'>
        <label className='block text-sm font-semibold mb-2'>Select Template:</label>
        <select 
          value={selectedTemplate} 
          onChange={(e) => setSelectedTemplate(parseInt(e.target.value))}
          className='p-2 border rounded-lg'
        >
          <option value={1}>Template 1 - Modern Retail</option>
          <option value={2}>Template 2 - Cafe & Restaurant</option>
          <option value={3}>Template 3 - Service Professional</option>
          <option value={4}>Template 4 - Healthcare & Wellness</option>
        </select>
      </div>
      <div style={{ height: 'calc(100vh - 120px)' }}>
        <PDFViewer width="100%" height="100%">
          {getTemplateComponent()}
        </PDFViewer>
      </div>
    </div>
  )
}

export default Template
