import { createServer } from "miragejs";
import seedData from "../data/seed";

export default function makeServer({ environment = "development" }) {
  let server = createServer({
    environment,

    seeds(server) {
      server.db.loadData(seedData);
    },

    routes() {
      this.namespace = "api";

      // orders
      this.get("/orders", (schema) => schema.db.orders);
      this.get("/orders/:id", (schema, request) => {
        let id = request.params.id;
        return schema.db.orders.find(id);
      });

      // menu
      this.get("/menu", (schema) => schema.db.menu);

      // account
      this.get("/account", (schema) => schema.db.account[0]);

      // dashboard metrics
      this.get("/stats", (schema) => schema.db.stats[0]);

      this.passthrough();
    },
  });

  return server;
}
