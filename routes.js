let img_original_taiga = require("./img_original/taiga.json");
let img_fanart_taiga = require("./img_fanart/taiga.json");

let appRouter = function (app) {
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
        if(req.params.character === "taiga") {
            let json = img_original_taiga[Math.floor(Math.random()*img_original_taiga.length)];
            res.send(json);
        } else if(req.params.character === "ryuuji") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "ami") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "minori") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "yasuko") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "kitamura") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "sumire") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "nanako") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "sakura") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "kota") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "koji") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "maya") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "yuri") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: taiga, ryuuji, ami, minori, yasuko, kitamura, sumire, nanako, sakura, kota, koji, maya, yuri, all"});
        }
    });
    app.get("/api/v1/img_fanart/:character", async (req, res) => {
        if(req.params.character === "taiga") {
            let json = img_fanart_taiga[Math.floor(Math.random()*img_fanart_taiga.length)];
            res.send(json);
        } else if(req.params.character === "ryuuji") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "ami") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "minori") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "yasuko") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "kitamura") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "sumire") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "nanako") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "sakura") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "kota") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "koji") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "maya") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "yuri") {
            res.send({"status": "error", "code": "4", "message": "this character is currently deactivated. this is mostly caused due to a lack of images."});
        } else if(req.params.character === "all") {
            res.send({"status": "error", "code": "5", "message": "this feature is still to be developed."});
        } else {
            res.send({"status": "error", "code": "3", "message": "we weren't able to find this character. all character available are: taiga, ryuuji, ami, minori, yasuko, kitamura, sumire, nanako, sakura, kota, koji, maya, yuri, all"});
        }

    });
};

module.exports = appRouter;
