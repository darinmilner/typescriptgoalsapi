//Gateway Application
import { app } from "./app";

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Gateway server is listening on port ${port}`);
});
