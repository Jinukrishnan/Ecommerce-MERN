import bcrypt from 'bcrypt';
import adminSchema from './models/admin.model.js'

export function adminRegister(req,res){
    const {username,password,confirmpassword}=req.body;
    console.log(username,password,confirmpassword);
    if (!(username  && password && confirmpassword))
    return res.status(400).send({ error: "Fields cannot be empty" });
    if(password!==confirmpassword)
    return res.status(400).send({error:"password is not matched"});
    adminSchema.findOne({username:username}).then((data)=>{
        if(data){
    return res.status(400).send({error:"user already exist"});
    
        }else{
            bcrypt.hash(password,10)
.then((hashedPassword)=>{
   

    adminSchema.create({username:username,password:hashedPassword}).then(() => {
            
            
            return res.status(201).send({ msg: "Successfully registered!" });
          })
          .catch((error) => {
            console.log(error);
            return res.status(400).send(error);
          });
    })
    
    .catch((error)=>{
    return res.status(400).send({ error:error });

    })
        }
    }).catch((error)=>{
        console.log(error);
    })


}