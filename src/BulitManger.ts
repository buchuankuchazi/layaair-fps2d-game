import { Bulit } from "./Bulit";
import { NpcManager } from "./NpcManager";
import { gun } from "./gun";
import { player_A } from "./player_A";

const { regClass, property } = Laya;

@regClass()
export class BulitManger extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    @property(Laya.Prefab)
    public zdPer:Laya.Prefab = null;
    
    @property(player_A)
    public player:player_A = null;

    @property(BulitManger)
    public bm:BulitManger = null;

    @property(NpcManager)
    public nm:NpcManager = null;

    @property(gun)
    public gun:gun = null;
    
    @property(Laya.Sprite)
    public game:Laya.Sprite = null;

    public highest_bm:number = 0;
    
    public zck:Bulit[] = [];

    public speed:number = 10 ;

    private hurt:number = 1;

    // public highest_b:number = 0;
    

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        // Laya.stage.on(Laya.Event.MOUSE_MOVE , this , this.onMousemove);
        Laya.stage.on(Laya.Event.MOUSE_DOWN , this , this.OnClick);
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    // onUpdate(): void {} 
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    // onMouseClick(): void {
 
    //    this.OnCreate();
    // }
    OnClick(e:Laya.Event){
        // 计算鼠标坐标与精灵坐标之间的角度 
        // 计算触摸点与one点的横纵坐标差值
        let dx = e.touchPos.x - this.player.owner.x;
        let dy = e.touchPos.y - this.player.owner.y;
        // 计算两点之间的夹角
        let radian = Math.atan2(dy, dx);
        // 计算速度在x轴和y轴上的大小
        let vy = this.speed * Math.sin(radian);
        let vx = this.speed * Math.cos(radian);

        //判断枪的类型 赋予不同值和方式
        if(this.gun.gunId == 1){
            this.hurt = 2;
            
            // 声明一个Laya.Sprite类型的变量one，并将Laya.Pool.getItemByCreateFun方法返回的值赋值给one
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
            // 将one的position属性设置为this.player.owner的position属性
            one.pos(this.player.owner.x , this.player.owner.y);
            // 将one添加到this.game的子节点中
            this.game.addChild(one);
            // 获取one的Bulit类型的组件，并将其添加到this.zck数组中
            let bul:Bulit = one.getComponent(Bulit) ;
            // 将bul压入zck数组中
            this.zck.push(bul) ;
            // 将速度赋值给bul的vx和vy属性
            bul.vx = vx ;
            bul.vy = vy ;
            bul.npc = this.nm.nck;
            bul.hurt = this.hurt;

        }else if(this.gun.gunId == 2){
            this.hurt = 5;
            
            // 声明一个Laya.Sprite类型的变量one，并将Laya.Pool.getItemByCreateFun方法返回的值赋值给one
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
            // 将one的position属性设置为this.player.owner的position属性
            one.pos(this.player.owner.x , this.player.owner.y);
            // 将one添加到this.game的子节点中
            this.game.addChild(one);
            // 获取one的Bulit类型的组件，并将其添加到this.zck数组中
            let bul:Bulit = one.getComponent(Bulit) ;
            // 将bul压入zck数组中
            this.zck.push(bul) ;
            
            // 将速度赋值给bul的vx和vy属性
            bul.vx = vx ;
            bul.vy = vy ;
            bul.npc = this.nm.nck;
            bul.hurt = this.hurt;
        }else if(this.gun.gunId == 3){//喷子
            this.hurt = 2;
            //一次同时发出五发子弹
            for(let i = 0 ; i < 5 ; i++){
                
                // 声明一个Laya.Sprite类型的变量one，并将Laya.Pool.getItemByCreateFun方法返回的值赋值给one
                let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
                // 将one的position属性设置为this.player.owner的position属性
                one.pos(this.player.owner.x , this.player.owner.y);
                // 将one添加到this.game的子节点中
                this.game.addChild(one);
                // 获取one的Bulit类型的组件，并将其添加到this.zck数组中
                let bul:Bulit = one.getComponent(Bulit) ;
                // 将bul压入zck数组中
                this.zck.push(bul) ;
                
                // 将速度赋值给bul的vx和vy属性
                
                // 为每个子弹添加一个独特的角度偏移
                let angleOffset = (i - 2) * 10; // 偏移量可以根据需要进行调整
                let radianOffset = angleOffset * Math.PI / 180; // 将角度转换为弧度

                // 计算带有偏移的速度
                let vxOffset = vx * Math.cos(radianOffset) - vy * Math.sin(radianOffset);
                let vyOffset = vx * Math.sin(radianOffset) + vy * Math.cos(radianOffset);

                bul.vx = vxOffset;
                bul.vy = vyOffset;
                bul.npc = this.nm.nck;
                bul.hurt = this.hurt;
            }
        }else if(this.gun.gunId == 4){
            this.hurt = 10;
            
            // 声明一个Laya.Sprite类型的变量one，并将Laya.Pool.getItemByCreateFun方法返回的值赋值给one
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
            // 将one的position属性设置为this.player.owner的position属性
            one.pos(this.player.owner.x , this.player.owner.y);
            // 将one添加到this.game的子节点中
            this.game.addChild(one);
            // 获取one的Bulit类型的组件，并将其添加到this.zck数组中
            let bul:Bulit = one.getComponent(Bulit) ;
            // 将bul压入zck数组中
            this.zck.push(bul) ;
            
            // 将速度赋值给bul的vx和vy属性
            bul.vx = vx ;
            bul.vy = vy ;
            bul.npc = this.nm.nck;
            bul.hurt = this.hurt;
        }else if(this.gun.gunId == 5){
            this.hurt = 1;
            //一次发出两颗子弹
            for(let i = 0 ; i < 5 ; i++){
                setTimeout(() => {
                    // 声明一个Laya.Sprite类型的变量one，并将Laya.Pool.getItemByCreateFun方法返回的值赋值给one
                    let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
                    // 将one的position属性设置为this.player.owner的position属性
                    one.pos(this.player.owner.x , this.player.owner.y);
                    // 将one添加到this.game的子节点中
                    this.game.addChild(one);
                    // 获取one的Bulit类型的组件，并将其添加到this.zck数组中
                    let bul:Bulit = one.getComponent(Bulit) ;
                    // 将bul压入zck数组中
                    this.zck.push(bul) ;
                    
                    // 将速度赋值给bul的vx和vy属性
                    bul.vx = vx ;
                    bul.vy = vy ;
                    bul.npc = this.nm.nck;
                    bul.hurt = this.hurt;
                }, i * 100);
                
            }
        }
    }
    // OnCreate()
    // {
    //     let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("zd" , this.zdPer.create , this.zdPer);
    //     one.pos(this.player.owner.x , this.player.owner.y);
    //     this.game.addChild(one);
    // }
}