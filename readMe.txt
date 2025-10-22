To get up and running:
```npm run setup```
Runs npm install for frontend and backend directories as this is a monorepo.

```npm run start```
First builds the frontend for production and then starts the backend server so that you have everything necessary for the app to talk to it's backend. http://localhost:5000 should serve the frontend app while localhost:5000/api/* will be used for backend.

```npm run frontend-dev``` 
to run the frontend only at http://localhost:3000