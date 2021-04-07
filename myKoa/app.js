const EventEmitter = require("events");
const http = require("http");
const context = require('./context');
class Application extends EventEmitter {
  constructor() {
    super();
    this.middlewares = [];
    this.context = context;
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  compose() {
    return async (ctx) => {
      function createNext(middleware, oldNext) {
        return async () => {
          await middleware(ctx, oldNext);
        };
      }
      let len = this.middlewares.length;
      console.log(len, "len");
      let next = async ()=>{ return Promise.resolve()};
      for (let i = len - 1; i >= 0; i--) {
        let currentMiddleware = this.middlewares[i];
        next = createNext(currentMiddleware, next);
      }
      //循环完毕，才能得到执行权
      await next();
    };
  }
  createContext(){
      let ctx = Object.create(this.context);
      return ctx;
  }
  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
  onError(err,ctx){
      this.emit(err)
  }
  //最终输出的值
  callback() {
    return (req, res) => {
      // console.log(res,'res')
      let fn = this.compose();
      const ctx = this.createContext()
      return fn(ctx).then(()=>{
        res.end("hello world");
      }).catch(this.onError)
    };
  }
}

module.exports = Application;
