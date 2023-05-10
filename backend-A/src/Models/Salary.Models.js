const { Schema, model } = require('mongoose')
const salarySchemas = new Schema({
    Id_Salary: {
        type: String,
        require: true,
        unique: true
    },
    Time: String,
    Position: String,
    Level: String,
    Experience: String,
    Technology: String,
    Location: String,
    Way_of_working: String,
    Employees_number: String,
    Salary_type: String,
    Salary: String
}, {
    versionKey: false,
    timestamps: true
})
module.exports = model('Salary', salarySchemas)

/* 
{
    "Id_Salary": "1",
    "Time": "2023-01-22 18:49:36.202",
    "Position": "Backend Developer",
    "Level": "Mid",
    "Experience": "1-3 Yıl",
    "Technology": "Java / Spring",
    "Location": "Türkiye",
    "Way_of_working": "Yerinde / Ofiste",
    "Employees_number": "100-300",
    "Salary_type": "Türk Lirası",
    "Salary": "41.000 - 45.000 TL"
}
*/