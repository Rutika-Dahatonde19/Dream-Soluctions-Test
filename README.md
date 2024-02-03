# Blog App

This is a simple blog application built using Node.js, Express.js, PostgreSQL, HTML, CSS, and JavaScript.

## Table of Contents
- [Project Overview](#project-overview)
- [Database Setup](#database-setup)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Blog App is a web application for creating and managing blog posts. Users can register, create posts, comment on posts, and interact with other users through likes. The application is built with a Node.js backend using Express.js, and the data is stored in a PostgreSQL database.

## Database Setup

### Database Name





### Tables

1. **UsersProfile**
   - Stores user profiles including full name, bio, and profile image.

2. **Users**
   - Stores user authentication information.

3. **Session**
   - Manages user sessions.

4. **Comment**
   - Stores comments made by users on blog posts.

5. **Like**
   - Tracks user likes on posts.

6. **Category**
   - Represents different categories for blog posts.

7. **PostCategory**
   - Associates posts with their corresponding categories.

8. **Media**
   - Manages media files associated with blog posts.

9. **Post**
   - Stores blog posts including title, content, and publication date.

### Creating the Database and Tables

1. Make sure PostgreSQL is installed on your machine.
2. Create a new database named `blog_app`.
3. Execute the SQL scripts provided in the `sql` folder to create the required tables.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rutika-Dahatonde19/blog-app.git


Install dependencies:cd blog-app
npm install
Run the application:npm start
