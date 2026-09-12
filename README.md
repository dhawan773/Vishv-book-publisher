<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Vishav Book Publisher</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f2f6fc;
      color: #172033;
    }

    .header {
      background: linear-gradient(135deg, #073b8f, #176bc5);
      color: white;
      text-align: center;
      padding: 28px 15px;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
    }

    .header p {
      margin: 8px 0 0;
      font-size: 15px;
    }

    .container {
      max-width: 560px;
      margin: 30px auto;
      padding: 0 15px;
    }

    .card {
      background: white;
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.10);
    }

    .status {
      display: inline-block;
      background: #fff1d1;
      color: #a46700;
      padding: 10px 16px;
      border-radius: 30px;
      font-weight: bold;
      font-size: 14px;
    }

    .amount {
      text-align: center;
      color: #073b8f;
      font-size: 42px;
      font-weight: bold;
      margin-top: 22px;
    }

    .delivery {
      text-align: center;
      color: #667085;
      margin-bottom: 25px;
    }

    .info {
      border: 1px solid #e5eaf1;
      border-radius: 14px;
      overflow: hidden;
    }

    .row {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      padding: 15px;
      border-bottom: 1px solid #e9edf3;
    }

    .row:last-child {
      border-bottom: none;
    }

    .label {
      color: #667085;
    }

    .value {
      font-weight: bold;
      text-align: right;
    }

    .pending {
      color: #a46700;
    }

    .notice {
      margin-top: 20px;
      padding: 15px;
      background: #f5f7fa;
      border-radius: 12px;
      color: #596579;
      font-size: 13px;
      line-height: 1.6;
    }

    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 20px;
    }

    .btn {
      padding: 14px;
      text-align: center;
      text-decoration: none;
      color: white;
      border-radius: 12px;
      font-weight: bold;
    }

    .call {
      background: #073b8f;
    }

    .whatsapp {
      background: #168c4a;
    }

    .footer {
      text-align: center;
      color: #8a94a6;
      font-size: 12px;
      margin-top: 20px;
    }

    @media(max-width:450px) {
      .buttons {
        grid-template-columns: 1fr;
      }

      .amount {
        font-size: 36px;
      }

      .row {
        font-size: 14px;
      }
    }
  </style>
</head>

<body>

  <div class="header">
    <h1>Vishav Book Publisher</h1>
    <p>Delivery Status</p>
  </div>

  <div class="container">

    <div class="card">

      <div class="status">
        ● PAYMENT PENDING
      </div>

      <div class="amount">
        ₹1,999
      </div>

      <div class="delivery">
        Delivery Charge
      </div>

      <div class="info">

        <div class="row">
          <span class="label">Customer Name</span>
          <span class="value">Lakshita</span>
        </div>

        <div class="row">
          <span class="label">Mobile</span>
          <span class="value">9991333747</span>
        </div>

        <div class="row">
          <span class="label">Area</span>
          <span class="value">Taraori</span>
        </div>

        <div class="row">
          <span class="label">City</span>
          <span class="value">Karnal</span>
        </div>

        <div class="row">
          <span class="label">District</span>
          <span class="value">Karnal</span>
        </div>

        <div class="row">
          <span class="label">State</span>
          <span class="value">Haryana</span>
        </div>

        <div class="row">
          <span class="label">PIN Code</span>
          <span class="value">132116</span>
        </div>

        <div class="row">
          <span class="label">Payment Status</span>
          <span class="value pending">Pending</span>
        </div>

      </div>

      <div class="notice">
        <b>Important:</b><br>
        यह एक demo/status page है। इस पेज पर कोई वास्तविक
        payment process नहीं होता। Payment करने से पहले
        कंपनी और payment details को स्वतंत्र रूप से verify करें।
      </div>

      <div class="buttons">

        <a class="btn call" href="tel:9991333747">
          📞 Admin Call
        </a>

        <a class="btn whatsapp"
           href="https://wa.me/919991333747"
           target="_blank">
          💬 WhatsApp
        </a>

      </div>

    </div>

    <div class="footer">
      © 2026 Vishav Book Publisher<br>
      Demo Status Page
    </div>

  </div>

</body>
</html>
