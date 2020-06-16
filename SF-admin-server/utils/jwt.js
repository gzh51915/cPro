const fs=require('fs')
const path =require('path')
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
            exp:60*60*4
        },cert,)
        return token
    }

    //校验token
    verifyToken(){
        let token =this.data
        let res
        try{
            res =jwt.verify(token,cert)
        }catch(error){
            res="error"
        }
        return res;
    }
}

module.exports=Jwt