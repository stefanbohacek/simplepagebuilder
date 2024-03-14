import app from "./app.js";

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${listener.address().port}...`);
});
