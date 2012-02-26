define( ['jquery', 'backbone', 'underscore', 'models/ResultCollection', 'text!templates/listview.html'],
        function( $, Backbone, _, ResultCollection, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var VibemakerWelcome = Backbone.View.extend( {
                el: $( "#vibemaker_info" ),

                initialize: function() {
                    this.model = new VibemakerModel;
                    _.bindAll(this, "renderList");
                    this.collection.bind( "reset", this.renderWelcome );
                },

                renderWelcome: function() {
		    console.log('renderWelcome');
                    var compiled_template = _.template( listTemplate ),
                        m_vibemaker = this.model,
                        $el = $(this.el);

                    mobileSearch.utils.loadPrompt( "Loading profile..." );
                    mobileSearch.utils.toggleNavigation( true );
                    //$el.html( compiled_template( { results: collection.models } ) );

		    /*
                    setTimeout( function() {
                       $el.listview('refresh');
                    }, 0 );
		    */

                }
            } );

            return VibemakerWelcome;
        });
