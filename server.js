const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const env = require("dotenv");
env.config({ path: "./config/.env" });
const cors = require("cors");
const db = require("./config/db");
const API = require("./routes/Api_routes");
const Image = require("./routes/upload_routes");
const deleteuser = require("./routes/delete_api");
const io = require("socket.io")({
  maxHttpBufferSize: 1000000,
});

db();
app.use(express.json());
app.use(express.static("public"));
app.use(
  express.urlencoded({ limit: "10gb", extended: true, parameterLimit: 1000000 })
);

app.use(cors());

app.use("/api/v1", API);

app.use("/api/v1", Image);
app.use("/api/v1", deleteuser);
app.use("/swagger-api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// swagger api http://192.168.43.220:2000/swagger-api-doc/
app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT || 5000}`)
);
//https://git.heroku.com/lalogistics.git/swagger-api-doc/
require("./endpoints")(app);
