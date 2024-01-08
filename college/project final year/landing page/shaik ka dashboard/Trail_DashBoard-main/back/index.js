const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json()); 
const mediaRoutes = require("./routes/media");

app.use("/api/v1/media", mediaRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));

yourSecretKey="shazamaanSaud0987654321";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
  const { email, password, userType  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email : email, password: hashedPassword , userType });
    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json(error);
    // res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//       res.json({ success: true, message: 'Login successful',userType: user.userType });
//       const token = jwt.sign({ id: validUser._id },yourSecretKey,{ expiresIn: '1h' });
//       // const { password: pass, ...rest } = validUser._doc;
//       // res
//       //   .cookie("access_token", token, { httpOnly: true })
//       //   .status(200)
//       //   .json(rest);
//     } else {
//       res.json({ success: false, message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });

// // Add this route to fetch user type
// app.get('/getUserType', async (req, res) => {
//   try {
//     // Assuming you have some form of authentication in place and a user ID is available in req.user
//     const user = await User.findById(req.user._id); // Replace with your actual authentication logic

//     if (user) {
//       res.json({ success: true, userType: user.userType });
//     } else {
//       res.status(404).json({ success: false, error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });


// app.get('/getUserType', async (req, res) => {
//   try {
//     // Check if the request contains a valid token
//     const token = req.headers.authorization;
//     if (!token) {
//       return res.status(401).json({ success: false, error: 'Authorization token not provided' });
//     }

//     // Verify the token
//     const decodedToken = jwt.verify(token, yourSecretKey); // Replace 'yourSecretKey' with your actual secret key
//     const userId = decodedToken.userId;

//     // Fetch user type from the database
//     const user = await User.findById(userId);

//     if (user) {
//       res.json({ success: true, userType: user.userType });
//     } else {
//       res.status(404).json({ success: false, error: 'User not found' });
//     }
//   } catch (error) { 
//     console.error('Error fetching user type:', error.message);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });
// _________________________________________________________________________________________________________________
const generateToken = (user) => {
  return jwt.sign({ userId: user._id, userType: user.userType }, 'your-secret-key', { expiresIn: '1h' });
};
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      // Generate JWT token
      const token = generateToken(user);

      res.json({ success: true, message: 'Login successful', token });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ success: false, message: 'Access denied' });

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(403).json({ success: false, message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Add this route to fetch user type using the authenticated user's token
app.get('/getUserType', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (user) {
      res.json({ success: true, userType: user.userType });
    } else {
      res.status(404).json({ success: false, error: 'User not found' });
    }
  } catch (error) {
    // res.status(500).json({ success: false, error: 'Internal server error' });
    res.status(500).json( error.message);
  }
});

const mongodbUri = "mongodb+srv://admin:admin01@cluster1.fhsho4f.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(5000, () => {
  console.log("App is running on PORT 4000");
});
