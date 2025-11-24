# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## ✏️ First Steps to Customize

### 1. Update Your Information

**Home Page** (`src/pages/Home.jsx`):
- Line 20: Change profile image URL
- Line 23: Update your name
- Line 26: Update your title
- Line 29-31: Update your bio

**About Page** (`src/pages/About.jsx`):
- Line 18: Change profile image URL
- Line 22: Update your name
- Line 25: Update your title
- Line 33-45: Update your biography

**Contact Page** (`src/pages/Contact.jsx`):
- Line 50: Update email address
- Line 60: Update location
- Line 70-73: Update social media links

### 2. Add Your Projects

Edit `src/data/projects.js` and replace the example projects with your own:

```javascript
{
  id: 1,
  title: 'My Awesome Project',
  description: 'What this project does...',
  techStack: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/yourusername/project',
  demoUrl: 'https://yourproject.com', // Optional
  image: 'https://your-image-url.com/image.jpg',
  youtubeVideoId: 'dQw4w9WgXcQ', // Optional - YouTube video ID only
}
```

### 3. Add Your Articles/Writings

Edit `src/data/writings.js`:

```javascript
{
  id: 1,
  title: 'My Article Title',
  excerpt: 'Short description that appears in the list',
  content: `
# Article Title

Your full article content here. You can use markdown syntax.

## Section Title

More content...
  `,
  date: '2024-01-15', // Format: YYYY-MM-DD
  readTime: '5 min read',
  category: 'Technology', // Category name
}
```

### 4. Update Timeline

Edit `src/data/timeline.js` with your work experience and education:

```javascript
{
  date: '2024 - Present',
  title: 'Your Job Title',
  subtitle: 'Company Name',
  description: 'What you did/do there...',
}
```

### 5. Add Gallery Images

Edit `src/data/gallery.js`:

```javascript
{
  id: 1,
  src: 'https://your-image-url.com/image.jpg',
  alt: 'Description of the image',
  category: 'Work', // or 'Lifestyle', 'Travel', etc.
}
```

### 6. Customize Colors

Edit `tailwind.config.js` to change the primary color:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Main color
    600: '#0284c7', // Darker shade
    // ... update other shades as needed
  },
}
```

## 📁 Project Structure Overview

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (routes)
├── data/          # Data files (projects, writings, etc.)
├── App.jsx        # Main app with routing
└── main.jsx       # Entry point
```

## 🎨 Key Components

- **Navbar**: Fixed navigation bar with mobile menu
- **Footer**: Footer with links and social media
- **Card**: Reusable card component with hover effects
- **Section**: Section wrapper with title/subtitle
- **ProjectCard**: Project display card
- **Timeline**: Timeline component for experience
- **YouTubeEmbed**: YouTube video embed component

## 🔗 Adding New Routes

1. Create a new page component in `src/pages/`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/your-route" element={<YourPage />} />
   ```
3. Add navigation link in `src/components/Navbar.jsx`

## 📝 Notes

- All images use placeholder URLs from Unsplash - replace with your own
- Social media links are placeholders - update with your actual profiles
- Contact form is frontend-only - connect to a backend API for functionality
- YouTube video IDs are just the ID part, not the full URL

## 🚀 Building for Production

```bash
npm run build
```

The `dist/` folder will contain your production-ready files.

## 📚 Need Help?

Check the main `README.md` for more detailed documentation and customization options.

