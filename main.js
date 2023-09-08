const museiTitle = "Зоологический музей";
const draggable = true;
const hfov = 110;
const compass = false;
pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "musei4",
        // "author": "Matthew Petroff",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "draggable": draggable,
        "compass": compass,
    },

    "scenes": {
        "coridor1": {
            "title": "Коридор",
            "hfov": hfov,
            "pitch": -3,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "/assets/coridor1.jpg",
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
            "panorama": "/assets/musei2.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 70,
                    "type": "scene",
                    "text": "Коридор",
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
            "panorama": "/assets/musei3.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
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
            "panorama": "/assets/musei4.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei2",
                },
                {
                    "pitch": -10,
                    "yaw": -110,
                    "type": "scene",
                    // "text": "",
                    "sceneId": "musei4",
                },
            ]
        },
        "musei4": {
            "title": "Музей5",
            "hfov": hfov,
            "pitch": -10,
            "yaw": -110,
            "type": "equirectangular",
            "panorama": "/assets/musei5.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 85,
                    "type": "scene",
                    // "text": "",
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
       
    }
});