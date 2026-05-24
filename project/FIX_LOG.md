# Login & Render Deployment Fix Guide

## Issues Found & Fixed

### 1. **ALLOWED_HOSTS Configuration** ✅ FIXED
**Problem:** 
- Literal string `"ALLOWED_HOSTS"` in the list
- Duplicate ALLOWED_HOSTS definition with https:// URLs (incorrect format)

**Solution:**
- Removed literal string and duplicate definitions
- ALLOWED_HOSTS now properly includes Render hostname via `RENDER_EXTERNAL_HOSTNAME` env var

### 2. **CORS Configuration** ✅ FIXED
**Problem:**
- Messy CORS settings with conflicting configurations
- `CORS_ALLOW_ALL_ORIGINS` set to both a string and `True`
- Trailing slashes in URLs (incorrect)

**Solution:**
- Cleaned up to use `CORS_ALLOWED_ORIGINS` list
- Added support for local development (localhost:5173) and production
- Made FRONTEND_URL configurable via environment variable

### 3. **Frontend API Configuration** ✅ FIXED
**Problem:**
- Hardcoded `/api` proxy endpoint only works in development
- No way to point to production backend from frontend

**Solution:**
- Updated `api.js` to detect environment (DEV vs production)
- Added `VITE_API_URL` environment variable support
- Fallback to Render backend URL if not specified

### 4. **Login Endpoint** ✅ VERIFIED
- Backend login endpoint (`/accounts/login/`) is properly implemented
- Correctly returns JWT token and user data
- JWT authentication is configured in settings

## Deployment Checklist for Render

### Backend (.env on Render):
```
DEBUG=False
RENDER_EXTERNAL_HOSTNAME=your-app-name.onrender.com
FRONTEND_URL=https://your-frontend-domain.vercel.app
MONGO_URI=your-mongodb-connection-string
MONGO_DB_NAME=project_db
SECRET_KEY=your-secure-secret-key
```

### Frontend (.env on Vercel):
```
VITE_API_URL=https://your-backend-app.onrender.com/api
```

## Testing Login Flow

1. **Development (Local)**:
   - Backend: `cd Backend && python manage.py runserver`
   - Frontend: `cd Frontend && npm run dev`
   - Login uses proxy: `/api → localhost:8000`
   - Should work automatically

2. **Production**:
   - Backend deployed on Render
   - Frontend deployed on Vercel
   - Frontend will use `VITE_API_URL` environment variable
   - CORS headers will allow requests from your frontend domain

## Key Changes Made

### Backend (`settings.py`):
- ✅ Fixed ALLOWED_HOSTS to only include valid hostnames
- ✅ Added RENDER_EXTERNAL_HOSTNAME detection
- ✅ Proper CORS_ALLOWED_ORIGINS list with multiple URLs
- ✅ Support for FRONTEND_URL environment variable
- ✅ Proper CSRF_TRUSTED_ORIGINS configuration

### Frontend (`src/lib/api.js`):
- ✅ Dynamic API URL based on environment
- ✅ Development uses proxy, production uses env variable
- ✅ Fallback to Render backend URL if env not set

## Troubleshooting

### Still getting login errors?
1. Check browser console for Network tab errors
2. Verify CORS headers in response (should include your frontend domain)
3. Ensure backend is running and accessible
4. Check email/password are being sent as JSON

### Backend on Render showing 502 Bad Gateway?
1. Check Render logs for Python errors
2. Verify all required environment variables are set
3. Ensure requirements.txt has all dependencies
4. Check that Procfile command is correct

### Frontend can't reach backend?
1. In development: Check Vite proxy is working (`vite.config.js`)
2. In production: Set VITE_API_URL environment variable on Vercel
3. Verify CORS_ALLOWED_ORIGINS includes your frontend domain
4. Check network tab for exact URL being called
