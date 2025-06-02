# ai-agents-samples

## Football Team Schedule Finder Prototype

This project is a simple web application prototype that allows a user to enter their favorite football team and (eventually) see a schedule of games and links to purchase tickets.

Currently, it features a working UX with **mock data for 'Real Madrid'**.

### Files

*   `index.html`: The main HTML file containing the structure of the application.
*   `style.css`: Contains the CSS styles for the application.
*   `script.js`: Contains the JavaScript logic, including the mock data for 'Real Madrid'.
*   `README.md`: This file, providing instructions.

### How to Run and Test

**If you are starting from the root of the repository:**
1.  Navigate to the `football-schedule-retriever-app` directory (this directory).

**Once you are in the `football-schedule-retriever-app` directory:**
1.  Ensure the following files are present:
    *   `index.html`
    *   `style.css`
    *   `script.js`
    *   `README.md` (this file)
2.  **Open `index.html` in a web browser:**
    *   Double-click on `index.html`, or right-click and choose "Open with" your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).
3.  **Test the application:**
    *   The page should display a heading "Football Team Schedule Finder", an input field, and a "Search" button.
    *   **To see the mock data for Real Madrid:**
        *   Leave the input field empty and click "Search".
        *   Or, type "Real Madrid" (case-insensitive) into the input field and click "Search".
    *   You should see a list of mock game schedules for Real Madrid, including opponent, date, time, location, and placeholder ticket links.
    *   **To test the behavior for other teams:**
        *   Type any other team name (e.g., "FC Barcelona") into the input field and click "Search".
        *   A message should appear indicating that mock data is only available for 'Real Madrid'.

This prototype demonstrates the basic front-end structure and mock data functionality.