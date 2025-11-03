
# Recipe Finder

  

A React Native Recipe Finder application built with Expo, allowing users to search for recipes, view detailed meal information, and save their favorite recipes.

  

## 📋 Overview

  

This project was built as a test project for a technical assessment. It implements a Recipe Finder app that uses the DummyJSON API to fetch and display recipe information. Users can search for recipes, view detailed meal information including ingredients and instructions, and manage their favorite recipes.

  

## 🎬 Demo

  

<video src="https://github.com/poormohammadi/recipe-finder-demo/raw/refs/heads/main/recipe-finder-demo.mp4" controls width="50%"></video>

  

**[📥 Download Demo Video](https://github.com/poormohammadi/recipe-finder-demo/raw/refs/heads/main/recipe-finder-demo.mp4)**

  

## 🚀 Getting Started

  

### Prerequisites

  

- Node.js (v18 or higher recommended)

- npm or yarn

- Expo CLI (optional, but recommended)

  

### Installation

  

1. Install dependencies:

  

```bash

npm  install

```

  

2. Start the Expo development server:

  

```bash

npx  expo  start

```

  

3. Run on your preferred platform:

  

```bash

# iOS Simulator

npm  run  ios

  

# Android Emulator

npm  run  android

  

# Web browser

npm  run  web

```

  

## 🛠️ Technology Stack

  

-  **Framework**: React Native with Expo

-  **Navigation**: Expo Router (file-based routing)

-  **Template**: Expo Tabs Template (`npx create-expo-app@latest --template tabs`)

-  **Styling**: Styled Components

-  **API Client**: Axios

-  **State Management**: React Context API

-  **Persistence**: AsyncStorage (for favorites)

-  **TypeScript**: Full TypeScript support

-  **Testing**: Jest + React Native Testing Library

  

## 📱 Features

  

### Screens

  

#### Home Screen

- Search bar for finding recipes

- List of recipes displayed with thumbnails and titles

- Real-time search functionality

  

#### Meal Detail Screen

- Large recipe image

- Title and category information

- Complete ingredient list

- Step-by-step cooking instructions

- "Add to Favorites" / "Remove from Favorites" button

- Dynamic button text based on favorite status

  

#### Favorites Screen

- List of all favorited recipes

- Displays thumbnails and titles

- Persistent storage across app restarts

  

### API Integration

  

The app uses the [DummyJSON Recipes API](https://dummyjson.com/docs/recipes):

  

-  **List meals**: `GET https://dummyjson.com/recipes?limit=10&skip=0&select=name,image`

-  **Search meals**: `GET https://dummyjson.com/recipes/search?q=<query>&limit=10&skip=0&select=name,image`

-  **Meal details**: `GET https://dummyjson.com/recipes/<id>`

  

### Additional Features

  

- ✅ **Persistent Favorites**: Favorites are saved using AsyncStorage and persist across app restarts

- ✅ **TypeScript**: Full type safety throughout the application

- ✅ **Component Testing**: Unit tests for key components using Jest

  

## 📁 Project Structure

  

```

recipe-finder/

├── api/ # API client and endpoints

├── app/ # Expo Router screens and navigation

│ ├── (tabs)/ # Tab-based navigation screens

│ └── meal/ # Meal detail screens

├── assets/ # Images and static assets

├── components/ # Reusable UI components

│ ├── back-button/

│ ├── rating-star/

│ ├── recipe-card/

│ ├── recipe-card-list/

│ ├── search-box/

│ └── typography/

├── contexts/ # React Context providers

├── icons/ # SVG icon components

├── templates/ # Screen templates

├── theme/ # Theme configuration

└── types/ # TypeScript type definitions

```

  

## 🧪 Testing

  

Run tests with:

  

```bash

npm  test

```

  

The project includes unit tests for components using Jest and React Native Testing Library.

  

## 📝 Development Notes

  

### Project Setup

  

This project was initialized using the Expo tabs template:

  

```bash

npx  create-expo-app@latest  --template  tabs

```

  

This template provided the base structure for the bottom tab navigation used in the app.

  

### Architecture

  

-  **Components**: Reusable UI components with styling and tests

-  **Templates**: Screen-level templates separated from routing

-  **Context**: React Context API for managing global state (favorites)

-  **API Layer**: Centralized API client using Axios

  

## 🎯 Future Improvements (TODO)

  

As this was a test project completed within a time constraint, the following improvements are recommended for production:

  

- [ ] **Add i18n (Internationalization)**: All text should be externalized for internationalization support - no hardcoded strings in real-world projects

- [ ] **Separate widgets and components**: Create a clear distinction between reusable components (widgets) and smaller UI components

- [ ] **Add better networking tools like react-query**: Caching and pre-built hooks help handle HTTP requests more efficiently with less code.

- [ ] **Add Linters and Pre-commit**: In real-world projects code needs to be checked and format before being commited.


  

  

## 🔗 Resources

  

- [Expo Documentation](https://docs.expo.dev/)

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

- [DummyJSON API Documentation](https://dummyjson.com/docs/recipes)

- [React Native Documentation](https://reactnative.dev/)