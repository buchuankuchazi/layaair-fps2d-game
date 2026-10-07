"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/MainData.ts
  var { regClass, property } = Laya;
  var MainData = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.userName = "";
      this.userID = 1;
      this.iconId = 1;
      this.jB = 1;
      this.jY = 1;
      this.jYmax = 100;
      this.Level = 1;
      this.highest = 0;
      this.highestMax = 0;
      this.XingBie = 1;
      this.gunId = 1;
    }
    static get() {
      if (MainData.my == null) {
        MainData.my = new MainData();
      }
      return MainData.my;
    }
  };
  __name(MainData, "MainData");
  MainData.my = null;
  MainData = __decorateClass([
    regClass("36b336c9-eefc-42e3-8064-f15fa6470773", "../src/MainData.ts")
  ], MainData);

  // src/Bulit.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Bulit = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.zd = null;
      this.npc = [];
      this.hurt = 1;
      this.vx = 0;
      this.vy = 0;
      this.highest_b = 0;
      this.npcDestroyed = false;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    // onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    // onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      if (this.owner) {
        this.owner.x += this.vx;
        this.owner.y += this.vy;
        for (let i = 0; i < this.npc.length; i++) {
          if (Math.abs(this.owner.x - this.npc[i].owner.x) < 20 && Math.abs(this.owner.y - this.npc[i].owner.y) < 20) {
            this.zd.owner.removeSelf();
            this.owner.removeSelf();
            this.npc[i].nHp -= this.hurt;
            this.npc[i].value.text = "" + this.npc[i].nHp;
            if (this.npc[i].nHp <= 0) {
              MainData.get().highest += 1;
              MainData.get().jB += 1;
              MainData.get().jY += 1;
              this.npc[i].owner.removeSelf();
              this.npc.splice(i, 1);
            }
          }
        }
        if (this.owner.y < 0 || this.owner.x < 0 || this.owner.x > 1280 || this.owner.y > 640) {
          this.owner.removeSelf();
        }
      } else {
        console.error("Owner is null or undefined.");
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。    
  };
  __name(Bulit, "Bulit");
  __decorateClass([
    property2(Bulit)
  ], Bulit.prototype, "zd", 2);
  Bulit = __decorateClass([
    regClass2("89c5e522-c09f-4ea2-8742-1403495b84e5", "../src/Bulit.ts")
  ], Bulit);

  // src/Npc.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Npc = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.npc = null;
      this.nHurt = 10;
      this.nHp = 10;
      this.vx = 0;
      this.vy = 0;
      this.game = null;
      this.value = null;
    }
    // @property(String)
    // public text: string = "";
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.value.text = "" + this.nHp;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      this.owner.x += this.vx;
      this.owner.y += this.vy;
      if (this.owner.y < 0 || this.owner.x < 0 || this.owner.x > 1280 || this.owner.y > 640) {
        this.owner.removeSelf();
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(Npc, "Npc");
  __decorateClass([
    property3(Npc)
  ], Npc.prototype, "npc", 2);
  __decorateClass([
    property3(Laya.Label)
  ], Npc.prototype, "value", 2);
  Npc = __decorateClass([
    regClass3("aa0027f0-481a-4a2d-ada0-491e92f058d9", "../src/Npc.ts")
  ], Npc);

  // src/HttpTools.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var HttpTools = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.back = null;
      this.self = null;
      this.dl = [];
      this.path = "http://localhost//php/";
    }
    static get() {
      if (HttpTools.my == null)
        HttpTools.my = new HttpTools();
      return HttpTools.my;
    }
    send(url, back, self) {
      if (this.dl.length > 0) {
        this.dl.push(
          { url, back, self }
        );
      } else {
        this.dl.push(
          { url, back, self }
        );
        this.doSendurl(url);
      }
    }
    doSendurl(url) {
      url = this.path + url;
      console.log("发送" + url);
      let http = new Laya.HttpRequest();
      http.http.timeout = 1e4;
      http.send(url, "", "get", "text");
      http.once(Laya.Event.COMPLETE, this, this.completeHandler);
      http.once(Laya.Event.ERROR, this, this.errorHandler);
      http.on(Laya.Event.PROGRESS, this, this.processHandler);
    }
    // //设置进度事件，添加回调方法       
    processHandler(data) {
      console.log("processHandler");
    }
    //设置错误事件，添加回调方法  
    errorHandler(error) {
      console.log("errorHandler");
      this.dl[0].back(null, this.dl[0].self);
      this.dl.splice(0, 1);
      if (this.dl.length > 0) {
        this.doSendurl(this.dl[0].url);
      }
    }
    //设置完成事件，添加回调方法
    completeHandler(data) {
      console.log("返回" + data);
      let json = JSON.parse(data);
      console.log("成功  " + json["ret"]);
      Laya.LocalStorage.setItem("psw", json["psw"]);
      Laya.LocalStorage.setItem("id", json["id"]);
      Laya.LocalStorage.setItem("icon", json["icon"]);
      this.dl[0].back(json, this.dl[0].self);
      this.dl.splice(0, 1);
      if (this.dl.length > 0) {
        this.doSendurl(this.dl[0].url);
      }
    }
  };
  __name(HttpTools, "HttpTools");
  HttpTools.my = null;
  HttpTools = __decorateClass([
    regClass4("159ad36e-5a0a-484e-a79e-91ea36ea552a", "../src/HttpTools.ts")
  ], HttpTools);

  // src/player_A.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var player_A = class extends Laya.Script {
    constructor() {
      super(...arguments);
      //手电筒照明
      this.light = null;
      //鼠标
      this.mouse = null;
      //gun
      this.gun = null;
      this.speed = 2;
      //奔跑状态动画
      this.npc = [];
      this.isAni = false;
      this.maxY = 640;
      this.minY = 240;
      this.minY_1 = 0;
      this.maxX = 1280;
      this.minX = 0;
      this.bm = null;
      this.xt = null;
      // @property(Laya.Label)
      // public value:Laya.Label = null;
      this.maxXue = 100;
      this.hp = 100;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    // onAwake(): void {
    //     // this.xt.value = 100;
    //     // this.value.visible = false;
    // }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
      this.ani_1.autoPlay = false;
      this.ani_r.autoPlay = false;
      this.xt.value = 1;
      console.log(MainData.get().gunId);
    }
    onKeyDown(e) {
      if (e.keyCode == 65) {
        this.owner.x -= 10;
      } else if (e.keyCode == 68) {
        this.owner.x += 10;
      } else if (e.keyCode == 87) {
        this.owner.y -= 10;
      } else if (e.keyCode == 83) {
        this.owner.y += 10;
      }
      this.isAni = true;
      this.ani_r.autoPlay = true;
      this.ani_1.autoPlay = false;
    }
    onKeyUp(e) {
      this.isAni = false;
      this.ani_1.autoPlay = true;
      this.ani_r.autoPlay = false;
    }
    onMouseMove() {
      var mouseX = Laya.stage.mouseX;
      var mouseY = Laya.stage.mouseY;
      var dx = mouseX - this.owner.x;
      var dy = mouseY - this.owner.y;
      var radian = Math.atan2(dy, dx);
      var degree = radian * 180 / Math.PI;
      if (this.owner.scaleX == -2.5) {
        this.light.rotation = 180 - degree;
        this.gun.rotation = 180 - degree;
      } else {
        this.light.rotation = degree;
        this.gun.rotation = degree;
      }
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      let currentScene = Laya.stage.getChildAt(0);
      if (currentScene.name == "Game_1") {
        if (this.owner.y <= this.minY) {
          this.owner.y = this.minY;
        } else if (this.owner.y >= this.maxY) {
          this.owner.y = this.maxY;
        }
        if (this.owner.x <= this.minX) {
          this.owner.x = this.minX;
        } else if (this.owner.x >= this.maxX) {
          this.owner.x = this.maxX;
        }
      } else {
        if (this.owner.y <= this.minY_1) {
          this.owner.y = this.minY_1;
        } else if (this.owner.y >= this.maxY) {
          this.owner.y = this.maxY;
        }
        if (this.owner.x <= this.minX) {
          this.owner.x = this.minX;
        } else if (this.owner.x >= this.maxX) {
          this.owner.x = this.maxX;
        }
      }
      if (Laya.stage.mouseX < this.owner.x) {
        this.owner.scaleX = -2.5;
      }
      if (Laya.stage.mouseX > this.owner.x) {
        this.owner.scaleX = 2.5;
      }
      this.mouse.x = Laya.stage.mouseX;
      this.mouse.y = Laya.stage.mouseY;
      if (this.owner) {
        for (let i = 0; i < this.npc.length; i++) {
          if (Math.abs(this.owner.x - this.npc[i].owner.x) < 20 && Math.abs(this.owner.y - this.npc[i].owner.y) < 20) {
            this.npc[i].owner.removeSelf();
            this.npc.splice(i, 1);
            this.xt.value -= this.npc[i].nHurt * 0.01;
            this.hp -= this.npc[i].nHurt;
            console.log(this.hp);
            if (this.hp <= 0) {
              this.updateHighest();
              Laya.Scene.open("GameOverFrame.ls");
            }
          }
        }
      } else {
        console.error("Owner is null or undefined.");
      }
    }
    updateHighest() {
      HttpTools.get().send(
        "highest.php?id=" + MainData.get().userID + "&highest=" + MainData.get().highestMax + "&gunid=" + MainData.get().gunId,
        this.onUpdateHighest,
        this
      );
    }
    onUpdateHighest(j) {
      if (j != null) {
        Laya.LocalStorage.setItem("id", j["id"]);
        Laya.LocalStorage.setItem("psw", j["psw"]);
        Laya.Scene.open("FirstJFrame.ls");
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(player_A, "player_A");
  __decorateClass([
    property5(Laya.Sprite)
  ], player_A.prototype, "light", 2);
  __decorateClass([
    property5(Laya.Sprite)
  ], player_A.prototype, "mouse", 2);
  __decorateClass([
    property5(Laya.Sprite)
  ], player_A.prototype, "gun", 2);
  __decorateClass([
    property5({ type: Laya.Animation })
  ], player_A.prototype, "ani_1", 2);
  __decorateClass([
    property5({ type: Laya.Animation })
  ], player_A.prototype, "ani_r", 2);
  __decorateClass([
    property5(BulitManger)
  ], player_A.prototype, "bm", 2);
  __decorateClass([
    property5(Laya.ProgressBar)
  ], player_A.prototype, "xt", 2);
  player_A = __decorateClass([
    regClass5("8efdac1b-20a0-4632-9e7a-75a0be0128c2", "../src/player_A.ts")
  ], player_A);

  // src/NpcManager.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var NpcManager = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.npcPrefab = null;
      this.player = null;
      this.npcManager = null;
      this.game = null;
      this.nck = [];
      this.speed = 0.3;
      this.time = 0;
      // public csSpeed:number = MainData.get().Level * MainData.get().Level * 0.2;
      this.csSpeed = 100;
      this.highest = 0;
    }
    // @property(Laya.Label)
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      this.time += 1;
      let ox = 0;
      let oy = 0;
      if (this.time % this.csSpeed == 0) {
        let one = Laya.Pool.getItemByCreateFun("npc", this.npcPrefab.create, this.npcPrefab);
        if (Math.random() < 0.5) {
          ox = Math.random() * 1280;
          one.pos(Laya.stage.width - ox, 0);
        } else {
          oy = Math.random() * 640;
          one.pos(0, Laya.stage.height - oy);
        }
        this.game.addChild(one);
        let npc = one.getComponent(Npc);
        this.nck.push(npc);
        let dx = this.player.owner.x - one.x;
        let dy = this.player.owner.y - one.y;
        let radian = Math.atan2(dy, dx);
        let vy = this.speed * Math.sin(radian);
        let vx = this.speed * Math.cos(radian);
        npc.vx = vx;
        npc.vy = vy;
        this.player.npc = this.nck;
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(NpcManager, "NpcManager");
  __decorateClass([
    property6(Laya.Prefab)
  ], NpcManager.prototype, "npcPrefab", 2);
  __decorateClass([
    property6(player_A)
  ], NpcManager.prototype, "player", 2);
  __decorateClass([
    property6(NpcManager)
  ], NpcManager.prototype, "npcManager", 2);
  __decorateClass([
    property6(Laya.Sprite)
  ], NpcManager.prototype, "game", 2);
  NpcManager = __decorateClass([
    regClass6("e57ef55f-72a4-4caa-b109-64c3875f2a72", "../src/NpcManager.ts")
  ], NpcManager);

  // src/gun.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var gun = class extends Laya.Script {
    constructor() {
      super(...arguments);
      // @property(String)
      // public text: string = "";
      this.gunId = 1;
      this.gun = null;
      this.tanchu = null;
    }
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
    onMouseClick() {
      if (this.gun != null) {
        this.gun.resetGun(this.gunId);
        this.tanchu.visible = false;
      }
    }
    resetGun(id) {
      this.gunId = id;
      Laya.loader.load("img/gun/gun" + id + ".png").then((res) => {
        this.owner.texture = res;
      });
    }
  };
  __name(gun, "gun");
  gun = __decorateClass([
    regClass7("be75ea94-12fe-4294-b875-45600ee9a707", "../src/gun.ts")
  ], gun);

  // src/BulitManger.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var BulitManger = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.zdPer = null;
      this.player = null;
      this.bm = null;
      this.nm = null;
      this.gun = null;
      this.game = null;
      this.highest_bm = 0;
      this.zck = [];
      this.speed = 10;
      this.hurt = 1;
    }
    // public highest_b:number = 0;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnClick);
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
    OnClick(e) {
      let dx = e.touchPos.x - this.player.owner.x;
      let dy = e.touchPos.y - this.player.owner.y;
      let radian = Math.atan2(dy, dx);
      let vy = this.speed * Math.sin(radian);
      let vx = this.speed * Math.cos(radian);
      if (this.gun.gunId == 1) {
        this.hurt = 2;
        let one = Laya.Pool.getItemByCreateFun("zd", this.zdPer.create, this.zdPer);
        one.pos(this.player.owner.x, this.player.owner.y);
        this.game.addChild(one);
        let bul = one.getComponent(Bulit);
        this.zck.push(bul);
        bul.vx = vx;
        bul.vy = vy;
        bul.npc = this.nm.nck;
        bul.hurt = this.hurt;
      } else if (this.gun.gunId == 2) {
        this.hurt = 5;
        let one = Laya.Pool.getItemByCreateFun("zd", this.zdPer.create, this.zdPer);
        one.pos(this.player.owner.x, this.player.owner.y);
        this.game.addChild(one);
        let bul = one.getComponent(Bulit);
        this.zck.push(bul);
        bul.vx = vx;
        bul.vy = vy;
        bul.npc = this.nm.nck;
        bul.hurt = this.hurt;
      } else if (this.gun.gunId == 3) {
        this.hurt = 2;
        for (let i = 0; i < 5; i++) {
          let one = Laya.Pool.getItemByCreateFun("zd", this.zdPer.create, this.zdPer);
          one.pos(this.player.owner.x, this.player.owner.y);
          this.game.addChild(one);
          let bul = one.getComponent(Bulit);
          this.zck.push(bul);
          let angleOffset = (i - 2) * 10;
          let radianOffset = angleOffset * Math.PI / 180;
          let vxOffset = vx * Math.cos(radianOffset) - vy * Math.sin(radianOffset);
          let vyOffset = vx * Math.sin(radianOffset) + vy * Math.cos(radianOffset);
          bul.vx = vxOffset;
          bul.vy = vyOffset;
          bul.npc = this.nm.nck;
          bul.hurt = this.hurt;
        }
      } else if (this.gun.gunId == 4) {
        this.hurt = 10;
        let one = Laya.Pool.getItemByCreateFun("zd", this.zdPer.create, this.zdPer);
        one.pos(this.player.owner.x, this.player.owner.y);
        this.game.addChild(one);
        let bul = one.getComponent(Bulit);
        this.zck.push(bul);
        bul.vx = vx;
        bul.vy = vy;
        bul.npc = this.nm.nck;
        bul.hurt = this.hurt;
      } else if (this.gun.gunId == 5) {
        this.hurt = 1;
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            let one = Laya.Pool.getItemByCreateFun("zd", this.zdPer.create, this.zdPer);
            one.pos(this.player.owner.x, this.player.owner.y);
            this.game.addChild(one);
            let bul = one.getComponent(Bulit);
            this.zck.push(bul);
            bul.vx = vx;
            bul.vy = vy;
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
  };
  __name(BulitManger, "BulitManger");
  __decorateClass([
    property8(Laya.Prefab)
  ], BulitManger.prototype, "zdPer", 2);
  __decorateClass([
    property8(player_A)
  ], BulitManger.prototype, "player", 2);
  __decorateClass([
    property8(BulitManger)
  ], BulitManger.prototype, "bm", 2);
  __decorateClass([
    property8(NpcManager)
  ], BulitManger.prototype, "nm", 2);
  __decorateClass([
    property8(gun)
  ], BulitManger.prototype, "gun", 2);
  __decorateClass([
    property8(Laya.Sprite)
  ], BulitManger.prototype, "game", 2);
  BulitManger = __decorateClass([
    regClass8("3963592b-53db-4a4e-8152-2899e0f33fce", "../src/BulitManger.ts")
  ], BulitManger);

  // src/GameMune.ts
  var { regClass: regClass9, property: property9 } = Laya;
  var GameMune = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.pG = null;
      this.phb = null;
      this.phb_s = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.pG.on(Laya.Event.MOUSE_DOWN, this, this.onPlayGame);
      this.phb.on(Laya.Event.MOUSE_DOWN, this, this.onPHB);
      this.phb_s.visible = false;
    }
    onPlayGame(e) {
      console.log("2222222");
      Laya.Scene.open("Game_1.ls");
      console.log("11111111111");
    }
    // public onStore(e:Laya.Event){
    //     Laya.Scene.open("Store.ls");
    // }
    onPHB(e) {
      this.phb_s.visible = true;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      if (this.phb_s.visible == true) {
        this.phb_s.visible = false;
      }
    }
  };
  __name(GameMune, "GameMune");
  __decorateClass([
    property9(Laya.Button)
  ], GameMune.prototype, "pG", 2);
  __decorateClass([
    property9(Laya.Button)
  ], GameMune.prototype, "phb", 2);
  __decorateClass([
    property9(Laya.Sprite)
  ], GameMune.prototype, "phb_s", 2);
  GameMune = __decorateClass([
    regClass9("50cf7e54-9244-4335-b9bc-a97c05fc8a84", "../src/GameMune.ts")
  ], GameMune);

  // src/GameOverFrame.ts
  var { regClass: regClass10, property: property10 } = Laya;
  var GameOverFrame = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.dangqian = null;
      this.zuida = null;
      this.fanhui = null;
      this.chongxin = null;
      this.tuichu = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
      this.fanhui.on(Laya.Event.MOUSE_DOWN, this, this.onFanhui);
      this.chongxin.on(Laya.Event.MOUSE_DOWN, this, this.onChongxin);
      this.tuichu.on(Laya.Event.MOUSE_DOWN, this, this.onTuichu);
      this.dangqian.text = "当前分数：" + MainData.get().highest;
      this.zuida.text = "最高分数：" + MainData.get().highestMax;
    }
    onFanhui() {
      Laya.Scene.open("GameMune.ls");
    }
    onChongxin() {
      Laya.Scene.open("Game_1.ls");
    }
    onTuichu() {
      Laya.Browser.window.close();
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(GameOverFrame, "GameOverFrame");
  __decorateClass([
    property10(Laya.Label)
  ], GameOverFrame.prototype, "dangqian", 2);
  __decorateClass([
    property10(Laya.Label)
  ], GameOverFrame.prototype, "zuida", 2);
  __decorateClass([
    property10(Laya.Button)
  ], GameOverFrame.prototype, "fanhui", 2);
  __decorateClass([
    property10(Laya.Button)
  ], GameOverFrame.prototype, "chongxin", 2);
  __decorateClass([
    property10(Laya.Button)
  ], GameOverFrame.prototype, "tuichu", 2);
  GameOverFrame = __decorateClass([
    regClass10("420e0f1d-5b90-4be3-8d60-b0f1829241a3", "../src/GameOverFrame.ts")
  ], GameOverFrame);

  // src/Icon.ts
  var { regClass: regClass11, property: property11 } = Laya;
  var Icon = class extends Laya.Script {
    constructor() {
      super(...arguments);
      // @property(String)
      // public text: string = "";
      this.iconId = 1;
      this.icon = null;
      this.tanchu = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      if (this.icon != null) {
        this.icon.resetIcon(this.iconId);
        this.tanchu.visible = false;
      }
    }
    resetIcon(id) {
      this.iconId = id;
      Laya.loader.load("img/icon/头像-" + id + ".png").then((res) => {
        this.owner.texture = res;
      });
    }
  };
  __name(Icon, "Icon");
  Icon = __decorateClass([
    regClass11("82ddb5b0-5159-4383-988e-bc351bce04bb", "../src/Icon.ts")
  ], Icon);

  // src/xingBie.ts
  var { regClass: regClass12, property: property12 } = Laya;
  var xingBie = class extends Laya.Script {
    constructor() {
      super(...arguments);
      // @property(String)
      // public text: string = "";
      this.xingId = 1;
      this.xing = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      if (this.xing != null) {
        this.xing.resetXing(this.xingId);
      }
    }
    resetXing(id) {
      this.xingId = id;
      Laya.loader.load("img/ui/xingbie/xb-" + id + ".png").then((res) => {
        this.owner.texture = res;
      });
    }
  };
  __name(xingBie, "xingBie");
  xingBie = __decorateClass([
    regClass12("a2cd558b-4d04-4d63-a3c4-9aa31a83f81d", "../src/xingBie.ts")
  ], xingBie);

  // src/Game_1.ts
  var { regClass: regClass13, property: property13 } = Laya;
  var Game_1 = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.csm1 = null;
      this.csm2 = null;
      this.player_l = null;
      this.userName = null;
      this.dengji = null;
      this.jingyan = null;
      this.icon = null;
      this.store = null;
      this.tishi = null;
      this.tanchu = null;
      this.gun = null;
      this.gunPer = null;
      //按键状态
      this.isKeyEPressed = false;
      this.jb = MainData.get().jB;
      this.xing = null;
      this.xingId = MainData.get().XingBie;
      this.fanhui = null;
    }
    //是否拿枪
    // private isGun:boolean = false;
    // public jinbi:Laya.Label = null;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      this.fanhui.on(Laya.Event.CLICK, this, this.onFanhui);
      this.userName.text = MainData.get().userName;
      this.dengji.text = "lev:" + MainData.get().Level;
      this.iconId = MainData.get().iconId;
      this.icon.resetIcon(this.iconId);
      this.xing.resetXing(this.xingId);
      this.tishi.alpha = 0;
      this.gun.resetGun(5);
      for (let i = 0; i < 5; i++) {
        let one = Laya.Pool.getItemByCreateFun("tcGun", this.gunPer.create, this.gunPer);
        this.tanchu.addChild(one);
        let r = Math.floor(i / 5);
        let c = i % 5;
        one.pos(c * 150, r * 150);
        one.width = one.height = 150;
        let js = one.getComponent(gun);
        js.resetGun(i + 1);
        js.gun = this.gun;
        js.tanchu = this.tanchu;
      }
      this.gun.owner.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      this.tanchu.visible = false;
    }
    onKeyDown(e) {
      if (e.keyCode == 69 && this.isKeyEPressed == false) {
        this.isKeyEPressed = true;
      } else if (e.keyCode == 69 && this.isKeyEPressed == true) {
        this.isKeyEPressed = false;
      }
    }
    onFanhui() {
      Laya.Scene.open("GameMune.ls");
    }
    onCloseTC(e) {
      this.tanchu.visible = false;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      this.jingyan.text = "exp:1/" + MainData.get().jYmax;
      if (MainData.get().jY >= MainData.get().jYmax) {
        MainData.get().jY = 0;
        MainData.get().jYmax += 100;
        MainData.get().Level += 1;
      }
      this.csm2.rotation += 1;
      if (Math.abs(this.player_l.owner.x - this.csm1.x) <= 50 && Math.abs(this.player_l.owner.y - this.csm1.y) <= 50) {
        Laya.Scene.open("Game_2.ls");
      }
      if (Math.abs(this.player_l.owner.y - 244) <= 50) {
        this.tishi.alpha = 1;
        if (this.isKeyEPressed) {
          this.tanchu.visible = true;
          this.tishi.alpha = 0;
        } else {
          this.tanchu.visible = false;
          this.tishi.alpha = 1;
        }
      } else {
        this.tanchu.visible = false;
        this.tishi.alpha = 0;
      }
      MainData.get().gunId = this.gun.gunId;
    }
    //打开商店判定
    // public stopStore(player:player_A){
    //     Math.abs(this.store.x - player.owner.x)
    // }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(Game_1, "Game_1");
  __decorateClass([
    property13(Laya.Sprite)
  ], Game_1.prototype, "csm1", 2);
  __decorateClass([
    property13(Laya.Sprite)
  ], Game_1.prototype, "csm2", 2);
  __decorateClass([
    property13(player_A)
  ], Game_1.prototype, "player_l", 2);
  __decorateClass([
    property13(Laya.Label)
  ], Game_1.prototype, "userName", 2);
  __decorateClass([
    property13(Laya.Label)
  ], Game_1.prototype, "dengji", 2);
  __decorateClass([
    property13(Laya.Label)
  ], Game_1.prototype, "jingyan", 2);
  __decorateClass([
    property13(Icon)
  ], Game_1.prototype, "icon", 2);
  __decorateClass([
    property13(Laya.Sprite)
  ], Game_1.prototype, "store", 2);
  __decorateClass([
    property13(Laya.Label)
  ], Game_1.prototype, "tishi", 2);
  __decorateClass([
    property13(Laya.Sprite)
  ], Game_1.prototype, "tanchu", 2);
  __decorateClass([
    property13(gun)
  ], Game_1.prototype, "gun", 2);
  __decorateClass([
    property13(Laya.Prefab)
  ], Game_1.prototype, "gunPer", 2);
  __decorateClass([
    property13(xingBie)
  ], Game_1.prototype, "xing", 2);
  __decorateClass([
    property13(Laya.Button)
  ], Game_1.prototype, "fanhui", 2);
  Game_1 = __decorateClass([
    regClass13("27314bd3-e128-49e8-b600-69553624e552", "../src/Game_1.ts")
  ], Game_1);

  // src/Game_2.ts
  var { regClass: regClass14, property: property14 } = Laya;
  var Game_2 = class extends Laya.Script {
    constructor() {
      super(...arguments);
      // public gunId:number = 0;
      this.game_1 = null;
      this.gun = null;
      this.b = null;
      this.highest = null;
      this.highestMax = null;
      this.highest_s = 0;
      this.highest_a = MainData.get().highestMax;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      let js = this.gun;
      js.resetGun(MainData.get().gunId);
      console.log(this.highest_s);
      this.highestMax.text = "KillMax:" + MainData.get().highestMax;
      console.log(MainData.get().gunId);
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      if (this.highest_s > this.highest_a) {
        this.highest_a = this.highest_s;
        MainData.get().highestMax = this.highest_a;
      }
      this.highest.text = "KillNow:" + MainData.get().highest;
      this.highest.bold = true;
    }
    // public onHighest(){
    //     "highest.php?highest=" + this.highest_s + "&id=" + MainData.get().id;
    // }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(Game_2, "Game_2");
  __decorateClass([
    property14(gun)
  ], Game_2.prototype, "gun", 2);
  __decorateClass([
    property14(BulitManger)
  ], Game_2.prototype, "b", 2);
  __decorateClass([
    property14(Laya.Label)
  ], Game_2.prototype, "highest", 2);
  __decorateClass([
    property14(Laya.Label)
  ], Game_2.prototype, "highestMax", 2);
  Game_2 = __decorateClass([
    regClass14("e4faabe2-e569-4da9-ae24-25f5879b2a50", "../src/Game_2.ts")
  ], Game_2);

  // src/Login.ts
  var { regClass: regClass15, property: property15 } = Laya;
  var Login = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.userId = null;
      this.userPsw = null;
      this.ok = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.ok.on(Laya.Event.MOUSE_DOWN, this, this.onOk);
    }
    onOk(e) {
      HttpTools.get().send(
        "dengLu.php?id=" + this.userId.text + "&psw=" + this.userPsw.text,
        this.onSend,
        this
      );
    }
    onSend(j, self) {
      if (j != null) {
        if (j["ret"] == 0) {
          Laya.LocalStorage.setItem("id", self.userId.text);
          Laya.LocalStorage.setItem("psw", self.userPsw.text);
          MainData.get().userID = self.userId.text;
          MainData.get().userName = j["name"];
          MainData.get().iconId = j["icon"];
          MainData.get().jB = j["jb"];
          MainData.get().highestMax = j["highest"];
          Laya.Scene.open("GameMune.ls");
        } else {
          self.userId.text;
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
  };
  __name(Login, "Login");
  __decorateClass([
    property15(Laya.TextInput)
  ], Login.prototype, "userId", 2);
  __decorateClass([
    property15(Laya.TextInput)
  ], Login.prototype, "userPsw", 2);
  __decorateClass([
    property15(Laya.Sprite)
  ], Login.prototype, "ok", 2);
  Login = __decorateClass([
    regClass15("fa9cf7bb-8253-4691-a8b2-a7d4eb40dadb", "../src/Login.ts")
  ], Login);

  // src/Main.ts
  var { regClass: regClass16, property: property16 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass16("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/MainGame.ts
  var { regClass: regClass17, property: property17 } = Laya;
  var MainGame = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.eBt = null;
      this.lBt = null;
      this.userID = 0;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.eBt.on(Laya.Event.MOUSE_DOWN, this, this.onOk);
      this.lBt.on(Laya.Event.MOUSE_DOWN, this, this.onOther);
    }
    onOk(e) {
      this.userID = Laya.LocalStorage.getItem("id");
      let psw = Laya.LocalStorage.getItem("psw");
      if (this.userID == null) {
        Laya.Scene.open("ZhuCe.ls");
      } else {
        HttpTools.get().send(
          "dengLu.php?id=" + this.userID + "&psw=" + psw,
          this.onSend,
          this
        );
      }
    }
    onOther(e) {
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
    oneBtClick(e) {
      console.log("注册账号");
      Laya.Scene.open("ZhuCe.ls");
    }
    onlBtClick(e) {
      this.userID = Laya.LocalStorage.getItem("id");
      let psw = Laya.LocalStorage.getItem("psw");
      if (this.userID == null) {
        Laya.Scene.open("LoginFrame.ls");
      } else {
      }
    }
    onSend(j, self) {
      if (j != null) {
        if (j["ret"] == 1) {
          Laya.Scene.open("ZhuCe.ls");
        } else {
          MainData.get().userID = self.userID;
          MainData.get().userName = j["name"];
          MainData.get().iconId = j["icon"];
          MainData.get().jB = j["jinbi"];
          MainData.get().jY = j["jy"];
          Laya.Scene.open("GameMune.ls");
        }
      }
    }
  };
  __name(MainGame, "MainGame");
  __decorateClass([
    property17(Laya.Button)
  ], MainGame.prototype, "eBt", 2);
  __decorateClass([
    property17(Laya.Button)
  ], MainGame.prototype, "lBt", 2);
  MainGame = __decorateClass([
    regClass17("092896da-16e5-4681-9c2b-9805011e3e3f", "../src/MainGame.ts")
  ], MainGame);

  // src/MainKL.ts
  var { regClass: regClass18, property: property18 } = Laya;
  var MainKL = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.highest = 0;
    }
    static get() {
      if (MainKL.my == null) {
        MainKL.my = new MainKL();
      }
      return MainKL.my;
    }
  };
  __name(MainKL, "MainKL");
  MainKL.my = null;
  MainKL = __decorateClass([
    regClass18("0a890008-a4c6-42fc-a6ca-f447aeacbe18", "../src/MainKL.ts")
  ], MainKL);

  // src/xinxi.ts
  var { regClass: regClass19, property: property19 } = Laya;
  var xinxi = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.name = null;
      this.highest = null;
      this.mingci = null;
      this.icon = null;
      this.gun = null;
      this.XB = null;
      this.xbk = null;
      this.name_s = 1;
      this.highest_s = 0;
      this.mm = 1;
      this.iconId = 1;
      this.gunId = 1;
      this.xbid = 1;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
    resetList() {
      this.name.text = "" + this.name_s;
      this.name.bold = true;
      this.highest.text = "" + this.highest_s;
      this.icon.resetIcon(this.iconId);
      this.gun.resetGun(this.gunId);
      if (this.xbid == 1) {
        this.XB.text = "男";
      } else if (this.xbid == 2) {
        this.XB.text = "女";
      }
      this.xbk.resetXing(this.xbid);
    }
  };
  __name(xinxi, "xinxi");
  __decorateClass([
    property19(Laya.Label)
  ], xinxi.prototype, "name", 2);
  __decorateClass([
    property19(Laya.Label)
  ], xinxi.prototype, "highest", 2);
  __decorateClass([
    property19(Laya.Label)
  ], xinxi.prototype, "mingci", 2);
  __decorateClass([
    property19(Icon)
  ], xinxi.prototype, "icon", 2);
  __decorateClass([
    property19(gun)
  ], xinxi.prototype, "gun", 2);
  __decorateClass([
    property19(Laya.Label)
  ], xinxi.prototype, "XB", 2);
  __decorateClass([
    property19(xingBie)
  ], xinxi.prototype, "xbk", 2);
  xinxi = __decorateClass([
    regClass19("ff3982ce-675a-4052-88e3-d20db8f9514d", "../src/xinxi.ts")
  ], xinxi);

  // src/Phb.ts
  var { regClass: regClass20, property: property20 } = Laya;
  var Phb = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.li = null;
      // @property(Laya.Label)
      // public name:Laya.Label = null;
      // @property(Laya.Label)
      // public highest:Laya.Label = null;
      // @property(xinxi)
      // public s: xinxi = null;
      this.seletIndex = 0;
      this.time = 0;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //获取
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.li.elasticEnabled = true;
      this.li.renderHandler = new Laya.Handler(this, this.updateItem);
      this.li.selectEnable = true;
      this.li.selectHandler = new Laya.Handler(this, this.onSelect);
      this.send();
    }
    updateItem(cell, index) {
      let xin = cell.getComponent(xinxi);
      let s = index + 1;
      xin.name_s = this.li.array[index][1];
      xin.iconId = this.li.array[index][2];
      xin.xbid = this.li.array[index][3];
      xin.highest_s = this.li.array[index][4];
      xin.gunId = this.li.array[index][5];
      xin.resetList();
      xin.mingci.text = "" + s;
    }
    onSelect(index) {
      if (index < 0)
        return;
      this.seletIndex = index;
      this.li.selectedIndex = -1;
    }
    send() {
      HttpTools.get().send("PHB.php", this.onsendback, this);
    }
    onsendback(j, self) {
      console.log(j["date"]);
      self.li.array = j["date"];
      self.paixu();
    }
    paixu() {
      let data = this.li.array;
      data.sort(this.onkey);
      this.li.array = data;
    }
    onkey(a, b) {
      if (parseInt(a[4]) < parseInt(b[4])) {
        return 1;
      } else if (parseInt(a[4]) > parseInt(b[4])) {
        return -1;
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
  };
  __name(Phb, "Phb");
  Phb.listM = 0;
  __decorateClass([
    property20(Laya.List)
  ], Phb.prototype, "li", 2);
  Phb = __decorateClass([
    regClass20("16b22d9c-537b-499f-a853-9cf00a27f3dd", "../src/Phb.ts")
  ], Phb);

  // src/Player.ts
  var { regClass: regClass21, property: property21 } = Laya;
  var Player = class extends Laya.Script {
    constructor() {
      super(...arguments);
      //奔跑状态动画
      this.isAni = false;
      this.player = null;
      this.speed = 2;
      //手电筒照明
      this.light = null;
      //传送门1
      this.csm1 = null;
      //传送门2
      this.csm2 = null;
      // @property(Laya.Button)//开始游戏按钮
      // public PGame:Laya.Button = null;
      this.isArmed = false;
    }
    //是否持枪状态
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.ani_1.autoPlay = false;
      this.ani_r.autoPlay = false;
      Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    }
    //处理键盘按下事件
    onKeyDown(e) {
      if (e.keyCode == 65) {
        this.player.x -= 10;
      } else if (e.keyCode == 68) {
        this.player.x += 10;
      } else if (e.keyCode == 87) {
        this.player.y -= 10;
      } else if (e.keyCode == 83) {
        this.player.y += 10;
      }
      this.isAni = true;
      this.ani_r.autoPlay = true;
      this.ani_1.autoPlay = false;
    }
    //处理键盘抬起事件
    onKeyUp(e) {
      this.isAni = false;
      this.ani_1.autoPlay = true;
      this.ani_r.autoPlay = false;
    }
    onMouseMove() {
      var mouseX = Laya.stage.mouseX;
      var mouseY = Laya.stage.mouseY;
      var dx = mouseX - this.player.x;
      var dy = mouseY - this.player.y;
      var radian = Math.atan2(dy, dx);
      var degree = radian * 180 / Math.PI;
      if (this.player.scaleX == -2.5) {
        this.light.rotation = 180 - degree;
      } else {
        this.light.rotation = degree;
      }
    }
    ani(isAni) {
      if (isAni == true) {
        this.isAni_f = false;
      } else {
        this.isAni_f = true;
      }
      this.ani_1.autoPlay = isAni;
      this.ani_r.autoPlay = this.isAni_f;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      if (Laya.stage.mouseX < this.player.x) {
        this.player.scaleX = -2.5;
      }
      if (Laya.stage.mouseX > this.player.x) {
        this.player.scaleX = 2.5;
      }
      for (var i = 0; i <= 360; i++) {
        this.csm2.rotation += i;
        if (i == 360) {
          i = 0;
        }
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //
    onMouseClick() {
      if (this.isArmed) {
      }
    }
  };
  __name(Player, "Player");
  __decorateClass([
    property21({ type: Laya.Animation })
  ], Player.prototype, "ani_1", 2);
  __decorateClass([
    property21({ type: Laya.Animation })
  ], Player.prototype, "ani_r", 2);
  __decorateClass([
    property21(Laya.Sprite)
  ], Player.prototype, "player", 2);
  __decorateClass([
    property21(Laya.Sprite)
  ], Player.prototype, "light", 2);
  __decorateClass([
    property21(Laya.Sprite)
  ], Player.prototype, "csm1", 2);
  __decorateClass([
    property21(Laya.Sprite)
  ], Player.prototype, "csm2", 2);
  Player = __decorateClass([
    regClass21("0ba96e46-259c-43c2-8ea6-ada8ebedba9d", "../src/Player.ts")
  ], Player);

  // src/ZhuCeFrame.ts
  var { regClass: regClass22, property: property22 } = Laya;
  var ZhuCeFrame = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.userName = null;
      this.sjBt = null;
      this.qdBt = null;
      this.icon = null;
      this.tanchu = null;
      this.iconPre = null;
      this.xing = ["刘", "赵", "张", "陈", "王", "郝", "孙", "李", "马", "石", "韩", "贾", "姜", "彭", "崔"];
      this.ming = ["展", "义", "天", "宁", "龙", "大", "小", "铎", "子", "岳", "硕", "豪", "翠", "轩", "铭"];
      this.XB = null;
      this.xingBiePre = null;
      this.nan = null;
      this.nv = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.icon.resetIcon(8);
      for (let i = 0; i < 8; i++) {
        let one = Laya.Pool.getItemByCreateFun("tcIcon", this.iconPre.create, this.iconPre);
        this.tanchu.addChild(one);
        let r = Math.floor(i / 4);
        let c = i % 4;
        one.pos(c * 100, r * 100);
        one.width = one.height = 100;
        let js = one.getComponent(Icon);
        js.resetIcon(i + 1);
        js.icon = this.icon;
        js.tanchu = this.tanchu;
      }
      this.tanchu.visible = false;
      this.userName.text = this.randomName();
      this.icon.owner.on(Laya.Event.MOUSE_DOWN, this, this.onIconClick);
      this.sjBt.on(Laya.Event.MOUSE_DOWN, this, this.onBtn1Click);
      this.qdBt.on(Laya.Event.MOUSE_DOWN, this, this.onBtn2Click);
      this.nan.on(Laya.Event.MOUSE_DOWN, this, this.onNanClick);
      this.nv.on(Laya.Event.MOUSE_DOWN, this, this.onNvClick);
    }
    onIconClick(e) {
      this.tanchu.visible = true;
      this.tanchu.scaleX;
      Laya.Tween.from(this.tanchu, { scaleX: 0, scaleY: 0 }, 200, Laya.Ease.strongIn);
    }
    onBtn1Click(e) {
      console.log("111111");
      HttpTools.get().send(
        "enroll.php?name=" + this.userName.text + "&icon=" + this.icon.iconId + "&xb=" + this.XB.xingId,
        this.onEnroll,
        this
      );
    }
    onBtn2Click(e) {
      this.userName.text = this.randomName();
    }
    randomName() {
      let s = "";
      s += this.xing[Math.floor(Math.random() * this.xing.length)];
      s += this.ming[Math.floor(Math.random() * this.ming.length)];
      if (Math.random() < 0.8) {
        s += this.ming[Math.floor(Math.random() * this.ming.length)];
      }
      return s;
    }
    onEnroll(j) {
      if (j != null) {
        Laya.LocalStorage.setItem("id", j["id"]);
        Laya.LocalStorage.setItem("psw", j["psw"]);
        Laya.Scene.open("FirstJFrame.ls");
      }
    }
    onNanClick(e) {
      this.XB.resetXing(1);
    }
    onNvClick(e) {
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
  };
  __name(ZhuCeFrame, "ZhuCeFrame");
  __decorateClass([
    property22(Laya.TextInput)
  ], ZhuCeFrame.prototype, "userName", 2);
  __decorateClass([
    property22(Laya.Button)
  ], ZhuCeFrame.prototype, "sjBt", 2);
  __decorateClass([
    property22(Laya.Button)
  ], ZhuCeFrame.prototype, "qdBt", 2);
  __decorateClass([
    property22(Icon)
  ], ZhuCeFrame.prototype, "icon", 2);
  __decorateClass([
    property22(Laya.Sprite)
  ], ZhuCeFrame.prototype, "tanchu", 2);
  __decorateClass([
    property22(Laya.Prefab)
  ], ZhuCeFrame.prototype, "iconPre", 2);
  __decorateClass([
    property22(xingBie)
  ], ZhuCeFrame.prototype, "XB", 2);
  __decorateClass([
    property22(Laya.Prefab)
  ], ZhuCeFrame.prototype, "xingBiePre", 2);
  __decorateClass([
    property22(Laya.Button)
  ], ZhuCeFrame.prototype, "nan", 2);
  __decorateClass([
    property22(Laya.Button)
  ], ZhuCeFrame.prototype, "nv", 2);
  ZhuCeFrame = __decorateClass([
    regClass22("e9e53be2-6334-44a1-bd54-424cc33fccbd", "../src/ZhuCeFrame.ts")
  ], ZhuCeFrame);
})();
//# sourceMappingURL=bundle.scene.js.map
