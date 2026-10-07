import { BulitManger } from "./BulitManger";
import { Game_1 } from "./Game_1";
import { MainData } from "./MainData";
import { gun } from "./gun";

const { regClass, property } = Laya;

@regClass()
export class Game_2 extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    // public gunId:number = 0;
    public game_1:Game_1 = null;
    @property(gun)
    public gun:gun = null;

    @property(BulitManger)
    public b:BulitManger = null;

    @property(Laya.Label)
    public highest:Laya.Label = null;
    
    @property(Laya.Label)
    public highestMax:Laya.Label = null;

    public highest_s:number = 0;
    public highest_a:number = MainData.get().highestMax;
    
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        let js = this.gun;
        js.resetGun(MainData.get().gunId);
        console.log(this.highest_s);
        this.highestMax.text = "KillMax:" + MainData.get().highestMax;
        // console.log(MainData.get().highestMax);
        console.log(MainData.get().gunId);
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {

        if(this.highest_s > this.highest_a){
            this.highest_a = this.highest_s;
            MainData.get().highestMax = this.highest_a;
        }
        this.highest.text = "KillNow:" + MainData.get().highest;
        this.highest.bold = true;

    }
    // public onHighest(){
    //     "highest.php?highest=" + this.highest_s + "&id=" + MainData.get().id;
    // }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}