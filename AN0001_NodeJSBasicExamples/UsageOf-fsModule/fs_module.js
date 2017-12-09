var fs=require("fs");
fs.writeFileSync("core.txt","this is a core module example");
console.log(fs.readFileSync("core.txt").toString());
console.log(__dirname);
console.log(__filename);
