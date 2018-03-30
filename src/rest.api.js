const express = require('express');

export default class RestApi {
    app;
    port = 3000;
    constructor() {
        this.app = express();
    }

    sayHello() {
        this.app.get("/", (req, res) => {
            res.status(200).send("It's Working !");
        });
    }

    getApp(){
        return this.app;
    }
    
    startServer() {
        this.app.listen(this.port, () => {
            "server is listerning on port no" + this.port;
        });
    }
}