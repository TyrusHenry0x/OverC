# OverC
## Overview
OverC is an application that's dedicated to taking your day-to-day tasks, and creating a flushed, organized platform that helps maintain productivity throughout your day.

<br>

### Wireframes

https://www.figma.com/file/4OOrlEsz3kGegFs4vZJ51O/OverC?node-id=0%3A1
![Wireframes](https://i.imgur.com/z4KiTF3.png)
![Wireframes](https://i.imgur.com/T9jv6gg.png)
![Wireframes](https://i.imgur.com/nztbYI3.png)
![Wireframes](https://i.imgur.com/dyEigEZ.png)

## MVP
<!-- 
### Planning
- Restful JSON API on Ruby.
- Projects and Tasks tables.
- Full Crud functionality for Projects and Tasks.
 -->
 
 ### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React alllows me to compose a complex UI from small and isolated pieces of code |
|   React Router   | Router enables the navigation among views of various components in a React Application |
|   Ruby on Rails  | Rails is an open source framework for Web development in Ruby. Rails will be used to create the apps database |
<br>

### Client (Front End)
- Home Page
- Constellation Page
- About Page
- Navbar

``` src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Home
            |__Home.css
            |__Home.jsx
      |__ Nav
            |__Nav.css
            |__Nav.jsx
      |__ Header
            |__Header.css
            |__Header.jsx
      |__ Footer
            |__Footer.css
            |__Footer.jsx
      |__ Constellations
            |__Constellations.css
            |__Constellations.jsx
      |__ Tasks.jsx
            |__Tasks.css
            |__Tasks.jsx
      |__ About.jsx
            |__About.css
            |__About.jsx
|__services/
    |__apiConfig.js
    |__auth.js
    |__posts.js
|__App.css
|__App.js
|__index.css
|__index.js
```

| Task | Priority | Estimated Time | Actual Time |
| :--- | :---: | :---: | :---: |
| Back end set up | H | 4H | TBD |
| Front End Development | H | 12H | TBD | 
| Debugging | L | 3H | TBD |
| Styling | H | 14H | TBD |
| Testing and Documentation update	| H | 1H | TBD |
| Presenting | H | 12/16 | Incomplete |

### Server(Back End)
- Relationships between Session and Task tables
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between tables
<br>

### Styling
- Styled with CSS
- Use Flexbox or Grid in layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
<br>

### Deployment 
- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.
- Deploy early and often.
<br>

### PMVP
- Login/Authentication
- Sign In
- Sign Up ("Create an Account")
- Home Page (Signed In)
- Live timer within tasks

### ERD
![erd](https://i.imgur.com/03vyqND.png)

### Component Hierarchy
![Hierarchy](https://i.imgur.com/auP8bPn.png)
