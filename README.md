# Mini Whatsapp (MongoDB-Chat)

A simple chat application inspired by WhatsApp, built with Node.js, Express, MongoDB, and EJS. Users can create, edit, and delete chat messages in a web interface.

## Features
- View all chat messages
- Create a new chat
- Edit existing chats
- Delete chats with confirmation
- Simple and clean UI

## Folder Structure
```
index.js           # Main server file
init.js            # Initialization logic
models/chat.js     # Mongoose chat schema/model
public/app.js      # Client-side JavaScript
public/style.css   # Stylesheet
views/*.ejs        # EJS templates (index, new, edit)
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd MongoDB-Chat-
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB server (if not already running):
   ```sh
   mongod
   ```
4. Start the application:
   ```sh
   node index.js
   ```
5. Open your browser and go to `http://localhost:8080/chats`

## Usage
- Click "New Chat" to create a message.
- Edit or delete existing messages using the provided buttons.
- Deletion requires confirmation.

## License
This project is licensed under the MIT License.

> _Crafted with ❤️ by Himanshu._