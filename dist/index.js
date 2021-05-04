"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Gateway Application
const app_1 = require("./app");
const port = process.env.port || 8000;
app_1.app.listen(port, () => {
    console.log(`Gateway server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map