# SQL_CONNECTION_ADD_GET_POST_DELETE

📖 Description

A web-based CRUD application where users can add, view, update, and delete students.
Built using Node.js, Express, EJS, and MySQL, this project demonstrates backend integration with a database and clean frontend templates.

🚀 Features

👤 Add a new student (form input)

📋 View list of students

✏️ Edit student details

❌ Delete a student with confirmation

🛠️ Follows RESTful routing (GET, POST, PUT, DELETE)

🎨 Responsive and simple UI with Bootstrap

🛠️ Tech Stack

Backend: Node.js, Express.js

Frontend: EJS, Bootstrap

Database: MySQL

Other: method-override, body-parser

⚙️ Installation

Clone the repo

git clone https://github.com/yourusername/student-management.git
cd student-management


Install dependencies

npm install


Setup Database

Create MySQL DB studentdb

Run this SQL:

CREATE TABLE student (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);


Run server

node app.js


Visit: http://localhost:8080/user

📂 Project Structure
.
├── views
│   ├── user.ejs
│   ├── add.ejs
│   ├── edit.ejs
├── public
│   └── style.css
├── app.js
├── package.json
└── README.md

📈 Future Improvements

Add authentication (login/signup)

Add search & filter for students

Add export to CSV/PDF option

🙌 Author

👤 Ajit Gupta
