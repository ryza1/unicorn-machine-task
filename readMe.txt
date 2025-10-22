To get up and running:
```npm run setup```
Runs npm install for frontend and backend directories as this is a monorepo.

```npm run start```
First builds the frontend for production and then starts the backend server so that you have everything necessary for the app to talk to it's backend. http://localhost:5000 should serve the frontend app while localhost:5000/api/* will be used for backend.

```npm run frontend-dev``` 
to run the frontend only at http://localhost:3000

You probably need to alter your ```CORS_ROOT = "http://[::1]:5000/"; ``` in frontend/calls/calls.js to "http://localhost:5000/" depending on what your system uses for local development. I was on WSL so please check.


Things I wish I had done: not used the bleeding edge version of NestJS as it had been a while but I was hoping to avoid using a complicated Express boiletplate I use lately. NextJS would have been smart but I have not been on React for over a year. So I thought just use plain Vue for safety. 

On the actual task: I greatly underestimated my time to get back into webdev mode. Style and frontend UI did not feature today as I was too busy trying to reinvent the wheel with NestJS and fetch API (still not sure why fetch did not work). I would have liked to do backend first with tests and then frontend. 

I would have liked on backend:
- Validation
- Some safety and middleware.
- a way to save each unique user id to vote to prevent nefarious sneaky voting as I was only using frontend localStorage to prevent double voting

on frontend: 
- some layout and style
- redirection for once you have voted to show the results.
- results page
- when revisiting the page after voting, results page. When revisiting as the creator (need roles) show results page with option to lock the poll.
- modals instead of alerts

- features like allowing more than 1 option in the poll, and timed polls (24 hour)
- some storage as this db is cleared on backend restart.


