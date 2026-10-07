const { regClass, property } = Laya;

@regClass()
export class MainData extends Laya.Script {
    public static my:MainData = null;

    public static get():MainData{
        if(MainData.my == null){
            MainData.my =new MainData();
        }
        return MainData.my;
    }

    public userName:string = ""; 

    public userID:number = 1;

    public iconId:number = 1;

    public jB:number = 1;

    public jY :number = 1;

    public jYmax:number = 100;

    public Level:number = 1;

    public highest : number = 0;

    public highestMax : number = 0;

    public XingBie : number = 1;

    public gunId : number = 1;
}