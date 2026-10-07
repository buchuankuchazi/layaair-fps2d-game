import { Icon } from "./Icon";
import { MainData } from "./MainData";
import { gun } from "./gun";
import { xingBie } from "./xingBie";
const { regClass, property } = Laya;

@regClass()
export class xinxi extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;
    @property(Laya.Label)
    public name: Laya.Label = null;
    @property(Laya.Label)
    public highest: Laya.Label = null;
    @property(Laya.Label)
    public mingci: Laya.Label = null;
    @property(Icon)
    public icon: Icon = null;
    @property(gun)
    public gun: gun = null;
    @property(Laya.Label)
    public XB: Laya.Label = null;
    @property(xingBie)
    public xbk: xingBie = null;

    public name_s: number = 1;
    public highest_s: number = 0;
    public mm: number = 1;
    public iconId:number = 1 ;
    public gunId:number = 1;
    public xbid:number = 1;


    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
    resetList() {
        this.name.text = "" + this.name_s;
        this.name.bold = true;
        this.highest.text = "" + this.highest_s;
        this.icon.resetIcon(this.iconId) ;
        this.gun.resetGun(this.gunId);
        if(this.xbid == 1){
            this.XB.text = "男";
        }else if(this.xbid==2){
            this.XB.text = "女";
        }
        this.xbk.resetXing(this.xbid);
    }
}