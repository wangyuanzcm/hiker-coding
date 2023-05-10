// Question: A String Made Of An Even Number Of Characters ("<" And/Or ">") Is Called Symmetric If All Characters In Its First Half Are "&Lt;" And All Characters In Its Second Half Are "&Gt;". Examples Of Symmetric Strings Are: "" (Empty String), "&Lt;&Gt;", "&Lt;&Lt;&Gt;&Gt;", "&Lt;&Lt;&Lt;&Gt;&Gt;&Gt;", Etc. Write A Function: Function Solution(S); That, Given A String
// A string made of an even number of characters ("<" and/or ">") is called symmetric if all characters in its first half are "<" and all characters in its second half are ">".
// Examples of symmetric strings are: "" (empty string), "<>", "<<>>", "<<<>>>", etc.
// Write a function:
// function solution(S);
// that, given a string S made of N characters ("<", ">" and/or "?")", returns the length of the longest symmetric substring that can be obtained after replacing question marks with "<" or ">" characters.
// Examples:
// 1. For S ="<><??>>", after replacing all question marks with "<", the string "<><<<>>" is obtained. Its longest symmetric substring is "<<>>", so the function should return 4.
// 2. For S = "??????", the optimal option is to replace the first three question marks with "<" and the next three question marks with ">" thus obtaining the string "<<<>>>". The function should return 6.
// 3. For S ="<<?", the function should return 2.

// Write an efficient algorithm for the following assumptions:
// - the length of string S is within the range [1..200,000];
// - string S is made only of the following characters: '<', '>' and/or '?'.
const solution = (S) => {
    let len = S.length;
    if (len<= 1) {
        return 0;
    }
    let maxLen = 0;
    for(let i = 0; i<len; i++){
        for(let j= len-1; j>=0; j--){
            let temp = S.slice(i, j+1 );
            // console.log(temp,'temp')
            if(temp.length % 2 === 0){
                let left = temp.slice(0, temp.length / 2);
                let right = temp.slice(temp.length / 2);
                if(!left.includes('>') &&!right.includes('<')){
                    maxLen = Math.max(maxLen, temp.length);
                }
            }
        }
    }

    return maxLen;

}


console.log(solution("<><??>>")) // should return 4
console.log(solution("??????")) // should return 6
console.log(solution("<<?")) // should return 2
console.log(solution("??<<?")) // should return 2
console.log(solution("??>??")) // should return 4
console.log(solution("??<>??")) // should return 6
console.log(solution("<<>><>>")) // should return 4
console.log(solution("<<>><<?>>")) // should return 4
console.log(solution("<<>><<?>>>??")) // should return 6
console.log(solution("??<<<>><<?>>>")) // should return 6