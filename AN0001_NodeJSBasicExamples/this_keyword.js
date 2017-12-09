var teja={
    printname:function () {
    console.log("my name is teja");
    console.log(this===teja);
}
};
teja.printname();
function dosomething() {
    console.log("Iam global");
    console.log(this===global);
}
dosomething();