import { HttpTools } from "./HttpTools";
import { MainData } from "./MainData";
const { regClass, property } = Laya;

@regClass()
export class MainGame extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";
    @property(Laya.Button)
    public eBt : Laya.Button = null;

    @property(Laya.Button)
    public lBt : Laya.Button = null;

    public userID:number = 0;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.eBt.on(Laya.Event.MOUSE_DOWN , this , this.onOk);
        this.lBt.on(Laya.Event.MOUSE_DOWN , this , this.onOther);

    }
    onOk(e:Laya.Event){
        this.userID = Laya.LocalStorage.getItem("id");
        let psw = Laya.LocalStorage.getItem("psw");
        if(this.userID == null){
            Laya.Scene.open("ZhuCe.ls");
        }else{
            HttpTools.get().send(
                "dengLu.php?id="+this.userID+"&psw="+psw,
                this.onSend , this
            );
        }
    }
    onOther(e:Laya.Event){
        Laya.Scene.open("LoginFrame.ls");
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
    public oneBtClick(e:Laya.Event){
        console.log("注册账号");
        Laya.Scene.open("ZhuCe.ls");
    }
    public onlBtClick(e:Laya.Event){
        // console.log("登陆账号");
        this.userID = Laya.LocalStorage.getItem("id");
        let psw = Laya.LocalStorage.getItem("psw");
        if(this.userID == null){
            Laya.Scene.open("LoginFrame.ls");    
        }else{
            
        }
        
    }
    onSend(j:any , self:MainGame){
        if(j!=null){
            if(j["ret"] == 1){
                Laya.Scene.open("ZhuCe.ls");
            }else{
                MainData.get().userID= self.userID;
                MainData.get().userName = j["name"];
                MainData.get().iconId = j["icon"];
                MainData.get().jB = j["jinbi"];
                MainData.get().jY = j["jy"];
                
                Laya.Scene.open("GameMune.ls");
            }
        }
    }
}