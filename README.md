[![Build Status](https://travis-ci.org/aaron-price/aaroncoding-frontend.svg?branch=master)](https://travis-ci.org/aaron-price/aaroncoding-frontend)

# You are here
This is the frontend repo for https://aaroncoding.com

Find the backend repo here https://github.com/aaron-price/aaroncoding-backend

# Tour
This app was built using Reactjo. It combines node, express, react, next.js, scss, and material-ui.

The frontend is mostly divided into stateful containers (found in /pages) and stateless components (found in /components).

Thanks to Next.js, most of the routes are pretty intuitively found. For example aaroncoding.com/about starts at /pages/about.js and then pulls in components from /components.

Styles follow SMACSS and can be found in /styles

Miscellaneous functions are found in /services

When in doubt, check server.js for any other routes, especially ones that are not GET requests.
