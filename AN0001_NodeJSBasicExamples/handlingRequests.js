function placeorder(ordernumber) {
console.log("customer order:",ordernumber);
deliverorder(function () {
    console.log("delivered food of:",ordernumber);

});
}
function deliverorder(callback) {
    setTimeout(callback,5000);
}
placeorder(1);
placeorder(2);
placeorder(3);
placeorder(4);
placeorder(5);
