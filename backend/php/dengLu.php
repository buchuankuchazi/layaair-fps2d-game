<?php
    header('Access-Control-Allow-Origin: *');
    include("SqlTools.php");

    $st = new SqlTools();//创建工具类对象

    $id = $_GET["id"];
    $psw = $_GET["psw"];

    $name = "";
    $icon = "3";

    $jb = 10;
    $jy = 0;
    $lev = 1;
    $highest = 0;

    $spl = "SELECT * FROM `user` WHERE `ID`=$id AND `PSW`=$psw";
    $ret = $st->fetchRow($spl);//执行查询命令  返回二维数组
    if(count($ret) == 0)
    {
        $return = array(
            "ret"=>1
        );
    }
    else
    {
        $name = $ret[0][1];
        $icon = $ret[0][3];
        $sql = "SELECT * FROM `userdate` WHERE `ID`=$id";
        $ret = $st->fetchRow($sql);//执行查询命令 返回二维数组
        if(count($ret) == 0)
        {//INSERT INTO `userdate`(`ID`, `JINBI`, `JY`, `LEVEL`, `HIGHEST KILL`) VALUES ('2','30','10','3','7')
            $sql = "INSERT INTO `userdate`(`ID`, `JINBI`, `JY`, `LEVEL`, `HIGHEST KILL`) VALUES ($id,$jb,$jy,$lev,$highest)";
            $st->query($sql);//执行无返回的语句

        }
        else
        {
            $jb = $ret[0][1];
            $jy = $ret[0][2];
            $lev = $ret[0][3];
        }
        $return = array(
            "ret"=>0,
            "sql"=>$sql,
            "name"=>$name,
            "icon"=>$icon,
            "jinbi" => $jb,
            "lev" => $lev,
            "jinhyan" => $jy,
            "highest"=>$highest 
        );
    }
    //将任何形式的数据 转化为JSON格式
    $json_string = json_encode($return , JSON_UNESCAPED_UNICODE);
     echo $json_string ;
     //06-29:50
?>