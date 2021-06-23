import LRUCache from '../../src/leetcode/LruCache';

describe('lruCache:使用双向链表实现LruCache', () => {

    const cases = [
        {
            inputs: ["LRUCache","put","put","get","put","get","put","get","get","get"],
            params:[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]],
            result: [null,null,null,1,null,-1,null,-1,3,4],
        },
        {
            inputs: ["LRUCache","put","put","get","put","get","put","get","get","get"],
            params:[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]],
            result: [null,null,null,1,null,-1,null,-1,3,4],
        },
    ];

    test.each(cases)(`lruCache:inputs is $inputs,result should be $result`, ({ inputs, params,result }) => {
        inputs.shift();
        result.shift();
        let lRUCache = new LRUCache(...params.shift());
        inputs.forEach((item,index) => {
            switch (item){
                case 'put':
                    lRUCache.put(...params[index]);
                    break;
                case 'get':
                    let temp = lRUCache.get(...params[index]);
                    
                    expect(temp).toEqual(result[index]);
            }
        })
    })
});
