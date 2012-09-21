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

		stylus : {
			compile : {
				options : {
					'include css' : true,
					'paths' : [
						'public/stylesheets',
						'public/stylesheets/lib'
					]
				},
				files : {
					'public/stylesheets/yarder.css' : 'public/stylesheets/style.styl'
				}
			}
		},

		stylusWatchFiles : [
			'public/stylesheets/style.styl'
		],

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
					'public/javascripts/templates.js',
					'public/javascripts/views.js',
					'public/javascripts/collections.js',
					'public/javascripts/models.js',
					'public/javascripts/start.js'
				],
				dest : 'public/javascripts/yarder.app.js'
			}
		},

		jade : {
			templates : {
				src : ['public/javascripts/templates/*.jade'],
				dest : 'public/javascripts/templates',
				options : {
					client : false,
					runtime : false
				}
			}
		},

		handlebars : {
			compile : {
				options : {
					namespace : 'Yarder.Templates',
					wrapped : true,
					processName : function (filename) {
						return filename.replace(/^.*[\\\/]/, '').replace('.html', '');
					}
				},
				files : {
					'public/javascripts/templates.js' : ['public/javascripts/templates/*.html']
				}
			}
		},

		min : {
			dist : {
				src : ['<banner>', 'public/javascripts/yarder.app.js'],
				dest : 'public/javascripts/yarder.app.min.js'
			}
		},

		watch : {
			files : [
				'<config:stylusWatchFiles>',
				'<config:jade.templates.src>',
				'<config:lint.files>'
			],
			tasks : 'default'
		}
	});

	grunt.loadNpmTasks('grunt-stylus');
	grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('default', 'lint stylus concat jade handlebars min');

}
