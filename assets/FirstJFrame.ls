{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "092896da-16e5-4681-9c2b-9805011e3e3f",
      "scriptPath": "../src/MainGame.ts",
      "eBt": {
        "_$ref": "tfbz04a3"
      },
      "lBt": {
        "_$ref": "07jjd8ez"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "ctv4ktgj",
      "_$type": "Image",
      "name": "Image",
      "width": 1280,
      "height": 640,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "tfbz04a3",
      "_$type": "Button",
      "name": "ZhuCe",
      "x": 172,
      "y": 498,
      "width": 305,
      "height": 98,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "注册账号",
      "labelSize": 33,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "07jjd8ez",
      "_$type": "Button",
      "name": "DengLu",
      "x": 800,
      "y": 500,
      "width": 305,
      "height": 98,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "登陆账号",
      "labelSize": 33,
      "labelBold": true,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "5gvb0u89",
      "_$type": "Animation",
      "name": "Animation",
      "width": 100,
      "height": 100,
      "interval": 50,
      "loop": false,
      "_$comp": [
        {
          "_$type": "Animator2D",
          "controller": {
            "_$uuid": "b080186e-a2a1-4c36-85ec-646f95894f3a",
            "_$type": "AnimationController2D"
          },
          "controllerLayers": []
        }
      ],
      "_$child": [
        {
          "_$id": "l0ms5f61",
          "_$type": "Label",
          "name": "标签",
          "x": 217.99999999999994,
          "y": 58.99999999999997,
          "width": 794,
          "height": 157,
          "text": "枪战每一天",
          "fontSize": 131,
          "color": "#FFFFFF",
          "bold": true,
          "italic": true,
          "underline": true,
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "a0zpovxb",
          "_$type": "Label",
          "name": "小标签",
          "x": 336.99999999999994,
          "y": 201.00000000000006,
          "width": 471,
          "height": 28,
          "text": "don't     stop",
          "fontSize": 31,
          "color": "#FFFFFF",
          "bold": true,
          "italic": true,
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0"
        }
      ]
    }
  ]
}