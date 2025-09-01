# React Todo List

A modern, responsive Todo List application built with React, featuring persistent storage and clean component architecture.

## Features

- ✅ Add new todos
- 📝 Mark todos as complete/incomplete
- 🗑️ Delete todos
- 💾 Persistent storage using localStorage
- 🎨 Styled with styled-components
- 📱 Responsive design
- ⚡ Efficient state management with React Context
- 🔧 Component-based architecture
- 📖 Storybook integration for component documentation

## Tech Stack

- **React** 18.2.0
- **Styled Components** 6.1.6
- **TypeScript** 4.9.5
- **React Window** for virtualization
- **UUID** for unique identifiers
- **Storybook** for component documentation
- **Jest & React Testing Library** for testing

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/isacaputo/react-todo-list.git
cd react-todo-list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run storybook` - Starts Storybook for component documentation
- `npm run build-storybook` - Builds Storybook for deployment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # App header component
│   ├── TodoAction/     # Todo action buttons
│   ├── TodoForm/       # Form for adding new todos
│   ├── TodoItem/       # Individual todo item
│   └── TodoList/       # List container for todos
├── providers/          # Context providers
│   ├── Theme/          # Theme configuration and provider
│   └── Todo/           # Todo state management
├── utils/              # Utility functions and hooks
├── stories/            # Storybook stories
└── App.jsx            # Main application component
```

## State Management

The application uses React Context for state management:

- **TodoContext**: Manages todo items state and actions (add, remove, toggle)
- **ThemeContext**: Handles theme configuration and styling

## Local Storage

Todos are automatically persisted to localStorage, so your tasks will remain even after closing the browser.

## Virtualization

The app uses `react-window` for efficient rendering of large todo lists, ensuring smooth performance even with hundreds of items.

## Author

**Isadora Caputo**
