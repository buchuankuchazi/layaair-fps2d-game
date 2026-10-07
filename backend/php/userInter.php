 <?php
    header('Access-Control-Allow-Origin: *');
    include("SqlTools.php"); //引用php代码
    $st = new SqlTools();//创建工具类对象

    $id = $_GET["id"];
    // $time = time();//时间戳
    $jb = 100;
    $lev = 1;
    // $oldTime = $time; 

    
        /**$sql = "SELECT MAX(`id`) FROM `user`";
                $ret = $st->fetchRow($sql);//执行查询命令 返回二维数组 */


    $sql = "SELECT * FROM `userdate` WHERE `ID` = $id";
    $ret = $st->fetchRow($spl);//执行查询命令  返回二维数组
    if(count($ret) == 0){
        $sql = "INSERT INTO `userdate`(`ID`, `JINBI`, `JY`, `LEVEL`,`HIGHEST`) VALUES ($id,$jb,$jy,$lev,$highest)";
         $st->query($sql);//执行无返回的语句
    }else{
        $lev = $ret[0][3];
        // $oldTime = $ret[0][3];
        
    }
    $jysq = $lev * $lev * 20;
    $jydq = $jy;
    if($jydq > $jysq){
        $lev = $lev + 1;
        $jy = 0;
    }
    // $shang = $lev * $lev * 50;
    // $chan = intval(($time - $oldTime)/10) * $lev;
    // if($chan > $shang){
    //     $chan = $shang;
    // }

    $return = array(
        "ret"=> 0,
        "lev"=> $lev,
        "jinbi" => $jb ,
        "jy" => $jy,
        "highest" => $highest
        // "chanliang" => $chan
    );

    // $id = $_GET["id"];
    // $psw = $_GET["psw"];

    // $name = "";
    // $icon = "3";
    // $jin = 100;
    // $lev = 1;

    // $spl = "SELECT * FROM `user` WHERE `ID`=$id AND `PSW`='$psw';";
    // $ret = $st->fetchRow($spl);//执行查询命令  返回二维数组
    // if(count($ret) == 0)
    // {
    //     $return = array(
    //         "ret"=>1
    //     );
    // }
    // else
    // {
    //     $name = $ret[0][2];
    //     $icon = $ret[0][3];
    //     $sql = "SELECT * FROM `userdata` WHERE `ID`=$id ";
    //     $ret = $st->fetchRow($sql);//执行查询命令 返回二维数组
    //     if(count($ret) == 0)
    //     {
    //         $sql = "INSERT INTO `userdata`(`ID`, `JIN`, `LEV`) VALUES (".
    //             $id.",$jin,$lev);";
    //         $st->query($sql);//执行无返回的语句

    //     }
    //     else
    //     {
    //         $jin = $ret[0][1];
    //         $lev = $ret[0][2];
    //     }
    //     $return = array(
    //         "ret"=>0,
    //         "name"=>$name,
    //         "icon"=>$icon,
    //         "jin"=>$jin,
    //         "lev"=>$lev
    //     );
    // }
    //将任何形式的数据 转化为JSON格式
    //

    /*任意游戏
    1.立项ppt （审核）
    2.审过后开始制作；
    3.一轮答辩，提修改意见
    4.二轮答辩，解释代码 ， 现场修改；
    必须要求
    弱联网模块：快速登陆 ，账号登陆 ，注册 ， 所有玩家排行榜 ， 玩家对战
    内部无要求
    */
    $json_string = json_encode($return , JSON_UNESCAPED_UNICODE);
     echo $json_string ;
?>