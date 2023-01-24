<div align="center"><img src="https://medieinstitutet.se/wp-content/uploads/2019/04/logomedieinstitutet-370x73.png"></div>
<h1 align="center">Fullstack app with React & Django</h1>
<p align="center"><strong>Final project for eCommerce web-development program @ Medieinstitutet</strong>
<br/>WIE21S - Examensarbete</p>

## About
Gashapon Arcade Machine Simulator developed with React, Redux, Django and TailwindCSS. A simple browser game, where users can buy coins for a gachapon vending machine in order to obtain a random sticker. 

## Key Features
 - Bundled with Webpack, no *create-react-app* used
 - React hooks & functional components
 - State management with Redux & RTK
 - Simple JWT User Authentication with Django REST Framework

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
```

### External Links
 - <a href="https://trello.com/b/GNjIDuL0/examensarbete-liudmila">Project Trello Board (logs and docs)</a>
 - <a href="https://github.com/genshindev/api">Genshin Impact API (used for character info puller)</a>

## Credits

- Liudmila Kazakbaeva

##  Copyright
This project is licensed under the terms of the MIT license and protected by Udacity Honor Code and Community Code of Conduct. See <a href="LICENSE.md">license</a> and <a href="LICENSE.DISCLAIMER.md">disclaimer</a>.
