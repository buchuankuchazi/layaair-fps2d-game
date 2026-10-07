const { regClass, property } = Laya;

@regClass()
export class MainKL extends Laya.Script {
    public static my:MainKL = null;

    public static get():MainKL{
        if(MainKL.my == null){
            MainKL.my =new MainKL();
        }
        return MainKL.my;
    }

   public highest:number = 0;
}