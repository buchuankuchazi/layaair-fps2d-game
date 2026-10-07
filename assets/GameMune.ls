{
  "_$ver": 1,
  "_$id": "va2ngkjz",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "50cf7e54-9244-4335-b9bc-a97c05fc8a84",
      "scriptPath": "../src/GameMune.ts",
      "pG": {
        "_$ref": "u3v7lcd6"
      },
      "phb": {
        "_$ref": "vzym4m7i"
      },
      "phb_s": {
        "_$ref": "g0mhk43s"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "q811t2jd",
      "_$type": "Image",
      "name": "Image",
      "width": 1280,
      "height": 640,
      "_mouseState": 2,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "q4alhclk",
      "_$type": "Label",
      "name": "Label",
      "x": 380,
      "y": 118,
      "width": 520,
      "height": 100,
      "text": "枪战每一天",
      "fontSize": 104,
      "color": "#FFFFFF",
      "bold": true,
      "italic": true,
      "underline": true,
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "8jmrthes",
      "_$type": "Label",
      "name": "小标签",
      "x": 413,
      "y": 220,
      "width": 471,
      "height": 28,
      "text": "don't        stop",
      "fontSize": 31,
      "color": "#FFFFFF",
      "bold": true,
      "italic": true,
      "align": "center",
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "u3v7lcd6",
      "_$type": "Button",
      "name": "playgame",
      "x": 530,
      "y": 330,
      "width": 250,
      "height": 60,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "开始游戏",
      "labelSize": 33,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "vzym4m7i",
      "_$type": "Button",
      "name": "list",
      "x": 530,
      "y": 470,
      "width": 250,
      "height": 60,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "排行榜",
      "labelSize": 33,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "g0mhk43s",
      "_$type": "Sprite",
      "name": "hpb",
      "x": 202,
      "y": 10,
      "width": 927,
      "height": 600,
      "alpha": 0.867,
      "_mouseState": 2,
      "_gcmds": [
        {
          "_$type": "DrawRoundRectCmd",
          "x": 0,
          "y": 0,
          "width": 1,
          "height": 1,
          "lt": 30,
          "rt": 30,
          "lb": 30,
          "rb": 9,
          "percent": true,
          "lineWidth": 1,
          "lineColor": "#000000",
          "fillColor": "rgba(188, 198, 234, 1)"
        }
      ],
      "_$comp": [
        {
          "_$type": "16b22d9c-537b-499f-a853-9cf00a27f3dd",
          "scriptPath": "../src/Phb.ts",
          "li": {
            "_$ref": "j93ybkv8"
          },
          "s": {
            "_$ref": "9q8cr7r5",
            "_$type": "ff3982ce-675a-4052-88e3-d20db8f9514d"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "v1mfoa2n",
          "_$type": "Label",
          "name": "Label",
          "x": 33.00000000000006,
          "y": 40.99999999999998,
          "width": 554,
          "height": 28,
          "text": "排名     姓名     击杀数     头像    枪械    性别",
          "fontSize": 20,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "j93ybkv8",
          "_$type": "List",
          "name": "List",
          "x": 34,
          "y": 76,
          "width": 859,
          "height": 507,
          "_mouseState": 2,
          "itemTemplate": {
            "_$ref": "9q8cr7r5",
            "_$tmpl": "itemRender"
          },
          "repeatX": 1,
          "repeatY": 10,
          "spaceY": 10,
          "_$child": [
            {
              "_$id": "9q8cr7r5",
              "_$prefab": "0be898cb-65ea-46ac-9ff4-3250fb7861e0",
              "name": "xinxi",
              "active": true,
              "x": 24.999999999999886,
              "y": 25.999999999999986,
              "width": 245,
              "_$comp": [
                {
                  "_$override": "ff3982ce-675a-4052-88e3-d20db8f9514d",
                  "icon": {
                    "_$ref": "nsn59r74",
                    "_$type": "82ddb5b0-5159-4383-988e-bc351bce04bb"
                  },
                  "gun": {
                    "_$ref": "2gd6qnz5",
                    "_$type": "be75ea94-12fe-4294-b875-45600ee9a707"
                  },
                  "XB": {
                    "_$ref": "71y2zzr7"
                  },
                  "xbk": {
                    "_$ref": "2qlw4etl",
                    "_$type": "a2cd558b-4d04-4d63-a3c4-9aa31a83f81d"
                  }
                }
              ],
              "_$child": [
                {
                  "_$id": "nsn59r74",
                  "_$prefab": "1ff6949d-9d2b-4be0-983e-09d28d23f688",
                  "_$index": 3,
                  "name": "Icon",
                  "active": true,
                  "x": 260,
                  "y": -16,
                  "visible": true,
                  "width": 40,
                  "height": 40
                },
                {
                  "_$id": "2gd6qnz5",
                  "_$prefab": "3a092fba-97be-4eba-8d3b-42a6bcc0ffba",
                  "_$index": 4,
                  "name": "gun",
                  "active": true,
                  "x": 379.0000000000001,
                  "y": 0,
                  "visible": true
                },
                {
                  "_$id": "71y2zzr7",
                  "_$index": 5,
                  "_$type": "Label",
                  "name": "性别",
                  "x": 446,
                  "width": 120,
                  "height": 28,
                  "text": "Label",
                  "fontSize": 20,
                  "color": "#FFFFFF",
                  "valign": "top",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "2qlw4etl",
                  "_$prefab": "8c8e2cf9-b2a1-4213-94eb-19537d7ee717",
                  "name": "性别(1)",
                  "active": true,
                  "x": 260,
                  "y": -16,
                  "visible": true,
                  "width": 50,
                  "height": 40
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}