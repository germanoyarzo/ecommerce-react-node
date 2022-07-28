import bcrypt from "bcryptjs";

const users =[
    {
        name:"Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("admin",10),
        isAdmin: true,
    },
    {
        name:"german",
        email:"german@gmail.com",
        password: bcrypt.hashSync("123456",10)
    }
]

export default users; 