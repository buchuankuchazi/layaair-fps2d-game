const { regClass, property } = Laya;

@regClass()
export class HttpTools extends Laya.Script {
    
    public static my: HttpTools = null;
    public static get(): HttpTools {
        if (HttpTools.my == null)
            HttpTools.my = new HttpTools();
        return HttpTools.my;
    }

    public back: Function = null;
    public self: any = null;

    public dl: { url: string, back: Function, self: any }[] = [];

    public path = "http://localhost//php/"

    public send(url: string, back: Function, self: any) {
        if (this.dl.length > 0) {
            this.dl.push(
                { url: url, back: back, self: self }
            )
        }
        else {
            this.dl.push(
                { url: url, back: back, self: self }
            )
            this.doSendurl(url);
        }

    }

    public doSendurl(url: string) {
        url = this.path + url;
        console.log("发送" + url);

        //创建HttpRequest对象
        let http: Laya.HttpRequest = new Laya.HttpRequest();
        //设置超时时间
        http.http.timeout = 10000;
        //发送了一个简单的请求
        http.send(url, "", "get", "text");//需要在resources文件夹下新建一个data.txt文件
        //设置完成事件，添加回调方法
        http.once(Laya.Event.COMPLETE, this, this.completeHandler);
        //设置错误事件，添加回调方法        
        http.once(Laya.Event.ERROR, this, this.errorHandler);
        //设置进度事件，添加回调方法        
        http.on(Laya.Event.PROGRESS, this, this.processHandler);
    }
    // //设置进度事件，添加回调方法       
    private processHandler(data: any): void {
        console.log("processHandler");
    }
    //设置错误事件，添加回调方法  
    private errorHandler(error: any): void {
        console.log("errorHandler");
        // this.back(null, this.self);
        this.dl[0].back(null, this.dl[0].self)
        this.dl.splice(0, 1);
        if (this.dl.length > 0) {
            this.doSendurl(this.dl[0].url);
        }
    }
    //设置完成事件，添加回调方法
    private completeHandler(data: any): void {
        console.log("返回" + data);
        let json = JSON.parse(data);//将文本转换成数据
        console.log("成功  " + json["ret"]);

        Laya.LocalStorage.setItem("psw", json["psw"]);
        Laya.LocalStorage.setItem("id", json["id"]);
        Laya.LocalStorage.setItem("icon", json["icon"]);
        // this.back(json, this.self);

        this.dl[0].back(json, this.dl[0].self)
        this.dl.splice(0, 1);
        if (this.dl.length > 0) {
            this.doSendurl(this.dl[0].url)
        }
    }
}