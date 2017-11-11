 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.send('<p>i think that the iphone is a great product. i think it is a flawless product, like i believe there are never any bugs on it. t h e i p h o n e i s a m a z i n g. i</p>');
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
