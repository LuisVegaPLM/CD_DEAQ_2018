/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'badera2',
                            display: 'block',
                            type: 'image',
                            rect: ['376px', '27px', '310px', '140px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"badera.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'LIBRO-min',
                            display: 'none',
                            type: 'image',
                            rect: ['-345px', '-40px', '500px', '522px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"LIBRO-min.png",'0px','0px'],
                            transform: [[],[],[],['0.7','0.7']]
                        },
                        {
                            id: 'text-uno2',
                            display: 'none',
                            type: 'image',
                            rect: ['261px', '201px', '260px', '246px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-uno.png",'0px','0px']
                        },
                        {
                            id: 'text-dos2',
                            display: 'none',
                            type: 'image',
                            rect: ['533px', '202px', '222px', '240px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-dos.png",'0px','0px']
                        },
                        {
                            id: 'text-tres2',
                            display: 'none',
                            type: 'image',
                            rect: ['62px', '459px', '320px', '370px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-tres.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['413px', '473px', '2px', '0px', 'auto', 'auto'],
                            fill: ["rgba(113,113,113,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['405px', '461px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(113,113,113,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-cuatro2',
                            type: 'image',
                            rect: ['432px', '459px', '310px', '345px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-cuatro.png",'0px','0px']
                        },
                        {
                            id: 'text-cinco2',
                            type: 'image',
                            rect: ['65px', '869px', '280px', '290px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-cinco.png",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['413px', '885px', '2px', '270px', 'auto', 'auto'],
                            fill: ["rgba(113,113,113,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['405px', '873px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(113,113,113,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text-seis2',
                            type: 'image',
                            rect: ['432px', '870px', '280px', '236px', 'auto', 'auto'],
                            opacity: '0.8',
                            fill: ["rgba(0,0,0,0)",im+"text-seis.png",'0px','0px']
                        },
                        {
                            id: 'logo-plm2',
                            type: 'image',
                            rect: ['635px', '1134px', '80px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo-plm.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '1200px', 'auto', 'auto'],
                            overflow: 'hidden',
                            /*fill: ["rgba(255,255,255,0.749)"]*/
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-uno2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${text-uno2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${badera2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "left",
                            500,
                            500,
                            "linear",
                            "${LIBRO-min}",
                            '-345px',
                            '-82px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${text-dos2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid47",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${text-seis2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${LIBRO-min}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            500,
                            0,
                            "linear",
                            "${LIBRO-min}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${text-cinco2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid68",
                            "scaleX",
                            2750,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${text-uno2}",
                            '121px',
                            '261px'
                        ],
                        [
                            "eid5",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${badera2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${text-uno2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid71",
                            "height",
                            3000,
                            250,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${text-tres2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            1750,
                            250,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-dos2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${text-dos2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "height",
                            2000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '347px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-tres2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${text-tres2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${text-cuatro2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid31",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${text-dos2}",
                            '693px',
                            '533px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-seis2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${text-seis2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-cuatro2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${text-cuatro2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text-cinco2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${text-cinco2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${logo-plm2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${badera2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            2750,
                            250,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${LIBRO-min}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            1750,
                            250,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${logo-plm2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${logo-plm2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contacto_edgeActions.js");
})("EDGE-13597487");
