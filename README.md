# forum-web-app

## 📝 Description

Dive into the world of interactive discussions with forum-web-app, a full-stack forum meticulously crafted using the robust MERN stack (MongoDB, Express.js, React, and Node.js). This isn't just another forum; it's a dynamic platform designed to foster vibrant communities and engaging conversations. Create your personalized account, spark new discussions by posting topics that ignite interest, and delve into threaded conversations that allow for in-depth exploration of ideas. Interact with fellow users in a modern, intuitive, and responsive user interface that ensures a seamless experience across all devices. Experience the power of community and knowledge-sharing with forum-web-app.

## 📜 Demo Video
<a href="https://drive.google.com/file/d/1gQiK84KqA5wmGXUymBdITcqJe_qTnarv/view?usp=drive_link">Link</a>

## ✨ Features

- Create/LogIn to a personal account
- Post On to the Forum
- BookMark the Post
- Edit and Delete the Post, Posted by you

## 🛠️ Tech Stack

- 🚀 Express.js
- 🚀 React.js
- 🚀 Node.js
- 🚀 MongoDB
- 🚀 TailwindCSS

## 📦 Key Dependencies

```
bcrypt: ^6.0.0
cors: ^2.8.5
dotenv: ^17.2.2
express: ^5.1.0
jsonwebtoken: ^9.0.2
mongoose: ^8.18.1
multer: ^2.0.2
axios:
```

## 🚀 Run Commands

- **test**: `npm run test`


## 📁 Project Structure

```
.
├── backend
│   ├── config
│   │   └── connectionDB.js
│   ├── controller
│   │   ├── posts.js
│   │   └── user.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── post.js
│   │   └── user.js
│   ├── package.json
│   ├── routes
│   │   ├── posts.js
│   │   └── user.js
│   └── server.js
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Inputform.jsx
    │   │   ├── MainNav.jsx
    │   │   ├── Modal.jsx
    │   │   └── Posts.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages
    │       ├── Editpost.jsx
    │       └── Home.jsx
    └── vite.config.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/m-ayaz-xyz/forum-web-app.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

