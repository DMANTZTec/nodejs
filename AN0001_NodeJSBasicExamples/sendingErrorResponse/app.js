var http=require("http");
var fs=require("fs");
http.createServer(onRequest).listen(8000);
console.log("server is running");
function onRequest(request,response)
{
    if(request.method=='GET'&&request.url=='/'){
        response.writeHead(200,{'Context-Type':'text/html'});
        fs.createReadStream("./index.html").pipe(response);

    }
    else
    {
        send404response(response);
    }
}
function send404response(response) {
    response.writeHead(404,{'context-Type':'text/plain'});
    response.write("error: page not found");
    response.end();
}
