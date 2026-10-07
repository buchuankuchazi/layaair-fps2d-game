const { regClass, property } = Laya;

@regClass()
export class GameMune extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";
    
    @property(Laya.Button)
    public pG:Laya.Button = null;

    // @property(Laya.Button)
    // public st:Laya.Button = null;

    @property(Laya.Button)
    public phb:Laya.Button = null;

    @property(Laya.Sprite)
    public phb_s:Laya.Sprite = null;
    
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.pG.on(Laya.Event.MOUSE_DOWN , this , this.onPlayGame);
        // this.st.on(Laya.Event.MOUSE_DOWN , this , this.onStore);
        this.phb.on(Laya.Event.MOUSE_DOWN , this , this.onPHB);
        this.phb_s.visible = false;
    }
    public onPlayGame(e:Laya.Event){
        console.log("2222222");
        Laya.Scene.open("Game_1.ls");
        console.log("11111111111");
    }
    // public onStore(e:Laya.Event){
    //     Laya.Scene.open("Store.ls");
    // }
    public onPHB(e:Laya.Event){
        // Laya.Scene.open("PHB.ls");
        this.phb_s.visible = true;
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        if(this.phb_s.visible == true){
            this.phb_s.visible = false;
        }
    }
    
}