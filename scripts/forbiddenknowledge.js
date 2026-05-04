
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "LCD - Forbidden Knowledge", name: "🐸 Forbidden Knowledge" }, "default");
   
  dice3d.addTexture("skincraft", {
    name: "🐸 Vile Vellum",
    composite: "darken",
    source: "modules/lordudice/graphics/dice/skin.webp",
	bump: "modules/lordudice/graphics/dice/skin-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Dark Words Colours',
        description: "🐸 Dark Words",
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
    name: "🐸 Dark Ooze",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/madness.webp",
	bump: "modules/lordudice/graphics/dice/madness-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Madness colors',
        description: "🐸 Liquid Horrors",
        category: "LCD - Forbidden Knowledge",
        background: "#990048",
		foreground: '#adacd5',
		outline: '#cc0099',
        edge: '#4d004d',
		texture: 'mindbreak',
		material: 'metal',
		font:"Metal Mania"
      },"default");
    });

  dice3d.addTexture("vines", {
    name: "🐸 Writhing Vines",
    composite: "overlay",
    source: "modules/lordudice/graphics/dice/vines.webp",
	bump: "modules/lordudice/graphics/dice/vines-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Writhing Vines colors',
        description: "🐸 Unnatural Growth",
        category: "LCD - Forbidden Knowledge",
        background: "#1e3000",
		foreground: '#c9b8ad',
		outline: '#666600',
        edge: '#0e1600',
		texture: 'vines',
		material: 'wood',
		font:"Eater"
      },"default");
    });

  dice3d.addTexture("brimstone", {
    name: "🐸 Brimstone",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/brimstone.webp",
	bump: "modules/lordudice/graphics/dice/brimstone-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Path to Ruin colors',
        description: "🐸 Old Brimstone",
        category: "LCD - Forbidden Knowledge",
        background: "#f23c00",
		foreground: '#e1b3ac',
		outline: '#994d00',
        edge: '#5a0000',
		texture: 'brimstone',
		material: 'metal',
		font:"Amarante"
      },"default");
    });

  dice3d.addTexture("pyramidwall", {
    name: "🐸 Desert Walls",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/pyramidwall.webp",
	bump: "modules/lordudice/graphics/dice/pyramidwall-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Ancient Tombs colors',
        description: "🐸 Ancient Walls",
        category: "LCD - Forbidden Knowledge",
        background: "#68432a",
		foreground: '#ffffff',
		outline: '#000000',
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
    name: "🐸 Cursed Fangs",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/cursed.webp",
	bump: "modules/lordudice/graphics/dice/cursed-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Cursed Visions colors',
        description: "🐸 Cursed Visions",
        category: "LCD - Forbidden Knowledge",
        background: "#7d00a6",
		foreground: '#8600b3',
		outline: '#43005a',
        edge: '#453629',
		texture: 'cursed',
		material: 'metal',
		font:"Almendra"
      },"default");
    });

  dice3d.addTexture("hammered", {
    name: "🐸 Hammered Metal",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/copper.webp",
	bump: "modules/lordudice/graphics/dice/copper-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Hammered Glory colors',
        description: "🐸 Hammered Glory",
        category: "LCD - Forbidden Knowledge",
        background: "#ac9c80",
		foreground: '#ebc2a2',
		outline: '#5e3618',
        edge: '#5e5e5e',
		texture: 'hammered',
		material: 'metal',
		font:"Metamorphous",
		fontScale: {
          "d100": 0.8,
		  "d20": 0.9,
          "d12":1.2,
		  "d10": 0.9,
		  "d8": 0.8,
          "d6":1.0,
		  "d4":0.9,
          "d2":1.0
        }
      },"default");
    });

  dice3d.addTexture("stone", {
    name: "🐸 Rugged Stone",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/stone.webp",
	bump: "modules/lordudice/graphics/dice/stone-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Rugged Path colors',
        description: "🐸 Rugged Path",
        category: "LCD - Forbidden Knowledge",
        background: "#8a8aa3",
		foreground: '#e6e6e6',
		outline: '#58586f',
        edge: '#8c8c8c',
		texture: 'stone',
		material: 'stone',
		font:"Metamorphous",
		fontScale: {
          "d100": 0.8,
		  "d20": 0.9,
          "d12":1.2,
		  "d10": 0.9,
		  "d8": 0.8,
          "d6":1.0,
		  "d4":0.9,
          "d2":1.0
        }
      },"default");
    });

  dice3d.addTexture("icy", {
    name: "🐸 Streaks",
    composite: "overlay",
    source: "modules/lordudice/graphics/dice/icy.webp",
	bump: "modules/lordudice/graphics/dice/icy-bump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Streaks colors',
        description: "🐸 Streaks",
        category: "LCD - Forbidden Knowledge",
        background: "#033529",
		foreground: '#ffffff',
		outline: '#0c130d',
        edge: '#8c8c8c',
		texture: 'icy',
		material: 'metal',
		font:"Metal Mania"
      },"default");
    });

});