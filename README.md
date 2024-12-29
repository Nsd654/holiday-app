# Holiday Management App

This is a full-stack application for managing holidays. The backend is built with Django and Django REST Framework, while the frontend is built with React. The app fetches holiday data from the [Calendarific API](https://calendarific.com/) and displays it to the user.

## Features

- Search holidays by country and year.
- Display holiday name, description, and date.
- Filter holidays by name (e.g., "Christmas").
- Caching of holiday data to reduce API calls.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Django, Django REST Framework
- **API**: Calendarific API
- **Caching**: Local memory caching in Django

## Prerequisites

Before you start, make sure you have the following installed:

- Python 3.x
- Node.js and npm
- Django
- React

##setup and usage.
*Environment is the virtual envirinment
*Holiday_management is the project name
   1.Holiday management(front-end)
   2.Holidays(backend)

## Backend Setup (Django)

1. Clone the repository or navigate to your project folder in the terminal.
2.*Create virtual environment
   ```bash
   python -m venv envname
   cd envname
   cd scripts
   activate
   cd..
   cd..
   pip install django
3. **Create a Django project and app**:
   ```bash
   django-admin startproject holiday_management
   cd holiday_management
   python manage.py startapp holidays
4.**Install the required dependencies:

   Install Django REST Framework and python-decouple:
   
   pip install djangorestframework python-decouple
5.**Configure settings:
   In settings.py, add rest_framework and holidays to INSTALLED_APPS.
   - Create a `.env` file in the root of the project with your Calendarific API key:

     ```
     CALENDARIFIC_API_KEY=your_api_key
     ```
6.**Create the view in views.py to fetch holiday data from the Calendarific API, cache the results, and return them via a       REST API endpoint.

7.**Create the URL routes in urls.py to expose the API endpoint for fetching holidays.

8.**Run migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
9.**Run the Django server:
    ```bash
    python manage.py runserver
    ```
The backend will be running on http://127.0.0.1:8000/.

##Frontend Setup (React)
1.**Create a new React app:

   ```bash
   npx create-react-app holiday-management
   cd holiday-management
   npm install axios tailwindcss
   ```

2.**Set up Tailwind CSS:

   Run npx tailwindcss init to create the tailwind.config.js file.
   Configure the Tailwind CSS in tailwind.config.js:
   ```bash
      module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3.**Build the React components:

   Use the App.js file to handle state and make API calls to the backend to fetch holidays.
   Style your components using Tailwind CSS.
4.**Run the React app:

   ```bash
   npm start
   ```
   
The frontend will be running on http://localhost:3000/

