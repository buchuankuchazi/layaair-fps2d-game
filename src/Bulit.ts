import { MainData } from "./MainData";
import { Npc } from "./Npc";

const { regClass, property } = Laya;

@regClass()
export class Bulit extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    @property(Bulit)
    public zd:Bulit = null;
    
    public npc:Npc[] = [];

    public hurt:number = 1;

    public vx:number = 0 ;
    public vy:number = 0 ;

    public highest_b:number = 0;
    public npcDestroyed:boolean = false;


    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    // onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    // onStart(): void {}

    
    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        
        // 更新owner的位置
        if (this.owner) {
            this.owner.x += this.vx;
            this.owner.y += this.vy;
            for(let i = 0 ; i < this.npc.length ; i++){
                if (Math.abs(this.owner.x - this.npc[i].owner.x) < 20 && Math.abs(this.owner.y - this.npc[i].owner.y) < 20) {
                    this.zd.owner.removeSelf();
                    this.owner.removeSelf();
                    this.npc[i].nHp -= this.hurt;
                    this.npc[i].value.text = "" + this.npc[i].nHp;
                    if(this.npc[i].nHp <= 0){
                        MainData.get().highest += 1;
                        MainData.get().jB += 1;
                        MainData.get().jY += 1;
                        this.npc[i].owner.removeSelf();
                        this.npc.splice(i,1);
                    }
                }
            }
            if (this.owner.y < 0 || this.owner.x < 0 || this.owner.x > 1280 || this.owner.y > 640) {
                this.owner.removeSelf();
            }
        } else {
            console.error("Owner is null or undefined.");
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。    
}