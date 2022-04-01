require( 'dotenv' ).config();
const mongoose = require( 'mongoose' )

// url = mongodb://locahost:2030
url = process.env.MONGODB_URL
mongoose.connect( url )
    .then( () => {
        console.log( 'Database connection established' )
    } ).catch( ( err ) => {
        console.log( err.message)
    })