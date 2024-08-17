# Príncipe + Real

<br>

# Quick Compo

<br>

## Description

A platform that creates and promotes synergies between the various players in the neighborhood, such as residents, stakeholders, shop owners, public entities and all those who have a direct or indirect connection to our area – Principe Real.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Sign up:** As an anonymous user, I can sign up on the platform so that I can start posting services.
- **Login:** As a user, I can log in to the platform so that I can access my profile and start posting services.
- **Logout:** As a logged-in user, I can logout from the platform so no one else can use my account.
- **Home:** As a logged in user I want to access the home page.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of services I have created or used depending on my profile (offering vs searching).
- **Edit Profile:** As a logged in user I can access the edit profile page so that I can edit the information about my account.
- **Delete Profile:** As a logged in user I want to be able to delete my account.
- **Create Services:** As a logged in user I can access the marketplace so that I can create a service.
- **Admin Approve/Reject Services:** As an admin, I can approve or reject job offers, allowing or preventing them from being displayed on the platform.

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                   | Pages        | Permissions                | Behavior                                              |
| ---------------------- | ------------ | -------------------------- | ----------------------------------------------------- |
| `/login`               | LoginPage    | anon only `<AnonRoute>`    | Login form, navigates to home page after login.       |
| `/signup`              | SignupPage   | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup.     |
| `/`                    | HomePage     | public `<Route>`           | Home page.                                            |
| `/profile`             | Profile      | user only `<PrivateRoute>` | User (donor or needful) profile for the current user. |
| `/profile/edit`        | EditProfile  | user only `<PrivateRoute>` | Edit user profile form.                               |
| `/marketplace`         | MarketPlace  | user only `<PrivateRoute>` | Create/request service form.                          |
| `/marketplace/create`  | MarketPlace  | user only `<PrivateRoute>` | Create/request service form.                          |
| `/marketplace/edit`    | MarketPlace  | user only `<PrivateRoute>` | Create/request service form.                          |
| `/neighborhood/`       | Neighborhood | user only `<PrivateRoute>` | Create/request service form.                          |
| `/neighborhood/create` | Neighborhood | user only `<PrivateRoute>` | Create/request service form.                          |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- MarketPlacePage

Components:

- Button
- Navbar
- Footer
<!-- - Feed -->
- isPublic
- isPrivate

<br>

# Server / Backend -->

## Models

**User model**

```javascript
{
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['poster', 'admin'], default: 'poster' },
  service: [{type: Schema.Types.ObjectId, ref: 'Service'}]}
```

````

**Service model**

```javascript
{
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required."],
    },
    poster: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "Poster is required."],
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    }
}
````

**Market model**

```javascript
{
  name: { type: String },
  adress: { type: String },
  brand: { type: String },
  description: {},
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
}
```

```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                                                                                     |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| GET        | `/auth/verify`         |                              | 200            | 400          | verify if the user is logged in                                                                                                               |
| GET        | `/auth/updateToken`         |                              | 200            | 400          | get user token updated                                                                                                               |
| GET         | `/api/profile/:id`     |                              |                |              | show specific profile                                                                                                            |
| PUT         | `/api/profile/:id`     | { firstName, lastName, email, phoneNumber }                | 201            | 400          | edit profile                                                                                                                     |
| DELETE      | `/api/profile/:id`     |                              | 200            | 400          | delete profile                                                                                                                   |
| POST         | `/service`           |                              | 201            | 400          | create new service                                                                                                                      |
| GET         | `/service`           |                              | 201            | 400          | read service                                                                                                                      |
| GET         | `/service/:id`           |                              | 201            | 400          | read one service                                                                                                                      |
| PUT         | `/service/:id`           |                              | 201            | 400          | update service                                                                                                                      |
| DELETE         | `/service/:id`           |                              | 201            | 400          | delete basket                                                                                                                      |
| POST         | `/neighborhood`           |                              | 201            | 400          | create new service                                                                                                                      |
| GET         | `/neighborhood`           |                              | 201            | 400          | read service                                                                                                                      |
| GET         | `/neighborhood/:id`           |                              | 201            | 400          | read one service                                                                                                                      |
<br>

## API's

<br>

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/xUKD8u0B/principe-real) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Lucas Telles - <github-username> - <https://github.com/lltelles>

João Carrilho - <github-username> - <https://github.com/jcarrilho>
```
