const express = require("express");
const axios = require("axios");

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/launches", async (req, res, next) => {
  try {
    const result = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      {
        query: {
          upcoming: false,
        },
        options: {
          limit: 50,
          select: ["details", "links.patch.small", "links.webcast", "name"],
        },
      }
    );

    res.json(result.data.docs);
  } catch (err) {
    next(err);
  }
});

app.get("/rockets", async (req, res, next) => {
  try {
    const result = await axios.post(
      "https://api.spacexdata.com/v4/rockets/query",
      {
        options: {
          select: ["cost_per_launch", "description", "flickr_images", "name"],
        },
      }
    );
    const data = result.data.docs.map(
      ({ cost_per_launch, description, flickr_images, name }) => ({
        cost_per_launch: cost_per_launch.toLocaleString("en-US", {
          currency: "USD",
          style: "currency",
        }),
        description,
        name,
        picture: flickr_images[0],
      })
    );

    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message =
    error.message || "Sorry something has gone wrong please check back later";
  res.status(status).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
