import { MainData } from "./MainData";

const { regClass, property } = Laya;

@regClass()
export class GameOverFrame extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";

    @property(Laya.Label)
    public dangqian:Laya.Label = null;

    @property(Laya.Label)
    public zuida:Laya.Label = null;

    @property(Laya.Button)
    public fanhui:Laya.Button = null;

    @property(Laya.Button)
    public chongxin:Laya.Button = null;

    @property(Laya.Button)
    public tuichu:Laya.Button = null;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        this.fanhui.on(Laya.Event.MOUSE_DOWN,this,this.onFanhui);
        this.chongxin.on(Laya.Event.MOUSE_DOWN,this,this.onChongxin);
        this.tuichu.on(Laya.Event.MOUSE_DOWN,this,this.onTuichu);

        this.dangqian.text = "当前分数："+MainData.get().highest;
        this.zuida.text = "最高分数："+MainData.get().highestMax;
    }

    public onFanhui(){
        Laya.Scene.open("GameMune.ls");
    }

    public onChongxin(){
        Laya.Scene.open("Game_1.ls");
    }
    public onTuichu(){
        Laya.Browser.window.close();
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}