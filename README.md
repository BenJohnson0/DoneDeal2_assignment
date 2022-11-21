# DoneDeal2
Web Development & Deployment assignment, which requires us to "Develop a web application that interacts
with a Mongo database via Node.JS and that includes an authentication mechanism. 
The application must implement the 4 CRUD operations (Create/Read/Update/Delete) at least once."

Created by Carl Tallon (frontend) & Ben Johnson (backend)

Our website is based on buying and selling cars. Users can create and account, which is stored in a MongoDB collection,
login and view their "favourite" cars, once authenticated. if users are not logged in, they can only browse the Register, Buy and Sell pages.
On the Buy and Sell pages, users can filter various cars by colour, engine size and price. On the Account page, users can change their profile picture
password and personal details.

Upon cloning the repo, cd into the server directory and run "node server", then cd into the client directory and run "npm start". All user details are
stored in the MongoDB collection, so this must be running before the app is started. 

