# Local Testing Guide for PHP Contact Form

This guide will help you test the PHP contact endpoint locally before deploying to Hostinger.

---

## Option 1: Test with Local PHP Server (Recommended)

### Step 1: Install PHP (if not already installed)

**Windows:**
- Download from: https://windows.php.net/download/
- Or use XAMPP: https://www.apachefriends.org/ (includes PHP + Apache)

**Mac:**
```bash
brew install php
```

**Linux:**
```bash
sudo apt-get install php  # Ubuntu/Debian
# or
sudo yum install php      # CentOS/RHEL
```

### Step 2: Build Your React App

```bash
npm run build
```

This creates the `dist` folder with your built app and the PHP file.

### Step 3: Start PHP Server

Navigate to the `dist` folder and start PHP's built-in server:

```bash
cd dist
php -S localhost:8000
```

### Step 4: Test the Contact Form

1. **Open your browser:** `http://localhost:8000`
2. **Navigate to:** `http://localhost:8000/contact-us`
3. **Fill out the form** and submit
4. **Check your email:** `muhammadsubhan222333@gmail.com`

**Note:** PHP's `mail()` function might not work on localhost without proper mail server configuration. You may need to:
- Configure a local mail server (like MailHog or MailCatcher)
- Or test the endpoint directly (see Option 2)

---

## Option 2: Test PHP Endpoint Directly

### Step 1: Start PHP Server in dist folder

```bash
cd dist
php -S localhost:8000
```

### Step 2: Test with curl or Postman

**Using curl:**
```bash
curl -X POST http://localhost:8000/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "03023456789",
    "message": "This is a test message"
  }'
```

**Expected Response:**
```json
{"success":true,"message":"Email sent successfully"}
```

**Using Postman:**
1. Method: `POST`
2. URL: `http://localhost:8000/api/contact.php`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "03023456789",
  "message": "This is a test message"
}
```

### Step 3: Check Response

- **Success (200):** `{"success":true,"message":"Email sent successfully"}`
- **Error (400):** `{"error":"Name, email, and message are required"}`
- **Error (500):** `{"error":"Failed to send email"}`

---

## Option 3: Test with Full Development Setup

If you want to test the full React app with PHP:

### Step 1: Build React App

```bash
npm run build
```

### Step 2: Start PHP Server

```bash
cd dist
php -S localhost:8000
```

### Step 3: Open in Browser

Visit: `http://localhost:8000`

The React app will be served, and the contact form will call `/api/contact.php`.

---

## Troubleshooting

### PHP mail() not working locally

PHP's `mail()` function requires a mail server. On localhost, emails might not send. Options:

1. **Use a mail testing tool:**
   - **MailHog:** https://github.com/mailhog/MailHog
   - **MailCatcher:** https://mailcatcher.me/

2. **Test on Hostinger directly** (after deployment)

3. **Check PHP error logs:**
   ```bash
   php -S localhost:8000 -t dist 2>&1 | tee php-errors.log
   ```

### CORS Errors

If you see CORS errors, the PHP file already includes CORS headers. Make sure you're testing from the same origin (localhost:8000).

### 404 on /api/contact.php

Make sure:
- You built the app (`npm run build`)
- The `dist/api/contact.php` file exists
- You're running PHP server from the `dist` folder

---

## After Testing Locally

Once you've confirmed the PHP endpoint works:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add PHP contact endpoint for Hostinger"
   git push origin main
   ```

2. **GitHub Actions will build** and push to `build` branch

3. **Hostinger will deploy** automatically (or manually pull)

4. **Test on Hostinger:** Visit your live site and submit the form!

---

## Notes

- **Vercel:** Will still use `/api/contact` (serverless function) - no changes needed
- **Hostinger:** Will use `/api/contact.php` (PHP file) - works automatically
- **Development:** Uses `http://localhost:3001/api/contact` (Node server)

The code automatically detects the environment and uses the correct endpoint! 🎉

