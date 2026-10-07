const { regClass, property } = Laya;

@regClass()
export class Player extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    @property({type:Laya.Animation})
    ani_1:Laya.Animation;//待机状态动画
    
    @property({type:Laya.Animation})
    ani_r:Laya.Animation;//奔跑状态动画

    public isAni : boolean = false;//状态机
    public isAni_f:boolean  ;

    @property(Laya.Sprite)
    player:Laya.Sprite = null;
    
    private speed:number = 2;//移动速度

    @property(Laya.Sprite)//手电筒照明
    public light:Laya.Sprite = null;

    @property(Laya.Sprite)//传送门1
    public csm1:Laya.Sprite = null;

    @property(Laya.Sprite)//传送门2
    public csm2:Laya.Sprite = null;

    // @property(Laya.Button)//开始游戏按钮
    // public PGame:Laya.Button = null;

    public isArmed : boolean = false;//是否持枪状态

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.ani_1.autoPlay = false;//初始两个动画
        this.ani_r.autoPlay = false;

        //键盘按下
       Laya.stage.on(Laya.Event.KEY_DOWN, this , this.onKeyDown);
       //键盘释放
       Laya.stage.on(Laya.Event.KEY_UP, this , this.onKeyUp);

       //鼠标监听
       Laya.stage.on(Laya.Event.MOUSE_MOVE , this , this.onMouseMove);

        // //键盘按下
        // Laya.stage.on(Laya.Event.KEY_DOWN, this , this.onKeyDown);
        // //键盘释放
        // Laya.stage.on(Laya.Event.KEY_UP, this , this.onKeyUp);
    }
    //处理键盘按下事件
    public onKeyDown(e : Laya.Event){
        if(e.keyCode == 65){//left
            this.player.x -= 10;
        }else if(e.keyCode == 68){//right
            this.player.x += 10;
        }else if(e.keyCode == 87){//up
            this.player.y -= 10;
        }else if(e.keyCode == 83){//down
            this.player.y += 10;
        }

        this.isAni = true;
        //运行run动画
        // this.ani_r.play(0 ,true);
        this.ani_r.autoPlay = true;
        // this.ani_1.stop();//暂停待机动画播放
        this.ani_1.autoPlay = false;
        
    }
    //处理键盘抬起事件
    public onKeyUp(e : Laya.Event){
        this.isAni = false;
        //运行待机动画
        this.ani_1.autoPlay = true;
        this.ani_r.autoPlay = false;
        
    }

    public onMouseMove(){
        //获取位置
        var mouseX = Laya.stage.mouseX;
        var mouseY = Laya.stage.mouseY;
        //计算旋转角度
        var dx = mouseX - this.player.x;
        var dy = mouseY - this.player.y;
        var radian = Math.atan2(dy, dx);
        var degree = radian * 180 / Math.PI;
    
        //旋转精灵
        if(this.player.scaleX == -2.5){
            this.light.rotation = 180-degree;
        }else{
            this.light.rotation = degree;
        }
    }

    public ani(isAni:boolean){//动画切换
        if(isAni == true){
            this.isAni_f = false;
        }else{
            this.isAni_f = true; 
        }
        this.ani_1.autoPlay = isAni;
        this.ani_r.autoPlay = this.isAni_f;

    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
       
       //player图片所看方向
       if(Laya.stage.mouseX < this.player.x){
        this.player.scaleX = -2.5;
       }
       if(Laya.stage.mouseX > this.player.x){
        this.player.scaleX = 2.5;
       }  

       //传送门手动旋转
       for(var i = 0 ; i <= 360 ; i++){
        // this.csm1.rotation -= i;
        this.csm2.rotation += i;
        if(i == 360){
            i = 0;
        }
       }
       //判定传送门位置传送
    //    if(this.player.x == this.csm1.x -50 || this.player.x == this.csm1.x + 50){
    //     Laya.Scene.open("Game_1.ls");
    //    }
       //传送门手动传送


    //    if(this.isAni == true){
           
    //    }else{
    //    }
        // this.ani(this.isAni);
       
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //
    onMouseClick(): void {
        if(this.isArmed){
            
        }
    }
}