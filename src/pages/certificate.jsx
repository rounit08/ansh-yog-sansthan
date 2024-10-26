import React from 'react'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    fontSize: 12,
    marginBottom: 20,
  },
  signature: {
    marginTop: 50,
    textAlign: 'center',
  },
})

const Certificate = ({ formData }) => {
  const CertificateDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Certificate of Environmental Commitment</Text>
        <View style={styles.content}>
          <Text>This is to certify that</Text>
          <Text>{formData.name}</Text>
          <Text>has pledged to follow these eight resolutions:</Text>
          {formData.resolutions.map((resolution, index) => (
            <Text key={index}>• {resolution}</Text>
          ))}
        </View>
        <Text style={styles.signature}>
          Date: {new Date().toLocaleDateString()}
        </Text>
      </Page>
    </Document>
  )

  return (
    <div className="max-w-2xl mx-auto p-6">
      <PDFDownloadLink
        document={<CertificateDocument />}
        fileName="environmental-certificate.pdf"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
      >
        {({ loading }) =>
          loading ? 'Generating certificate...' : 'Download Certificate'
        }
      </PDFDownloadLink>
    </div>
  )
}

export default Certificate