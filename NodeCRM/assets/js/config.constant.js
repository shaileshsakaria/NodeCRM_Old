
'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});

app.constant('urlConstant', {

});


app.constant('dataConstant', {
    paginationPageSizes: [10, 25, 50, 75, 100, 200, 300, 400, 500],
    paginationPageSize: 10,
    DataExport: 'DataExport.csv',
    SuccessStatus: "Ok"
});

app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        ////*** Javascript Plugins
        //'modernizr': ['../bower_components/components-modernizr/modernizr.js'],
        //'moment': ['../bower_components/moment/min/moment.min.js'],
        //'spin': '../bower_components/spin.js/spin.js',

        ////*** jQuery Plugins
        //'perfect-scrollbar-plugin': ['../bower_components/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js', '../bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'],
        //'ladda': ['../bower_components/ladda/dist/ladda.min.js', '../bower_components/ladda/dist/ladda-themeless.min.css'],
        //'sweet-alert': ['../bower_components/sweetalert/lib/sweet-alert.min.js', '../bower_components/sweetalert/lib/sweet-alert.css'],
        //'chartjs': '../bower_components/chartjs/Chart.min.js',
        //'jquery-sparkline': '../bower_components/jquery.sparkline.build/dist/jquery.sparkline.min.js',
        //'ckeditor-plugin': '../bower_components/ckeditor/ckeditor.js',
        //'jquery-nestable-plugin': ['../bower_components/jquery-nestable-rtl/jquery.nestable.rtl.js'],

        //'touchspin-plugin': ['../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],

        //*** Controllers
        'DashboardCtrl': 'assets/js/controllers/dashboardCtrl.js',
        'customerCtrl': 'assets/js/controllers/customerCtrl.js',

        // Services
        'customerService': 'assets/js/services/customerService.js',
        'CommonService': 'assets/js/services/CommonService.js',


        //*** Filters
        'htmlToPlaintext': 'assets/js/filters/htmlToPlaintext.js',

    },
    //*** angularJS Modules
    //modules: [{
    //    name: 'angularMoment',
    //    files: ['../bower_components/angular-moment/angular-moment.min.js']
    //},
    //{
    //    name: 'toaster',
    //    files: ['../bower_components/AngularJS-Toaster/toaster.js', '../bower_components/AngularJS-Toaster/toaster.css']
    //},
    //{
    //    name: 'angularBootstrapNavTree',
    //    files: ['../bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js', '../bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css']
    //}, {
    //    name: 'angular-ladda',
    //    files: ['../bower_components/angular-ladda/dist/angular-ladda.min.js']
    //}, {
    //    name: 'ngTable',
    //    files: ['../bower_components/ng-table/dist/ng-table.min.js', '../bower_components/ng-table/dist/ng-table.min.css']
    //}, {
    //    name: 'ui.select',
    //    files: ['../bower_components/angular-ui-select/dist/select.min.js', '../bower_components/angular-ui-select/dist/select.min.css', '../bower_components/select2/dist/css/select2.min.css', '../bower_components/select2-bootstrap-css/select2-bootstrap.min.css', '../bower_components/selectize/dist/css/selectize.bootstrap3.css']
    //}, {
    //    name: 'ui.mask',
    //    files: ['../bower_components/angular-ui-utils/mask.min.js']
    //}, {
    //    name: 'ngImgCrop',
    //    files: ['../bower_components/ngImgCrop/compile/minified/ng-img-crop.js', '../bower_components/ngImgCrop/compile/minified/ng-img-crop.css']
    //}, {
    //    name: 'angularFileUpload',
    //    files: ['../bower_components/angular-file-upload/angular-file-upload.min.js']
    //}, {
    //    name: 'ngAside',
    //    files: ['../bower_components/angular-aside/dist/js/angular-aside.min.js', '../bower_components/angular-aside/dist/css/angular-aside.min.css']
    //}, {
    //    name: 'truncate',
    //    files: ['../bower_components/angular-truncate/src/truncate.js']
    //}, {
    //    name: 'oitozero.ngSweetAlert',
    //    files: ['../bower_components/angular-sweetalert-promised/SweetAlert.min.js']
    //}, {
    //    name: 'monospaced.elastic',
    //    files: ['../bower_components/angular-elastic/elastic.js']
    //}, {
    //    name: 'ngMap',
    //    files: ['../bower_components/ngmap/build/scripts/ng-map.min.js']
    //}, {
    //    name: 'tc.chartjs',
    //    files: ['../bower_components/tc-angular-chartjs/dist/tc-angular-chartjs.min.js']
    //}, {
    //    name: 'flow',
    //    files: ['../bower_components/ng-flow/dist/ng-flow-standalone.min.js']
    //}, {
    //    name: 'uiSwitch',
    //    files: ['../bower_components/angular-ui-switch/angular-ui-switch.min.js', '../bower_components/angular-ui-switch/angular-ui-switch.min.css']
    //}, {
    //    name: 'ckeditor',
    //    files: ['../bower_components/angular-ckeditor/angular-ckeditor.min.js']
    //}, {
    //    name: 'mwl.calendar',
    //    files: [
    //            //'../bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar.js',
    //            '../bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js',
    //            '../bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css']
    //}, {
    //    name: 'ng-nestable',
    //    files: ['../bower_components/ng-nestable/src/angular-nestable.js']
    //}, {
    //    name: 'vAccordion',
    //    files: ['../bower_components/v-accordion/dist/v-accordion.min.js', '../bower_components/v-accordion/dist/v-accordion.min.css']
    //}, {
    //    name: 'xeditable',
    //    files: ['../bower_components/angular-xeditable/dist/js/xeditable.min.js', '../bower_components/angular-xeditable/dist/css/xeditable.css', 'assets/js/config/config-xeditable.js']
    //}, {
    //    name: 'checklist-model',
    //    files: ['../bower_components/checklist-model/checklist-model.js']
    //}, {
    //    name: 'ngFileUpload',
    //    files: ['../bower_components/ng-file-upload/ng-file-upload-shim.js', '../bower_components/ng-file-upload/ng-file-upload.js']
    //}]

});

app.constant('MDataConstant', {
    DateFormatArray: ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'MM/dd/yyyy', 'MM/dd/yyyy HH:mm a', 'yyyy-MM-dd hh:mm a', 'yyyy-MM-dd', 'hh:mm a', 'MMM dd,yyyy hh:mm a', 'dd MMMM, yyyy', 'MM/dd/yyyy', 'MM/dd/yyyy hh:mm:ss a'],
});


