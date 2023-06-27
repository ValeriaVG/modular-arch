import analyticsModule from "./analytics";
import authModule from "./authentication";
import shopModule from "./shop";

const modules: AppModule[] = [
    authModule,
    analyticsModule,
    shopModule
] 

export default modules