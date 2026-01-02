export function basicInvoiceTemplate(data) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      padding: 40px;
      font-size: 14px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .company {
      max-width: 60%;
    }
    .invoice-title {
      font-size: 32px;
      font-weight: bold;
    }
    .section {
      margin-bottom: 25px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }
    th {
      background: #f5f5f5;
    }
    .right {
      text-align: right;
    }
    .total {
      font-size: 18px;
      font-weight: bold;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>

  <div class="header">
    <div class="company">
      <h2>${data.company.name}</h2>
      <p>
        ${data.company.address}<br/>
        Phone: ${data.company.phone}<br/>
        Email: ${data.company.email}
      </p>
    </div>
    <div>
      <div class="invoice-title">INVOICE</div>
      <p>
        Invoice No: ${data.invoiceNo}<br/>
        Date: ${data.invoiceDate}<br/>
        Due Date: ${data.dueDate}
      </p>
    </div>
  </div>

  <div class="section">
    <strong>Bill To:</strong><br/>
    ${data.customer.name}<br/>
    ${data.customer.address}
  </div>

  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th class="right">Price</th>
        <th class="right">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${data.items
        .map(
          (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td class="right">₹${item.price}</td>
            <td class="right">₹${item.qty * item.price}</td>
          </tr>`
        )
        .join("")}
    </tbody>
  </table>

  <table style="width:40%; margin-left:auto; margin-top:20px">
    <tr>
      <td>Subtotal</td>
      <td class="right">₹${data.subtotal}</td>
    </tr>
    <tr>
      <td>GST (${data.tax}%)</td>
      <td class="right">₹${data.taxAmount}</td>
    </tr>
    <tr class="total">
      <td>Total</td>
      <td class="right">₹${data.total}</td>
    </tr>
  </table>

  <div class="section">
    <strong>Payment Method:</strong> ${data.payment.method}<br/>
    <strong>Status:</strong> ${data.payment.status}
  </div>

  <div class="footer">
    Thank you for your business!
  </div>

</body>
</html>
`;
}
