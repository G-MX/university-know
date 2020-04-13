var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.send("err")
  } else {
    res.send("ok");
  }
};


// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql_name = $sql.user.select_name;
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql_name,params.userName,function(err, result) {
    if (err) {console.log(err);}
    if (result[0]==undefined) {
      conn.query(sql,[params.userName, params.userPwd,params.sex],function(err, result) {
        if (err) {console.log(err);}
        if(result){jsonWrite(res, result);}
      })
    }else{
      res.send('-1');//当前注册username与数据库重复时，data返回-1
    }
  })
});

//查找用户接口登录
router.post('/checkUser',(req,res)=>{
  var sql_name = $sql.user.select_name;
  var sql_pwd = $sql.user.select_pwd;
  var params = req.body;
  conn.query(sql_name,params.userName,function (err,result) {
    if (err){
      console.log(err);
    }
    if(result[0]==undefined){
      res.send('-1');     //在数据库中查询不到userName，返回-1
    }else{
      conn.query(sql_pwd,params.userPwd,function (err,result) {
        if (err){
          console.log(err);
        }else{
          if(result[0]==undefined){
            res.send('0');      //userName正确，pwd错误，返回0
          }else{
            jsonWrite(res,result);
          }
        }
      })
    }
  })
});

//查找用户接口
router.post('/checkUserName',(req,res)=>{
  var sql_checkUser = $sql.user.check_user;
  var params = req.body;
  conn.query(sql_checkUser,function (err,result) {
    if (err){console.log(err);}
    else{res.send(JSON.stringify(result));}
  })
});

//修改用户密码
router.post("/UpdatePwd",(req,res)=>{
  var sql_updatePwd = $sql.user.update_pwd;
  var params = req.body;
  conn.query(sql_updatePwd,[params.userPwd,params.userName],function (err,result) {
    if (err){console.log(err);}
    else{res.send(JSON.stringify(result));}
  })
})

//修改用户名
router.post("/UpdateUserName",(req,res)=>{
  var sql_updateUserName = $sql.user.update_username;
  var params = req.body;
  //[]内，update的值应写在where的值前面
  conn.query(sql_updateUserName,[params.userName,params.id],function (err,result) {
    if (err){
      console.log(err);
    }
    else{
      // console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
    }
  })
});


//发帖接口
//查找topic
router.post('/checkTopic',(req,res)=>{
  var sql_checkTopic = $sql.myTopic.checkTopic;
  conn.query(sql_checkTopic,function (err,result) {
    if (err){
      console.log(err);
    }else{
      console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
    }
  })
});

//查找热门topic
router.post('/checkHotTopic',(req,res)=>{
  console.log("===========查询热门帖子开始============");
  var sql_checkHotTopic = $sql.myTopic.check_HotTopic;
  conn.query(sql_checkHotTopic,function (err,result) {
    if (err){console.log(err);}
    else{
      console.log(result);
      res.send(JSON.stringify(result));
      console.log("===========查询热门帖子结束=========");
    }
  })
});

//发布帖子
router.post('/addTopic',(req,res) => {
  // var sql_name = $sql.user.select_name;
  var sql_addTopic = $sql.myTopic.add_Topic;
  var params = req.body;
  console.log(params);
  conn.query(sql_addTopic, [ params.Title,params.Artical,params.Publisher], function (err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      jsonWrite(res, result);
    }
  })
});

//查询我的发帖
router.post('/checkMyTopic',(req,res)=>{
  console.log("===========查询我的帖子开始============");
  var sql_check_myTopic = $sql.myTopic.check_myTopic;
  conn.query(sql_check_myTopic,function (err,result) {
    if (err){
      console.log(err);
    }else{
      console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
      console.log("===========查询我的帖子结束=========");
    }
  })
});

//删除我的帖子
router.post('/delMyTopic',(req,res) => {
  var params = req.body;
  var sql_del_myTopic = $sql.myTopic.del_myTopic;
  conn.query(sql_del_myTopic,params.tid,function (err, result) {
    if (err) {console.log(err);}
    if(result){jsonWrite(res, result);}
  })
});


//评论接口
//查找comment
router.post('/checkComment',(req,res)=>{
  var sql_check_comment = $sql.myComment.check_Comment;
  conn.query(sql_check_comment,function (err,result) {
    if (err){
      console.log(err);
    }else{
      console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
    }
  })
});

//评论留言
router.post('/addComment',(req,res) => {
  // var sql_name = $sql.user.select_name;
  var sql_add_comment = $sql.myComment.add_Comment;
  var params = req.body;
  console.log(params);
  conn.query(sql_add_comment, [params.Comment,params.tid,params.Reviewer], function (err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      jsonWrite(res, result);
    }
  })
});

//查询我的评论
router.post('/checkMyComment',(req,res)=>{
  console.log("===========查询我的评论开始============");
  var sql_check_myComment = $sql.myComment.check_myComment;
  conn.query(sql_check_myComment,function (err,result) {
    if (err){
      console.log(err);
    }else{
      console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
      console.log("===========查询我的评论结束=========");
    }
  })
});

//删除我的评论
router.post('/delMyComment',(req,res) => {
  var params = req.body;
  var sql_del_myComment = $sql.myComment.del_myComment;
  conn.query(sql_del_myComment,params.cid,function (err, result) {
    if (err) {console.log(err);}
    if(result){jsonWrite(res, result);}
  })
});


//收藏接口
//查询收藏
router.post('/checkCollection',(req,res)=>{
  console.log("===========查询收藏帖子开始============");
  var sql_check_collection = $sql.collect.check_collection;
  conn.query(sql_check_collection,function (err,result) {
    if (err){
      console.log(err);
    }else{
      console.log(result);
      //发送查询到的结果
      res.send(JSON.stringify(result));
      console.log("===========查询收藏帖子结束=========");
    }
  })
});

//添加收藏
router.post('/addCollection',(req,res) => {
  var sql_add_collect = $sql.collect.add_collect;
  var params = req.body;
  console.log(params);
  conn.query(sql_add_collect,[params.tid,params.Title,params.Collector], function (err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      jsonWrite(res, result);
    }
  })
});

//删除收藏
router.post('/delCollection',(req,res) => {
  var params = req.body;
  var sql_del_collect = $sql.collect.del_collect;
  conn.query(sql_del_collect,params.collect_id,function (err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      jsonWrite(res, result);
    }
  })
});





module.exports = router;
