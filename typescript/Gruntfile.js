// Path variables
// The assets and distribution paths
var assets_path = "app",
    dist_path = "dist",
    tmp_path = "tmp";
// The `paths` object holds the source and distribution paths of all the directories
// Edit once here and it will work everywhere
// Most tasks only require the directory by default, but some need files.
// Use paths.type.src model for directories, and paths.type.src_file model for files
var paths = {
  styles: {
    src : assets_path+'/styles',
    dist : dist_path+'/css',
    srcfiles : [assets_path+'/styles/**/*.scss', assets_path+'/styles/**/*.sass'],
    srcmainfile: assets_path+'/styles/app.scss',
    distmainfile: dist_path+'/css/app.css' //currently broken
  },
  images: {
    src: assets_path+'/images',
    dist: dist_path+'/img',
    srcfiles: [assets_path+'/images/**/*.jpg', assets_path+'/images/**/*.png', assets_path+'/images/**/*.gif', assets_path+'/images/**/*.svg'],
  },
  html: {
    src: assets_path + '/*.jade',
    dist: dist_path,
  },
  scripts: {
    src: assets_path+'/**/*.ts',
    dist: dist_path,
  },
  server: {
    src: assets_path+'/server',
    dist: dist_path,
    srcfiles: assets_path+'/server/**/*',
  }
};
module.exports = function(grunt) {
  var styles_dist_mainfile = paths.styles.distmainfile;

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [ dist_path + '/**/*' ],

    jade: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          "dist/index.html": paths.html.src
        }
      }
    },

    open: {
      all: {
        path: './dist/index.html'
      }
    },
    
    banner: '<%= pkg.prettyName %> (version <%= pkg.version %>) is <%= pkg.description %> \n' +
      'Copyright (C) <%= grunt.template.today("yyyy") %> <%=  pkg.author %> \n' +
      ' \n' +
      'This program is free software: you can redistribute it and/or modify \n' +
      'it under the terms of the GNU General Public License as published by \n' +
      'the Free Software Foundation, either version 2 of the License, or \n' +
      '(at your option) any later version. \n' +
      ' \n' +
      'This program is distributed in the hope that it will be useful, \n' +
      'but WITHOUT ANY WARRANTY; without even the implied warranty of \n' +
      'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the \n' +
      'GNU General Public License for more details. \n' +
      ' \n' +
      'You should have received a copy of the GNU General Public License \n' +
      'along with this program.  If not, see <http://www.gnu.org/licenses/>.',

    usebanner: {
      html: {
        options: {
          position: 'top',
          banner: '<!-- <%= banner %> -->',
          linebreak: true
        },
        files: {
          src: [ dist_path + '/**/*.html' ]
        }
      },
      scripts: {
        options: {
          position: 'top',
          banner: '/* <%= banner %> */',
          linebreak: true
        },
        files: {
          src: [ dist_path + '/**/*.js', dist_path + '/**/*.css', '!'+dist_path+'**/*.map' ]
        }
      }
    },
    
    shell: {
      target: {
        command: 'mkdir -p dist && $(npm bin)/tsc --out dist/app.js app/app.ts'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      html: {
        files: paths.html.src,
        tasks: ['jade']
      },
      scripts: {
        files: paths.scripts.src,
        tasks: ['scripts']
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'jade',
    'scripts',
    'usebanner:html',
    'usebanner:scripts'
  ]);
  grunt.registerTask('scripts', ['shell']);
  grunt.registerTask('default', ['build','serve']);
  grunt.registerTask('serve', [
    'build',
    'open',
    'watch'
  ]);
  grunt.registerTask('test', ['test']);
}
