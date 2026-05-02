# Vercel Environment Variable Setup (REQUIRED)

## You MUST do this on Vercel Dashboard:

### Step 1: Go to Vercel Settings
- Open your frontend project on vercel.com
- Click "Settings" tab
- Go to "Environment Variables"

### Step 2: Add This Variable
```
Name: VITE_API_URL
Value: https://backend-mg40.onrender.com/api
```

### Step 3: REDEPLOY your frontend
- Go to "Deployments" tab
- Click the three dots on your latest deployment
- Choose "Redeploy" or "Redeploy with cache cleared"

⚠️ **IMPORTANT**: Without redeploying, the environment variable change won't take effect!

## Why This is Needed

Your `api.js` file now has this code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
if (apiUrl) {
  return apiUrl;
}
```

This reads from the environment variable at BUILD TIME. If it's not set:
1. Frontend builds with empty VITE_API_URL
2. Falls back to hardcoded `https://backend-mg40.onrender.com/api`
3. But Vercel's build system might be stripping this

## Verify It's Working

After redeploying, open your Vercel live site and:
1. Open DevTools → Network tab
2. Try to login
3. Check what URL the API request goes to
4. It should show: `https://backend-mg40.onrender.com/api/accounts/login/`

If it shows `http://localhost:8000/api/accounts/login/` → Environment variable is NOT set!

## Troubleshooting

If login still fails after these steps:
1. Clear browser cache completely
2. Hard refresh (Ctrl+Shift+R)
3. Check browser console for CORS errors
4. Verify backend CORS allows your Vercel domain:
   - Should be in CORS_ALLOWED_ORIGINS in Django settings
