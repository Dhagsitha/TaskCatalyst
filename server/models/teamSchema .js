const mongoose=require("mongoose")
const teamSchema = new mongoose.Schema({
    teamNumber: {
        type: Number,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    guideName: {
        type: String,
        required: true
    },
    teamLeader: {
        type: String,
        required: true
    },
    teamMembers: {
        type: [String], 
        required: true,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: "At least one team member is required"
        }
    },
    classAdvisorName: {
        type: String,
        required: true
    }
});

const team = mongoose.model("Team", teamSchema, 'team');

module.exports = team;
