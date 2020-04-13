// sql语句
let sqlMap = {
  // 用户
  user: {
    add: 'insert into User(id, userName, userPwd,sex) values (0, ?, ?, ?)',
    select_name: 'SELECT * from User where userName = ?',    //查询 username
    check_user: 'SELECT * from User',    //查询 username
    select_pwd: 'SELECT * from User where userPwd = ?',
    update_pwd: 'UPDATE User SET userPwd = ? WHERE userName = ? ',
    update_username: 'UPDATE User SET userName = ? WHERE id = ? '
  },
  //收藏
  collect:{
    del_collect:"DELETE FROM Collection where collect_id = ?  ",
    check_collection:"select * from Collection inner join topic on topic.tid = Collection.tid ",
    add_collect:"insert into Collection(collect_id,tid,Title,Collector) values (0, ?, ?, ?)",
  },
  //主题
  myTopic:{
    check_myTopic:"Select * from topic inner join user on User.userName = topic.Publisher order by createtime desc",
    checkTopic:"SELECT * from topic ",
    check_HotTopic:"SELECT *,count(Comment) From topic inner join comment on topic.tid = comment.tid GROUP BY Title order by count(Comment) desc",
    add_Topic: 'insert into topic(tid,Title,Artical,Publisher) values (0, ?, ?, ?)',
    del_myTopic:"DELETE FROM topic where tid = ?  ",
  },
  //评论
  myComment:{
    //三表关联查询：先使用内连接关联用户表跟评论表，筛选出匹配内容再使用左连接与主题表关联
    check_myComment:"Select * from comment inner join user on User.userName = comment.Reviewer left join topic on topic.tid = comment.tid order by addcomment_time desc",
    del_myComment:"DELETE FROM comment where cid = ?  ",
    add_Comment: 'insert into comment(cid,Comment,tid,Reviewer) values (0, ?, ?, ?)',
    check_Comment:"select * from comment inner join topic on topic.tid = comment.tid",
  }
};
module.exports = sqlMap;
