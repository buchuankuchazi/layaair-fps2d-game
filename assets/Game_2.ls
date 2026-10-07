{
  "_$ver": 1,
  "_$id": "gg6d4e8z",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "e4faabe2-e569-4da9-ae24-25f5879b2a50",
      "scriptPath": "../src/Game_2.ts",
      "gun": {
        "_$ref": "cyonvlfq",
        "_$type": "be75ea94-12fe-4294-b875-45600ee9a707"
      },
      "b": {
        "_$ref": "6xrrv5s0",
        "_$type": "3963592b-53db-4a4e-8152-2899e0f33fce"
      },
      "highest": {
        "_$ref": "rtceqqkq"
      },
      "highestMax": {
        "_$ref": "crva2mqt"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "tn03oes8",
      "_$type": "Image",
      "name": "Image",
      "width": 1280,
      "height": 640,
      "alpha": 0.739,
      "skin": "res://559e2c97-9ef9-4e00-90dc-ad221f7bcd56",
      "color": "#ffffff"
    },
    {
      "_$id": "29zbpsr9",
      "_$type": "Sprite",
      "name": "npcManger",
      "width": 0,
      "height": 0,
      "_$comp": [
        {
          "_$type": "e57ef55f-72a4-4caa-b109-64c3875f2a72",
          "scriptPath": "../src/NpcManager.ts",
          "npcPrefab": {
            "_$uuid": "6eb3a697-4bcd-46d0-aadb-f6aa187f20e0",
            "_$type": "Prefab"
          },
          "player": {
            "_$ref": "g9fb29ug",
            "_$type": "8efdac1b-20a0-4632-9e7a-75a0be0128c2"
          },
          "npcManager": {
            "_$ref": "29zbpsr9",
            "_$type": "e57ef55f-72a4-4caa-b109-64c3875f2a72"
          },
          "game": {
            "_$ref": "gg6d4e8z"
          }
        }
      ]
    },
    {
      "_$id": "iegqlnxn",
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
          "_$id": "tv1en76s",
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
      "_$id": "6xrrv5s0",
      "_$type": "Sprite",
      "name": "bulitManger",
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
            "_$ref": "g9fb29ug",
            "_$type": "8efdac1b-20a0-4632-9e7a-75a0be0128c2"
          },
          "bm": {
            "_$ref": "6xrrv5s0",
            "_$type": "3963592b-53db-4a4e-8152-2899e0f33fce"
          },
          "nm": {
            "_$ref": "29zbpsr9",
            "_$type": "e57ef55f-72a4-4caa-b109-64c3875f2a72"
          },
          "gun": {
            "_$ref": "cyonvlfq",
            "_$type": "be75ea94-12fe-4294-b875-45600ee9a707"
          },
          "game": {
            "_$ref": "gg6d4e8z"
          }
        }
      ]
    },
    {
      "_$id": "e9g9mlcj",
      "_$type": "Label",
      "name": "Label",
      "x": 349.9999999999999,
      "y": 12.500000000000046,
      "width": 246,
      "height": 28,
      "text": "",
      "fontSize": 20,
      "color": "#FFFFFF",
      "align": "center",
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "3hkbuv6q",
      "_$type": "ProgressBar",
      "name": "ProgressBar",
      "x": 344.9999999999999,
      "y": 10.500000000000057,
      "width": 256,
      "height": 32,
      "_mouseState": 2,
      "skin": "res://ae3de75e-ee9f-478d-9f8b-ede75a4fc296",
      "value": 0.5
    },
    {
      "_$id": "g9fb29ug",
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
            "_$ref": "uv235aew"
          },
          "mouse": {
            "_$ref": "iegqlnxn"
          },
          "gun": {
            "_$ref": "cyonvlfq"
          },
          "ani_1": {
            "_$ref": "xqbgv0i4"
          },
          "ani_r": {
            "_$ref": "nrktfryb"
          },
          "xt": {
            "_$ref": "3hkbuv6q"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "cyonvlfq",
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
          "_$id": "uv235aew",
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
          "_$id": "nrktfryb",
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
          "_$id": "xqbgv0i4",
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
          "_$id": "g37zbb78",
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
      "_$id": "rtceqqkq",
      "_$type": "Label",
      "name": "highest-lab",
      "width": 120,
      "height": 28,
      "text": "killNow:",
      "fontSize": 50,
      "color": "#FFFFFF",
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "crva2mqt",
      "_$type": "Label",
      "name": "highest-lab(1)",
      "x": 710,
      "width": 120,
      "height": 28,
      "text": "killMax:",
      "fontSize": 50,
      "color": "#FFFFFF",
      "valign": "top",
      "padding": "0,0,0,0"
    }
  ]
}