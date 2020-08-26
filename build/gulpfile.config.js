var SRC_DIR = './src/';     // 源文件目录  
var DIST_DIR = './';   // 文件处理后存放的目录  
var DIST_FILES = DIST_DIR + '**'; // 目标路径下的所有文件  

var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_files: DIST_FILES, 
    css: {  
        dir: SRC_DIR + 'css',
        src: SRC_DIR + 'css/**/*.css',           // CSS目录：./src/css/  
        dist: DIST_DIR + 'css'                   // CSS文件build后存放的目录：./dist/css  
    },  
    sass: {  
        dir: SRC_DIR + 'sass',
        src: SRC_DIR + 'sass/**/*.{sass,scss}',         // SASS目录：./src/sass/  
        dist: DIST_DIR + 'css'                   // SASS文件生成CSS后存放的目录：./dist/css  
    },  
    js: {  dir: SRC_DIR + 'js',
        src: SRC_DIR + 'js/**/*.js',             // JS目录：./src/js/  
        dist: DIST_DIR + 'js',                   // JS文件build后存放的目录：./dist/js  
        build_name: 'build.js'                   // 合并后的js的文件名  
    },
    scripts: {  dir: SRC_DIR + 'scripts',
        src: SRC_DIR + 'scripts/**/*.js',
        dist: DIST_DIR + 'scripts'            
    },
    img: {  
        dir: SRC_DIR + 'images',
        src: SRC_DIR + 'images/**/*',            // images目录：./src/images/  
        dist: DIST_DIR + 'images'                // images文件build后存放的目录：./dist/images  
    }  
};

module.exports = Config;