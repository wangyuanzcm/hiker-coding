/**
 * 有一组 url 的数组：array = [url1, url2..]
 * 一个拉取url的fetch方法，返回promise：fetch(url).then();
 * 实现execute方法，同时最多只能有 limit 个 fetch 可以同时执行。
 * 并且下载的尽可能快，在1个fetch 下载完成后就马上开始下一个待下载的url。
 * @link https://segmentfault.com/a/1190000020175627
 * @param {*} params
 */ 

class promisePool{
    constructor(fn,max){
        this.pools = [];
        this.fn = fn;
        this.max = max;
        this.urls = [];
    }
    start(urls){
        this.urls = urls;
        while(this.pools.length<this.max){
            const url = this.urls.shift();
            this.setTask(url);
        }
        let race = Promise.race(this.pools);
        return this.run(race);
    }
    setTask(url){
        if(!url) return false;
        const task = this.fn(url);
        this.pools.push(task);
        task.then((data)=>{
            console.log(data);
            this.pools.splice(this.pools.indexOf(task),1);
        })
    }
    run(race){
        race.then(()=>{
            const url = this.urls.shift();
            this.setTask(url);
            return this.run(Promise.race(this.pools))
        })
    }
}

export default promisePool;
