
var express = require("express");

var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
const server = app.listen(1337);
const io = require('socket.io')(server)

io.on('connection', function (socket) { //2

    socket.on('submsgform', function(data) {
        console.log("incoming", data)
        io.emit('board_new_msg', data)
    })

    // players[socket.id] = player;
    // console.log("created player with id - ",socket.id )
    // // console.log("all players - ", players)

    // socket.emit('new_user',player);

    // socket.broadcast.emit('all_players', players)
    // socket.emit('all_players', players)

    // socket.on('disconnect', function(){
    //     console.log("deleted user", players[socket.id])
    //     delete_package = {
    //         players: players,
    //         deleted_user: players[socket.id]
    //     }
    //     io.emit('disconnect', delete_package)
    //     delete players[socket.id] 
    // })

    // socket.on('moved_player', function(data){
    //     players = data
    //     console.log(players)
    //     io.emit('updated_positions', players)
    // })

});

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

//inet - 192.168.1.165