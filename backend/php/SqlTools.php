<?php
    header('Access-Control-Allow-Origin: *');

    /**
     * 数据库连接工具类
     *
     * 说明：原开发版本中把数据库账号密码直接写在源码里，改为常量集中配置，
     * 避免把真实凭据提交到公开仓库。部署时请填入自己的数据库信息。
     */
    class SqlTools
    {
        // ===== 数据库配置（请按自己的环境修改）=====
        const DB_HOST = '127.0.0.1';
        const DB_USER = 'root';
        const DB_PASS = 'your_password_here';
        const DB_NAME = 'che';

        private $conn;  // 连接对象，用来执行数据库命令

        function __construct()  // 构造方法，用来连接数据库
        {
            $this->conn = mysqli_connect(self::DB_HOST, self::DB_USER, self::DB_PASS, self::DB_NAME);

            if (!$this->conn) {          // 连接失败则终止
                die('数据库连接失败' . mysqli_connect_error());
            }
            mysqli_set_charset($this->conn, 'utf8');   // 设置编码
        }

        // 执行 SQL 命令（无返回值）
        public function query($sql)
        {
            return @ $this->conn->query($sql);
        }

        // 执行 SQL 查询命令，返回二维数组
        public function fetchRow($sql)
        {
            $return = [];
            if (null != $this->conn) {
                $result = @ $this->conn->query($sql);
                if (null != $result && mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_row($result)) {
                        $return[] = $row;   // 在数组最后追加一行数据
                    }
                }
            }
            return $return;
        }
    }
?>
