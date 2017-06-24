/**
 * Created by uid on 2017/5/8.
 */
//连接数据库,对数据库用户信息进行操作
const mysql=require('mysql');
const qs=require('querystring');
var pool=mysql.createPool({
    user:'root',
    database:'biology',
    connectionLimit:5
});


module.exports={
    //注册添加新用户
    add:(req,res)=>{
        //接收客户端传来的数据
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            console.log(obj);
            //连接数据库,将接收到数据传入数据库
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query('insert into t_user values(null,?,?,?,?)',[obj.uname,obj.upwd,"2471814041",new Date().getTime()],(err,result)=>{
                    if(err) throw err;
                    console.log(result);//输出的是一个对象
                    if(result.affectedRows>=1){
                        res.json({meg:'添加成功',uid:result.insertId});
                        conn.release();
                    }
                })
            })
        })
    },
    //登录验证用户
    test:(req,res)=>{
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            var un=obj.uname;
            var up=obj.upwd;
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query('select * from t_user where uname=? and upwd=?',[un,up],(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    res.json(result);
                    conn.release();
                })
            })
        })
    }
}