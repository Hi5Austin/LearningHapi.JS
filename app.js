var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port:8080});

server.register(require('inert'),(err) => {
    if (err) {
        throw err;
    }
    server.route({
        method:'GET',
        path:'/',
        handler:function(request,reply){
	          reply.file('./public/index.html');
        }
    });
});

server.route({
    method:'POST',
    path:'/post',
    handler:function(request,reply){
        reply(request.payload);
    }
});

server.start(() => {
    console.log('Server running at:',server.info.uri);
});
