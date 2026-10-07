
const { regClass, property } = Laya;

@regClass()
export class gun extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";
    public gunId:number = 1;
    public gun:gun = null;
    public tanchu:Laya.Sprite = null;
    // public jiage:number = 1;
    // public game_1:Game_1 = null;
    
    

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    // onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
    onMouseClick(): void {
        if(this.gun != null){
            this.gun.resetGun(this.gunId);
            this.tanchu.visible = false;
            // var jb = MainData.get().jB - this.jiage;
            // MainData.get().jB = jb;
            // this.game_1.jinbi.text = "金币:" + jb;
        }
    }
    public resetGun(id:number){
        this.gunId = id;
        Laya.loader.load("img/gun/gun"+id+".png").then((res:Laya.Texture) => {this.owner.texture = res;});
    }
}