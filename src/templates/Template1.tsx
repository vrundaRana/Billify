import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#f9f9f9',
    color: '#222',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#1f4b2e',
  },
  section: {
    marginBottom: 15,
    lineHeight: 1.5,
  },
  label: {
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  table: {
    width: '100%',
    marginTop: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
  },
  cellHeader: {
    padding: 6,
    width: '25%',
    backgroundColor: '#d6f5d6',
    borderRight: '1 solid #ccc',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    padding: 6,
    width: '25%',
    borderRight: '1 solid #ccc',
    textAlign: 'center',
  },
  total: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#0b1f10',
  },
  footer: {
    marginTop: 40,
    paddingTop: 12,
    borderTop: '1 solid #aaa',
    fontSize: 10,
    textAlign: 'center',
    color: '#555',
    lineHeight: 1.4,
  },
});

// Helper to format datetime
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

interface Item {
  name: string;
  qty: number;
  rate: number;
}

interface Template1Props {
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

const Template1 = ({ data }: Template1Props) => (
  <Document>
    <Page style={styles.page}>

      {/* Logo */}
      {data.logoUrl && <Image style={styles.logo} src={data.logoUrl} />}

      {/* Header */}
      <Text style={styles.header}>Invoice</Text>

      {/* Receipt Info */}
      <View style={styles.section}>
        <Text><Text style={styles.label}>Receipt No.: </Text>{data.invoiceNo}</Text>
        <Text><Text style={styles.label}>Date: </Text>{formatDate(data.date)}</Text>
      </View>

      {/* Customer Info */}
      <View style={styles.section}>
        <Text><Text style={styles.label}>Customer: </Text>{data.customerName}</Text>
        <Text><Text style={styles.label}>Phone: </Text>{data.phone}</Text>
      </View>

      {/* Item Table */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Item</Text>
          <Text style={styles.cellHeader}>Qty</Text>
          <Text style={styles.cellHeader}>Rate</Text>
          <Text style={styles.cellHeader}>Amount</Text>
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

      {/* Total */}
      <Text style={styles.total}>Total: ₹{data.total}</Text>

      {/* Business Footer */}
      <View style={styles.footer}>
        <Text>{data.bussinessName}</Text>
        <Text>{data.bussinessAddress}</Text>
        <Text>Mobile: {data.bussinessPhone}</Text>
      </View>

    </Page>
  </Document>
);

export default Template1;
