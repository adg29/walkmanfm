define( ['backbone'],
        function( Backbone ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var VibemakerModel = Backbone.Model.extend( {
	    	urlRoot : '/vibemakers',
		initialize: function(attributes) {
			console.log('initalizel VibemakerModel');
			console.log(attributes);
		}
            } );

            return VibemakerModel;
        } );
