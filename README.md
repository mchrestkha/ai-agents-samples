# ai-agents-samples

## Football Team Schedule Finder Prototype

This project is a simple web application prototype that allows a user to enter their favorite football team and (eventually) see a schedule of games and links to purchase tickets.

Currently, it features a working UX with **mock data for 'Real Madrid'**.

### Files

*   `football-schedule-retriever-app/index.html`: The main HTML file containing the structure of the application.
*   `football-schedule-retriever-app/style.css`: Contains the CSS styles for the application.
*   `football-schedule-retriever-app/script.js`: Contains the JavaScript logic, including the mock data for 'Real Madrid'.

### How to Run and Test

1.  **Navigate to the `football-schedule-retriever-app` directory.**
2.  **Ensure the following files are present in this directory:**
    *   `index.html`
    *   `style.css`
    *   `script.js`
3.  **Open `index.html` (located in `football-schedule-retriever-app/`) in a web browser:**
    *   From within the `football-schedule-retriever-app` directory, double-click on `index.html`, or right-click and choose "Open with" your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).
4.  **Test the application:**
    *   The page should display a heading "Football Team Schedule Finder", an input field, and a "Search" button.
    *   **To see the mock data for Real Madrid:**
        *   Leave the input field empty and click "Search".
        *   Or, type "Real Madrid" (case-insensitive) into the input field and click "Search".
    *   You should see a list of mock game schedules for Real Madrid, including opponent, date, time, location, and placeholder ticket links.
    *   **To test the behavior for other teams:**
        *   Type any other team name (e.g., "FC Barcelona") into the input field and click "Search".
        *   A message should appear indicating that mock data is only available for 'Real Madrid'.

This prototype demonstrates the basic front-end structure and mock data functionality.