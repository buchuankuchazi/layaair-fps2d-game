import { MainData } from "./MainData";
import { player_A } from "./player_A";
import { Icon } from "./Icon";
import { gun } from "./gun";
import { xingBie } from "./xingBie";

const { regClass, property } = Laya;

@regClass()
export class Game_1 extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;
    // 传送门1
    @property(Laya.Sprite)
    public csm1:Laya.Sprite = null;
    // 传送门2
    @property(Laya.Sprite)
    public csm2:Laya.Sprite = null;
    // 玩家
    @property(player_A)
    public player_l:player_A = null;
    // 用户名字
    @property(Laya.Label)
    public userName:Laya.Label = null;
    // 等级
    @property(Laya.Label)
    public dengji:Laya.Label = null;
    // 经验
    @property(Laya.Label)
    public jingyan:Laya.Label = null;
    // 金币
    // @property(Laya.Label)
    // public jinbi:Laya.Label = null;
    // icon
    @property(Icon)
    public icon:Icon = null;
    // iconid
    public iconId:number;
    //Store
    @property(Laya.Sprite)
    public store:Laya.Sprite = null;
    // 靠近提示
    @property(Laya.Label)
    public tishi:Laya.Label = null;
    //弹窗
    @property(Laya.Sprite)
    public tanchu:Laya.Sprite = null;
    //手持gun
    @property(gun)
    public gun:gun = null;
    //gun
    @property(Laya.Prefab)
    public gunPer:Laya.Prefab = null;
    //按键状态
    private isKeyEPressed: boolean = false;  
    public jb:number = MainData.get().jB;
    //性别
    @property(xingBie)
    public xing:xingBie = null;
    public xingId:number = MainData.get().XingBie;

    @property(Laya.Button)
    public fanhui:Laya.Button = null;
    //是否拿枪
    // private isGun:boolean = false;

    // public jinbi:Laya.Label = null;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        //键盘按下
        Laya.stage.on(Laya.Event.KEY_DOWN, this , this.onKeyDown);
        this.fanhui.on(Laya.Event.CLICK , this , this.onFanhui);
        //获取界面数据
        this.userName.text = MainData.get().userName;
        this.dengji.text ="lev:" + MainData.get().Level;
        this.iconId = MainData.get().iconId;
        this.icon.resetIcon(this.iconId);
        this.xing.resetXing(this.xingId);
        
        //提示
        this.tishi.alpha = 0;
        //弹出框
        this.gun.resetGun(5);
        for(let i = 0 ; i < 5 ; i++){
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("tcGun" , this.gunPer.create , this.gunPer);
            this.tanchu.addChild(one);
            //排列算法
            let r = Math.floor(i/5);
            let c = i % 5;
            one.pos(c * 150 ,  r * 150 );
            one.width = one.height = 150;
            let js = one.getComponent(gun);
            js.resetGun(i+1);
            js.gun = this.gun;
            js.tanchu = this.tanchu;
        }
        // 添加键盘监听
        this.gun.owner.on(Laya.Event.KEY_DOWN , this , this.onKeyDown);
        
        // 关闭弹窗
        this.tanchu.visible = false;
    }
    public onKeyDown(e: Laya.Event){
        // if(e.keyCode == 69){//弹出
        //     this.isKeyEPressed = true;  
        // }
        if(e.keyCode == 69 && this.isKeyEPressed == false){//弹出
            this.isKeyEPressed = true;  
        }else if(e.keyCode == 69 && this.isKeyEPressed == true){
            this.isKeyEPressed = false;
        }
    }
    public onFanhui(){
        Laya.Scene.open("GameMune.ls");
    }
    public onCloseTC(e:Laya.Event){
        this.tanchu.visible = false;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        this.jingyan.text = "exp:" + 1 + "/" + MainData.get().jYmax;
        if(MainData.get().jY >= MainData.get().jYmax){
            MainData.get().jY = 0;
            MainData.get().jYmax += 100;
            MainData.get().Level += 1;
        }
        this.csm2.rotation += 1;
        //传送判定
        // if(this.isGun == true){
            if(Math.abs(this.player_l.owner.x - this.csm1.x) <= 50 && Math.abs(this.player_l.owner.y - this.csm1.y) <= 50){
                Laya.Scene.open("Game_2.ls");
            }
        // }
        //提示判定
        if(Math.abs(this.player_l.owner.y - 244) <= 50){
            this.tishi.alpha = 1;
            if(this.isKeyEPressed){
                this.tanchu.visible = true;
                this.tishi.alpha = 0;
            }else{
                this.tanchu.visible = false;
                this.tishi.alpha = 1;
            }
        }else{
            this.tanchu.visible = false;
            this.tishi.alpha = 0;
        }
        MainData.get().gunId = this.gun.gunId;
    }
    //打开商店判定
    // public stopStore(player:player_A){
    //     Math.abs(this.store.x - player.owner.x)
    // }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}