const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(element, index) {
  var newElement = Object.assign({}, element)
  if (knownDecepticons.includes(element.name)) {
    newElement.alliance = 'decepticon';
  } else {
    newElement.alliance = 'autobot';
  }
  return newElement
});

var coloredZebraStripes = zebraStripes.map(function(element, index) {
  var elementCopy = Object.assign({}, element);
  if (index % 2 == 0) {
    elementCopy.color = 'black';
  } else {
    elementCopy.color = 'white';
  };
  return elementCopy
});
