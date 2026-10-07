# 枪战每一天 (Don't Stop)

一款使用 **LayaAir + TypeScript** 开发的 2D 射击游戏，带 **PHP + MySQL 后端**，
实现注册、登录、玩家数据（金币 / 经验 / 等级 / 最高击杀）与全服排行榜。

本项目为**个人独立开发**：游戏客户端、后端接口与数据库设计均由本人完成。
本项目借鉴steam游戏 don’t stop 
https://store.steampowered.com/app/2153420/Dont_Stop/
所有美术素材版权均为原作者所有
---

## 技术栈

| 层 | 技术 |
|---|---|
| 客户端 | LayaAir 3.x + TypeScript |
| 网络 | `Laya.HttpRequest` + 自研请求管理器（单例 + 请求队列） |
| 后端 | 原生 PHP（mysqli） |
| 数据库 | MySQL |

---

## 目录结构

```
├── src/                    # TypeScript 源码（20 个脚本）
│   ├── Main.ts             # 入口
│   ├── Login.ts            # 登录
│   ├── ZhuCeFrame.ts       # 注册
│   ├── GameMune.ts         # 主菜单
│   ├── MainGame.ts         # 战斗主场景
│   ├── Game_1.ts / Game_2.ts
│   ├── player_A.ts         # 玩家
│   ├── Player.ts
│   ├── Npc.ts / NpcManager.ts   # 敌人与生成管理
│   ├── gun.ts              # 枪械
│   ├── Bulit.ts / BulitManger.ts # 子弹与管理
│   ├── Phb.ts              # 排行榜
│   ├── HttpTools.ts        # 网络请求管理
│   ├── MainData.ts         # 全局数据
│   ├── xinxi.ts / xingBie.ts / Icon.ts   # 个人信息、性别、头像
│   └── GameOverFrame.ts
├── assets/                 # 美术资源与场景
├── engine/types/           # LayaAir 类型声明
├── bin/                    # 编译输出（index.html + bundle.js）
├── backend/
│   ├── php/                # 后端接口
│   ├── schema.sql          # 数据库建表脚本
│   └── 接口.txt            # 原始接口备注
└── settings/               # LayaAir 项目配置
```

---

## 网络层设计（`HttpTools.ts`）

客户端所有请求统一走 `HttpTools`，采用**单例 + 请求队列**：

```typescript
public send(url: string, back: Function, self: any) {
    if (this.dl.length > 0) {
        this.dl.push({ url, back, self });      // 队列非空 → 排队等待
    } else {
        this.dl.push({ url, back, self });
        this.doSendurl(url);                    // 队列为空 → 立即发送
    }
}
```

**为什么需要队列**：前一个请求未返回时直接发起下一个，容易导致回调与响应错位；
用一个数组排队、按顺序发送，保证每个回调都能对应到自己那次请求。

**已知缺陷**：`this.path` 目前硬编码为 `http://localhost//php/`，部署时需要改；
队列内请求是串行发送的，请求较多时会有等待（更好的做法是并发 + 请求 ID 匹配）。

---

## 后端接口

所有接口返回 JSON，通过 GET 传参。

| 接口 | 参数 | 说明 | 返回 |
|---|---|---|---|
| `enroll.php` | `name`, `icon` | 注册。密码由后端 `rand(10000000,99999999)` 随机生成 | `{ret, id, psw}`；昵称已存在时 `{ret:1}` |
| `dengLu.php` | `id`, `psw` | 登录。若 `userdate` 无记录则自动初始化一条 | `{ret, name, icon, jinbi, lev, jinyan, highest}`；失败 `{ret:1}` |
| `PHB.php` | — | 全服排行榜，返回 `userdate` 全表 | `{ret, date}` |
| `userInter.php` | `id` | 查询 / 初始化玩家数据 | `{ret, lev, jinbi, jy, highest}` |
| `playerXX.php` | `id` | 玩家详细信息（`user` 与 `userdate` 联表查询） | `{ret, name, icon, jb, jy, lev, highest}` |

**等级公式**：`所需经验 = LEVEL² × 20`

**数据库表**：`user`（ID / NAME / PSW / ICON）、`userdate`（ID / JINBI / JY / LEVEL / HIGHEST KILL）

---

## 运行方式

### 客户端

1. 用 **LayaAir IDE** 打开 `枪战每一天(Don't stop).laya`
2. 编译（F5）或直接打开 `bin/index.html`

> `bin/` 下已有编译好的 bundle，可直接用浏览器打开 `bin/index.html` 查看界面；
> 但**涉及联网的功能（注册 / 登录 / 排行榜）需要先启动后端**。

### 后端

1. 启动 PHP（Apache / Nginx + PHP，或 `php -S localhost:80`）
2. 导入数据库：执行 `backend/schema.sql`
3. 修改 `backend/php/SqlTools.php` 里的数据库配置（**请勿提交真实密码**）
4. 把 `backend/php/` 放到 Web 根目录下，确认可访问
5. 修改 `src/HttpTools.ts` 中的 `path` 为你的后端地址，重新编译

---

## 已知问题

诚实记录当前版本的不足，后续计划修复：

- `playerXX.php` 与 `userInter.php` 中部分变量（`$id`、`$jy`、`$highest`）未定义即使用，这两个接口目前**不可用**
- `fetchRow()` 返回二维数组，但 `playerXX.php` 中按 `mysqli_result` 对象使用，逻辑不一致
- SQL 由字符串拼接，**存在 SQL 注入风险**，应改为预处理语句（`mysqli_prepare`）
- 密码为明文存储且由后端随机生成，应改为哈希（`password_hash`）+ 用户自定义密码
- `HttpTools.ts` 中后端地址硬编码，应抽为配置项

## Roadmap

- [ ] 修复上述后端缺陷，接口改为预处理语句
- [ ] 密码哈希化，注册支持用户自定义密码
- [ ] 客户端请求层改为并发 + 请求 ID 匹配
- [ ] 增加房间 / 对战相关接口

---

## 说明
- 美术素材：现成素材，版权归原作者所有，本项目仅用于学习与作品展示
