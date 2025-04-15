require('dotenv').config(); 
const mongoose = require('mongoose');
const Motorcycle = require('../models/inventoryItem'); 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection error:', err));


const motorcycles = [
  {
    title:'Kawasaki Ninja H2',
    model: '',
    price: 900,
    description: 'Lightweight, sharp-looking, high-performance sport model',
    image: 'http://localhost:5000/seeds/bikepic/ninja-h2.jpg', 
    inStock: true
  },
  {
    title:'BMW S1000RR',
    model: '',
    price: 700,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://localhost:5000/seeds/bikepic/BMW-S1000RR.jpg',
    inStock: false
  },
  {
    title:'Ducati Panigale V4',
    model: '',
    price: 800,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://localhost:5000/seeds/bikepic/ducati.jpg',
    inStock: false
  },
  {
    title:'Triumph Street Triple 765RS',
    model: '',
    price: 500,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://localhost:5000/seeds/bikepic/triumph-street-triple.jpg',
    inStock: false
  },
  {
    title:'Yamaha YZF R1',
    model: '',
    price: 750,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://localhost:5000/seeds/bikepic/yamaha-yzf-r1.jpg',
    inStock: false
  },
  {
    title:'Aprilia RSV4',
    model: '',
    price: 650,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://localhost:5000/seeds/bikepic/aprilia.jpg',
    inStock: false
  },
];

// Function to seed motorcycles
const seedMotorcycles = async () => {
  try {
    await Motorcycle.deleteMany({}); // Optional: Clear the collection first
    await Motorcycle.insertMany(motorcycles);
    console.log('Motorcycles have been added successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding motorcycles:', error);
    mongoose.disconnect();
  }
};

seedMotorcycles();