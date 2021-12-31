const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.connect(
	"mongodb+srv://ojas:ojasrm23@cluster0.gfamw.mongodb.net/Cluster0?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log("connected to the database");
	}
);

const routes = require("./routes/routes");

app = express();

app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000",
			"http://localhost:8080",
			"http://localhost:4200",
		],
	})
);

app.use(express.json());

app.use("/api", routes);

app.listen(8000);
