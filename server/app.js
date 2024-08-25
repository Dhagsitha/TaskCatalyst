const express = require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer=require("multer");
const User = require("./models/mongo"); 
const Team=require("./models/teamSchema ");
const app = express();
mongoose.connect("mongodb://0.0.0.0:27017/Taskmanager")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Determine role based on email domain
        const emailDomain = email.split("@")[1];
        let role = "guest";  // Default role, can be adjusted as needed
        if (emailDomain === "siet.ac.in") {
            role = "faculty";
        } else if (emailDomain === "srishakthi.ac.in") {
            role = "student";
        }

        // Create new user with role
        const newUser = new User({
            email: email,
            password: hashedPassword,
            role: role
        });

        // Save the new user
        await newUser.save();
        res.status(201).json({ message: "Signed up successfully" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to sign up" });
    }
});



app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ message: "user_not_found" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return res.json({ message: "login_success", user: user });
        } else {
            return res.json({ message: "wrong_password" });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "fail" });
    }
});
const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        return cb(null, "../client/public/submissions")
    },
    filename:function(req,file,cb)
    {
         return cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload=multer({storage})
app.post('/upload',upload.single('file'),(req,res)=>{
console.log(req.body);
console.log(req.file);

})
// Serve files statically from the "uploads" directory
app.use('/uploads', express.static('submissions'));

// Optional: Route to download the file directly
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'submissions', filename);
    res.sendFile(filepath);
});

app.post('/register', async (req, res) => {
    const newTeam = new Team({
        teamNumber: req.body.teamNumber,
        batch: req.body.batch,
        year: req.body.year,
        guideName: req.body.guideName,
        teamLeader: req.body.teamLeader,
        teamMembers: req.body.teamMembers,
        classAdvisorName: req.body.classAdvisorName,
      });
      
      try {
        const savedTeam = await newTeam.save();
        res.status(201).send(savedTeam);
      } catch (error) {
        res.status(400).send(error);
      }
});
app.listen(8000, () => {
    console.log("Server running on port 8000");
});