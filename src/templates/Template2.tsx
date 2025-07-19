// Template2.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    color: '#333',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
  },
  table: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1 solid #ccc',
    paddingVertical: 4,
  },
  cell: {
    width: '25%',
    textAlign: 'left',
    padding: 2,
  },
  total: {
    marginTop: 15,
    textAlign: 'right',
    fontSize: 13,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    fontSize: 9,
    textAlign: 'left',
    color: '#555',
    borderTop: '1 solid #ccc',
    paddingTop: 10,
  },
});
interface Item {
  name: string;
  qty: number;
  rate: number;
}

interface Template2Props {
  data: {
    logoUrl?: string;
    invoiceNo: string;
    date: string;
    customerName: string;
    phone: string;
    items: Item[];
    total: number;
    bussinessName: string;
    bussinessAddress: string;
    bussinessPhone: string;
  };
}

const Template2: React.FC<Template2Props> = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {data.logoUrl && <Image style={styles.logo} src={data.logoUrl} />}
        <Text style={styles.header}>Invoice</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Receipt No: </Text>{data.invoiceNo}</Text>
        <Text><Text style={styles.label}>Date: </Text>{new Date(data.date).toLocaleDateString()}</Text>
        <Text><Text style={styles.label}>Customer: </Text>{data.customerName}</Text>
        <Text><Text style={styles.label}>Phone: </Text>{data.phone}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Item</Text>
          <Text style={styles.cell}>Qty</Text>
          <Text style={styles.cell}>Rate</Text>
          <Text style={styles.cell}>Amount</Text>
        </View>
        {data.items.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.qty}</Text>
            <Text style={styles.cell}>₹{item.rate}</Text>
            <Text style={styles.cell}>₹{item.qty * item.rate}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.total}>Total: ₹{data.total}</Text>

      <View style={styles.footer}>
        <Text>{data.bussinessName}</Text>
        <Text>{data.bussinessAddress}</Text>
        <Text>Mobile: {data.bussinessPhone}</Text>
      </View>
    </Page>
  </Document>
);

export default Template2;
