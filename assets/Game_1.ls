{
  "_$ver": 1,
  "_$id": "7559ol6v",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "27314bd3-e128-49e8-b600-69553624e552",
      "scriptPath": "../src/Game_1.ts",
      "csm1": {
        "_$ref": "bkkvl8nw"
      },
      "csm2": {
        "_$ref": "68rjj07e"
      },
      "player_l": {
        "_$ref": "malmixpf",
        "_$type": "8efdac1b-20a0-4632-9e7a-75a0be0128c2"
      },
      "userName": {
        "_$ref": "uxyz9fl3"
      },
      "dengji": {
        "_$ref": "kfohcby1"
      },
      "jingyan": {
        "_$ref": "cvd3aq0j"
      },
      "icon": {
        "_$ref": "rgjk00kh",
        "_$type": "82ddb5b0-5159-4383-988e-bc351bce04bb"
      },
      "store": {
        "_$ref": "wshrcv6n"
      },
      "tishi": {
        "_$ref": "kcqa38j1"
      },
      "tanchu": {
        "_$ref": "mijzuzwm"
      },
      "gun": {
        "_$ref": "xeakrxbi",
        "_$type": "be75ea94-12fe-4294-b875-45600ee9a707"
      },
      "gunPer": {
        "_$uuid": "3a092fba-97be-4eba-8d3b-42a6bcc0ffba",
        "_$type": "Prefab"
      },
      "xing": {
        "_$ref": "cwdu25du",
        "_$type": "a2cd558b-4d04-4d63-a3c4-9aa31a83f81d"
      },
      "fanhui": {
        "_$ref": "mr315zoi"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "90cjhxqr",
      "_$type": "Image",
      "name": "bg",
      "width": 1280,
      "height": 640,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "bkkvl8nw",
      "_$type": "Image",
      "name": "csm1",
      "x": 1185.0000000000005,
      "y": 504.00000000000006,
      "width": 138,
      "height": 178,
      "scaleX": 0.5,
      "scaleY": 0.5,
      "skin": "res://ed2464e8-9293-4bb6-a4be-f637f5a61b0e",
      "useSourceSize": true,
      "color": "#ffffff"
    },
    {
      "_$id": "68rjj07e",
      "_$type": "Image",
      "name": "csm2",
      "x": 1219.5,
      "y": 548.5,
      "width": 138,
      "height": 178,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "scaleX": 0.5,
      "scaleY": 0.5,
      "skin": "res://ed2464e8-9293-4bb6-a4be-f637f5a61b0e",
      "useSourceSize": true,
      "color": "#ffffff"
    },
    {
      "_$id": "lnzubi62",
      "_$type": "Image",
      "name": "Image",
      "x": 1000.0000000000001,
      "y": 522,
      "width": 182,
      "height": 63,
      "skin": "res://18d03614-070e-4a07-923e-9491b490d0fc",
      "color": "#ffffff"
    },
    {
      "_$id": "6pa8bibz",
      "_$type": "Sprite",
      "name": "bulitManger",
      "active": false,
      "x": 79.25000000000001,
      "y": 532.7500000000001,
      "width": 1,
      "height": 1,
      "anchorY": 0.03,
      "_$comp": [
        {
          "_$type": "3963592b-53db-4a4e-8152-2899e0f33fce",
          "scriptPath": "../src/BulitManger.ts",
          "zdPer": {
            "_$uuid": "01defd46-17bf-4ffd-9b45-e5da5b1dacd6",
            "_$type": "Prefab"
          },
          "player": {
            "_$ref": "malmixpf",
            "_$type": "8efdac1b-20a0-4632-9e7a-75a0be0128c2"
          },
          "bm": {
            "_$ref": "6pa8bibz",
            "_$type": "3963592b-53db-4a4e-8152-2899e0f33fce"
          },
          "nm": null,
          "gun": null,
          "game": {
            "_$ref": "7559ol6v"
          }
        }
      ]
    },
    {
      "_$id": "malmixpf",
      "_$type": "Image",
      "name": "player",
      "x": 58,
      "y": 529,
      "width": 13,
      "height": 15,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "scaleX": 2.5,
      "scaleY": 2.5,
      "skin": "res://bce175b3-4b57-472d-a644-4beb590007ec",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$comp": [
        {
          "_$type": "8efdac1b-20a0-4632-9e7a-75a0be0128c2",
          "scriptPath": "../src/player_A.ts",
          "light": {
            "_$ref": "4rne52f4"
          },
          "mouse": {
            "_$ref": "i96laq1w"
          },
          "gun": {
            "_$ref": "xeakrxbi"
          },
          "ani_1": {
            "_$ref": "2ep5oih6"
          },
          "ani_r": {
            "_$ref": "lluhwy3c"
          },
          "xt": null
        }
      ],
      "_$child": [
        {
          "_$id": "xeakrxbi",
          "_$type": "Sprite",
          "name": "gun",
          "x": 8.99999999999999,
          "y": 8.5,
          "width": 12,
          "height": 7,
          "anchorY": 0.5,
          "_$comp": [
            {
              "_$type": "be75ea94-12fe-4294-b875-45600ee9a707",
              "scriptPath": "../src/gun.ts"
            }
          ]
        },
        {
          "_$id": "4rne52f4",
          "_$type": "Image",
          "name": "light",
          "x": 9.042000000000009,
          "y": 8,
          "width": 67,
          "height": 39,
          "anchorX": -0.074,
          "anchorY": 0.5,
          "alpha": 0.513,
          "skin": "res://1de79c50-7821-48e6-8149-02a0c2fcdda9",
          "color": "#ffffff"
        },
        {
          "_$id": "lluhwy3c",
          "_$prefab": "0b461d93-cd23-4014-8b8e-78cbcfa338c4",
          "name": "run",
          "active": true,
          "x": 1.4210854715202004e-14,
          "y": 4.529709940470639e-14,
          "visible": true,
          "scaleX": 1,
          "scaleY": 1,
          "width": 14,
          "height": 17,
          "interval": 84,
          "autoPlay": false
        },
        {
          "_$id": "2ep5oih6",
          "_$prefab": "0e3948d0-47b9-4d2e-8c1d-7b0f72361abb",
          "name": "dai",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true,
          "scaleX": 1,
          "scaleY": 1,
          "interval": 86,
          "autoPlay": false,
          "loop": true
        },
        {
          "_$id": "w005eljx",
          "_$type": "Image",
          "name": "Image",
          "x": -3.999999999999986,
          "y": 4.999999999999954,
          "width": 20,
          "height": 21,
          "skin": "res://6db79014-0bc5-42be-a268-d17b6c26a15e",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "2h94ohsn",
      "_$type": "Image",
      "name": "xinxi",
      "x": 1,
      "y": 1,
      "width": 282,
      "height": 154,
      "_mouseState": 2,
      "skin": "res://d196d8f4-e430-4e24-9f19-ce6ef9c0c670",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "sayxxzfa",
          "_$type": "Sprite",
          "name": "xue_1",
          "x": 125.00000000000011,
          "y": 60.00000000000006,
          "width": 157,
          "height": 27,
          "texture": {
            "_$uuid": "221e9a35-d5c3-46c1-9563-593a05a1cb4f",
            "_$type": "Texture"
          }
        },
        {
          "_$id": "by16mke3",
          "_$type": "Sprite",
          "name": "xue_2",
          "x": 125.00000000000011,
          "y": 60,
          "width": 157,
          "height": 27
        },
        {
          "_$id": "cwdu25du",
          "_$prefab": "8c8e2cf9-b2a1-4213-94eb-19537d7ee717",
          "name": "性别",
          "active": true,
          "x": -18.000000000000114,
          "y": 11,
          "visible": true
        },
        {
          "_$id": "rgjk00kh",
          "_$prefab": "1ff6949d-9d2b-4be0-983e-09d28d23f688",
          "name": "Icon",
          "active": true,
          "x": -4,
          "y": 23,
          "visible": true
        },
        {
          "_$id": "uxyz9fl3",
          "_$type": "Label",
          "name": "name",
          "x": 115,
          "y": 14,
          "width": 120,
          "height": 28,
          "text": "",
          "fontSize": 20,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "kfohcby1",
          "_$type": "Label",
          "name": "lev",
          "x": 228,
          "y": 18,
          "width": 58,
          "height": 27,
          "text": "Lev:",
          "fontSize": 20,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "cvd3aq0j",
          "_$type": "Label",
          "name": "Jingyan",
          "x": 132,
          "y": 93,
          "width": 138,
          "height": 28,
          "text": "Jy：",
          "fontSize": 20,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "wshrcv6n",
      "_$type": "Image",
      "name": "Store",
      "x": 288,
      "width": 729,
      "height": 244,
      "_mouseState": 2,
      "skin": "res://43e53fdd-0469-4849-9039-6874ad263583",
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "kcqa38j1",
          "_$type": "Label",
          "name": "Label",
          "x": 247,
          "y": 151,
          "width": 182,
          "height": 28,
          "text": "按E打开商店",
          "fontSize": 59,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "mijzuzwm",
          "_$type": "Sprite",
          "name": "Sprite",
          "x": -146,
          "y": 73,
          "width": 1056,
          "height": 452,
          "alpha": 0.841,
          "_mouseState": 2,
          "_gcmds": [
            {
              "_$type": "DrawRoundRectCmd",
              "x": 0,
              "y": 0,
              "width": 1,
              "height": 1,
              "lt": 50,
              "rt": 50,
              "lb": 50,
              "rb": 50,
              "percent": true,
              "lineWidth": 1,
              "lineColor": "#000000",
              "fillColor": "#FFFFFF"
            }
          ],
          "_$child": [
            {
              "_$id": "bwbrge5l",
              "_$type": "Label",
              "name": "store",
              "x": 27,
              "y": -14,
              "width": 997,
              "height": 28,
              "text": "store\n",
              "fontSize": 82,
              "color": "rgba(0, 0, 0, 1)",
              "bold": true,
              "align": "center",
              "valign": "top",
              "padding": "0,0,0,0"
            }
          ]
        }
      ]
    },
    {
      "_$id": "i96laq1w",
      "_$type": "Image",
      "name": "shubiao",
      "x": 404.24999999999994,
      "y": 327.7499999999999,
      "width": 30,
      "height": 30,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "skin": "res://4f1b923f-03a5-44d1-870f-e208aaa3ff08",
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "hksd8va6",
          "_$type": "Image",
          "name": "Image(2)",
          "width": 30,
          "height": 30,
          "skin": "res://1d9c5b52-96e4-4998-85df-9f0c1a1db0e9",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "mr315zoi",
      "_$type": "Button",
      "name": "返回",
      "x": 1145,
      "y": 8,
      "width": 120,
      "height": 40,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "返回菜单",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    }
  ]
}