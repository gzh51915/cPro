
const jwt =require('jsonwebtoken')
const cert='wood'

class Jwt {
    constructor(data){
        this.data=data
    }

    //生成token
    generateToken(){
        let data=this.data;
        let token= jwt.sign({
            data,
            exp:Math.floor(Date.now() / 1000) + (60 * 60*24)
        },cert)
        return token
    }

    //校验token
    verifyToken(){
        let token =this.data
        let res
        try{
            let result=jwt.verify(token,cert) ||{}
            res =result.data
        }catch(error){
            res="error"
        }
        return res;
    }
}

module.exports=Jwt