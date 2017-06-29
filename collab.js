var Recommender = require('likely');
var inputMatrix = [ [ 0, 0, 0, 0 ],
                    [ -1, 1, 1, -1 ],
                    [ -1, 1, 1, -1 ],
                    [ -1, 1, 1, -1 ],
                    [ -1, 1, 1, -1 ],
                    [ -1,  -1, 1, -1 ]
                  ];
inputMatrix.push([1,-1,1,-1])

var rowLabels =     ['A', 'B', 'C','D','E','F','G'];
var colLabels = ['Fukuoka', 'Osaka', 'Saitama', 'Fukushima'];

var Model = Recommender.buildModel(inputMatrix, rowLabels, colLabels);

var recommendations = Model.recommendations('A');

console.log(recommendations)
