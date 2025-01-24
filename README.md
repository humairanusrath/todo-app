Discription of each file in the project:

1. `App.jsx`

- Purpose: Acts as the central component for the application, managing the overall flow and logic of the app.
- Key Functionalities:
  - User Authentication: Handles login/logout functionality using mock credentials (username and password) stored in the code.
  - Task Management: Allows users to add, edit, delete, and mark tasks as completed. Tasks are stored in the state and sorted by priority.
  - Weather API Integration: Retrieves weather data from a public weather API when a task is associated with a location.
  - LocalStorage: Saves tasks to localStorage and retrieves them on page reload.
  - Conditional Rendering: Shows the login screen when the user is not authenticated and the task management system when logged in.
- Key Components Imported:

* TaskInput: For adding tasks.
* TaskList: For displaying the list of tasks.
* Styling: Imports App.css for global styles.

2. `TaskInput.jsx`

- Purpose: Provides a user interface for adding new tasks with additional features like selecting a priority level and a location for weather.
- Key Functionalities:

* Task Input: Accepts the name of the task through an input field.
* Priority Selection: Allows users to select a task priority (High, Medium, or Low) through a dropdown.
* Location Dropdown: Adds a dropdown for users to select a location, which triggers a weather API fetch.
* Validation: Ensures the task name is not empty before adding it to the list.
* Add Task Functionality: Passes the new task object (with id, text, priority, and location) to the addTask function in the App component.
* Styling: Includes a dedicated TaskInput.css file for layout and design, ensuring the input, dropdowns, and buttons are visually appealing.

3. `TaskList.jsx`

- Purpose: Displays the list of tasks and provides options to manage them.
- Key Functionalities:

* Task Display: Lists tasks along with their names, priorities, and weather (if a location is selected).
* Edit Functionality: Allows tasks to be updated inline.
* Delete Functionality: Provides a delete button to remove tasks from the list.
* Completion Toggle: Allows users to mark tasks as completed or incomplete.
* Weather Integration: Fetches and displays the current weather for tasks that have a location selected.
* Styling: Includes TaskList.css for ensuring task elements, buttons, and weather details are organized and styled effectively.

4. `App.css`

- Purpose: Provides global styles for the entire application.
- Key Features:

* Styles the overall page layout, including spacing, margins, and backgrounds.
* Includes reusable styles for headers, buttons, and other UI elements.
* Ensures a consistent visual theme across components.

5. `TaskInput.css`

- Purpose: Contains styles specific to the TaskInput component.
- Key Features:

* Styles for the input field (e.g., padding, borders, and font).
* Customizes the appearance of the priority and location dropdowns.
* Button styling for the "Add Task" button, ensuring it stands out and is easy to interact with.

6. `TaskList.css`

- Purpose: Contains styles specific to the TaskList component.
- Key Features:

* Ensures tasks are displayed in a neat and readable format (e.g., list items).
* Custom styles for completed tasks (e.g., strikethrough or dimmed appearance).
* Styles for edit and delete buttons, ensuring they are easily distinguishable.
* Weather-related styling to display temperature and condition information clearly.
