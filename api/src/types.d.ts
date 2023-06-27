import { Express } from "express";
declare global {
  type APIModule = {
    middleware: (app: Express) => void;
  };
}
