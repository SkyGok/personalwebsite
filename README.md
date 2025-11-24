# Personal Portfolio Website

A modern, clean, and production-ready personal portfolio website built with React.js and TailwindCSS. This portfolio showcases your work, experiences, projects, writings, and more.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Vite for optimal performance
- **SEO-Friendly**: Proper meta tags and semantic HTML
- **Component-Based**: Reusable components for easy maintenance
- **Animations**: Smooth transitions using Framer Motion

## 📋 Pages

1. **Home** - Hero section with featured projects and skills
2. **About** - Biography, timeline, and personal information
3. **Projects** - Grid layout showcasing your projects with filtering
4. **Project Detail** - Individual project pages with images and videos
5. **Writing** - Blog/articles listing page
6. **Article Detail** - Individual article pages
7. **Gallery** - Photo gallery with modal view
8. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Timeline.jsx
│   │   └── YouTubeEmbed.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Writing.jsx
│   │   ├── ArticleDetail.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/            # Data files
│   │   ├── projects.js
│   │   ├── writings.js
│   │   ├── timeline.js
│   │   └── gallery.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json
```

## ✏️ Customization Guide

### 1. Update Personal Information

**Home Page (`src/pages/Home.jsx`):**
- Update name, title, and bio text
- Replace profile image URL
- Update skills list

**About Page (`src/pages/About.jsx`):**
- Update biography text
- Replace images
- Update skills and interests

**Contact Page (`src/pages/Contact.jsx`):**
- Update email address
- Update location
- Update social media links

### 2. Add Your Projects

Edit `src/data/projects.js`:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Project description',
  techStack: ['React', 'Node.js'],
  githubUrl: 'https://github.com/yourusername/project',
  demoUrl: 'https://yourproject.com',
  image: 'path/to/image.jpg',
  youtubeVideoId: 'video-id', // Optional
}
```

### 3. Add Your Writings/Articles

Edit `src/data/writings.js`:

```javascript
{
  id: 1,
  title: 'Your Article Title',
  excerpt: 'Short excerpt',
  content: 'Full article content in markdown',
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Technology',
}
```

### 4. Update Timeline

Edit `src/data/timeline.js`:

```javascript
{
  date: '2024 - Present',
  title: 'Your Position',
  subtitle: 'Company Name',
  description: 'Job description',
}
```

### 5. Add Gallery Images

Edit `src/data/gallery.js`:

```javascript
{
  id: 1,
  src: 'path/to/image.jpg',
  alt: 'Image description',
  category: 'Work',
}
```

### 6. Customize Colors

Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Update these values to your preferred colors
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### 7. Update Social Links

**Navbar & Footer:** Update social media links in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

Replace placeholder URLs with your actual social media profiles.

## 🎨 Styling

This project uses TailwindCSS for styling. Key design principles:

- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Colors**: Primary color scheme defined in `tailwind.config.js`
- **Typography**: System fonts with Inter as the primary font
- **Responsive**: Mobile-first approach with breakpoints (sm, md, lg)

## 🚀 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory. You can preview the production build with:

```bash
npm run preview
```

## 📝 Adding New Content

### Adding a New Project

1. Add project data to `src/data/projects.js`
2. The project will automatically appear on the Projects page
3. Clicking it will navigate to a detail page (you may want to add more content there)

### Adding a New Article

1. Add article data to `src/data/writings.js`
2. The article will appear on the Writing page
3. Clicking it will show the full article content

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a navigation link in `src/components/Navbar.jsx`

## 🔧 Future Improvements

Here are some ideas for expanding the portfolio:

1. **Backend Integration**
   - Connect contact form to a backend API
   - Add a CMS for managing content
   - Implement user authentication for admin panel

2. **Enhanced Features**
   - Dark mode toggle
   - Search functionality
   - Comments system for articles
   - Newsletter subscription

3. **Performance**
   - Image optimization and lazy loading
   - Code splitting for better load times
   - Service worker for offline support

4. **SEO**
   - Add React Helmet for dynamic meta tags
   - Implement structured data (JSON-LD)
   - Add sitemap generation

5. **Analytics**
   - Integrate Google Analytics
   - Track page views and user interactions

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

If you have questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ using React and TailwindCSS
