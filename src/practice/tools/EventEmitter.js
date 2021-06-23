/**
 * 组件触发与监听的方法
 * @param {*} params
 */ 
class EventEmitter{
    constructor(){
        this.eventQueue = [];
    }
    on(eventName,callback){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(callback);
        }else{
            this.eventQueue[eventName] = [callback];
        }
    }
    off(eventName,callback){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName] = null;
        }else{
            return;
        }
    }
    once(eventName,callback){
        let fn = ()=>{
            callback();
            this.off(eventName);
        }
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(fn)
        }else{
            this.eventQueue[eventName] = [fn]
        }
    }
    trigger(eventName,...params){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].map(item =>item(...params))
        }else{
            console.log(eventName+"is not defined")
        }
    }
}

export default EventEmitter;
