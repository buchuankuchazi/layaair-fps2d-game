import { MainData } from "./MainData";
import { Npc } from "./Npc";
import { player_A } from "./player_A";

const { regClass, property } = Laya;

@regClass()
export class NpcManager extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";
    @property(Laya.Prefab)
    public npcPrefab: Laya.Prefab = null;

    @property(player_A)
    public player: player_A = null;

    @property(NpcManager)
    public npcManager: NpcManager = null;

    @property(Laya.Sprite)
    public game: Laya.Sprite = null;

    public nck:Npc[] = [];
    
    public speed:number = 0.3;

    public time:number = 0;

    // public csSpeed:number = MainData.get().Level * MainData.get().Level * 0.2;
    public csSpeed:number = 100;

    public highest:number = 0;

    // @property(Laya.Label)

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        this.time += 1;
        let ox = 0;
        let oy = 0;
        if(this.time % this.csSpeed == 0){
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("npc", this.npcPrefab.create, this.npcPrefab);
            //需后期更改具体数值
            if(Math.random() < 0.5){
                ox = Math.random() * 1280;
                one.pos(Laya.stage.width - ox, 0);
            }else{
                oy = Math.random() * 640;
                one.pos(0, Laya.stage.height - oy);
            }
            
            this.game.addChild(one);
            let npc:Npc = one.getComponent(Npc);
            this.nck.push(npc);
            let dx = this.player.owner.x - one.x;
            let dy = this.player.owner.y - one.y;
            let radian = Math.atan2(dy, dx);
            let vy = this.speed * Math.sin(radian);
            let vx = this.speed * Math.cos(radian);
            npc.vx = vx;
            npc.vy = vy;
            this.player.npc = this.nck;
        }
        
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}