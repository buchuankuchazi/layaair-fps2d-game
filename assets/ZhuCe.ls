{
  "_$ver": 1,
  "_$id": "1r9avrrw",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "e9e53be2-6334-44a1-bd54-424cc33fccbd",
      "scriptPath": "../src/ZhuCeFrame.ts",
      "userName": {
        "_$ref": "3t72zffk"
      },
      "sjBt": {
        "_$ref": "qrwcwhea"
      },
      "qdBt": {
        "_$ref": "9vvtalno"
      },
      "icon": {
        "_$ref": "vwvs6xnv",
        "_$type": "82ddb5b0-5159-4383-988e-bc351bce04bb"
      },
      "tanchu": {
        "_$ref": "t1lz1kak"
      },
      "iconPre": {
        "_$uuid": "1ff6949d-9d2b-4be0-983e-09d28d23f688",
        "_$type": "Prefab"
      },
      "XB": {
        "_$ref": "b8bci9vx",
        "_$type": "a2cd558b-4d04-4d63-a3c4-9aa31a83f81d"
      },
      "xingBiePre": {
        "_$uuid": "8c8e2cf9-b2a1-4213-94eb-19537d7ee717",
        "_$type": "Prefab"
      },
      "nan": {
        "_$ref": "dub0lu6p"
      },
      "nv": {
        "_$ref": "sdzenekt"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "4361o55j",
      "_$type": "Image",
      "name": "bg",
      "width": 1280,
      "height": 640,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "3t72zffk",
      "_$type": "TextInput",
      "name": "TextInput",
      "x": 435,
      "y": 30,
      "width": 410,
      "height": 60,
      "_mouseState": 2,
      "text": "",
      "fontSize": 20,
      "color": "#FFFFFF",
      "valign": "middle",
      "overflow": "scroll",
      "padding": "2,6,2,6",
      "skin": "res://221e9a35-d5c3-46c1-9563-593a05a1cb4f",
      "type": "text",
      "maxChars": 0,
      "prompt": "",
      "promptColor": "#A9A9A9",
      "_$child": [
        {
          "_$id": "zc1nhidb",
          "_$type": "Label",
          "name": "Label",
          "x": -119,
          "y": 1,
          "width": 123,
          "height": 54,
          "text": "Name:",
          "fontSize": 52,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "9vvtalno",
      "_$type": "Button",
      "name": "SuiJi",
      "x": 847,
      "y": 25.702370887704532,
      "width": 160,
      "height": 70,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "随机",
      "labelSize": 52,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "qrwcwhea",
      "_$type": "Button",
      "name": "QueDing",
      "x": 560,
      "y": 541.7023708877045,
      "width": 160,
      "height": 70,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "确定",
      "labelSize": 52,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "t1lz1kak",
      "_$type": "Sprite",
      "name": "Kuang",
      "x": 255,
      "y": 100,
      "width": 770,
      "height": 440,
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
          "rb": 30,
          "percent": true,
          "lineWidth": 1,
          "lineColor": "#000000",
          "fillColor": "rgba(255, 255, 255, 0.24705882352941178)"
        }
      ]
    },
    {
      "_$id": "b8bci9vx",
      "_$prefab": "8c8e2cf9-b2a1-4213-94eb-19537d7ee717",
      "name": "性别",
      "active": true,
      "x": 572.9999999999999,
      "y": 255,
      "visible": true
    },
    {
      "_$id": "vwvs6xnv",
      "_$prefab": "1ff6949d-9d2b-4be0-983e-09d28d23f688",
      "name": "Icon",
      "active": true,
      "x": 585,
      "y": 265,
      "visible": true
    },
    {
      "_$id": "dub0lu6p",
      "_$type": "Button",
      "name": "Button",
      "x": 1100,
      "y": 200,
      "width": 55,
      "height": 40,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "男",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "sdzenekt",
      "_$type": "Button",
      "name": "Button(1)",
      "x": 1160,
      "y": 200,
      "width": 55,
      "height": 40,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "女",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "b19pfex1",
      "_$type": "Label",
      "name": "性别",
      "x": 1100,
      "y": 160,
      "width": 120,
      "height": 28,
      "text": "性别：",
      "fontSize": 20,
      "color": "#FFFFFF",
      "valign": "top",
      "padding": "0,0,0,0"
    }
  ]
}