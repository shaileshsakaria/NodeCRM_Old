/** 
  * declare 'clip-two' module with dependencies
*/
'use strict';
angular.module("app-two", [
	'ngAnimate',
	'ngStorage',
	'ngSanitize',
	'ngTouch',
	'ui.router',
	'ui.bootstrap',
    'ui.bootstrap.datepicker',
	'cgBusy',
    'ui.grid',
    'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.pinning','ui.grid.importer', 'ui.grid.grouping',
    'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.pinning'
]);