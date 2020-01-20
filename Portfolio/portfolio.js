/*
1)Create Paintbrush, About, and Contact modelsX
2)Rotation on hover placed in respective divsX
3)Display portfolio
4)Display about Me
5)Display Constact Page
6)We in it now
7)Get a Job
*/

//create paint brush
const pBrush = new Zdog.Illustration({
    element: '#paintBrush',
    zoom: 5,
    dragRotate: true,
});
const botHandle = new Zdog.Shape({
    addTo:pBrush,
    path: [
        { x:   0, y: 35 },
        { x:  5, y: 0 },
        { x: -5, y: 0 },
      ],
    stroke: 2,
    fill:true,
    color: '#5f6caf'
});
const topHandle = new Zdog.Shape({
    addTo:pBrush,
    path: [
        { x:   0, y: -10 },
        { x:  5, y: 0 },
        { x: -5, y: 0 },
      ],
    stroke: 2,
    fill:true,
    color: '#5f6caf'
});
const semicircle = new Zdog.Shape({
    addTo: pBrush,
    path: [
        { x: -5, y: -20 },   // start
        { arc: [
          { x:  -5, y: -10}, // corner
          { x:  0, y:  -10 }, // end point
        ]},
        { arc: [ // start next arc from last end point
          { x:  5, y: -10}, // corner
          { x:  5, y: -20 }, // end point
        ]},
      ],
    color: '#ffb677',
    stroke: 2,
    fill: true,
  });
  const topBrush = new Zdog.Shape({
    addTo: pBrush,
    path: [
        { x:   0, y: -40 },
        { x:  5, y: -20 },
        { x: -5, y: -20 },
      ],
    stroke: 2,
    fill:true,
    color: '#ff8364'
});

//create i
const aboutI = new Zdog.Illustration({
    element: '#about',
    zoom:4,
    dragRotate: true
})
const line = new Zdog.Shape({
    addTo: aboutI,
    path: [
      { x:   -20, y: 35 },
      { x:  -20, y: 30 },
      { x: -10, y: 30 },
      { x:   -10, y: -10 },
      { x:   -20, y: -10 },
      { x:   -20, y: -15 },
      { x:   20, y: -15 },
      { x:   20, y: -10 },
      { x:   10, y: -10 },
      { x:   10, y: 30 },
      { x:   20, y: 30 },
      { x:   20, y: 35 },

    ],
  stroke: 2,
  fill:true,
  color: '#5f6caf'
})
const dot = new Zdog.Shape({
  addTo: aboutI,
  path: [
    { x:   -10, y: -20 },
    { x:   -10, y: -30 },
    { x:   10, y: -30 },
    { x:   10, y: -20 },
    
    
  ],
stroke: 2,
fill:true,
color: '#ff8364'
})

//create scroll icon
const scroll = new Zdog.Illustration({
    element: '#contact',
    zoom: 1,
    dragRotate: true
})
const square = new Zdog.Shape({
    addTo: scroll,
    path: [
      { x: -35, y: -35, z: -10 },   // start
      { arc: [
        { x:  -35, y: -35, z: 10}, // corner
        { x:  -35, y:  -30, z: 10 }, // end point
      ]},
      { x: -35, y: 20, z: -10 },
      { arc: [ // start next arc from last end point
        { x:  -35, y: 25, z: -10}, // corner
        { x:  -35, y: 25, z: 10 }, // end point
      ]},
      { x: 35, y: 25, z: 10},
      { arc: [ // start next arc from last end point
        { x:  35, y: 25, z: -10}, // corner
        { x:  35, y: 20, z: -10 }, // end point
      ]},
      { x: 35, y: -30, z: 10},
      { arc: [
        { x:  35, y: -35, z: 10}, // corner
        { x:  35, y:  -35, z: -10 }, // end point
      ]},
    ],
  color: '#ffb677',
  stroke: 2,
  fill: true,
})
const text = new Zdog.Shape({
  addTo: scroll,
  path: [
    { x: -30, y: -30, z: 10 },
    { x: 30, y: -30, z: 10 },
  ],
color: '#000000',
stroke: 2,
fill: true,
});
text.copy({
  translate: {y: 10, z: -2}
});
text.copy({
  translate: {y: 15, z: -3}
});
text.copy({
  translate: {y: 20, z: -4}
});
text.copy({
  translate: {y: 25, z: -5}
});
text.copy({
  translate: {y: 30, z: -8}
});
text.copy({
  translate: {y: 35, z: -9}
});




function animate(){
    pBrush.rotate.y +=.05;
    aboutI.rotate.y +=.05;
    scroll.rotate.y +=.05;
    
    
    
    pBrush.updateRenderGraph();
    aboutI.updateRenderGraph();
    scroll.updateRenderGraph();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);