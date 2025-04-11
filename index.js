

const app = require('./app'); // Import the main application
const PORT = process.env.PORT || 5000;




app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});
