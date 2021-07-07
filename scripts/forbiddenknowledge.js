
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "LCD - Forbidden Knowledge", name: "LCD - Forbidden Knowledge" }, "default");
   
  dice3d.addTexture("skincraft", {
    name: "Vile Vellum",
    composite: "darken",
    source: "modules/lordudice/graphics/dice/skin.png",
	bump: "modules/lordudice/graphics/dice/skin-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Dark Words Colours',
        description: "Dark Words",
        category: "LCD - Forbidden Knowledge",
        background: "#3b3c50",
		foreground: '#949494',
		outline: '#260000',
        edge: '#1a1b24',
		texture: 'skincraft',
		material: 'metal',
		fontScale: {
          "d100":1.1,
		  "d20": 1.1,
          "d12":1.2,
		  "d10": 1.1,
		  "d8": 1.2,
          "d6":1.5,
		  "d4":1.3,
          "d2":1.3
        },
        font:"Jim Nightshade"
      },"default");
    });

  dice3d.addTexture("mindbreak", {
    name: "Dark Ooze",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/madness.png",
	bump: "modules/lordudice/graphics/dice/madness-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Madness colors',
        description: "Liquid Horrors",
        category: "LCD - Forbidden Knowledge",
        background: "#330033",
		foreground: '#adacd5',
		outline: '#cc0099',
        edge: '#4d004d',
		texture: 'mindbreak',
		material: 'metal',
		font:"Metal Mania"
      },"default");
    });

  dice3d.addTexture("vines", {
    name: "Writhing Vines",
    composite: "overlay",
    source: "modules/lordudice/graphics/dice/vines.png",
	bump: "modules/lordudice/graphics/dice/vines.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Writhing Vines colors',
        description: "Unnatural Growth",
        category: "LCD - Forbidden Knowledge",
        background: "#1e3000",
		foreground: '#c9b8ad',
		outline: '#666600',
        edge: '#0e1600',
		texture: 'vines',
		material: 'plastic',
		font:"Eater"
      },"default");
    });

  dice3d.addTexture("brimstone", {
    name: "Brimstone",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/brimstone.png",
	bump: "modules/lordudice/graphics/dice/brimstone-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Path to Ruin colors',
        description: "Old Brimstone",
        category: "LCD - Forbidden Knowledge",
        background: "#ff5c26",
		foreground: '#e1b3ac',
		outline: '#ff8000',
        edge: '#5a0000',
		texture: 'brimstone',
		material: 'metal',
		font:"Amarante"
      },"default");
    });

  dice3d.addTexture("pyramidwall", {
    name: "Desert Walls",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/pyramidwall.png",
	bump: "modules/lordudice/graphics/dice/pyramidwall-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Ancient Tombs colors',
        description: "Ancient Walls",
        category: "LCD - Forbidden Knowledge",
        background: "#b07248",
		foreground: '#2f150c',
		outline: '#432020',
        edge: '#453629',
		texture: 'pyramidwall',
		material: 'metal',
		font:"IM Fell English",
		fontScale: {
          "d100":0.9,
		  "d20": 1.1,
          "d12":1.2,
		  "d10": 1.1,
		  "d8": 1.0,
          "d6":1.5,
		  "d4":1.3,
          "d2":1.3
        }
      },"default");
    });

  dice3d.addTexture("cursed", {
    name: "Cursed Fangs",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/cursed.png",
	bump: "modules/lordudice/graphics/dice/cursed-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Cursed Visions colors',
        description: "Cursed Visions",
        category: "LCD - Forbidden Knowledge",
        background: "#300040",
		foreground: '#8600b3',
		outline: '#a300d9',
        edge: '#453629',
		texture: 'cursed',
		material: 'metal',
		font:"Almendra"
      },"default");
    });

  dice3d.addTexture("hammered", {
    name: "Hammered Metal",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/copper.png",
	bump: "modules/lordudice/graphics/dice/copper-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Hammered Glory colors',
        description: "Hammered Glory",
        category: "LCD - Forbidden Knowledge",
        background: "#ac9c80",
		foreground: '#e2a678',
		outline: '#864e23',
        edge: '#5e5e5e',
		texture: 'hammered',
		material: 'metal',
		font:"Metamorphous"
      },"default");
    });

  dice3d.addTexture("stone", {
    name: "Rugged Stone",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/stone.png",
	bump: "modules/lordudice/graphics/dice/stone-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Rugged Path colors',
        description: "Rugged Path",
        category: "LCD - Forbidden Knowledge",
        background: "#c3c3d0",
		foreground: '#ffffff',
		outline: '#6d4f3b',
        edge: '#8c8c8c',
		texture: 'stone',
		material: 'plastic',
		font:"Metamorphous"
      },"default");
    });

  dice3d.addTexture("icy", {
    name: "Streaks",
    composite: "overlay",
    source: "modules/lordudice/graphics/dice/icy.png",
	bump: "modules/lordudice/graphics/dice/icy-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Streaks colors',
        description: "Streaks",
        category: "LCD - Forbidden Knowledge",
        background: "#033529",
		foreground: '#ffffff',
		outline: '#1f3322',
        edge: '#8c8c8c',
		texture: 'icy',
		material: 'metal',
		font:"Metal Mania"
      },"default");
    });

});