import { BulitManger } from "./BulitManger";
import { HttpTools } from "./HttpTools";
import { MainData } from "./MainData";
import { Npc } from "./Npc";

const { regClass, property } = Laya;

@regClass()
export class player_A extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    // @property(String)
    @property(Laya.Sprite)//手电筒照明
    public light:Laya.Sprite = null;
    @property(Laya.Sprite)//鼠标
    public mouse:Laya.Sprite = null;
    @property(Laya.Sprite)//gun
    public gun:Laya.Sprite = null;
    private speed:number = 2;//移动速度
    
    @property({type:Laya.Animation})
    ani_1:Laya.Animation;//待机状态动画
    
    @property({type:Laya.Animation})
    ani_r:Laya.Animation;//奔跑状态动画

    public npc:Npc[] = [];
    public isAni : boolean = false;//状态机
    public isAni_f:boolean  ;

    public maxY = 640;
    public minY = 240;
    public minY_1 = 0;
    public maxX = 1280;
    public minX = 0;
    
    @property (BulitManger)
    public bm:BulitManger = null;
    
    
    @property(Laya.ProgressBar)
    public xt:Laya.ProgressBar = null;

    // @property(Laya.Label)
    // public value:Laya.Label = null;

    public maxXue:number = 100;

    public hp:number = 100;


    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    // onAwake(): void {
    //     // this.xt.value = 100;
    //     // this.value.visible = false;
    // }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        //键盘按下
       Laya.stage.on(Laya.Event.KEY_DOWN, this , this.onKeyDown);
       //键盘释放
       Laya.stage.on(Laya.Event.KEY_UP, this , this.onKeyUp);
       //鼠标监听
       Laya.stage.on(Laya.Event.MOUSE_MOVE , this , this.onMouseMove);
        //初始两个动画
        this.ani_1.autoPlay = false;
        this.ani_r.autoPlay = false;
        this.xt.value = 1;
        console.log(MainData.get().gunId);
        
    }
    public onKeyDown(e : Laya.Event){
        if(e.keyCode == 65){//left
            this.owner.x -= 10;
        }else if(e.keyCode == 68){//right
            this.owner.x += 10;
        }else if(e.keyCode == 87){//up
            this.owner.y -= 10;
        }else if(e.keyCode == 83){//down
            this.owner.y += 10;
        }
        this.isAni = true;
        this.ani_r.autoPlay = true;
        this.ani_1.autoPlay = false;
    }
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
        var dx = mouseX - this.owner.x;
        var dy = mouseY - this.owner.y;
        var radian = Math.atan2(dy, dx);
        var degree = radian * 180 / Math.PI;
    
        //旋转精灵
        if(this.owner.scaleX == -2.5){
            this.light.rotation = 180-degree;
            this.gun.rotation = 180-degree;
        }else{
            this.light.rotation = degree;
            this.gun.rotation = degree;
        }
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {

        let currentScene = Laya.stage.getChildAt(0) as Laya.Scene;
        if(currentScene.name == "Game_1"){
            //限制移动
            if(this.owner.y <= this.minY){
                this.owner.y = this.minY;
            }else if(this.owner.y >= this.maxY){
                this.owner.y = this.maxY;
            }
            if(this.owner.x <= this.minX){
                this.owner.x = this.minX;
            }else if(this.owner.x >= this.maxX){
                this.owner.x = this.maxX;
            }
        }else{
            if(this.owner.y <= this.minY_1){
                this.owner.y = this.minY_1;
            }else if(this.owner.y >= this.maxY){
                this.owner.y = this.maxY;
            }
            if(this.owner.x <= this.minX){
                this.owner.x = this.minX;
            }else if(this.owner.x >= this.maxX){
                this.owner.x = this.maxX;
            }
        }

        //player图片所看方向
       if(Laya.stage.mouseX < this.owner.x){
        this.owner.scaleX = -2.5;
       }
       if(Laya.stage.mouseX > this.owner.x){
        this.owner.scaleX = 2.5;
       }  
       
       this.mouse.x = Laya.stage.mouseX;
       this.mouse.y = Laya.stage.mouseY;

       if (this.owner) {
        for(let i = 0 ; i < this.npc.length ; i++){
            if (Math.abs(this.owner.x - this.npc[i].owner.x) < 20 && Math.abs(this.owner.y - this.npc[i].owner.y) < 20) {
                this.npc[i].owner.removeSelf();
                this.npc.splice(i,1);
                this.xt.value -= this.npc[i].nHurt * 0.01;
                this.hp -= this.npc[i].nHurt
                console.log(this.hp);
                
                if(this.hp <= 0){
                    this.updateHighest();
                    Laya.Scene.open("GameOverFrame.ls");
                }
            }
        }
    } else {
        console.error("Owner is null or undefined.");
    }
    }
    
    public updateHighest(){
        HttpTools.get().send(
            "highest.php?id="+MainData.get().userID+"&highest="+MainData.get().highestMax+"&gunid="+MainData.get().gunId
            , this.onUpdateHighest , this
        );
        // console.log(MainData.get().highest , MainData.get().gunId );
        
    }
    public onUpdateHighest(j:any){
        if(j!=null){
            Laya.LocalStorage.setItem("id" , j["id"]);
            Laya.LocalStorage.setItem("psw" , j["psw"]);
            Laya.Scene.open("FirstJFrame.ls");
        }
    }
    
   
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}