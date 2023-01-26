<div align="center"><img src="https://medieinstitutet.se/wp-content/uploads/2019/04/logomedieinstitutet-370x73.png"></div>
<h1 align="center">Fullstack app with React & Django</h1>
<p align="center"><strong>Final project for eCommerce web-development program @ Medieinstitutet</strong>
<br/>WIE21S - Examensarbete</p>

## About
Gashapon Arcade Machine Simulator developed with React, Redux, Django and TailwindCSS. A simple browser game, where users can buy coins for a gachapon vending machine in order to obtain a random sticker. Users can register, login, purchase in-game coins and see the stickers they have obtained so far.

## Key Features
 - Bundled with Webpack, no *create-react-app* used
 - React hooks & functional components
 - State management with Redux & Redux Toolkit
 - Simple JWT User Authentication with Django REST Framework
 - Responsive TailwindCSS-based design

## Quick Setup

### Requirements
 - Node.js: ^12.0.0
 - NPM or any other Node.js package manager
 - Python ^3.0 
 - Django 4.1.4
 - djangorestframework ^3.14.0
 - djangorestframework_simplejwt ^4.8.0


```bash
# Install dependencies (from .\examensarbete)
pip install -r requirements.txt
# Serve API on localhost:8000 (from .\examensarbete)
python examensarbete/manage.py runserver
# Install dependencies (frontend, from .\examensarbete\frontend)
npm install
# Run webpack & build for development
npm run dev
# Build for production
npm run build

# admin
login: liudmila.kazakbaeva@gmail.com // pass: QtSBqf3/Y6$NDgD
```

## External Links
 - <a href="https://trello.com/b/GNjIDuL0/examensarbete-liudmila">Project Trello Board (logs and docs)</a>
 - <a href="https://github.com/genshindev/api">Genshin Impact API (used for character info puller)</a>
 - Postman requests for the backend: [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/24909388-5b00dc0d-2833-4ea2-a1f6-e0cd38a4a771?action=collection%2Ffork&collection-url=entityId%3D24909388-5b00dc0d-2833-4ea2-a1f6-e0cd38a4a771%26entityType%3Dcollection%26workspaceId%3Df11ade43-fecb-45f1-8b62-cac414da3650#?env%5BGOTCHA%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvIiwic2Vzc2lvbkluZGV4IjowfV0=)

## Credits

- Liudmila Kazakbaeva

##  Copyright
This project is licensed under the terms of the MIT license and protected by Udacity Honor Code and Community Code of Conduct. See <a href="LICENSE.md">license</a> and <a href="LICENSE.DISCLAIMER.md">disclaimer</a>.
