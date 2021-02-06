var simplifyPath = function(path) {
    const PATH = path.split("/");
    const set = new Set(["", ".", ".."]);
    const stack = [];
    
    for (let dir of PATH) {
        if (dir === "..") stack.pop();
        else if (!set.has(dir)) stack.push(dir);
    }
    
    return `/${stack.join('/')}`
};
