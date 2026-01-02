export const registerUserFormate = (email, userName, token) => {
  // const baseUrl = `${process.env.FRONTEND_URL.replace(
  //   /\/+$/,
  //   ""
  // )}/token/${encodeURIComponent(token)}`;
  const baseUrl = "";
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Successful</title>
  <style>
    body {
      font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #f3f4f6;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 40px 50px;
      max-width: 420px;
      width: 90%;
    }

    .checkmark {
      font-size: 60px;
      color: #10b981; /* green-500 */
      margin-bottom: 15px;
    }

    h1 {
      color: #111827;
      font-size: 26px;
      margin-bottom: 10px;
    }

    p {
      color: #4b5563;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .btn {
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }

    .btn:hover {
      background-color: #1d4ed8;
    }

    .footer {
      margin-top: 20px;
      font-size: 14px;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="checkmark">✔️</div>
    <h1>Registration Successful!</h1>
    <p>Welcome ${userName} 🎉 Your account has been created successfully.</p>
    <p>Click to verify <a href=${baseUrl}> ${email} </a>.</p>
    <div class="footer">Thank you for joining us!</div>  
  </div>
</body>
</html>
`;

  return html;
};

export const OTPVerifyFormate = (email, OTP) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTP Verification</title>
  <style>
    body {
      font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #f9fafb;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 40px 50px;
      max-width: 450px;
      width: 90%;
    }

    .icon {
      font-size: 55px;
      color: #2563eb;
      margin-bottom: 20px;
    }

    h1 {
      color: #111827;
      font-size: 24px;
      margin-bottom: 12px;
    }

    p {
      color: #4b5563;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 25px;
    }

    .otp-box {
      display: inline-block;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 10px;
      background: #f3f4f6;
      padding: 10px 20px;
      border-radius: 8px;
      color: #111827;
      margin-bottom: 25px;
    }

    .note {
      font-size: 14px;
      color: #6b7280;
      margin-top: 10px;
    }

    .footer {
      margin-top: 35px;
      font-size: 13px;
      color: #9ca3af;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🔐</div>
    <h1>Verify Your Email Address</h1>
    <p>Hello,</p>
    <p>We received a request to verify your email: <strong>${email}</strong></p>
    <p>Please use the OTP below to complete your verification:</p>
    <div class="otp-box">${OTP}</div>
    <p class="note">This OTP is valid for the next <strong>10 minutes</strong>. Please do not share it with anyone.</p>
    <div class="footer">If you didn’t request this, you can safely ignore this email.</div>
  </div>
</body>
</html>
`;

  return html;
};
