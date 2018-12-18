"use strict";
exports.__esModule = true;
var app_1 = require("./app");
/**
 * Start Express server.
 */
var server = app_1["default"].listen(app_1["default"].get("port"), function () {
    console.log("  App is running at http://localhost:%d in %s mode", app_1["default"].get("port")
    //app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
exports["default"] = server;
