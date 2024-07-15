require("express-async-errors");
require("dotenv/config")

const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors")
const express = require("express");
const routes = require("./routes");

const app = express();


// MIDDLEWARE CONFIG:
app.use(express.json()); // Permite que o app Express consiga processar requests JSON

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(cors()); 

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  
  console.log(error);
  
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});


app.get('/ping', (req, res) => {
  res.send('API is alive!');
});


const PORT =  process.env.SERVER_PORT || 3000

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));