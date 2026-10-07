import { Bulit } from "./Bulit";
import { Game_2 } from "./Game_2";

const { regClass, property } = Laya;

@regClass()
export class Npc extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner: Laya.Sprite;

    @property(Npc)
    public npc: Npc = null;

    public nHurt: number = 10;

    public nHp: number = 10;

    public vx: number = 0;

    public vy: number = 0;

    public game: Game_2 = null;
    
    @property(Laya.Label)
    public value: Laya.Label = null;

    // @property(String)
    // public text: string = "";

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
    // this.zd.npc = this;
        this.value.text = "" + this.nHp;
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        this.owner.x += this.vx;
        this.owner.y += this.vy;
        if (this.owner.y < 0 || this.owner.x < 0 || this.owner.x > 1280 || this.owner.y > 640) {
            this.owner.removeSelf();
            //    console.log("夏奥会 ");
        }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}