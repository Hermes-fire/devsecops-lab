const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const userInput = req.query?.input; // Getting user input from the query parameter
  eval(userInput); // UNSAFE: Using eval with query parameter (this will trigger the ESLint rule)
  res.send(`Hello secure CI/CD!`);
});

// http://localhost:3000/?input=console.log('Executed code from eval!')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
