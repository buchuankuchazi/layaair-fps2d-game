import { HttpTools } from "./HttpTools";
import { Icon } from "./Icon";
import { xingBie } from "./xingBie";

const { regClass, property } = Laya;

@regClass()
export class ZhuCeFrame extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

    // @property(String)
    // public text: string = "";
    @property (Laya.TextInput)
    public userName:Laya.TextInput = null;

    @property (Laya.Button)
    public sjBt:Laya.Button = null;

    @property(Laya.Button)
    public qdBt:Laya.Button = null;

    @property(Icon)
    public icon: Icon = null;

    @property(Laya.Sprite)
    public tanchu: Laya.Sprite = null;

    @property(Laya.Prefab)
    public iconPre: Laya.Prefab = null;

    public xing:string[] = ["刘","赵","张","陈","王","郝","孙","李","马","石","韩","贾","姜","彭","崔"];
    public ming:string[] = ["展","义","天","宁","龙","大","小","铎","子","岳","硕","豪","翠","轩","铭"];

    @property(xingBie)
    public XB: xingBie = null;

    @property(Laya.Prefab)
    public xingBiePre: Laya.Prefab = null;

    @property(Laya.Button)
    public nan: Laya.Button = null;

    @property(Laya.Button)
    public nv: Laya.Button = null;
    
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.icon.resetIcon(8);
        for(let i = 0 ; i < 8 ; i++){
            let one:Laya.Sprite = Laya.Pool.getItemByCreateFun("tcIcon" , this.iconPre.create , this.iconPre);
            this.tanchu.addChild(one);
            //排列算法
            let r = Math.floor(i/4);
            let c = i % 4;
            one.pos(c * 100 ,  r * 100 );
            one.width = one.height = 100;
            let js = one.getComponent(Icon);
            js.resetIcon(i+1);
            js.icon = this.icon;
            js.tanchu = this.tanchu;
        }
        

        this.tanchu.visible = false;

        this.userName.text = this.randomName();

        this.icon.owner.on(Laya.Event.MOUSE_DOWN , this, this.onIconClick);
        this.sjBt.on(Laya.Event.MOUSE_DOWN , this, this.onBtn1Click);
        this.qdBt.on(Laya.Event.MOUSE_DOWN , this, this.onBtn2Click);
        this.nan.on(Laya.Event.MOUSE_DOWN , this, this.onNanClick);
        this.nv.on(Laya.Event.MOUSE_DOWN , this, this.onNvClick);
    }
    public onIconClick(e:Laya.Event){
        this.tanchu.visible = true;
        this.tanchu.scaleX
        Laya.Tween.from(this.tanchu,{scaleX:0 , scaleY:0 , } , 200 , Laya.Ease.strongIn);
    }
    
    public onBtn1Click(e:Laya.Event){
        console.log("111111");

        HttpTools.get().send(
            "enroll.php?name="+this.userName.text+"&icon="+this.icon.iconId+"&xb="+this.XB.xingId
             , this.onEnroll , this
        );

    }
    public onBtn2Click(e:Laya.Event){
        this.userName.text = this.randomName();
    }
    public randomName():string{
        let s:string = "";

        s += this.xing[Math.floor(Math.random() * this.xing.length)];
        s += this.ming[Math.floor(Math.random()*this.ming.length)];
        if(Math.random() < 0.8){
            s += this.ming[Math.floor(Math.random()*this.ming.length)]
        }

        return s;
    }

    public onEnroll(j:any){
        if(j!=null){
            Laya.LocalStorage.setItem("id" , j["id"]);
            Laya.LocalStorage.setItem("psw" , j["psw"]);
            Laya.Scene.open("FirstJFrame.ls");
        }
    }

    public onNanClick(e:Laya.Event){
        // this.XB.resetXing(1);
        this.XB.resetXing(1);
    }
    public onNvClick(e:Laya.Event){
        this.XB.resetXing(2);
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