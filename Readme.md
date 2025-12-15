# Daily Diary is a personal diary project

## Create a mock using Figma, msPaint or paper

## Use this repo and follow the instructions:
https://github.com/WebDev-WBSCodingSchool/wbs-react-template

## File structure
App            ← owns global state (entries, selectedEntry, modal flags)

├── Header

│   └── AddEntryButton      ← opens AddEntryModal

├── EntryList               ← displays cards sorted newest→oldest

│   └── EntryCard (repeated)┐

│       └── onClick → sets selectedEntry + opens ViewEntryModal

├── AddEntryModal           ← form to create a new entry

│   └── EntryForm

└── ViewEntryModal          ← shows full details for selected entry

    └── EntryDetails



## ID	Functional Requirement	Description
### FR001	Public GitHub Repository	
Store all code in a single public repo; do not add instructors as collaborators.

### FR002	Incremental Development with PRs	
Merge every change into main via Pull Requests.

### FR003	React + Vite Setup	
Scaffold the app with Vite and use React as the UI framework.

### FR004	TailwindCSS via npm	Install 
Tailwind through npm and configure it with Vite.

### FR005	State & Effects Management	
Use React hooks (useState, useEffect, etc.) appropriately for UI state and side-effects.

### FR006	Add Entry Button	
Provide an “Add Entry” button that opens an entry-creation modal. Control showing/hidding the modal with state. A simple form will do.

### FR007	Add Entry Form Fields	
Form must collect Title, Date, Image URL, Content.

### FR008	LocalStorage Persistence	
Store diary entries as an array in localStorage

### FR009	One-Entry-Per-Day 
Check	If an entry already exists for the selected day, prompt the user to come back the next day.

### FR010	Form Validation	
Block submission unless all fields are populated.

### FR011	Homepage List	
Display diary entries sorted newest-first.

### FR012	Load Entries on Startup	
Read and render stored entries when the app first mounts.

### FR013	Card Layout	
Show each entry as a card with preview image, date and title.

### FR014	Entry Detail Modal	
Clicking a card opens a modal showing full entry (title, date, image, content). Control showing/hidding the preview modal, as well as its content, with state.

### FR015	Static-Site Deployment to Render	
Build the app with Vite and deploy the static assets on Render.



## Resources:

https://react.dev/

https://tailwindcss.com/docs/guides/vite

https://docs.render.com/static-sites

https://playground.wbscod.in/static/web-apis-storage/1




## Summary of why this setup is beneficial:

Vite provides a fast and smooth development experience with its optimized build tool.

React offers a flexible and component-based architecture for building user interfaces.

Tailwind CSS delivers utility-first styling, enabling rapid and consistent design across your project.

Daisy UI supplies a collection of pre-designed components, streamlining the process of building beautiful and responsive interfaces.
