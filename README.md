
The separation of the front-end and back-end Application created by [ThinkJS](http://www.thinkjs.org) && [ReactJS](https://facebook.github.io/react/)

## Install dependencies

```
yarn install / npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```

## Front-End React
the directory is `view` , Front-End development please read `view/readme.md`  

```bash
├── src    // React
├── build  // dev mode build
├── common // thinkjs error page
├── home   // thinkjs index page
├── index.html
├── node_modules
├── package.json
├── readme.md
├── webpack.config.js
```

if you have Front-End React responsibility , open `view` directory. run `npm run dev` to develop the React.

## Back-End
if you want to test the front-end and back-end, 
just run `npm run build` in `view` directory, 
the `script` will auto-copy the `view/build/bundle.js` to `www/static/js/bundle.js` ,
so you can access the `react` page according `thinkjs` server (default: `http://127.0.0.1:8360/` )