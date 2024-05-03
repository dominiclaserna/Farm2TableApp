import router from './router/router.js'; 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


// express app
const app = express()
const PORT = 3001;

// calling the router
// You might not need the function call if the router is exported as an instance directly
// const serviceRoutes = router();

// middleware
app.use(express.json());
app.use(cors());


router(app);

// Connect to DB
mongoose.connect('mongodb://localhost:27017/Farm2Table', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Listen to port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });



  