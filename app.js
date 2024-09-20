import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//------------------------Set these variables plesase --------------------------------- //
export const PORT = process.env.PORT;

// MIDDLEWARES
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// MONGO DB
import { connectToDb } from "./mongoConnect.js";
connectToDb(process.env.mongo_url).then(() =>
  // Enter Your Mongo connection String
  console.log("MongoDb Connected !!!")
);

// ROUTERS
import m_router from "./routes/rut_museum.js";
app.get("/museum", m_router);
app.use("/", m_router);
//
import i_router from "./routes/rut_index.js";
app.use("/", i_router);
app.use("/search", i_router);

//

// CORS Configuration

// const corsOptions = {
//   origin: [`https://chatbot-khpf.onrender.com`], // CROS (Enter Your Ipv4 address to use it on your phone )
//   credentials: true,
// };
// app.use(cors(corsOptions));

//

// SERVER PORT

app.listen(PORT, () => {
  console.log(`Server Started at PORT:${PORT}`);
});
