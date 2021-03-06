import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";//用来在声明的时候添加和读取元数据
import { getSchema } from "./api";
import resultHandlerApi from "./services/result-handler-api";
import getPort from "get-port";
import * as parseArgs from "minimist";
import "consola";//控制器日志输出
import * as readPkgUp from "read-pkg-up";

const pkg = readPkgUp.sync({
  cwd: __dirname
}).pkg;
declare var consola: any;

const args = parseArgs(process.argv);
const defaultPort = args.port || 4000;
process.env.DEBUG_LOG = args.debug ? "log" : "";

if (args.root) {
  process.env.ROOT = args.root;
}

if (args.version) {
  console.log(`v${pkg.version}`);
  process.exit();
}

async function main() {
  try {
    const schema: any = await getSchema();
    const server = new GraphQLServer({ schema });
    // initializeStaticRoutes(server.express, root);
    resultHandlerApi(server.express);

    const port = await getPort({ port: defaultPort });
    // this will be used by the jest reporter
    process.env.MAJESTIC_PORT = port.toString();

    server.start(
      {
        port,
        playground: "/debug"
      },
      async () => {
        const url = `http://localhost:${port}`;
        console.log(`⚡  Majestic v${pkg.version} is running at ${url} `);
      }
    );
  } catch (e) {
    consola.error(e);
  }
}

main();
