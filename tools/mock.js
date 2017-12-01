/* eslint-disable no-console */
import jsonServer from 'json-server';
import enableDestroy from 'server-destroy';
import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import { chalkSuccess } from './chalkConfig';
import bodyParser from 'body-parser'

let server = null;
const db = './tools/db.json';
const middlewares = jsonServer.defaults();
let router = jsonServer.router(db);
const token = "7xPJPuVfTse2pFHc5Pfu";


function isAuthorized(req) {
    return req.get("Authorization") == token;
}

function start() {
    const app = jsonServer.create();
    app.use(middlewares);
    app.use(bodyParser.json());


    app.use(function (req, res, next) {
        
        if (/.*\.json$/.test(req.originalUrl)) {

            return res.send({ success: true, result: JSON.parse(fs.readFileSync('./public/' + req.originalUrl.replace('/api/v1/', ''))) })
        }

        next()

    });

    app.post('/api/v1/auth', function (req, res) {
        if (req.body.token == '7xPJPuVfTse2pFHc5Pfu') {
            setTimeout(() => { res.send({ success: true, result: {} }) }, 800)
        } else {
            setTimeout(() => { res.send({ success: false, result: {} }) }, 800)
        }


    });

    app.post('/api/v1/login', function (req, res) {
        
        res.send({ success: true, result: { token: '7xPJPuVfTse2pFHc5Pfu' } })

    });
    // Add this before app.use(router)
    app.use(jsonServer.rewriter({
        '/api/v1/': '/'
    }));

    app.use(router);
    server = app.listen(9999, function () {
        console.log(chalkSuccess('Mock Server is running'));
    });
    // Enhance with a destroy function
    enableDestroy(server);
}

// Watch .js or .json file
// Since lowdb uses atomic writing, directory is watched instead of file
chokidar
    .watch(path.dirname(db))
    .on('change', function (file) {

        console.log(file)
        if (/^.+\.js$/.test(file)) return

        const obj = JSON.parse(fs.readFileSync(file));
        const isDatabaseDifferent = !_.isEqual(obj, router.db.getState());
        if (isDatabaseDifferent) {
            console.log(chalkSuccess('File was changed, Reloading...'));
            server && server.destroy();
            router = jsonServer.router(obj);
            start();
        }
    });

start();
