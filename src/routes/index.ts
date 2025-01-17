import { Application } from "express";
import { authRoutes } from "./auth.routes";

const BASE_PATH = "/api/v1";

export default (app: Application) => {
  const routes = () => {
    app.use(`${BASE_PATH}/auth`, authRoutes.routes());
  };
  routes();
};
