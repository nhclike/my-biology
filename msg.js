/**
 * Created by uid on 2017/5/3.
 */
var mysql=require('mysql');
const qs = require('querystring');
var pool=mysql.createPool({
    database:'biology',
    user:'root',
    connectionLimit:5
});

module.exports={
    add:(req,res)=>{
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query('insert into msg values(null,?,?,?)',[obj.uname,obj.content,new Date().getTime()],(err,result)=>{
                    console.log(result);
                    if(err) throw err;
                    if(result.affectedRows>0){
                        res.json({code:1,msg:'添加成功',mid:result.insertId});
                        conn.release();
                    }
                })
            })
        })
    },


    getAll:(req,res)=>{
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query('select * from msg',(err,result)=>{
                if(err) throw err;
                res.json(result);
                conn.release();
            })
        })
    }
};