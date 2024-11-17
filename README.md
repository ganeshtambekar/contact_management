
# Contact Management System

This is a full-stack Contact Management System built with ReactJS for the frontend, Node.js for the backend, and MySQL for the database. The application allows users to manage their contacts through CRUD (Create, Read, Update, Delete) operations. It provides an intuitive UI built using MUI components, and the backend is powered by Express.js with RESTful APIs to manage contacts.

## Key Features:
- Create, read, update, and delete contacts.
- Store contact details including name, phone number, email, and address.
- Responsive and user-friendly interface.
- Backend powered by Node.js, Express.js, and MySQL.

## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/ganeshtambekar/contact_management.git


### 2.Install dependencies

#for the frontend
cd frontend
cd contact 
npm install

#for the backend 
cd backend 
npm install

### 3.Setup the database

1.create .env file which includes the MONGO_URL and PORT number 

### 4. run the application 
#frontend
cd frontend 
cd contact
npm run dev 

# backend 
cd backend
node server.js

# open the application in your broswer 
http://localhost:3000
- your port number should be replaced by 3000


Technologies Used
Frontend: ReactJS, Material UI
Backend: Node.js, Express.js
Database: MongoDb




#### **Challenges and Solutions:**
Describe any challenges you faced during the project and how you overcame them. For example:

```markdown
## Challenges and Solutions

### Challenge 1: Integrating frontend with backend
One of the main challenges was ensuring smooth communication between the React frontend and the Node.js backend through RESTful APIs. Initially, I faced issues with CORS (Cross-Origin Resource Sharing), but I resolved this by using the `cors` middleware in the backend to allow the frontend to make requests. 


### Challenge 2:
One of the main problem that was i was not more comfortable with the mui components so knowledge of the mui components is must for the project



## Challenges and Solutions
Challenge 1: Integrating frontend with backend
One of the main challenges was ensuring smooth communication between the React frontend and the Node.js backend through RESTful APIs. Initially, I faced issues with CORS (Cross-Origin Resource Sharing), but I resolved this by using the cors middleware in the backend to allow the frontend to make requests.

challenge 2: i have learnt and understand the mui components on the your tube and web tutorials also. 


