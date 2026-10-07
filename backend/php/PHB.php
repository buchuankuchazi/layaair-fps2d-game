 <?php
    header('Access-Control-Allow-Origin: *');
    include("SqlTools.php"); //引用php代码
    $st = new SqlTools();//创建工具类对象

    $sql = "SELECT * FROM `userdate`";
    $ret = $st->fetchRow($sql);//执行查询命令  返回二维数组
    $return = array(
        "ret"=> 0,
        "date" => $ret
    );
    $json_string = json_encode($return , JSON_UNESCAPED_UNICODE);
     echo $json_string ;
?>