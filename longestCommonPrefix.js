var longestCommonPrefix = function(strs) {
    
    let result = ""
        let i = 0;

        while (strs[0][i] && strs.every(str => str[i] === strs[0][i])) {

            result += strs[0][i]
            i++
        }
    
    return result;
};

console.log(longestCommonPrefix(["hflower","flow","flight"]))