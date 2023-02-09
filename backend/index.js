require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const fs = require("fs");
const csv = require("csv-parser");

let dataArray = [];

fs.createReadStream("idiya.csv")
  .pipe(csv())
  .on("data", (data) => {
    dataArray.push(data);
  })
  .on("end", () => {
    processData(dataArray);
  });

const processData = (data) => {
  // console.log(data);
};

app.post("/api/", async (req, res) => {
  const message = req.body.message;

  // const universalMatch = dataArray.find((p) => message.includes(p.sku));

  // if (universalMatch) {
  //   res.json({ botResponse: "\n\n" + universalMatch.name });
  //   return;
  // }

  // const matchingData1 = dataArray.find((r) => message.includes(r.name));
  // if (matchingData1) {
  //   res.json({
  //     botResponse: "\n\n" + " description" + "  " + matchingData1.description,
  //   });

  //   return;
  // }

  const matchingSkuData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("sku")
  );

  if (matchingSkuData) {
    res.json({
      botResponse:
        "\n\n" + matchingSkuData.name + " of sku: " + matchingSkuData.sku,
    });
    return;
  }

  const matchingPriceData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("price")
  );

  if (matchingPriceData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingPriceData.name +
        " of price: " +
        matchingPriceData.price,
    });
    return;
  }

  const matchingBrandData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("brand")
  );

  if (matchingBrandData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingBrandData.name +
        " of brand: " +
        matchingBrandData.brand,
    });
    return;
  }

  const matchingQuantityData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("quantity")
  );

  if (matchingQuantityData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingQuantityData.name +
        " of quantity: " +
        matchingQuantityData.quantity,
    });
    return;
  }

  const matchingWidthData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("width")
  );

  if (matchingWidthData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingWidthData.name +
        " of width: " +
        matchingWidthData.width,
    });
    return;
  }

  const matchingHeightData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("height")
  );

  if (matchingHeightData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingHeightData.name +
        " of height: " +
        matchingHeightData.height,
    });
    return;
  }

  const matchingLengthData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("length")
  );

  if (matchingLengthData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingLengthData.name +
        " of length: " +
        matchingLengthData.length,
    });
    return;
  }

  const matchingWeightData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("Weight")
  );

  if (matchingWeightData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingWeightData.name +
        " of weight: " +
        matchingWeightData.Weight,
    });
    return;
  }
  const matchingdescriptionData = dataArray.find(
    (d) => message.includes(d.name) && message.includes("description")
  );

  if (matchingdescriptionData) {
    res.json({
      botResponse:
        "\n\n" +
        matchingdescriptionData.name +
        " of description: " +
        matchingdescriptionData.description,
    });
    return;
  }

  const API_KEY = process.env.OPENAI_API_KEY;

  try {
    const response = await axios({
      method: "post",
      url: "https://api.openai.com/v1/engines/text-davinci-003/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      data: {
        prompt: message,
        max_tokens: 100,
        n: 1,
        stop: "",
        temperature: 0.5,
      },
    });
    res.json({ botResponse: "\n" + response.data.choices[0].text });
  } catch (error) {
    res.status(500).send({ error: "Could not generate text completion" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
