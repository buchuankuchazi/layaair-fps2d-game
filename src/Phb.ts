import { HttpTools } from "./HttpTools";
import { xinxi } from "./xinxi";

const { regClass, property } = Laya;

@regClass()
export class Phb extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    // declare owner : Laya.Sprite;

    @property(Laya.List)
    public li:Laya.List = null;
    // @property(Laya.Label)
    // public name:Laya.Label = null;
    // @property(Laya.Label)
    // public highest:Laya.Label = null;
    // @property(xinxi)
    // public s: xinxi = null;

    public seletIndex: number = 0
    public static listM: number = 0;
    public time: number = 0;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //获取

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.li.elasticEnabled = true;//设置橡皮筋为ture
        // 单元格渲染处理
        this.li.renderHandler = new Laya.Handler(this, this.updateItem);
        // 设置是否可以选中
        this.li.selectEnable = true;
        this.li.selectHandler = new Laya.Handler(this, this.onSelect);
        this.send();
        // this.name.text = "名字:" + MainData.get().userName;
    }
    public updateItem(cell: Laya.Sprite, index: number): void {
        let xin: xinxi = cell.getComponent(xinxi)
        let s: number = index + 1;
        xin.name_s = this.li.array[index][1];
        xin.iconId = this.li.array[index][2] ;
        xin.xbid = this.li.array[index][3];
        xin.highest_s = this.li.array[index][4];
        xin.gunId = this.li.array[index][5] ;
        xin.resetList();
        xin.mingci.text = "" + s;
    }

    private onSelect(index: number): void {
        if (index < 0)
            return;
        this.seletIndex = index;
        this.li.selectedIndex = -1;
    }

    send() {
        HttpTools.get().send("PHB.php", this.onsendback, this);
    }

    onsendback(j: any, self:Phb ) {
        console.log(j["date"]);
        self.li.array = j["date"];
        self.paixu();
    }

    paixu() {
        let data = this.li.array;
        data.sort(this.onkey);
        this.li.array = data;
    }

    onkey(a: string[], b: string[]) {
        if (parseInt(a[4]) < parseInt(b[4])) {
            return 1;
        } else if (parseInt(a[4]) > parseInt(b[4])) {
            return -1
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