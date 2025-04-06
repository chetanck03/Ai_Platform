# SensAI Website Documentation

## Overview
SensAI is a modern web application built with Next.js, featuring AI capabilities and a clean, responsive design. The website includes various features like AI assistance, authentication, and dynamic content management.

## Tech Stack
- **Framework**: Next.js 15.1.4
- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Prisma
- **AI Integration**: Google Generative AI
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Markdown Editor**: UIW React MD Editor
- **Charts**: Recharts
- **PDF Generation**: html2pdf.js

## Project Structure

### Main Directories
- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/public` - Static assets
- `/prisma` - Database schema and migrations
- `/lib` - Utility functions and shared code
- `/hooks` - Custom React hooks
- `/actions` - Server actions
- `/data` - Static data and configurations

### Key Components

#### Layout Components
- `layout.js` - Root layout with theme provider
- `header.jsx` - Navigation header
- `theme-provider.jsx` - Dark/light mode theme management

#### Feature Components
- `hero.jsx` - Landing page hero section
- `ai-assistant-button.jsx` - AI assistant integration button

#### UI Components
Located in `/components/ui`:
- Various Radix UI based components
- Custom styled components
- Form elements
- Dialog and modal components

### Pages
- `/` - Home page
- `/ai-assistant` - AI assistant interface
- `/auth/*` - Authentication pages
- `/api/*` - API routes

## Features
1. **Authentication System**
   - User registration and login
   - Protected routes
   - Session management

2. **AI Integration**
   - AI assistant functionality
   - Chat interface
   - Generative AI capabilities

3. **Responsive Design**
   - Mobile-first approach
   - Dark/light mode support
   - Modern UI components

4. **Content Management**
   - Markdown support
   - Dynamic content rendering
   - PDF generation

## Resume Builder Guide

### How to Use the Resume Builder

1. **Accessing the Resume Builder**
   - Navigate to the Resume section from the main menu
   - The builder is available after logging in

2. **Main Features**
   - **Form View**: Fill in your resume details using a structured form
   - **Markdown Preview**: See your resume in real-time as markdown
   - **AI Enhancement**: Get AI-powered suggestions for improving your content
   - **PDF Export**: Download your resume as a PDF

3. **Sections to Complete**
   - **Contact Information**
     - Email, phone, LinkedIn, and Twitter profiles
   - **Professional Summary**
     - Write a compelling summary of your experience
   - **Skills**
     - List your key skills and competencies
   - **Work Experience**
     - Add job positions with details
     - Use AI to enhance descriptions
   - **Education**
     - Add your educational background
   - **Projects**
     - Showcase your key projects

4. **AI-Powered Features**
   - Click "Improve with AI" to enhance any section
   - Get professional suggestions for content improvement
   - AI analyzes your industry and experience level

5. **Saving and Exporting**
   - Click "Save" to store your resume
   - Use "Download PDF" to export your resume
   - Your resume is automatically saved as you work

6. **Tips for Best Results**
   - Be specific in your descriptions
   - Use action verbs
   - Include quantifiable achievements
   - Keep formatting consistent
   - Use the AI enhancement feature for professional polish

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
- Create `.env` file with required credentials
- Configure Clerk authentication
- Set up Google AI API keys

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## Development
- Uses ESLint for code linting
- PostCSS for CSS processing
- Tailwind CSS for styling
- Prisma for database management

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
