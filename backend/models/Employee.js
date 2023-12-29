const mongoose=require('mongoose')
const EmpSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String
})
const EmployeeModel=mongoose.model("employee",EmpSchema)
module.exports=EmployeeModel;