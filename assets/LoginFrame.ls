{
  "_$ver": 1,
  "_$id": "xqe4ywxa",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "fa9cf7bb-8253-4691-a8b2-a7d4eb40dadb",
      "scriptPath": "../src/Login.ts",
      "userId": {
        "_$ref": "ffdbacz3"
      },
      "userPsw": {
        "_$ref": "beza8p3l"
      },
      "ok": {
        "_$ref": "d5fcr7fq"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "xffsd07d",
      "_$type": "Image",
      "name": "Image",
      "width": 1280,
      "height": 640,
      "_mouseState": 2,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "ffdbacz3",
      "_$type": "TextInput",
      "name": "id",
      "x": 399,
      "y": 157.66782081508927,
      "width": 500,
      "height": 50,
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
          "_$id": "mgf0vg80",
          "_$type": "Label",
          "name": "ID",
          "x": -46,
          "y": -1,
          "width": 41,
          "height": 39,
          "text": "ID:\n",
          "fontSize": 39,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "beza8p3l",
      "_$type": "TextInput",
      "name": "psw",
      "x": 396,
      "y": 269.66782081508927,
      "width": 500,
      "height": 50,
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
          "_$id": "bop7mod3",
          "_$type": "Label",
          "name": "psw",
          "x": -164,
          "y": -3,
          "width": 41,
          "height": 39,
          "text": "PassWord:\n",
          "fontSize": 39,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "d5fcr7fq",
      "_$type": "Button",
      "name": "登录",
      "x": 504,
      "y": 411,
      "width": 190,
      "height": 118,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://48489807-ad1f-495d-a8ae-b546ef6d57f2",
      "label": "登录",
      "labelSize": 84,
      "labelAlign": "center",
      "labelVAlign": "middle"
    }
  ]
}