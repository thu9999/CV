const express = require('express');
const app = express();
app.use(express.static('./dist/yedda-intro'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: './dist/yedda-intro/'});
});

app.listen(process.env.PORT || 8080);