
const express = require("express")
 app = express()

app.get("/", (req, res) => {
  res.send("Your Bot Is Running..")
})

app.listen(8080, () => {
  console.log("The bot is online!")
})
