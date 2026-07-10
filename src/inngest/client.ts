import { realtimeMiddleware } from "@inngest/realtime/middleware";
import { Inngest } from "inngest";

export const inngest = new Inngest({ 
  id: "automax",
  eventKey: process.env.INNGEST_EVENT_KEY,
  env: "dev",
  middleware: [realtimeMiddleware()],
});
