# Render Deployment Guide

## Quick Setup

Your Finex Website is now ready for Render deployment!

### What's Been Configured:

1. ✅ **Next.js Config Updated** - Removed static export settings
2. ✅ **Render Config Added** - `render.yaml` file created
3. ✅ **Build Tested** - Everything compiles successfully

### Deploy to Render:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Connect to Render**:
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` config

3. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your site
   - Your site will be live at: `https://your-service-name.onrender.com`

### Configuration Details:

- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Node Version**: Latest (specified in render.yaml)
- **Plan**: Free tier
- **Health Check**: Enabled on `/`

### Environment Variables (Optional):

If you need to add environment variables later:
- Go to your service dashboard on Render
- Navigate to "Environment" tab
- Add any required variables

That's it! Your site should deploy automatically. 🚀
