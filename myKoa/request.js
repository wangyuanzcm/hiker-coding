const url = require('url');
modlue.exports = {
    get query(){
        return url.parse(this.req.url,true)
    }
}