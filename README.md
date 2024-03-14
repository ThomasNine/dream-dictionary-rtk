# Dream App With Json-server

This project is a React application bootstrapped with Vite, utilizing JSON-server for mock API development. It serves as a quick setup for frontend development with a mock backend. This project idea was inspired by [https://github.com/sannlynnhtun-coding/Dream-Dictionary].

## Features

### Responsive Design

Our app is built with a responsive design to ensure a seamless experience across various devices and screen sizes. Whether you're using a desktop, tablet, or smartphone, our app adapts to provide an optimal viewing and interaction experience.

### Save/Unsave Feature

With our save/unsave feature, you can easily bookmark items of interest. Simply click the save button to add an item to your saved list, and click again to unsave it. This feature enhances usability by allowing you to keep track of your favorite items.

### Notifications

Stay informed with our notification system. Receive real-time notifications for important events such as successful saves or errors. Our notification system keeps you updated and ensures a smooth user experience.

## Installation(

1.Clone the repository to your local machine:

```bash
git clone https://github.com/ThomasNine/dream-dictionary-rtk.git
```

2.Navigate to the project directory:

```bash
cd dream-dictionary-rtk/
```

3.Install dependencies:

```bash
npm install
```
The installation is complete.

### json-version( add no.4 step)
4.Json-server verion with RTK query
```bash
git checkout 59b0327c911a9010d7913b923312694e0d10367c
```
## Usage

To start the development server and JSON-server simultaneously,
for Json-server run:
### (only for json server version)

```bash
npm run api
```

### for development-server run:
### required for both
```bash
npm run dev
```

## Tech Stack

**Client:** React, Redux Toolkit, TailwindCSS, Shadcn/ui and Framer-Motion(page-changes animation)

**Server:** Json-server

## Screenshots

### home-page('/')
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/home-page.png)

### detail-page('/detail/:id')
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/detail-page.png)

### search-page('/search/:searchedWords')
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/search-page.png)

### saved-page('/saved')
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/saved-page.png)

### not-found-page
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/not-found-page.png)

### save&unsave feature with notifications
![App Screenshot](https://github.com/ThomasNine/dream-dictionary-rtk/blob/master/public/save&unsave.png)
