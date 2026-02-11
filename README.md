# Pravaahya - A Flow of Indian Stories

A premium lifestyle brand transforming agricultural rice straw waste into beautiful, functional tableware through circular design.

## 🌾 About

Pravaahya addresses India's stubble burning crisis by converting 23 million tonnes of annual crop residue into premium lifestyle products. We're currently in the Rapid Prototyping Phase, developing our first product line.

## 🚀 Live Demo

[Add your Vercel URL here after deployment]

## ✨ Features

- **8 Pages**: Home, Story, Process, Products, Impact, Partner, Contact, Join Team
- **3 Contact Forms**: Contact, Partnership, Team Application
- **Email Backend**: Serverless functions with Nodemailer
- **Responsive Design**: Mobile-first approach
- **Premium Aesthetics**: Modern, elegant design system

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js serverless functions (Vercel)
- **Email**: Nodemailer with Gmail
- **Deployment**: Vercel

## 📦 Project Structure

```
brandidentity/
├── api/                    # Serverless functions
│   ├── contact.js         # Contact form handler
│   ├── partner.js         # Partnership form handler
│   └── team.js            # Team application handler
├── *.html                 # Website pages
├── styles.css             # Global styles
├── script.js              # Main JavaScript
├── form-handler.js        # Form submission logic
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── .env.example           # Environment variables template
```

## 🔧 Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/pravaahya.git
cd pravaahya

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your Gmail credentials to .env

# Start development server
npm start
```

Visit `http://localhost:3000`

## 🌐 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Gmail App Password
6. Deploy!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# Deploy to production
vercel --prod
```

## 🔐 Environment Variables

Create a `.env` file with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3000
```

**Note**: Use Gmail App Password, not your main password. [Generate one here](https://myaccount.google.com/apppasswords)

## 📧 Email Configuration

The website uses Gmail for sending form submissions. To set up:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password
3. Add credentials to environment variables

## 🎨 Design System

- **Colors**: Deep teal, Forest green, Warm tan, Terracotta
- **Typography**: System fonts with fallbacks
- **Layout**: CSS Grid and Flexbox
- **Animations**: Smooth transitions and reveals

## 📄 Pages

1. **Home** - Hero with value proposition
2. **Our Story** - Brand timeline and mission
3. **How It Works** - Scientific process explanation
4. **Products** - Product showcase (prototype + concepts)
5. **The Crisis** - Environmental impact data
6. **Partner With Us** - B2B partnership form
7. **Contact** - General inquiry form
8. **Join Our Team** - Recruitment page with application form

## 🤝 Contributing

We're in the prototyping phase and not accepting external contributions yet. However, if you're interested in joining the team, visit our [Join Team page](https://your-domain.vercel.app/join-team.html).

## 📝 License

Copyright © 2026 Pravaahya. All rights reserved.

## 📞 Contact

- Email: pravaahya@gmail.com
- Instagram: [@pravaahya](https://www.instagram.com/pravaahya/)

---

**From Bharat's fields to India's tables. Rooted in purpose.** 🌾
