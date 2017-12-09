function user() {
this.name="";
this.life=100;
this.givelife=function givelife(targetperson) {
targetperson.life+=1;
console.log(this.name,"gave life to  ", targetperson.name);
}
}
var teja=new user();
var vandana=new user();
teja.name="teja";
vandana.name="vandana";
teja.givelife(vandana);
console.log("teja",teja.life);
console.log("vandana",vandana.life);

user.prototype.takelife=function takelife(targetperson) {
    targetperson.life-=5;
    console.log(this.name,"take life of  ", targetperson.name);
}
vandana.takelife(teja);
console.log("teja",teja.life);
console.log("vandana",vandana.life);

user.prototype.magic=50;
console.log("teja",teja.magic);
console.log("vandana",vandana.magic);

