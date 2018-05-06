{"changed":true,"filter":false,"title":"make_it_modular.js","tooltip":"/make_it_modular.js","value":"// JavaScript File\nconst filter_module = require('./export_module'); //not a native module\nconst directory = process.argv[2];\nconst extension = process.argv[3];\n\nfilter_module(directory, extension, (err, filteredList) => {\n    if (err) return console.error(err);\n    filteredList.forEach(file => {\n        console.log(file);\n    });\n});","undoManager":{"mark":91,"position":100,"stack":[[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["m"],"id":6},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["o"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["d"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["u"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["l"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"],"id":7},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["x"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["p"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["_"]}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"remove","lines":["_"],"id":8},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["p"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["x"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["e"]}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":[" "],"id":9},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":[" "],"id":10},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["e"],"id":11},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["q"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["u"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["i"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["r"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":24},"action":"insert","lines":["()"],"id":12}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["."],"id":13},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["/"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["e"],"id":14},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["x"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["p"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["o"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["r"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["_"],"id":15},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["o"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["d"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["u"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["l"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["m"],"id":16}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["?"],"id":17}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["?"],"id":18}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["'"],"id":19}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":25},"action":"insert","lines":["''"],"id":20}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"remove","lines":["'"],"id":21}],[{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":[";"],"id":22}],[{"start":{"row":1,"column":42},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["c"],"id":24},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["n"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["s"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":[" "],"id":25},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["d"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["i"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["r"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["c"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["t"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["o"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["r"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["y"]}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":[" "],"id":26},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":[" "],"id":27},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["p"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["r"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["o"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["c"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["e"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["s"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["s"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["."]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["r"],"id":28},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["g"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["v"]}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":32},"action":"insert","lines":["[]"],"id":29}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["2"],"id":30}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":[";"],"id":31}],[{"start":{"row":3,"column":34},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["c"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["o"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["n"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["s"]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":[" "],"id":33},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["e"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["x"]}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["p"],"id":34},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["t"],"id":35},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["p"]}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["t"],"id":36},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["n"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["s"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["i"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["o"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":[" "],"id":37},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":[" "],"id":38},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["p"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["r"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["o"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["c"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["e"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["s"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["."],"id":39},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["a"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["r"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["g"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["v"]}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":32},"action":"insert","lines":["[]"],"id":40}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["3"],"id":41}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":[";"],"id":42}],[{"start":{"row":4,"column":1},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":43}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":[";"],"id":44}],[{"start":{"row":5,"column":34},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["m"],"id":46},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["o"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["d"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["u"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["l"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":8},"action":"insert","lines":["()"],"id":47}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["d"],"id":48},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["i"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["r"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["e"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["c"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["t"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["o"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["r"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["y"]}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[","],"id":49}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":[" "],"id":50},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["e"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["x"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["p"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["t"],"id":51},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["p"]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["t"],"id":52},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["e"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["n"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["s"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":["i"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":["o"]},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":[" "],"id":53}],[{"start":{"row":7,"column":28},"end":{"row":7,"column":30},"action":"insert","lines":["()"],"id":54}],[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["e"],"id":55},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["r"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["r"]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":[","]}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":[" "],"id":56}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["f"],"id":57},{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["i"]},{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["l"]},{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["t"]},{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["e"]},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["r"]},{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["e"]},{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["d"]}],[{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":["L"],"id":58},{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["i"]},{"start":{"row":7,"column":44},"end":{"row":7,"column":45},"action":"insert","lines":["s"]},{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"remove","lines":[")"],"id":59}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"insert","lines":[" "],"id":60}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"insert","lines":["="],"id":61},{"start":{"row":7,"column":49},"end":{"row":7,"column":50},"action":"insert","lines":[">"]}],[{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"insert","lines":[" "],"id":62},{"start":{"row":7,"column":51},"end":{"row":7,"column":52},"action":"insert","lines":["{"]}],[{"start":{"row":7,"column":52},"end":{"row":9,"column":1},"action":"insert","lines":["","    ","}"],"id":63}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["i"],"id":64},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":[" "],"id":65}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":9},"action":"insert","lines":["()"],"id":66}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["e"],"id":67},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["r"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":[" "],"id":68},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["r"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["e"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["t"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["u"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["r"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":[" "],"id":69},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["c"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["o"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["n"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["s"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["o"]},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["l"]},{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["e"]},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["."]}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["e"],"id":70},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["r"]},{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":33},"action":"insert","lines":["()"],"id":71}],[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["e"],"id":72},{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["r"]},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":[";"],"id":73}],[{"start":{"row":8,"column":37},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":74},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["f"],"id":75},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["i"]},{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["l"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["t"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["e"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["r"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["e"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["L"],"id":76},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["i"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["s"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["."],"id":77},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["f"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["o"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["r"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["E"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["a"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["c"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["h"]}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":26},"action":"insert","lines":["()"],"id":78}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["f"],"id":79},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["i"]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["l"]},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":[" "],"id":80},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["="]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":[">"]}],[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":[" "],"id":81}],[{"start":{"row":9,"column":33},"end":{"row":9,"column":35},"action":"insert","lines":["{}"],"id":82}],[{"start":{"row":9,"column":34},"end":{"row":11,"column":4},"action":"insert","lines":["","        ","    "],"id":83}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["c"],"id":84},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["o"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["n"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["s"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["o"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["l"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["e"]},{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["."]},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["l"]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["o"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":21},"action":"insert","lines":["()"],"id":85}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["f"],"id":86},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["i"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["l"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":[";"],"id":87}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["f"],"id":88},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["i"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["l"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["t"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["e"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["_"],"id":89}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["f"],"id":90},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["i"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["l"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["t"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["e"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["r"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["_"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":[";"],"id":91}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":[","],"id":92}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["o"],"id":93},{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["r"]}],[{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":[";"],"id":94}],[{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":[")"],"id":95}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"insert","lines":[";"],"id":96}],[{"start":{"row":1,"column":49},"end":{"row":1,"column":50},"action":"insert","lines":[" "],"id":97},{"start":{"row":1,"column":50},"end":{"row":1,"column":51},"action":"insert","lines":["/"]},{"start":{"row":1,"column":51},"end":{"row":1,"column":52},"action":"insert","lines":["/"]},{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"insert","lines":["n"]},{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"insert","lines":["o"]},{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":55},"end":{"row":1,"column":56},"action":"insert","lines":[" "],"id":98},{"start":{"row":1,"column":56},"end":{"row":1,"column":57},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"insert","lines":[" "],"id":99},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["t"]},{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["a"]},{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["v"]},{"start":{"row":1,"column":61},"end":{"row":1,"column":62},"action":"insert","lines":["i"]},{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"insert","lines":["v"]},{"start":{"row":1,"column":63},"end":{"row":1,"column":64},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":64},"end":{"row":1,"column":65},"action":"insert","lines":[" "],"id":100},{"start":{"row":1,"column":65},"end":{"row":1,"column":66},"action":"insert","lines":["m"]},{"start":{"row":1,"column":66},"end":{"row":1,"column":67},"action":"insert","lines":["o"]},{"start":{"row":1,"column":67},"end":{"row":1,"column":68},"action":"insert","lines":["d"]},{"start":{"row":1,"column":68},"end":{"row":1,"column":69},"action":"insert","lines":["u"]}],[{"start":{"row":1,"column":69},"end":{"row":1,"column":70},"action":"insert","lines":["l"],"id":101},{"start":{"row":1,"column":70},"end":{"row":1,"column":71},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"remove","lines":["v"],"id":102},{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"remove","lines":["a"]},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"remove","lines":["t"]}],[{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["n"],"id":103},{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["a"]},{"start":{"row":1,"column":60},"end":{"row":1,"column":61},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":104}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":105}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1525593693485}