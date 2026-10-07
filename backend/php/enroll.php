<?php
    header('Access-Control-Allow-Origin: *');
    include("SqlTools.php");   //  引用PHP代码
    $st = new SqlTools() ;  // 创建工具类对象

    $name = $_GET["name"];
    $icon = $_GET["icon"];
    $pass = rand(10000000 , 99999999);

    $sql ="SELECT * FROM `user` WHERE `NAME` = '".$name."';";
    $ret = $st->fetchRow($sql);//执行查询命令 返回二维数组

    // 可返回数组长度
    if(count($ret) == 0){//判断返回值是否存在
        $sql = "INSERT INTO `user`( `PSW`, `NAME`, `ICON`) VALUES ('".$pass."','".$name."',".$icon.")";
        $st->query($sql) ; //  执行无返回的语句
        
        $sql = "SELECT MAX(`id`) FROM `user`";
        $ret = $st->fetchRow($sql);//执行查询命令 返回二维数组
        
        $return = array(
            "ret"=>0 ,
            "id"=>$ret[0][0] ,
            "psw"=>$pass
        );
    }else{
        $return = array(
            "ret"=>1
        );
    }

    //  将任何格式的数据  转化成JSON格式
    $json_string = json_encode($return , JSON_UNESCAPED_UNICODE);
    echo $json_string ;
?>