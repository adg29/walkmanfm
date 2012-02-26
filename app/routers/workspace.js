define( ['jquery', 'backbone'],
        function( $, Backbone ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var Workspace = Backbone.Router.extend( {
                q:'',
                p:1,
                s:'relevance',
                bookmarkMode:false,
                routes: {
		    "login":			      "vibemaker_auth",
		    "auth/:provider":     	      "vibemaker_create", //#auth/foursquare
                    "search/:query":                  "search",      // #search/kiwis
                    "search/:query/s:sort/p:page":    "search",      // #search/kiwis/srelevance/p7
                    "photo/:id":                      "photo",       //#photo/93839
                    "" : "root"                                      //
                },
                vibemaker_auth: function(  ) {
			console.log('vibemaker_AUTH via router');
                        mobileSearch.utils.fetchFoursquareToken(mobileSearch.views.appview);
                },                                
                vibemaker_create: function( ) {
		    console.log( 'create via api' );
                    //mobileSearch.utils.fetchFoursquareToken( 'oauth', mobileSearch.views.appview );
                },                                
                search: function( query, sort, page ) {
                    mobileSearch.utils.dfdQuery( 'search', mobileSearch.views.appview, query, sort, page );
                },
                photo: function ( id ) {
                    mobileSearch.utils.dfdQuery( 'photo', mobileSearch.views.appview, id );
                },
                root: function() {
                    this.bookmarkMode = true;
                    mobileSearch.utils.changePage( "#index", "slide", false, false );
                }
            } );

            return Workspace;
        } );
