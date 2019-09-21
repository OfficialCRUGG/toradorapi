const axios = require('axios');
let characters = ["taiga", "ryuuji", "ami", "minori", "yasuko", "kitamura", "sumire", "nanako", "sakura", "kota", "koji", "maya", "yuri"];

let appRouter = function(app) {
    app.get("/", async (_req, res) => {
        res.send({"status": "error", "code": "-1", "message": "page work in progress. use /api/v1/ to use the api"});
    });
    app.get("/api", async (_req, res) => {
        res.send({"status": "error", "code": "0", "message": "no api version specified"});
    });
    app.get("/api/v1", async (_req, res) => {
        res.send({"status": "error", "code": "1", "message": "no method specified. following methods ara available: /img_original/:character/, /img_fanart/:character"});
    });
    app.get("/api/v1/img_original", async (_req, res) => {
        res.send({"status": "error", "code": "2", "message": "no argument specified. use /img_original/:character"});
    });
    app.get("/api/v1/img_fanart", async (_req, res) => {
        res.send({"status": "error", "code": "2", "message": "no argument specified. use /img_fanart/:character"});
    });
    app.get("/api/v1/img_original/:character", async (req, res) => {
        if(characters.includes(req.params.character)) {
            axios.get("https://toradorapi.github.io/images/original/" + req.params.character + ".json").then((response) => {
                if(response.data.length > 0) {
                    let json = response.data[Math.floor(Math.random()*response.data.length)];
                    json.status = "success";
                    res.send(json);
                } else {
                    res.send({"status": "error", "code": "4", "message": "there are currently no images for this character."});
                }
            });
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: " + characters.join(", ")});
        }
    });
    app.get("/api/v1/img_original/:character/list", async (req, res) => {
        if(characters.includes(req.params.character)) {
            axios.get("https://toradorapi.github.io/images/original/" + req.params.character + ".json").then((response) => {
                if(response.data.length > 0) {
                    let json = {};
                    json.status = "success";
                    json.list = response.data
                    res.send(json);
                } else {
                    res.send({"status": "error", "code": "4", "message": "there are currently no images for this character."});
                }
            });
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: " + characters.join(", ")});
        }
    });
    app.get("/api/v1/img_fanart/:character", async (req, res) => {
        if(characters.includes(req.params.character)) {
            axios.get("https://toradorapi.github.io/images/fanart/" + req.params.character + ".json").then((response) => {
                if(response.data.length > 0) {
                    let json = response.data[Math.floor(Math.random()*response.data.length)];
                    json.status = "success";
                    res.send(json);
                } else {
                    res.send({"status": "error", "code": "4", "message": "there are currently no images for this character."});
                }
            });
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: " + characters.join(", ")});
        }
    });
    app.get("/api/v1/img_fanart/:character/list", async (req, res) => {
        if(characters.includes(req.params.character)) {
            axios.get("https://toradorapi.github.io/images/fanart/" + req.params.character + ".json").then((response) => {
                if(response.data.length > 0) {
                    let json = {};
                    json.status = "success";
                    json.list = response.data
                    res.send(json);
                } else {
                    res.send({"status": "error", "code": "4", "message": "there are currently no images for this character."});
                }
            });
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: " + characters.join(", ")});
        }
    });
};

module.exports = appRouter;
