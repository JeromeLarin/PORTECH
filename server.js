const { listen } = require('./src/app');
const app = require('./src/app')
const { port } = require('./src/configs/db.config')

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }
    console.log(`Server listening to ${port}`);
})