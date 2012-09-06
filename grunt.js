module.exports = function (grunt) {

	grunt.initConfig({
		pkg : '<json:package.json>',

		meta : {
			banner : '// <%= pkg.name %>, v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
					 '// https://github.com/ryexley/yarder\n'
		},

		lint : {
			files : [
				'public/javascripts/yarder.js',
				'public/javascripts/api.js',
				'public/javascripts/routers.js',
				'public/javascripts/views.js',
				'public/javascripts/collections.js',
				'public/javascripts/models.js',
				'public/javascripts/start.js'
			]
		},

		jshint : {
			options : {
				curly : true,
				eqeqeq : true,
				immed : false,
				latedef : true,
				newcap : true,
				noarg : true,
				sub : true,
				undef : true,
				boss : true,
				eqnull : true,
				browser : true
			},
			globals : {
				Yarder : true,
				jQuery : true,
				Backbone : true,
				Handlebars : true,
				moment : true,
				console : true,
				_ : true,
				$ : true,
			}
		},

		concat : {
			dist : {
				src : [
					'public/javascripts/lib/json2.js',
					'public/javascripts/lib/moment.js',
					'public/javascripts/lib/bootstrap.min.js',
					'public/javascripts/lib/underscore-min.js',
					'public/javascripts/lib/backbone-min.js',
					'public/javascripts/lib/handlebars.js',
					'public/javascripts/yarder.js',
					'public/javascripts/api.js',
					'public/javascripts/routers.js',
					'public/javascripts/views.js',
					'public/javascripts/collections.js',
					'public/javascripts/models.js',
					'public/javascripts/start.js'
				],
				dest : 'public/javascripts/yarder.app.js'
			}
		},

		min : {
			dist : {
				src : ['<banner>', 'public/javascripts/yarder.app.js'],
				dest : 'public/javascripts/yarder.app.min.js'
			}
		}
	});

	grunt.registerTask('default', 'lint concat min');

}
