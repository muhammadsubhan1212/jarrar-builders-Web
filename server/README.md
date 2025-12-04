# Backend Server Setup

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `server` directory with the following content:
```
GMAIL_USER=muhammadsubhan222333@gmail.com
GMAIL_APP_PASSWORD=mmcn hhto cnfy hyry
PORT=3001
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Notes

- The Gmail app password should have no spaces (the server automatically removes them)
- Make sure your Gmail account has 2-Step Verification enabled
- The server sends emails to `muhammadsubhan222333@gmail.com`

