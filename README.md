# Todo App

Todo application built with React and Redux for managing tasks.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Todo application designed to help users manage their tasks efficiently. It provides a clean and intuitive user interface, allowing users to add, update, and delete tasks.

## Features

### 1. Add New Tasks

Users can add new tasks to the Todo list by providing a title for each task. The application generates a unique identifier for each task and includes a timestamp for when the task was created.

### 2. Update Tasks

Existing tasks can be updated, allowing users to modify the title or status of a task. This feature is useful for refining task details without having to delete and recreate tasks.

### 3. Mark Tasks as Complete or Incomplete

Tasks can be marked as complete or incomplete. This status helps users keep track of their progress and identify which tasks still require attention.

### 4. Delete Tasks

Users can easily remove tasks from the Todo list when they are no longer needed. Deleting tasks helps in maintaining a clean and organized task list.

### 5. Filter Tasks

The application provides a filter option that allows users to view tasks based on their completion status. Users can choose to display all tasks, only incomplete tasks, or only completed tasks.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Download npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DigvijayDheer/todo-app-with-react-redux
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to use the Todo app.

## Folder Structure

The project follows a standard React folder structure:

- `public`: Contains static assets and the HTML template.
- `src`: Contains the React application source code.
  - `components`: Reusable React components.
  - `styles`: SCSS files for styling.
  - `slices`: Redux slices for managing state.
  - `utils`: Utility functions.
  - ...

## Technologies Used

- React
- Redux Toolkit
- Framer Motion
- SCSS
- ...

## Dependencies

1. **React**: [React](https://reactjs.org/) is a JavaScript library for building user interfaces. It enables the creation of reusable UI components, making it easy to manage the application's UI.

2. **Redux Toolkit**: [Redux Toolkit](https://redux-toolkit.js.org/) is used for state management in React applications. It simplifies the process of managing the application's state and integrates seamlessly with React components.

3. **Framer Motion**: [Framer Motion](https://www.framer.com/motion/) is a library for creating smooth animations in React applications. It adds visually appealing animations to enhance the user experience.

4. **SCSS**: [SCSS](https://sass-lang.com/documentation/syntax) (Sassy CSS) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It provides a way to write more maintainable and structured stylesheets.

5. **React Hot Toast**: [React Hot Toast](https://react-hot-toast.com/) is a library for displaying notifications in React applications. It is used to show success messages when tasks are added or removed.

6. **Redux DevTools Extension**: [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) is an extension that enhances the debugging experience for Redux applications. It allows developers to inspect and debug the Redux store.

7. **date-fns**: [date-fns](https://date-fns.org/) is a library for manipulating dates in JavaScript. It is used to format task creation timestamps.

8. **react-icons**: [React Icons](https://react-icons.github.io/react-icons/) provides a collection of icons for use in React applications.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality, please submit a pull request.

1. Fork the project.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
