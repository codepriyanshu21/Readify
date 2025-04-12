# 🔐 Readify

A modern and responsive React application that implements authentication using a modal-based login/signup form, toast notifications, and protected routes — without using external route guards. Built using React, React Router, and Tailwind CSS with a clean and user-friendly UI.

---

## 🚀 Features

- ✨ Modal-based Login & Signup
- ✅ Form validation using `react-hook-form`
- 🔐 Protected Route (Courses page only accessible when logged in)
- 📦 User state managed globally using React Context API
- 🔁 Persistent login using `localStorage`
- 🍞 Toast notifications using `react-hot-toast`
- 📄 Pages: Home, About, Contact, Courses

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **React Hook Form**
- **Axios**
- **React Hot Toast**
- **Tailwind CSS**
- **Node.js + Express Backend** (for login/signup API)
- **MongoDB** (for user data, assumed)

---

## 🔧 Project Structure

src/ │ ├── components/ │ └── Login.jsx # Modal-based login/signup form │ ├── context/ │ └── AuthProvider.jsx # Auth state context using useContext │ ├── pages/ │ ├── Home.jsx │ ├── About.jsx │ ├── Contact.jsx │ └── Courses.jsx # Protected route │ ├── App.jsx # Main routing logic └── main.jsx # ReactDOM entry point


---

## 🔐 Auth Logic

- On successful login/signup:
  - User info is saved in `localStorage`
  - Auth state is updated via Context
  - Modal closes and toast appears
- On navigating to `/course` without login:
  - App shows toast: `Please login first`
  - Redirects to Home page

# 1. Clone the repository
git clone https://github.com/your-username/react-auth-modal-app.git
cd react-auth-modal-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev






