export const orderConfig={
  code:[{name:'AA',value:0},
  {name: 'ENA',value:'1'},
  {name: 'BWA',value:'2'},
  {name: 'VEA',value:'3'},
  {name: 'VCA',value:'4'},
  {name: 'VWA',value:'5'}],
  orderStatus:[
    {name:'Order Acceptance',value:0},
    {name:'Order Drawing Completed',value:1},
    {name:'Order LaserCut Completed',value:2},
    {name:'Order Fold Completed',value:3},
    {name:'Order MigWeld Completed',value:4},
    {name:'Order TigWeld Completed',value:5},
    {name:'Order Fit Completed',value:6},
    {name:'Order PreQc Completed',value:7},
    {name:'Order Paint Completed',value:8},
    {name:'Order FinalQc Completed',value:9},
    {name:'Order Dispatch Completed',value:10},
    {name:'Order  Done',value:11},
  ],
  material:[
    {name:'Check Plat',value:0},
    {name:'Flat Plat',value:1},
    {name:'Propellor Plat',value:2},
    {name:'Zinc Plat',value:3},
    {name:'Mild Steel',value:4},
  ],
  thick:[
    {name:'Base Thick 1.6mm',value:0},
    {name:'Middle Thick 2.0mm',value:1},
    {name:'Heavy Thick 2.5mm',value:2},
    {name:'Super Thick 5mm',value:3},
    {name:'Customer Thick over 5 mm',value:4},
  ],
  category:[
    {name:'FIC',value:0},
    {name:'STS',value:1},
    {name:'UTC',value:2},
    {name:'Canopy2',value:3},
    {name:'Canopy3',value:4},
    {name:'JackOff2',value:5},
    {name:'JackOff3',value:6},
    {name:'ServiceBody2',value:7},
    {name:'ServiceBody3',value:8},

  ],
  drawType:[
    {name:'None',value:0},
    {name:'Internal',value:1},
    {name:'External',value:2}, 
  ],
  sortOptions : [
    {name: 'Due Date Asc',value:'dueDateAsc'},
    {name: 'Due Date Desc',value:'dueDateDesc'}]

}