# innover-io-frontend

Command line instructions
```
Git global setup
git config --global user.name "Enter your github username"
git config --global user.email "Github user email"
```

Create a new repository
```
git clone https://github.com/Eshwar4299/innover-io-frontend
cd innover-io-frontend
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Existing folder
```
cd existing_folder
git init
git remote add origin https://github.com/Eshwar4299/innover-io-frontend
git add .
git commit -m "Initial commit"
git push -u origin master
```

Existing Git repository
```
cd existing_repo
git remote add origin https://github.com/Eshwar4299/innover-io-frontend
git push -u origin --all
git push -u origin --tags
```
Required installations before running the code
```
Node version : 8+
Install mongodb
create .env file in your local repository
```
Copy below script in env file
```
MIGRATE_dbConnectionUri='mongodb://localhost/innoverio'
MONGO_URI='mongodb://localhost/innoverio'
SESSION_SECRET='123456789'
PRODUCTION_URL=https://dev.innover.io
PORT=3000
NODE_ENV=development
```
Install the dependencies
```
npm install
yarn install
```

To start the application
```
yarn run dev
```

Have Fun !!!
