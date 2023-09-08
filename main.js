const museiTitle = "Зоологический музей";
const draggable = true;
const hfov = 110;
const compass = true;
// const path = "/assets/"  
const path = "/panoramaMarGU1/assets/" 
pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "coridor1",
        // "author": "Matthew Petroff",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "draggable": draggable,
        "compass": compass,
        // "dynamic": true,
    },

    "scenes": {
        "coridor1": {
            "title": "Коридор",
            "hfov": hfov,
            "pitch": -3,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": path + "coridor1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 9,
                    "type": "scene",
                    "text": museiTitle,
                    "sceneId": "musei1",
                }
            ]
        },

        "musei1": {
            "title": "Музей",
            "hfov": hfov,
            "pitch": -10,
            "yaw": -110,
            "type": "equirectangular",
            "panorama": path + "musei2.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 70,
                    "type": "scene",
                    "text": "Коридор",
                    "targetYaw": 180, 
                    "sceneId": "coridor1",
                },
                {
                    "pitch": -30,
                    "yaw": -110,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei2",
                },
            ]
        },
        "musei2": {
            "title": "Музей",
            "hfov": hfov,
            "pitch": -10,
            "yaw": -110,
            "type": "equirectangular",
            "panorama": path + "musei3.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
                    "targetYaw": 75, 
                    // "text": "",
                    "sceneId": "musei1",
                },
                {
                    "pitch": -25,
                    "yaw": -90,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei3",
                },
            ]
        },
        "musei3": {
            "title": "Музей",
            "hfov": hfov,
            "pitch": -10,
            "yaw": -110,
            "type": "equirectangular",
            "panorama": path + "musei4.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
                    "targetYaw": 100, 
                    // "text": "",
                    "sceneId": "musei2",
                },
                {
                    "pitch": -25,
                    "yaw": -100,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei4",
                },
            ]
        },
        "musei4": {
            "title": "Музей",
            "hfov": hfov,
            "pitch": -10,
            "yaw": -110,
            "type": "equirectangular",
            "panorama": path + "musei5.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
                    // "text": "",
                    "targetYaw": 90, 
                    "sceneId": "musei3",
                },
                {
                    "pitch": -10,
                    "yaw": 190,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei5",
                },
            ]
        },
        "musei5": {
            "title": "Музей",
            "hfov": hfov,
            "pitch": -3,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": path + "musei6.jpg",
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 160,
                    "type": "scene",
                    "targetYaw": 100, 
                    "text": museiTitle,
                    "sceneId": "musei4",
                }
            ]
        },
       
    }
});