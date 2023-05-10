const solution = (s) => {
    let len = s.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let temp = s.slice(i, j);
            if (!temp.includes(s[j])) {
                // 这里注意字符串的长度是j-i+1
                max = Math.max(max, j - i + 1);
            } else {
                break;
            }
        }
    }
    return max;
}
console.log(solution("qweqweeerr")); // should be 3
console.log(solution("ccccc")); // should be 1
console.log(solution("qaakea")); // should be 3