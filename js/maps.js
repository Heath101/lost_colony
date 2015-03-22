var maps = {
    "singleplayer":[
        {
            "name":"Entities",
            "briefing": "In this level you will add new entities to the map.\nYou will also select them using the mouse",
             
            /* Map Details */
            "mapImage":"images/maps/level-one-debug-grid.png",
            "startX":4,
            "startY":4,
             
            /* Entities to be loaded */
            "requirements":{
                "buildings":["base","starport","harvester","ground-turret"],
                "vehicles":[],
                "aircraft":[],
                "terrain":[]
            },
             
            /* Entities to be added */
            "items":[
                {"type":"buildings","name":"base","x":11,"y":14,"team":"blue"},
                {"type":"buildings","name":"base","x":12,"y":16,"team":"green"},
                {"type":"buildings","name":"base","x":15,"y":15,"team":"green", "life":50},


                {"type":"buildings","name":"starport","x":18,"y":14,"team":"blue"},
                {"type":"buildings","name":"starport","x":18,"y":10,"team":"blue", "action":"teleport"},
                {"type":"buildings","name":"starport","x":18,"y":6,"team":"green", "action":"open"},

                {"type":"buildings","name":"harvester","x":20,"y":10,"team":"blue"},
                {"type":"buildings","name":"harvester","x":22,"y":12,"team":"green", "action":"deploy"},

                {"type":"buildings","name":"ground-turret","x":14,"y":9,"team":"blue", "direction":3},
                {"type":"buildings","name":"ground-turret","x":14,"y":12,"team":"green", "direction":1},
                {"type":"buildings","name":"ground-turret","x":16,"y":10,"team":"blue", "action":"teleport"}, 
            ]
             
        }
    ]
}