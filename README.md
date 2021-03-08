# Todo
Web todo application where user can add and edit tasks to do and give priorities or descriptions to different tasks. 

## How to run
1. To clone the repository: `git clone https://github.com/JoonasJalmar/todo-project.git`
2. Install dependencies: `npm install`
3. Configure database/config.js file to your mysql server.
4. Start server: `node server.js` api entrypoint will be at http://localhost:8080/api/todos
5. Run react frontend inside /client/ with `npm start`

## Features
- App uses mysql2 database that is created and handled with nodejs Sequelize library.
Data to insert is: title (string), priority(string), status(boolean). Additional content includes automatically created: id(int), createdAt(datetime) and updatedAt(datetime).

- To insert data for testing you can use: `INSERT INTO todos (title,priority,status) Values ("kauppareissu",4,false)

## What the app looks like

Adding todos
![alt text](https://github.com/JoonasJalmar/todo-project/blob/main/screenshots/add.png)

Frontpage
![alt text](https://github.com/JoonasJalmar/todo-project/blob/main/screenshots/items.png)

Editing a todo
![alt text](https://github.com/JoonasJalmar/todo-project/blob/main/screenshots/edit.png)
