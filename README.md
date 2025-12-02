# Faith Foursquare Gospel Church Website

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)

A modern, responsive, and SEO-optimized website built for **Faith Foursquare Gospel Church**. Designed to be welcoming, fast, and easy to navigate, this project serves as the digital front door for the church community.

---

## 🚀 Features

- **🎨 Modern Design**: Clean, premium aesthetic using British Racing Green and Faith Red.
- **📱 Fully Responsive**: Flawless experience on mobile, tablet, and desktop.
- **⚡ Blazing Fast**: Built with Vite and React for instant page loads.
- **🔍 SEO Optimized**: Unique meta tags and descriptions for every page using `react-helmet-async`.
- **✨ Smooth Animations**: Engaging page transitions and scroll effects with Framer Motion.
- **🛍️ Online Store**: Integrated shop interface for church merchandise.
- **💝 Giving Portal**: Secure interface for online tithes and offerings.
- **📅 Event Calendar**: Dynamic events section to keep the community updated.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have **Node.js** installed (version 18 or higher recommended).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/epicrapha/Faith-Foursquare-Website.git
    cd Faith-Foursquare-Website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # If you encounter peer dependency issues (common with React 19), use:
    npm install --legacy-peer-deps
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` to view the site.

---

## 📖 Website Walkthrough

### 🏠 Home (`/`)
The landing page features a cinematic hero section, a welcome message, a livestream preview, and quick links to ministries and events.

### ℹ️ About (`/about`)
Detailed information about the church's identity, including:
- **Mission & Vision**: The core purpose of the church.
- **Beliefs**: The 4 cardinal doctrines of the Foursquare Church.
- **Our Story**: History and background.

### ⏰ Services (`/services`)
A clear schedule of weekly gatherings, including Sunday Worship, Bible Study, and Youth Fellowship. Includes a placeholder for a location map.

### 📅 Events (`/events`)
Keeps the community informed with a featured upcoming event and a grid of monthly activities.

### 👥 Staff (`/staff`)
Introduces the leadership team with photos and bios, helping new visitors recognize friendly faces.

### 🛍️ Shop (`/shop`)
A catalog of church merchandise (t-shirts, mugs, books) to support the ministry.

### 💝 Give (`/give`)
Provides multiple ways to give, including online credit card options and direct bank transfer details.

### 🤝 Connect (`/connect`)
A central hub for engagement with tabbed forms for:
- New Visitor Cards
- Volunteer Sign-ups
- Ministry Inquiries
- Prayer Requests
- General Contact

---

## 🎨 Customization Guide

### Changing Colors
The project uses CSS variables defined in `src/index.css` for easy theming.
```css
@theme {
  --color-primary-green: #004225; /* Change this */
  --color-primary-red: #C1121F;   /* Change this */
  /* ... other colors */
}
```

### Updating Content
- **Pages**: Edit files in `src/pages/` (e.g., `Home.jsx`, `About.jsx`).
- **Navigation**: Update links in `src/components/Navbar.jsx`.
- **Footer**: Update contact info in `src/components/Footer.jsx`.

### Adding Images
Place your images in `src/assets/` and import them into your components:
```javascript
import myImage from '../assets/my-image.jpg';
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Rapha](https://github.com/epicrapha)
