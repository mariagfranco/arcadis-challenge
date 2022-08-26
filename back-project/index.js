const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const spotRoutes = require('./routes/spotRoutes');

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());

app.use('/spot', spotRoutes);

app.get('/', (req, res) => {
    res.json({message: 'oi'})
})

mongoose.connect('mongodb+srv://mgaf:150599@clusterarcadis.mkcbd2d.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => {console.log('conectou')
    app.listen(1800)
})
.catch((err) => console.log(err))
