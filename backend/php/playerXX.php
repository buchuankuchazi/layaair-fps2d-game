 <?php
    header('Access-Control-Allow-Origin: *');
    include("SqlTools.php"); //引用php代码
    $st = new SqlTools();//创建工具类对象

    $name = "";
    $icon = 0;
    $jb = 100;
    $lev = 1;
    $jy = 0;
    $highest = 0;

    $sql = "SELECT * FROM `user`
        JOIN `userdate` ON `user`.`ID` = `userdate`.`ID`
        WHERE `user`.`ID` = $id ";
    $ret = $st->fetchRow($sql);//执行查询命令  返回二维数组

    if($ret){
        $date = [];
        while($row = $ret ->fetch_assoc()){
            $date[] = $row;
        }
        $ret->free();
    }else{
        echo"错误";
    }
    // if(count($ret) == 0){
    //     $name = $ret[0][1];
    //     $icon = $ret[0][3];
    //     $jb = $ret[1][1];
    //     $jy = $ret[1][2];
    //     $lev = $ret[1][3];
    //     $highest = $ret[1][4];
    // }else if(count($ret) ==1){
        
    // }
    $return = array(
        "ret"=> 0,
        "name"=> $name,
        "icon" => $icon ,
        "jb" => $jb,
        "jy" => $jy,
        "lev" => $lev,
        "highest" => $highest
    );
    $json_string = json_encode($return , JSON_UNESCAPED_UNICODE);
     echo $json_string ;
?>