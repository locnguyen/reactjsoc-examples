var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    port: 9000
});

server.start(function () {
    console.log('Hapi server has started at %S' + server.info.uri);
});

server.route({
    path: '/',
    method: 'GET',
    handler: function (request, reply) {
        reply.redirect('/examples');
    }
});

server.route({
    path: '/examples/{path*}',
    method: 'GET',
    config: {
        handler: {
            directory: {
                path: './examples/',
                listing: false,
                index: true
            }
        }
    }
});
