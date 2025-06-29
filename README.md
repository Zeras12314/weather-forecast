Weather Forecast App 🌤️
A simple, responsive weather forecast app built with Angular.

This was developed as a 24-hour code challenge to demonstrate UI/UX design skills, Angular best practices, clean architecture, and integration with third-party APIs (Auth0, OpenWeatherMap).

✨ Features
Login with GitHub using Auth0

Public Landing Page with welcome message and login button

Protected User Page with:

User's GitHub profile picture, name, and link

Search for current city weather

Weather Data Page:

Displays weather details for entered city

Responsive design for mobile and desktop

Authenticated routes protected by AuthGuard

Persistent authentication with page refresh

Loading spinner while data is fetched

Error handling for invalid city input

🗂️ Project Structure
Organized to follow enterprise-level Angular best practices:

src/
├── app/
│   ├── components/
│   │   ├── landing-page/
│   │   ├── user-page/
│   │   ├── weather-data/
│   │   ├── loading-spinner/
│   │   └── shared/
│   │       └── header/
│   ├── services/
│   │   ├── user.service.ts
│   │   └── store.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── models/
│   │   ├── forecast-data.model.ts
│   │   └── user.model.ts
│   └── app.routes.ts
└── styles/
    ├── _color.tokens.scss
    ├── _font.tokens.scss
    ├── _space.tokens.scss
    └── styles.scss

✅ Components: LandingPage, UserPage, WeatherData, Header, LoadingSpinner
✅ Shared Components: A dedicated shared folder for reusable UI elements. Developers can easily add more shared components here.
✅ Services:

userService for authentication, user data, and session management

storeService for weather data persistence across routes
✅ Guards: AuthGuard to protect authenticated routes
✅ Models: Strongly typed interfaces for User and ForecastData

🎨 UI/UX Design with Adobe XD
Before development, I created a custom UI design in Adobe XD specifically for this challenge:

Planned layout, typography, colors, and spacing

Included both mobile and desktop breakpoints

Ensured consistent design language throughout the app

Served as a single source of truth for building responsive, reusable components

Demonstrated a professional design-to-code workflow

This step was optional in the challenge, but I included it to showcase my "eye for design" and how I work in real-world projects where design and development are closely aligned.

💻 Styling and Theming
SCSS modules with clear, atomic tokens:

Color tokens for consistent theme colors

Font tokens for typography

Spacing tokens for layout and responsiveness

Global SCSS imports for easy maintenance

Responsive media queries for mobile-first design

⚙️ Tech Stack
Angular (standalone components)

TypeScript with strict typing

Auth0 (GitHub OAuth2)

OpenWeatherMap API

Bootstrap for layout and responsive grid

Adobe XD for UI design

🚀 Getting Started
Clone the repo:
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app
Install dependencies:
npm install

Run locally:
ng serve


✅ Auth0 Setup
Note: You'll need your own Auth0 app.

Create an Auth0 Application

Enable GitHub social connection

Add your callback URL

Configure auth_config.json if needed

