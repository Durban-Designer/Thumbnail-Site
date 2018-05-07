This server is designed to serve a quasar built SPA with compression and other performance optimizations
before beginning on your local machine run **first go through the quasar.conf.js configuration tutorial**

$ quasar build

this will build an optimized servable version of your quasar application in project_dir/dist/spa-mat/
copy the entire contents of the folder (Should be an index.html a js, statics, fonts folder, a css file) and paste it in the views folder of this server, then run;

$ npm install --save less less-loader axios
$ npm install
$ npm start

if it says live at port 8080 then the server is working as expected, otherwise follow normal bugfixing protocol

to configure pm2 to keep this running indefinetely review this tutorial for installation (https://www.quickvenom.org/ubuntu)
use the following to start and run this app with pm2;

$ pm2 start app.js -i 0 --name "webServer"