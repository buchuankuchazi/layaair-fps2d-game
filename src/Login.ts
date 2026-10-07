import { HttpTools } from "./HttpTools";
// import { Main } from "./Main";
import { MainData } from "./MainData";
// import { MainKL } from "./MainKL";

const { regClass, property } = Laya;

@regClass()
export class Login extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    @property(Laya.TextInput)
    public userId: Laya.TextInput = null;

    @property(Laya.TextInput)
    public userPsw: Laya.TextInput = null;

    @property(Laya.Sprite)
    public ok: Laya.Sprite = null;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.ok.on(Laya.Event.MOUSE_DOWN , this , this.onOk);
    }
    public onOk(e:Laya.Event){
        HttpTools.get().send(
            "dengLu.php?id="+this.userId.text+"&psw="+this.userPsw.text, 
            this.onSend , this
    )
        // console.log(this.userName.text);
        // console.log(this.userPsw.text);
        // let http: Laya.HttpRequest = new Laya.HttpRequest();
        // http.http.timeout = 10000;
        // http.send("http://localhost/test03/b.php?name="+this.userName.text+"&psw="+this.userPsw.text,"" ,"get","text");
        // http.once(Laya.Event.COMPLETE, this, this.completeHandler);
        // http.once(Laya.Event.ERROR, this, this.errorHandler);
        // http.on(Laya.Event.PROGRESS, this, this.processHandler);
    }
    public onSend(j:any , self:Login){
        if(j != null){
            if(j["ret"] == 0){
                Laya.LocalStorage.setItem("id" , self.userId.text);
                Laya.LocalStorage.setItem("psw" , self.userPsw.text);

                MainData.get().userID = self.userId.text;
                MainData.get().userName = j["name"];
                MainData.get().iconId = j["icon"];
                MainData.get().jB = j["jb"];
                MainData.get().highestMax = j["highest"];
                // MainData.get().highest = j["highest"];
                // MainData.get().kunagLevel = j["kunagLevel"];
                // console.log("ret=0");
                

                Laya.Scene.open("GameMune.ls");
            }else{
                self.userId.text ;
                self.userPsw.text = "";
            }
        }
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