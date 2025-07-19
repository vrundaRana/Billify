// Template4.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    fontSize: 26,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#2f3542',
    marginBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  tableHeader: {
    backgroundColor: '#dfe4ea',
    flexDirection: 'row',
    borderTop: '1 solid #333',
    borderBottom: '1 solid #333',
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderBottom: '1 solid #ccc',
  },
  cell: {
    width: '25%',
    textAlign: 'left',
    paddingHorizontal: 4,
  },
  total: {
    marginTop: 15,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    marginTop: 40,
    fontSize: 9,
    textAlign: 'right',
    color: '#555',
    borderTop: '1 solid #aaa',
    paddingTop: 8,
  },
});

interface Item {
  name: string;
  qty: number;
  rate: number;
}

interface Template4Props {
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

const Template4: React.FC<Template4Props> = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>INVOICE</Text>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Receipt No: </Text>{data.invoiceNo}</Text>
        <Text><Text style={styles.label}>Date: </Text>{new Date(data.date).toLocaleDateString()}</Text>
        <Text><Text style={styles.label}>Customer: </Text>{data.customerName}</Text>
        <Text><Text style={styles.label}>Phone: </Text>{data.phone}</Text>
      </View>

      <View>
        <View style={styles.tableHeader}>
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

export default Template4;
