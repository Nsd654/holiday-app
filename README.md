# Holiday Management App

This is a full-stack web application built with Django for the backend and React for the frontend. It allows users to search for public holidays by country and year using the Calendarific API.

## Features

- Fetch holidays data from the Calendarific API.
- Display holidays by country and year.
- Caching of API responses to optimize performance.

## Setup and Usage

### Backend (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/holiday-management-app.git
   cd holiday-management-app
   ```

2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of the project with your Calendarific API key:

     ```
     CALENDARIFIC_API_KEY=your_api_key
     ```

4. Apply the migrations:

   ```bash
   python manage.py migrate
   ```

5. Run the Django development server:

   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Go to the `frontend` directory:

   ```bash
   cd holiday-management
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

The app will be running on [http://localhost:3000](http://localhost:3000).
