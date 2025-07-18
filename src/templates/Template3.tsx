// Template3.js
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#f0f4f8',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    alignSelf: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a3d62',
    marginBottom: 15,
  },
  section: {
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1 solid #aaa',
    paddingVertical: 5,
  },
  cell: {
    width: '25%',
    textAlign: 'center',
  },
  total: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#636e72',
    borderTop: '1 solid #bbb',
    paddingTop: 10,
  },
});

interface Item {
  name: string;
  qty: number;
  rate: number;
}

interface Template3Props {
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

const Template3 = ({ data }: Template3Props) => (
  <Document>
    <Page style={styles.page}>
      {data.logoUrl && <Image style={styles.logo} src={data.logoUrl} />}
      <Text style={styles.header}>Invoice</Text>

      <View style={styles.section}>
        <Text>Receipt No: {data.invoiceNo} | Date: {new Date(data.date).toLocaleDateString()}</Text>
        <Text>Customer: {data.customerName} | Phone: {data.phone}</Text>
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

      <Text style={styles.total}>Total Amount: ₹{data.total}</Text>

      <View style={styles.footer}>
        <Text>{data.bussinessName}</Text>
        <Text>{data.bussinessAddress}</Text>
        <Text>Mobile: {data.bussinessPhone}</Text>
      </View>
    </Page>
  </Document>
);

export default Template3;
