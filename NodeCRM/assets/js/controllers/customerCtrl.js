'use strict';

app.controller('customerCtrl', ["$scope", "customerService", "uiGridConstants", "dataConstant", "$filter", "$rootScope", "CommonService", "uiGridExporterService", "uiGridExporterConstants", "$timeout",
function ($scope, customerService, uiGridConstants, dataConstant, $filter, $rootScope, CommonService, uiGridExporterService, uiGridExporterConstants, $timeout) {

    Active();
    $scope.exortFromat = null;
    $scope.GetCustomers = function (search) {
        $scope.ActiveTab = search;
        customerService.getCustomerLst(search).then(function (data) {
            if (data.status == dataConstant.SuccessStatus) {
                $scope.StateCount = data.StateCount;
                $scope.TotalCount = data.TotalCount;

                $scope.RowColDet = [];
                if (data.customers.length > 0) {
                    for (var i = 0; i < data.customers.length; i++) {
                        var header = {};
                        var objCust = data.customers[i];
                        header["BusinessName"] = objCust.BusinessName != null ? objCust.BusinessName : "";
                        header["Type"] = objCust.Type != null ? objCust.Type : "";
                        header["CRN"] = objCust.CRN != null ? objCust.CRN : "";
                        header["DateOfApplication"] = objCust.DateOfApplication != null ? $filter('date')(new Date(objCust.DateOfApplication), 'MM.dd.yyyy') : "";
                        header["Channel"] = objCust.Channel != null ? objCust.Channel : "";
                        header["State"] = objCust.State != null ? objCust.State : "";
                        header["VerifiedChannel"] = objCust.VerifiedChannel != null ? objCust.VerifiedChannel : "";
                        header["VerifiedBy"] = objCust.VerifiedBy != null ? objCust.VerifiedBy : "";
                        header["IsIDUploaded"] = objCust.IsIDUploaded != null ? objCust.IsIDUploaded : "";
                        header["Telephone"] = objCust.Telephone != null ? objCust.Telephone : "";
                        header["EmailAddress"] = objCust.EmailAddress != null ? objCust.EmailAddress : "";

                        header["Mobile"] = objCust.Mobile != null ? objCust.Mobile : "";
                        header["KeyPrincipal"] = objCust.KeyPrincipal != null ? objCust.KeyPrincipal : "";
                        header["Occupation"] = objCust.Occupation != null ? objCust.Occupation : "";
                        $scope.RowColDet.push(header);
                    }
                }
                $scope.gridOptions.data = $scope.RowColDet;
                $scope.gridOptions.columnDefs = $scope.ColDef;
                $scope.gridOptions.multiSelect = true;
            }
        });
    }

    function Active() {
        $scope.Refresh = true;
        $scope.gridOptions = {
            enableHorizontalScrollbar: 1,
            enableVerticalScrollbar: 1,
            paginationPageSizes: dataConstant.paginationPageSizes,
            paginationPageSize: dataConstant.paginationPageSize,
            //useExternalPagination: true,
            enableRowSelection: true,
            enableFiltering: true,
            enableGridMenu: true,
            enableSorting: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            rowHeight: 40,
            exporterCsvFilename: dataConstant.DataExport,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;

                //save sort prefrence
                gridApi.core.on.sortChanged($scope, $scope.sortChanged);

                //save position of column
                gridApi.colMovable.on.columnPositionChanged($scope, function (columnArray, OldPosition, newPosition) {
                    var ColumnOrderArray = _.pluck(columnArray, "field");
                    ColumnOrderArray.splice(0, 1);
                    CommonService.SaveColumnSequence({ UserID: $rootScope.userinfo.UserID, PreferenceType: 'CS', PageName: 'Customer', orderList: ColumnOrderArray }).then(function (data) {
                        if (data.status == dataConstant.SuccessStatus) {

                        }
                    });
                });

                gridApi.core.on.columnVisibilityChanged($scope, function (column) {
                    CommonService.ShowHideColumn({ UserID: $rootScope.userinfo.UserID, PreferenceType: 'SH', PageName: 'Customer', ColumnName: column.field, IsHide: column.visible }).then(function (data) {
                        if (data.status == dataConstant.SuccessStatus) {

                        }
                    });
                });

                //save col pin left or pin right
                gridApi.pinning.on.columnPinned($scope, function (colDef, container) {
                    var PreferenceType;
                    if (container == 'left') {
                        PreferenceType = 'PL';
                    }
                    else if (container == 'right') {
                        PreferenceType = 'PR';
                    }

                    CommonService.SaveColumnPinnedPosition({ UserID: $rootScope.userinfo.UserID, PreferenceType: PreferenceType, PageName: 'Customer', ColumnName: colDef.field }).then(function (data) {
                        if (data.status == dataConstant.SuccessStatus) {
                        }
                    });

                });
            }
        }
        GetUserPrefrences();
    }

    $scope.sortChanged = function (grid, sortColumns) {
        var sortList = [];
        _.each(sortColumns, function (obj) {
            sortList.push({ ColumnName: obj.field, SortDirection: obj.sort.direction, PrferenceOrder: obj.sort.priority });
        });

        CommonService.SaveSortPrefrence({ UserID: $rootScope.userinfo.UserID, PreferenceType: 'SO', PageName: 'Customer', sortList: sortList }).then(function (data) {
            if (data.status == dataConstant.SuccessStatus) {

            }
        });
    };

    function GetUserPrefrences() {
        var statusTemplate = '<div><a style="padding:4px;">{{row.entity.BusinessName}}</a><br\> <span style="padding:4px;">{{row.entity.KeyPrincipal}} <span ng-if="row.entity.Occupation">({{row.entity.Occupation}})</span></span> </div>';

        $scope.ColDef = [{ name: 'Name', field: 'BusinessName', cellTemplate: statusTemplate, width: 180, },
                         { name: 'Type', field: 'Type' },
                         { name: 'CRN', field: 'CRN' },
                         { name: 'Date Of Application', field: 'DateOfApplication' },
                         { name: 'Channel', field: 'Channel' },
                         { name: 'State', field: 'State' },
                         { name: 'Verified Channel', field: 'VerifiedChannel' },
                         { name: 'Verified By', field: 'VerifiedBy', cellTemplate: '<div style="padding:4px;"><a>{{row.entity.VerifiedBy}}</a></div>' },
                         { name: 'Is Id Uploaded', field: 'IsIDUploaded' },
                         { name: 'Telephone', field: 'Telephone' },
                         { name: 'Email Address', field: 'EmailAddress' },
                         { name: 'Mobile', field: 'Mobile' },
                         { name: 'KeyPrincipal', field: 'KeyPrincipal', colID: -1, visible: false },
                         { name: 'Occupation', field: 'Occupation', colID: -1, visible: false }, ];

        CommonService.getUserPrefrence({ UserID: $rootScope.userinfo.UserID, PageName: 'Customer' }).then(function (data) {
            if (data.status == dataConstant.SuccessStatus) {
                _.each(data.prefrences, function (obj) {
                    var objColumn = _.find($scope.ColDef, function (column) { return column.field == obj.ColumnName });
                    if (objColumn != undefined) {
                        if (obj.PreferenceType == "SO")
                            objColumn.sort = { direction: obj.SortDirection, priority: obj.PrferenceOrder };
                        if (obj.PreferenceType == "SH")
                            objColumn.visible = !obj.IsHide;
                        if (obj.PreferenceType == "CS")
                            objColumn.order = obj.PrferenceOrder;
                        if (obj.PreferenceType == 'PL')
                            objColumn.pinnedLeft = true;
                        if (obj.PreferenceType == 'PR')
                            objColumn.pinnedRight = true;
                    }
                });
                $scope.ColDef = _.sortBy($scope.ColDef, 'order');
                $scope.GetCustomers("All");
            }
            else {
                $scope.GetCustomers("All");
            }
        });

    }

    function ExpotPDF() {
        var doc = new jsPDF('p', 'pt');
        var columns = [{ title: 'Business Name', dataKey: 'BusinessName' },
                        { title: 'Key Principal', dataKey: 'KeyPrincipal' },
                        { title: 'Occupation', dataKey: 'Occupation' },
                         { title: 'Type', dataKey: 'Type' },
                         { title: 'CRN', dataKey: 'CRN' },
                         { title: 'Date Of Application', dataKey: 'DateOfApplication' },
                         { title: 'Channel', dataKey: 'Channel' },
                         { title: 'State', dataKey: 'State' },
                         { title: 'Verified Channel', dataKey: 'VerifiedChannel' },
                         { title: 'Verified By', dataKey: 'VerifiedBy' },
                         { title: 'Is Id Uploaded', dataKey: 'IsIDUploaded' },
                         { title: 'Telephone', dataKey: 'Telephone' },
                         { title: 'Email Address', dataKey: 'EmailAddress' },
                         { title: 'Mobile', dataKey: 'Mobile' },
        ]
        doc.autoTable(columns, $scope.RowColDet, {
            theme: 'grid',
            styles: { overflow: 'linebreak' },
            //columnStyles: {
            //    id: { fillColor: 255 }
            //},
            //headerStyles: { fillColor: 255 },
            margin: { top: 40 },
            beforePageContent: function (data) {
                doc.text("Customer", 40, 30);
            }
        });
        doc.save('customer.pdf');
    }

    function ExportJson(data, filename) {
        if (!data) {
            console.error('Console.save: No data')
            return;
        }
        if (typeof data === "object") {
            data = JSON.stringify(GenerateDataForExport());
        }
        var blob = new Blob([data], { type: 'text/json' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e);
    }

    function ExportCsv(type) {
        var grid = $scope.gridApi.grid;
        var rowTypes = type;
        var colTypes = type;
        uiGridExporterService.csvExport(grid, rowTypes, colTypes);
    }

    function ExportToXML() {
        var x2js = new X2JS();
        var xmlstext = '<?xml version="1.0" encoding="UTF-8"?><CustomerList>' + x2js.json2xml_str({ Customer: GenerateDataForExport() }) + '</CustomerList>';
        var blob = new Blob([xmlstext], { type: 'text/xml' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

        a.download = 'Customer.xml';
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }

    function printData() {
        var html = "<html>";
        html += document.getElementById('PrintArea').innerHTML;
        html += "</html>";
        var printWin = window.open('', '_blank');
        printWin.document.write(html);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
    }

    //$scope.Export = function () {
    //    if ($scope.exortFromat == 'pdf') {
    //        ExpotPDF();
    //    }
    //    else if ($scope.exortFromat == 'json') {
    //        ExportJson($scope.RowColDet, 'customer.json');
    //    }
    //    else if ($scope.exortFromat == 'CsvVisible') {
    //        ExportCsv(uiGridExporterConstants.VISIBLE);
    //    }
    //    else if ($scope.exortFromat == 'CsvAll') {
    //        ExportCsv(uiGridExporterConstants.ALL);
    //    }
    //    else if ($scope.exortFromat == 'xml') {
    //        ExportToXML();
    //    }
    //    else if ($scope.exortFromat == 'print') {
    //        printData();
    //    }
    //}

    $scope.Export = function (Type) {
        if (Type == 'pdf') {
            ExpotPDF();
        }
        else if (Type == 'json') {
            ExportJson($scope.RowColDet, 'customer.json');
        }
        else if (Type == 'CsvVisible') {
            ExportCsv(uiGridExporterConstants.VISIBLE);
        }
        else if (Type == 'CsvAll') {
            ExportCsv(uiGridExporterConstants.ALL);
        }
        else if (Type == 'xml') {
            ExportToXML();
        }
        else if (Type == 'print') {
            printData();
        }
    }

    function GenerateDataForExport() {
        _.each($scope.RowColDet, function (objCust) {
            delete objCust["$$hashKey"];
        });

        return $scope.RowColDet;
    }

    $scope.SetDefault = function () {
        $scope.Refresh = false;
        CommonService.SetDefault({ UserID: $rootScope.userinfo.UserID, PageName: 'Customer' }).then(function (data) {
            if (data.status == dataConstant.SuccessStatus) {
                Active();
                $scope.showMessage('Default setting restored.', 'success');
            }
        });
    }
}]);


