({
    optimize: 'none', // Uncomment this property to disable the uglify of the libraries
    baseUrl: '',
    paths: {
            'd3': 'd3.v3.min' ,
            'liquidFillGuage': 'liquidFillGuage',
            'jquery': 'jquery-3.5.1.min',
			'cvcguage': 'CVCGuage' 		
	}, 
		
	wrap: {
        start: "(function(root){\n\nvar define = root.define;\n\n",
        end: "\n\n}(typeof __visualize__ != 'undefined' ? __visualize__ : (typeof __jrio__ != 'undefined' ? __jrio__ : window)));"
    },
    
    name: "cvcguage",
    out: "CVCGuage.min.js"
})
