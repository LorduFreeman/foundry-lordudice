
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "LCD - Dark Deeds", name: "LCD - Dark Deeds" }, "default");

   dice3d.addDicePreset({
     type: "d20",
     labels: [
       "†",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "17",
       "18",
       "19",
       "20"
     ],
     system: "LCD - Dark Deeds"
   },"d20");

   dice3d.addDicePreset({
     type: "d2",
	      labels: [
       "†",
       "☀"
     ],
     system: "LCD - Dark Deeds"
	 
   });

   dice3d.addDicePreset({
     type: "d4",
	      labels: [
       "†",
       "2",
       "3",
       "4"
     ],
     system: "LCD - Dark Deeds"
	 
   },"d4");

   dice3d.addDicePreset({
     type: "d6",
	      labels: [
       "†",
       "2",
       "3",
       "4",
       "5",
       "6"
     ],
     system: "LCD - Dark Deeds"
   },"d6");

   dice3d.addDicePreset({
     type: "df",
	      labels: [
       "†",
       "",
       "☀"
     ],
     system: "LCD - Dark Deeds",
	 fontScale: 1.3
   },"df");
   
   dice3d.addDicePreset({
     type: "d8",
	      labels: [
       "†",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8"
     ],
     system: "LCD - Dark Deeds"
   },"d8");
   
   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "†",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10"
     ],
     system: "LCD - Dark Deeds" 
   },"d10");

   dice3d.addDicePreset({
     type: "d12",
	      labels: [
       "†",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12"
     ],
     system: "LCD - Dark Deeds"
   },"d12");
   
   dice3d.addDicePreset({
     type: "d100",
	      labels: [
       "10",
       "20",
       "30",
       "40",
       "50",
       "60",
       "70",
       "80",
       "90",
       "00",
     ],
     system: "LCD - Dark Deeds"
   },"d10");
   
   
  dice3d.addTexture("copper", {
    name: "Dark Copper",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/rough.png",
	bump: "modules/lordudice/graphics/dice/rough-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Dark Deeds colors',
        description: "Dark Tarnished Copper",
        category: "LCD - Dark Deeds",
        background: "#1a1a1a",
		foreground: '#800000',
		outline: '#330000',
        edge: '#1a1a1a',
		texture: 'copper',
		material: 'metal',
		fontScale: {
          "d100":0.8,
		  "d20": 0.9,
          "d12":1.0,
		  "d10": 0.9,
		  "d8": 0.9,
          "d6":1.2,
          "d2":1.3
        },
        font:"Metamorphous"
      },"default");
    });
	
  dice3d.addTexture("pact", {
    name: "Forgotten Pact",
    composite: "soft-light",
    source: "modules/lordudice/graphics/dice/pact.png",
	bump: "modules/lordudice/graphics/dice/pact-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Dark Desires',
        description: "Forgotten Pact",
        category: "LCD - Dark Deeds",
        background: "#c8c8c8",
		foreground: '#4e0000',
		outline: '#990000',
        edge: '#350000',
		texture: 'pact',
		material: 'plastic',
		fontScale: {
          "d100":0.8,
		  "d20": 0.9,
          "d12":1.0,
		  "d10": 0.9,
		  "d8": 0.9,
          "d6":1.2,
          "d2":1.3
        },
        font:"Metamorphous"
      },"default");
    });
  dice3d.addTexture("sun", {
    name: "Worthy Metal",
    composite: "multiply",
    source: "modules/lordudice/graphics/dice/sun.png",
	bump: "modules/lordudice/graphics/dice/sun.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'LCD - Saviours Blessing',
        description: "Saviours Blessing",
        category: "LCD - Dark Deeds",
        background: "#fff1bb",
		foreground: '#ff870d',
		outline: '#ff6b00',
        edge: '#ffbf00',
		texture: 'sun',
		material: 'metal',
		fontScale: {
          "d100":0.8,
		  "d20": 0.9,
          "d12":1.0,
		  "d10": 0.9,
		  "d8": 0.9,
          "d6":1.2,
          "d2":1.3
        },
        font:"Metamorphous"
      },"default");
    });
	
});