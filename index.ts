import http from "http";

const host = "localhost";
const port = 8000;

// const server = http.createServer();
// server.listen(port, host, () => console.log(`Server started on port: ${port}`));

class Server {
  constructor() {
    this.initializeHttpServer();
  }

  private initializeHttpServer() {
    // Create http server
    const server = http.createServer();

    server.listen(port, host, () =>
      console.log(`Server started on port: ${port}`)
    );
  }
}

const server = new Server();
