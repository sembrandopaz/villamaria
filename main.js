(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    // preload all modules; optionally we could
                    // implement a custom preloading strategy for just some
                    // of the modules (PRs welcome)
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <div class=\"wrapper\">\n    <div *ngIf=\"isSecurity()\" class=\"sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"https://sembrandopaz.github.io/villamaria/assets/img/sidebar-1.jpg\">\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(https://sembrandopaz.github.io/villamaria/assets/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div class=\"main-panel main-panel-security\">\n        <navbar-cmp *ngIf=\"isSecurity()\"></navbar-cmp>\n        <dashboard-cmp></dashboard-cmp>\n        <div *ngIf=\"isSecurity()\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n  </div>  \n</ion-app>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user.model */ "./src/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Initialize Firebase
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initMenu.js');
            $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/demo.js');
            if (!user) {
                if (_this.location.prepareExternalUrl(_this.location.path()).toLowerCase().substring(0, 11) != '#/security/') {
                    //Redireccionamiento a la pagina de logueo
                    _this.router.navigate(['/security/login']);
                }
            }
            else {
                //lineas para almacenamiento - informacion del usuario
                _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].displayName = (user.displayName ? user.displayName : "");
                _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].email = (user.email ? user.email : "");
                _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].photoURL = (user.photoURL ? user.photoURL : "");
                _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].uid = (user.uid ? user.uid : "");
                localStorage.setItem("currentUser", JSON.stringify(_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]));
                if (_this.location.prepareExternalUrl(_this.location.path()).toLowerCase().substring(0, 16) == '#/security/login') {
                    $('.main-panel-security').addClass('main-panel');
                    //Redireccionamiento a la pagina home
                    _this.router.navigate(['/dashboard']);
                }
            }
        });
    };
    AppComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()).toLowerCase().substring(0, 17) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isSecurity = function () {
        if (this.location.prepareExternalUrl(this.location.path()).toLowerCase().substring(0, 11) == '#/security/') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _environments_firebaseConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/firebaseConfig */ "./src/environments/firebaseConfig.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//base de datos





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_firebaseConfig__WEBPACK_IMPORTED_MODULE_16__["firebaseConfig"]),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

;


/***/ }),

/***/ "./src/app/dashboard/charts/charts.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/charts/charts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">REPORTE DEL PROYECTO</h3>\n            <!-- <p class=\"category\">Handcrafted by our friends from\n                <a target=\"_blank\" href=\"https://gionkunz.github.io/chartist-js/\">Chartist.js</a>. Please checkout their\n                <a href=\"https://gionkunz.github.io/chartist-js/getting-started.html\" target=\"_blank\">full documentation.</a>\n            </p> -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"rose\">\n                        <div id=\"roundedLineChart\" class=\"ct-chart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Vistas</h4>\n                        <p class=\"category\">En linea</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <div id=\"straightLinesChart\" class=\"ct-chart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Likes</h4>\n                        <p class=\"category\">Me encanta %</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <div id=\"simpleBarChart\" class=\"ct-chart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Proyectos</h4>\n                        <p class=\"category\">Proyección</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\n                        <i class=\"material-icons\">timeline</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Usuarios\n                            <small> - Variación</small>\n                        </h4>\n                    </div>\n                    <div id=\"colouredRoundedLineChart\" class=\"ct-chart\"></div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">insert_chart</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Comentarios\n                            <small>- %</small>\n                        </h4>\n                    </div>\n                    <div id=\"multipleBarsChart\" class=\"ct-chart\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/charts/charts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/charts/charts.component.ts ***!
  \******************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
        });
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initChartsPage.js');
        var dataRoundedLineChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsRoundedLineChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 10
            }),
            axisX: {
                showGrid: false,
            },
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            showPoint: false
        };
        var RoundedLineChart = new Chartist.Line('#roundedLineChart', dataRoundedLineChart, optionsRoundedLineChart);
        md.startAnimationForLineChart(RoundedLineChart);
        /*  **************** Straight Lines Chart - single line with points ******************** */
        var dataStraightLinesChart = {
            labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [10, 16, 8, 13, 20, 15, 20, 34, 30]
            ]
        };
        var optionsStraightLinesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            classNames: {
                point: 'ct-point ct-white',
                line: 'ct-line ct-white'
            }
        };
        var straightLinesChart = new Chartist.Line('#straightLinesChart', dataStraightLinesChart, optionsStraightLinesChart);
        md.startAnimationForLineChart(straightLinesChart);
        /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */
        var dataColouredRoundedLineChart = {
            labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]
            ]
        };
        var optionsColouredRoundedLineChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 10
            }),
            axisY: {
                showGrid: true,
                offset: 40
            },
            axisX: {
                showGrid: false,
            },
            low: 0,
            high: 1000,
            showPoint: true,
            height: '300px'
        };
        var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart);
        md.startAnimationForLineChart(colouredRoundedLineChart);
        /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */
        var dataColouredBarsChart = {
            labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        var optionsColouredBarsChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 10
            }),
            axisY: {
                showGrid: true,
                offset: 40
            },
            axisX: {
                showGrid: false,
            },
            low: 0,
            high: 1000,
            showPoint: true,
            height: '300px'
        };
        var colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart, optionsColouredBarsChart);
        md.startAnimationForLineChart(colouredBarsChart);
        /*  **************** Public Preferences - Pie Chart ******************** */
        var dataPreferences = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        var optionsPreferences = {
            height: '230px'
        };
        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
        /*  **************** Simple Bar Chart - barchart ******************** */
        var dataSimpleBarChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsSimpleBarChart = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            }
        };
        var responsiveOptionsSimpleBarChart = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var simpleBarChart = Chartist.Bar('#simpleBarChart', dataSimpleBarChart, optionsSimpleBarChart, responsiveOptionsSimpleBarChart);
        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(simpleBarChart);
        var dataMultipleBarsChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        var optionsMultipleBarsChart = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '300px'
        };
        var responsiveOptionsMultipleBarsChart = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var multipleBarsChart = Chartist.Bar('#multipleBarsChart', dataMultipleBarsChart, optionsMultipleBarsChart, responsiveOptionsMultipleBarsChart);
        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(multipleBarsChart);
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial            
        });
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'charts-cmp',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/dashboard/charts/charts.component.html")
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'dashboard-cmp',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_3__["MODULE_ROUTES"])
            ],
            declarations: [_dashboard_routes__WEBPACK_IMPORTED_MODULE_3__["MODULE_COMPONENTS"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: objAcceso, MODULE_ROUTES, MODULE_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objAcceso", function() { return objAcceso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_ROUTES", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_COMPONENTS", function() { return MODULE_COMPONENTS; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _forms_extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/extendedforms/extendedforms.component */ "./src/app/dashboard/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _forms_regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/regularforms/regularforms.component */ "./src/app/dashboard/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/dashboard/charts/charts.component.ts");
/* harmony import */ var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/widgets.component */ "./src/app/dashboard/widgets/widgets.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/dashboard/pages/user/user.component.ts");
/* harmony import */ var _pages_userLine_userLine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/userLine/userLine.component */ "./src/app/dashboard/pages/userLine/userLine.component.ts");
/* harmony import */ var _security_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/login/login.page */ "./src/app/dashboard/security/login/login.page.ts");
/* harmony import */ var _security_new_new_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security/new/new.page */ "./src/app/dashboard/security/new/new.page.ts");
/* harmony import */ var _security_lock_lock_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/lock/lock.page */ "./src/app/dashboard/security/lock/lock.page.ts");
/* harmony import */ var _providers_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/auth.guard */ "./src/providers/auth.guard.ts");











var objAcceso = new _providers_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]().PageInit();
var MODULE_ROUTES = [
    { path: '', redirectTo: objAcceso, pathMatch: 'full' },
    { path: 'dashboard', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'security/login', component: _security_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"] },
    { path: 'security/new', component: _security_new_new_page__WEBPACK_IMPORTED_MODULE_8__["NewPage"] },
    { path: 'security/lock', component: _security_lock_lock_page__WEBPACK_IMPORTED_MODULE_9__["LockPage"] },
    { path: 'forms/regular', component: _forms_regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_2__["RegularFormsComponent"] },
    { path: 'forms/extended', component: _forms_extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_1__["ExtendedFormsComponent"] },
    { path: 'charts', component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"] },
    { path: 'widgets', component: _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"] },
    { path: 'pages/user', component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'pages/userline', component: _pages_userLine_userLine_component__WEBPACK_IMPORTED_MODULE_6__["UserLineComponent"] },
];
//
var MODULE_COMPONENTS = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    _security_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
    _security_new_new_page__WEBPACK_IMPORTED_MODULE_8__["NewPage"],
    _security_lock_lock_page__WEBPACK_IMPORTED_MODULE_9__["LockPage"],
    _forms_extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_1__["ExtendedFormsComponent"],
    _forms_regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_2__["RegularFormsComponent"],
    _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"],
    _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"],
    _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
    _pages_userLine_userLine_component__WEBPACK_IMPORTED_MODULE_6__["UserLineComponent"]
];


/***/ }),

/***/ "./src/app/dashboard/forms/extendedforms/extendedforms.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/forms/extendedforms/extendedforms.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Proyectos asociados a: {{ objUser.email | uppercase }}</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n\n                                <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                                    <div class=\"dropdown\">\n                                        <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Proyectos disponibles\n                                            <b class=\"caret\"></b>\n                                        </button>\n                                        <ul class=\"dropdown-menu dropdown-menu-center\">\n                                            <li class=\"dropdown-header\">Seleccione proyecto..</li>\n                                            <li *ngFor=\"let item of itemProyectos;\">\n                                                <button type=\"button\" class=\"btn btn-github btn-simple btn-wd btn-sm\" (click)=\"SelecProyecto(item.$key)\">{{(item)?.Nombre}}</button>\n                                            </li>\n                                            <li class=\"divider\"></li>\n                                            <li>\n                                                <a [routerLink]=\"[urlNuevoProyecto]\">Nuevo proyecto</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-4 col-sm-10 col-lg-4\">\n                                    <legend>Imagen del proyecto</legend>\n                                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                        <div class=\"fileinput-new thumbnail\">\n                                            <img  src=\"{{ (item_Proyecto?item_Proyecto.URLProyecto:'https://julianromerosalazar.github.io/Comunidapp/assets/img/image_placeholder.jpg') }}\" alt=\"...\">\n                                        </div>\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                        <div *ngIf=\"item_Proyecto\">\n                                            <span class=\"btn btn-rose btn-round btn-file\">\n                                                <span class=\"fileinput-new\">Seleccionar imagen</span>\n                                                <span class=\"fileinput-exists\">Cambiar imagen</span>\n                                                <input type=\"file\" name=\"...\" (change)=\"selectFile($event)\" accept=\".png,.jpg,.jpeg\" />\n                                            </span>\n                                            <!-- <button type=\"button\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (click)=\"uploadBorrar()\" ><i class=\"fa fa-times\"></i> Eliminar</button> -->\n                                            <a href=\"#image\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (click)=\"uploadBorrar()\"><i class=\"fa fa-times\"></i> Eliminar</a>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n                                        <div class=\"progress-bar progress-bar-rose progress-bar-striped\"\n                                            role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                                            aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                            [ngStyle]=\"{width:progress.percentage+'%'}\">\n                                            {{progress.percentage}}%</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-8 col-sm-12\">\n                                    <label class=\"col-sm-2 label-on-left\">Nombre proyecto</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"control-label\"></label>\n                                            <input type=\"text\" class=\"form-control\" (input)=\"item_Proyecto.Nombre=$event.target.value\" value=\"{{item_Proyecto?.Nombre}}\">\n                                            <span class=\"help-block\">Ingresa el nombre del proyecto, como se presentará en las noticias.</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">    \n                                    <label class=\"col-sm-2 label-on-left\">Descripción</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"control-label\"></label>\n                                            <textarea class=\"form-control\" rows=\"5\" (change)=\"item_Proyecto.Descripcion=$event.target.value\" value=\"{{item_Proyecto?.Descripcion}}\"></textarea>\n                                            <!-- <input type=\"text\" class=\"form-control\" (input)=\"item_Proyecto.Descripcion=$event.target.value\" value=\"{{item_Proyecto?.Descripcion}}\"> -->\n                                        </div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-12 col-sm-12\">\n\n                                    <div class=\"col-md-6 col-sm-12\">        \n                                        <label class=\"col-sm-3 label-on-left\">Recursos: $</label>\n                                        <div class=\"col-sm-9\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" (input)=\"item_Proyecto.Recursos=$event.target.value\" value=\"{{item_Proyecto?.Recursos}}\">\n                                                <span class=\"help-block\">Incentivo para la ejecución y finalización del proyecto.</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-sm-12\"> \n                                        <label class=\"col-sm-3 label-on-left\">Porcentaje:</label>      \n                                        <div class=\"col-sm-9 label-on-left\">{{ ValorPorcentaje() | number }} %\n                                            <div id=\"sliderPorcentaje\" class=\"slider slider-info col-sm-10\"></div>\n                                        </div>  \n                                    </div>\n\n                                </div>                                \n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">  \n                                    <label class=\"col-sm-2 label-on-left\">Estado</label>\n                                    <div class=\"col-sm-10 checkbox-radios\">\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"optionsRadios\" checked=\"{{(item_Proyecto?.Estado=='1'?'checked':'')}}\" value=\"1\" (change)=\"CambioEstado($event.target.value)\" [disabled]=\"!item_Proyecto\"> Activo\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"optionsRadios\" checked=\"{{( (item_Proyecto)?.Estado=='1'?'':'checked' ) }}\" value=\"0\" (change)=\"CambioEstado($event.target.value)\" [disabled]=\"!item_Proyecto\"> Inactivo\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"footer text-center\">\n                                <button type=\"button\" class=\"btn btn-rose btn-wd btn-lg\" (click)=\"ModificarProyecto()\" [disabled]=\"!item_Proyecto\">Modificar proyecto</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>            \n\n\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Input Variants</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Custom Checkboxes &amp; radios</label>\n                                <div class=\"col-sm-4 col-sm-offset-1 checkbox-radios\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> Unchecked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> Checked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" disabled> Disabled Unchecked\n                                        </label>\n                                    </div>\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked disabled> Disabled Checked\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5 checkbox-radios\">\n                          \n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\"> Radio is off\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadios\" checked=\"true\"> Radio is on\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadiosDisabled\" disabled> Disabled Radio is off\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" name=\"optionsRadiosDisabled\" checked=\"true\" disabled> Disabled Radio is on\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Input with success</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty has-success\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" value=\"Success\">\n                                        <span class=\"material-icons form-control-feedback\">done</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Input with error</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"form-group label-floating is-empty has-error\">\n                                        <label class=\"control-label\"></label>\n                                        <input type=\"text\" class=\"form-control\" value=\"Error Input\">\n                                        <span class=\"material-icons form-control-feedback\">clear</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 label-on-left\">Column sizing</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-3\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group label-floating is-empty\">\n                                                <label class=\"control-label\"></label>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">today</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Datetime Picker</label>\n                            <input type=\"text\" class=\"form-control datetimepicker\" value=\"10/05/2016\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">library_books</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Date Picker</label>\n                            <input type=\"text\" class=\"form-control datepicker\" value=\"10/10/2016\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">av_timer</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <label class=\"label-control\">Time Picker</label>\n                            <input type=\"text\" class=\"form-control timepicker\" value=\"14:00\" />\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/forms/extendedforms/extendedforms.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/forms/extendedforms/extendedforms.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/proyectos.services */ "./src/services/proyectos.services.ts");
/* harmony import */ var _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/fileupload.model */ "./src/model/fileupload.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent(router, dbProyectos) {
        this.router = router;
        this.dbProyectos = dbProyectos;
        this.urlNuevoProyecto = "../../forms/regular";
        this.objUser = _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"];
        this.progress = { percentage: 0 };
        if (this.CargaInicioSesion()) {
            //carga toda la informacion de la pagina
            this.CargarProyectos();
        }
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
        });
        // Sliders for demo purpose
        this.sliderPorcentaje = $('#sliderPorcentaje').noUiSlider({
            start: 0,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            }
        });
    };
    ExtendedFormsComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    ExtendedFormsComponent.prototype.CambioEstado = function (value) {
        if (value == "true") {
            value = "false";
        }
        else {
            value = "true";
        }
        this.item_Proyecto.Estado = value;
    };
    ExtendedFormsComponent.prototype.ValorPorcentaje = function () {
        return (this.sliderPorcentaje != null ? this.sliderPorcentaje.val() : 0);
    };
    //Metodos
    //Valida autenticación
    ExtendedFormsComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            this.objUser = JSON.parse(localStorage.getItem("currentUser"));
            return true;
        }
        else {
            //Control de seguridad
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    ExtendedFormsComponent.prototype.SelecProyecto = function (key) {
        this.item_Proyecto = this.itemProyectos.find(function (x) { return x.$key == key; });
        this.sliderPorcentaje.val(this.item_Proyecto.Avances);
    };
    //Inicializa proyectos
    ExtendedFormsComponent.prototype.CargarProyectos = function () {
        var _this = this;
        var uiUser = this.objUser.uid;
        var x = this.dbProyectos.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.itemProyectos = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key; //identificador proyecto
                y["Comentarios"] = [];
                y["Avance"] = [];
                y["Likes"] = [];
                //console.log(this.itemProyectos);
                if (y["IdUsuarioCreador"] == uiUser) {
                    _this.itemProyectos.push(y);
                }
            });
        });
    };
    ExtendedFormsComponent.prototype.ModificarProyecto = function () {
        if (this.item_Proyecto) {
            //Almacena la imagen asociada con el key
            this.item_Proyecto.Avances = this.sliderPorcentaje.val();
            this.dbProyectos.updateProyecto(this.item_Proyecto);
            if (this.selectedFiles != undefined) {
                this.upload(this.item_Proyecto.$key);
            }
            demo.Alerta("Proyecto", "Se ha modificado correctamente.", "success");
        }
    };
    ExtendedFormsComponent.prototype.upload = function (key) {
        if (this.selectedFiles != undefined) {
            var file = this.selectedFiles.item(0);
            this.selectedFiles = undefined;
            this.currentFileUpload = new _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__["FileUploadModel"](file);
            this.dbProyectos.pushFileToStorage(key, this.currentFileUpload, this.progress);
        }
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'extendedforms-cmp',
            template: __webpack_require__(/*! ./extendedforms.component.html */ "./src/app/dashboard/forms/extendedforms/extendedforms.component.html"),
            providers: [_services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__["ProyectosService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__["ProyectosService"]])
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/forms/regularforms/regularforms.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/forms/regularforms/regularforms.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Somos comunidapp</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-10 col-lg-4\">\n                                    <legend>Imagen del proyecto</legend>\n                                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                        <div class=\"fileinput-new thumbnail\">\n                                            <img src=\"https://julianromerosalazar.github.io/Comunidapp/assets/img/image_placeholder.jpg\" alt=\"...\">\n                                        </div>\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                        <div>\n                                            <span class=\"btn btn-rose btn-round btn-file\">\n                                                <span class=\"fileinput-new\">Seleccionar imagen</span>\n                                                <span class=\"fileinput-exists\">Cambiar imagen</span>\n                                                <input type=\"file\" name=\"...\" (change)=\"selectFile($event)\" accept=\".png,.jpg,.jpeg\" />\n                                            </span>\n                                            <!-- <button type=\"button\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (click)=\"uploadBorrar()\" ><i class=\"fa fa-times\"></i> Eliminar</button> -->\n                                            <a href=\"#image\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (click)=\"uploadBorrar()\"><i class=\"fa fa-times\"></i> Eliminar</a>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n                                        <div class=\"progress-bar progress-bar-rose progress-bar-striped\"\n                                            role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                                            aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                            [ngStyle]=\"{width:progress.percentage+'%'}\">\n                                            {{progress.percentage}}%</div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">\n                                    <label class=\"col-sm-2 label-on-left\">Nombre proyecto</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"control-label\"></label>\n                                            <input type=\"text\" class=\"form-control\" (input)=\"txtNombre=$event.target.value\">\n                                            <span class=\"help-block\">Ingresa el nombre del proyecto, como se presentará en las noticias.</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">    \n                                    <label class=\"col-sm-2 label-on-left\">Descripción</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"control-label\"></label>\n                                            <!-- <input type=\"text\" class=\"form-control\" (input)=\"txtDescripcion=$event.target.value\"> -->\n                                            <textarea class=\"form-control\" rows=\"5\" (change)=\"txtDescripcion=$event.target.value\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">        \n                                    <label class=\"col-sm-2 label-on-left\">Recursos: $</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"form-group label-floating is-empty\">\n                                            <label class=\"control-label\"></label>\n                                            <input type=\"text\" class=\"form-control\" (input)=\"txtRecursos=$event.target.value\">\n                                            <span class=\"help-block\">Incentivo para la ejecución y finalización del proyecto.</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            <!-- </div>\n                            <div class=\"row\"> -->\n                                <div class=\"col-md-8 col-sm-12\">  \n                                    <label class=\"col-sm-2 label-on-left\">Estado</label>\n                                    <div class=\"col-sm-10 checkbox-radios\">\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"optionsRadios\" checked=\"true\" disabled (input)=\"chEstado=$event.target.checked\"> Activo\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"optionsRadios\" disabled> Inactivo\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"footer text-center\">\n                                <button type=\"button\" class=\"btn btn-rose btn-wd btn-lg\" (click)=\"CrearProyecto()\" [disabled]=\"!selectedFiles\">Crear proyecto</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/forms/regularforms/regularforms.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/forms/regularforms/regularforms.component.ts ***!
  \************************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_proyectos_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/proyectos.services */ "./src/services/proyectos.services.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/fileupload.model */ "./src/model/fileupload.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent(router, dbProyectos) {
        this.router = router;
        this.dbProyectos = dbProyectos;
        this.progress = { percentage: 0 };
        this.userUID = _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"];
        this.CargaInicioSesion();
    }
    //fileImagen:any;
    //Valida autenticación
    RegularFormsComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            this.userUID = JSON.parse(localStorage.getItem("currentUser"));
            return true;
        }
        else {
            //Control de seguridad
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    RegularFormsComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
        });
    };
    RegularFormsComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    RegularFormsComponent.prototype.upload = function (key) {
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__["FileUploadModel"](file);
        this.dbProyectos.pushFileToStorage(key, this.currentFileUpload, this.progress);
    };
    RegularFormsComponent.prototype.uploadBorrar = function () {
        this.selectedFiles = undefined;
        this.currentFileUpload = undefined;
    };
    RegularFormsComponent.prototype.CrearProyecto = function () {
        //Almacena la imagen asociada con el key
        this.upload(
        //Retorna el key de la inserción
        this.dbProyectos.insertProyecto({
            Nombre: this.txtNombre,
            Descripcion: this.txtDescripcion,
            Recursos: this.txtRecursos,
            Avances: 0,
            IdUsuarioCreador: this.userUID.uid,
            IdUsuarioSolucionador: "",
            FechaCreacion: new Date().toISOString(),
            FechaModificacion: "",
            URLProyecto: "https://julianromerosalazar.github.io/Comunidapp/assets/img/image_placeholder.jpg",
            Estado: "1",
        }));
        demo.Alerta("Proyecto", "Se ha creado correctamente.", "success");
    };
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'regularforms-cmp',
            template: __webpack_require__(/*! ./regularforms.component.html */ "./src/app/dashboard/forms/regularforms/regularforms.component.html"),
            providers: [_services_proyectos_services__WEBPACK_IMPORTED_MODULE_2__["ProyectosService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_proyectos_services__WEBPACK_IMPORTED_MODULE_2__["ProyectosService"]])
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n            <div *ngFor=\"let item of itemProyectos; let i = index\">\n                <div [ngClass]=\"{'row' : (i+1)%3==0}\">\n                    <div class=\"col-md-4 col-sm-6 col-12\">\n                        <div class=\"card card-product\">\n                            <div rel=\"tooltip\" data-placement=\"bottom\" title=\"Solucionar proyecto\" class=\"card-image\" data-header-animation=\"true\" (click)=\"AplicarProyecto(item.$key)\" role=\"button\">\n                                <a href=\"javascript:void(0)\" (click)=\"AplicarProyecto(item.$key)\">\n                                    <img class=\"img\" src=\"{{(item)?.URLProyecto}}\">\n                                </a>\n                            </div>\n                            <div class=\"card-content\">\n                                <div class=\"card-actions\">\n                                    <button type=\"button\" [ngClass]=\"{'btn-rose' : (item)?.Likes.length >= 1, 'btn-default' : (item)?.Likes.length == 0}\" class=\"btn btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Me encanta\"  (click)=\"MeEncantaProyecto((item)?.$key)\" role=\"button\">\n                                        {{(item)?.TotalLikes}} <i class=\"material-icons\">favorite</i> Me encanta\n                                    </button>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    <a [routerLink]=\"['/widgets']\" [queryParams]=\"{ filter: item.Nombre }\">{{(item)?.Nombre}}</a>\n                                </h4>\n                                <div class=\"card-description\" style=\"max-height:180px!important;\">\n                                    {{(item)?.Descripcion}}\n                                </div>\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"price\">\n                                    <h4>$ {{(item)?.Recursos}}</h4>\n                                </div>\n                                <div class=\"stats pull-right\">\n                                    <p class=\"category\"><i class=\"material-icons\">place</i> Candelaria, Bogotá</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/proyectos.services */ "./src/services/proyectos.services.ts");
/* harmony import */ var _services_likes_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/likes.services */ "./src/services/likes.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, dbProyectos, dblikes) {
        this.router = router;
        this.dbProyectos = dbProyectos;
        this.dblikes = dblikes;
        this.objUser = _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"];
        if (this.CargaInicioSesion()) {
            //carga toda la informacion de la pagina
            this.CargarProyectos();
        }
    }
    //Metodos
    //Valida autenticación
    HomeComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            this.objUser = JSON.parse(localStorage.getItem("currentUser"));
            demo.Alerta("Bienvenido a Comunidapp", this.objUser.displayName, "success");
            return true;
        }
        else {
            //Control de seguridad
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    //Inicializa proyectos
    HomeComponent.prototype.CargarProyectos = function () {
        var _this = this;
        var x = this.dbProyectos.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.itemProyectos = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                if (y["Estado"] == "1") {
                    //identificador proyecto
                    y["$key"] = element.key;
                    //Validación likes
                    var objLikes = void 0;
                    var iLikes = 0;
                    objLikes = [];
                    for (var i in y["Likes"]) {
                        iLikes++;
                        //si el usuario a dado me gusta agrega el registro de lo contrario no
                        if (y["Likes"][i]["IdUsuario"] == _this.objUser.uid) {
                            objLikes.push({
                                $key: i,
                                IdUsuario: y["Likes"][i]["IdUsuario"],
                                FechaCreacion: y["Likes"][i]["FechaCreacion"],
                                URLPhoto: y["Likes"][i]["URLPhoto"]
                            });
                        }
                    }
                    y["Likes"] = objLikes;
                    y["TotalLikes"] = iLikes;
                    y["Descripcion"] = (y["Descripcion"].length > 200 ? y["Descripcion"].substring(0, 200) + '...' : y["Descripcion"]);
                    //Fin validacion likes
                    _this.itemProyectos.push(y);
                }
                return;
            });
        });
    };
    //metodos
    HomeComponent.prototype.AplicarProyecto = function (key) {
        this.objProyecto = this.itemProyectos.find(function (x) { return x.$key == key; });
        if (this.objProyecto.IdUsuarioCreador != this.objUser.uid) {
            if (this.objProyecto.IdUsuarioSolucionador != "") {
                demo.Confirmacion(this.objProyecto.Nombre, "El proyecto ya cuenta con un solucionador, deseas realizar aportes con comentarios avanzados?", "confirmacionSINO", "$(location).attr('href', '#/widgets?filter=" + this.objProyecto.Nombre + "')");
            }
            else {
                this.objProyecto.IdUsuarioSolucionador = this.objUser.uid;
                this.dbProyectos.updateProyecto(this.objProyecto);
                demo.Alerta(this.objProyecto.Nombre, "Has aplicado correctamente al proyecto Social.", "success");
            }
        }
        else {
            demo.Alerta(this.objProyecto.Nombre, "Fuiste creador del proyecto, no es posible ser solucionador.", "warning");
        }
    };
    HomeComponent.prototype.MeEncantaProyecto = function (keyProyect) {
        this.objProyecto = this.itemProyectos.find(function (x) { return x.$key == keyProyect; });
        if (this.objProyecto.Likes.length > 0) {
            var keyLike = this.objProyecto.Likes[0].$key;
            for (var i in this.objProyecto.Likes) {
                keyLike = this.objProyecto.Likes[i]["$key"];
            }
            //Elimina
            if (this.objProyecto.Likes.length > 0) {
                this.dblikes.setProyecto(keyProyect);
                this.dblikes.deleteLikes(keyLike);
            }
        }
        else {
            //Crea
            this.dblikes.setProyecto(keyProyect);
            this.dblikes.insertLikes({
                IdUsuario: this.objUser.uid,
                FechaCreacion: new Date().toISOString(),
                URLPhoto: this.objUser.photoURL
            });
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Actualiza control del menu
            try {
                if (mdp) {
                    mdp.initSidebarsCheck();
                }
            }
            catch (e) { }
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
            $("body > div.navbar-collapse").remove();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: ' home-cmp ',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            providers: [_services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__["ProyectosService"], _services_likes_services__WEBPACK_IMPORTED_MODULE_4__["LikesService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_proyectos_services__WEBPACK_IMPORTED_MODULE_3__["ProyectosService"], _services_likes_services__WEBPACK_IMPORTED_MODULE_4__["LikesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pages/user/user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/pages/user/user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Editar perfil - \n                            <small class=\"category\">Complete su perfil</small>\n                        </h4>\n                        <!-- <form> -->\n                        <div clas=\"row\">\n                            <div class=\"col-md-12\" style=\"padding:10px\"></div>\n                        </div>\n                        <div clas=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"card card-profile fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"card-avatar\">\n                                        <a href=\"#pablo\" class=\"fileinput-new thumbnail\">\n                                            <img class=\"img\" src=\"{{ (objUsuario?.URLPhoto) }}\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                    <div *ngIf=\"objUsuario\">\n                                        <span class=\"btn btn-rose btn-round btn-file\">\n                                            <span class=\"fileinput-new\">Seleccionar imagen</span>\n                                            <span class=\"fileinput-exists\">Cambiar imagen</span>\n                                            <input type=\"file\" name=\"...\" (change)=\"selectFile($event)\" accept=\".png,.jpg,.jpeg\" />\n                                        </span>\n                                        <a href=\"#image\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (click)=\"uploadBorrar()\"><i class=\"fa fa-times\"></i> Eliminar</a>\n                                    </div>\n                                    <div class=\"card-content\">\n                                        <h6 class=\"category text-gray\">Perfil</h6>\n                                        <h4 class=\"card-title\">{{objUsuario?.Nombres}}</h4>\n                                        <p class=\"description\">\n                                                {{objUsuario?.QuienSoy}}\n                                        </p>\n                                        \n                                    </div>\n                                </div>\n                                <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n                                    <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n                                        role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                                        aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                        [ngStyle]=\"{width:progress.percentage+'%'}\">\n                                        {{progress.percentage}}%</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Email</label>\n                                    <input type=\"email\" class=\"form-control\" value=\"{{objUsuario?.Email}}\" disabled>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Nombres</label>\n                                    <input type=\"text\" class=\"form-control\" (input)=\"objUsuario.Nombres=$event.target.value\" value=\"{{objUsuario?.Nombres}}\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">De que universidad eres: </label>\n                                    <input type=\"text\" class=\"form-control\" (input)=\"objUsuario.IdUniversidad=$event.target.value\" value=\"{{objUsuario?.IdUniversidad}}\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Telefono</label>\n                                    <input type=\"text\" class=\"form-control\" (input)=\"objUsuario.Telefono=$event.target.value\" value=\"{{objUsuario?.Telefono}}\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>Acerca de mí</label>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\"> Breve descripción de quien soy, conocimientos y experiencia laboral. </label>\n                                        <textarea class=\"form-control\" rows=\"5\" (change)=\"objUsuario.QuienSoy=$event.target.value\">{{objUsuario?.QuienSoy}}</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-rose pull-right\" (click)=\"ModificarUsuario()\">Actualizar perfil</button>\n                        <div class=\"clearfix\"></div>\n                        <!-- </form> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/pages/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/pages/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _services_usuario_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/usuario.services */ "./src/services/usuario.services.ts");
/* harmony import */ var _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/fileupload.model */ "./src/model/fileupload.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(router, dbUsuario) {
        this.router = router;
        this.dbUsuario = dbUsuario;
        this.objUser = _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"];
        this.progress = { percentage: 0 };
        if (this.CargaInicioSesion()) {
            //verifica y carga la existencia del usuario
            this.CargarUsuarios();
        }
    }
    //Metodos
    //Valida autenticación
    UserComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            this.objUser = JSON.parse(localStorage.getItem("currentUser"));
            return true;
        }
        else {
            //Control de seguridad
            this.objUser = _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"];
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    UserComponent.prototype.CreaNuevoUsuario = function () {
        //registra la información del nuevo usuario
        this.dbUsuario.insertUsuario(this.objUser.uid, {
            Email: this.objUser.email,
            IdUniversidad: '',
            Nombres: this.objUser.displayName,
            QuienSoy: '',
            Telefono: '',
            URLPhoto: (this.objUser.photoURL != "" ? this.objUser.photoURL : "https://julianromerosalazar.github.io/Comunidapp/assets/img/default-avatar.png"),
            Estado: '1',
            Perfil: '0',
            FechaUltimoIngreso: new Date().toISOString(),
            FechaCreacion: new Date().toISOString()
        });
        //carga nuevamente el usuario
        this.CargarUsuarios();
    };
    UserComponent.prototype.CambioEstado = function (value) {
        this.objUsuario.Estado = value;
    };
    //Inicializa proyectos
    UserComponent.prototype.CargarUsuarios = function () {
        var _this = this;
        var x = this.dbUsuario.getDataKey(this.objUser.uid);
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key; //identificador proyecto
                _this.objUsuario = y;
            });
            if (!item.length) {
                _this.CreaNuevoUsuario();
                return;
            }
        });
    };
    UserComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    UserComponent.prototype.upload = function (keyUser, keyImage) {
        //valdida la existencia de una imagen
        if (this.selectedFiles != undefined) {
            var file = this.selectedFiles.item(0);
            this.selectedFiles = undefined;
            this.currentFileUpload = new _model_fileupload_model__WEBPACK_IMPORTED_MODULE_4__["FileUploadModel"](file);
            this.dbUsuario.pushFileToStorage(keyUser, keyImage, this.currentFileUpload, this.progress);
        }
    };
    UserComponent.prototype.ModificarUsuario = function () {
        //Actualiza imagen
        this.upload(this.objUser.uid, this.objUsuario.$key);
        //Tabla local
        this.dbUsuario.updateUsuario(this.objUser.uid, this.objUsuario);
        demo.Alerta("Perfil usuario", "Se ha actualizada correctamente", "success");
    };
    UserComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/dashboard/pages/user/user.component.html"),
            providers: [_services_usuario_services__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_usuario_services__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pages/userLine/userLine.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/pages/userLine/userLine.component.ts ***!
  \****************************************************************/
/*! exports provided: UserLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLineComponent", function() { return UserLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/usuario.services */ "./src/services/usuario.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLineComponent = /** @class */ (function () {
    function UserLineComponent(router, router_act, dbUsuario) {
        var _this = this;
        this.router = router;
        this.router_act = router_act;
        this.dbUsuario = dbUsuario;
        if (this.CargaInicioSesion()) {
            this.router_act.queryParams.subscribe(function (params) {
                var strkeyUser = params['filter'];
                _this.CargarUsuarios(strkeyUser); //carga toda la informacion de la pagina
            });
        }
    }
    //Metodos
    //Valida autenticación
    UserLineComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            return true;
        }
        else {
            //Control de seguridad
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    UserLineComponent.prototype.CambioEstado = function (value) {
        this.objUsuario.Estado = value;
    };
    //Inicializa proyectos
    UserLineComponent.prototype.CargarUsuarios = function (keyUser) {
        var _this = this;
        var x = this.dbUsuario.getDataKey(keyUser);
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key; //identificador proyecto
                _this.objUsuario = y;
            });
            if (!item.length) {
                return;
            }
        });
    };
    UserLineComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
        });
    };
    UserLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'userline-cmp',
            template: __webpack_require__(/*! ./userline.component.html */ "./src/app/dashboard/pages/userLine/userline.component.html"),
            providers: [_services_usuario_services__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_usuario_services__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], UserLineComponent);
    return UserLineComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pages/userLine/userline.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/pages/userLine/userline.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Perfil del usuario</h4>\n\n                        <div clas=\"row\">\n                            <div class=\"col-md-12\" style=\"padding:10px\"></div>\n                        </div>\n                        <div clas=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"card card-profile fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                    <div class=\"card-avatar\">\n                                        <img class=\"img thumbnail\" src=\"{{ (objUsuario?.URLPhoto) }}\" />\n                                    </div>\n                                    <div class=\"card-content\">\n                                        <h6 class=\"category text-gray\">Perfil</h6>\n                                        <h4 class=\"card-title\">{{objUsuario?.Nombres}}</h4>\n                                        <p class=\"description\">\n                                            {{objUsuario?.QuienSoy}}\n                                        </p>                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Email</label>\n                                    <span class=\"form-control\">{{objUsuario?.Email}}</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Nombres</label>\n                                    <span class=\"form-control\">{{objUsuario?.Nombres}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">De que universidad eres: </label>\n                                    <span class=\"form-control\">{{objUsuario?.IdUniversidad}}</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label class=\"control-label\">Telefono</label>\n                                    <span class=\"form-control\">{{objUsuario?.Telefono}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/security/lock/lock.page.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/security/lock/lock.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/#/dashboard\">Comunidapp</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/security/new']\"> <!--  href=\"{{ getNewUser() }}\" -->\n                        <i class=\"material-icons\">person_add</i> Regístrate\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/security/login']\"> <!-- href=\"{{ getLoginUser() }}\"-->\n                        <i class=\"material-icons\">fingerprint</i> Inicia sesión\n                    </a>\n                </li>\n                <li class=\" active \">\n                    <a [routerLink]=\"['/security/lock']\"> <!-- href=\"javascript:void(0)\"-->\n                        <i class=\"material-icons\">lock_open</i> Olvide clave?\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page lock-page\" filter-color=\"black\" data-image=\"https://sembrandopaz.github.io/villamaria/assets/img/lock.jpeg\">\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-profile card-hidden\">\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Ingresa tu correo para restablecer tu cuenta</h4>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\">Correo electronico</label>\n                            <input type=\"text\" class=\"form-control\" (input)=\"txtEmail=$event.target.value\">\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"resetPassword()\">Activar cuenta</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <p class=\"copyright pull-right\">\n                    &copy; {{ anioActual }}\n                    Creado por: Julián Romero Salazar\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/security/lock/lock.page.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/security/lock/lock.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/security/lock/lock.page.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/security/lock/lock.page.ts ***!
  \******************************************************/
/*! exports provided: LockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockPage", function() { return LockPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockPage = /** @class */ (function () {
    function LockPage(router) {
        this.router = router;
        this.anioActual = new Date().getFullYear();
    }
    LockPage.prototype.ngOnInit = function () {
        $(".plt-desktop").removeClass('nav-open');
        $(".plt-mobile").removeClass('nav-open');
        $('.main-panel').addClass('main-panel-security');
        $('.main-panel-security').removeClass('main-panel');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/demo.js');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initMenu.js');
        $().ready(function () {
            //Efectomivimiento en imagen
            demo.checkFullPageBackgroundImage();
            setTimeout(function () {
                // after 1000 ms we add the class animated to the login/register card
                $('.card').removeClass('card-hidden');
            }, 700);
            $('ion-app > div.wrapper').perfectScrollbar();
            //Actualiza control del menu
            try {
                if (mdp) {
                    mdp.initSidebarsCheck();
                }
            }
            catch (e) { }
        });
    };
    LockPage.prototype.resetPassword = function () {
        var _this = this;
        var auth = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]();
        return auth.sendPasswordResetEmail(this.txtEmail)
            .then(function () {
            demo.Alerta("Restableser clave", "Por favor verifica tu cuenta, hemos enviado un mensaje al correo: " + _this.txtEmail + ".", "success");
            //redireccionamiento
            _this.router.navigate(['/security/login']);
        })
            .catch(function () { return demo.Alerta("Restableser clave", "Error al envíar correo, intenta más tarde.", "warning"); });
    };
    LockPage.prototype.getNewUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/new";
    };
    LockPage.prototype.getLoginUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/login";
    };
    LockPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            moduleId: module.i,
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.page.html */ "./src/app/dashboard/security/lock/lock.page.html"),
            styles: [__webpack_require__(/*! ./lock.page.scss */ "./src/app/dashboard/security/lock/lock.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LockPage);
    return LockPage;
}());



/***/ }),

/***/ "./src/app/dashboard/security/login/login.page.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/security/login/login.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">Comunidapp</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n                <a [routerLink]=\"['/security/new']\"> <!--  href=\"{{ getNewUser() }}\" -->\n                    <i class=\"material-icons\">person_add</i> Regístrate\n                </a>\n            </li>\n            <li class=\"active\">\n                <a [routerLink]=\"['/security/login']\"> <!-- href=\"{{ getLoginUser() }}\"-->\n                    <i class=\"material-icons\">fingerprint</i> Inicia sesión\n                </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/security/lock']\"> <!-- href=\"javascript:void(0)\"-->\n                    <i class=\"material-icons\">lock_open</i> Olvide clave?\n                </a>\n            </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page toggle\">\n  <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"https://sembrandopaz.github.io/villamaria/assets/img/login.jpeg\">\n      <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n      <div class=\"content\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                      <!-- <form> -->\n                          <div class=\"card card-login card-hidden\">\n                              <div class=\"card-header text-center\" data-background-color=\"blue\">\n                                  <h4 class=\"card-title\">Inicio de sesión</h4>\n                                  <div class=\"social-line\">\n                                      <button type=\"button\" class=\"btn btn-just-icon btn-simple\" (click)=\"getAuthenticaFacebook()\">\n                                            <i class=\"fa fa-facebook-square\"></i>\n                                      </button>\n                                      <button type=\"button\" class=\"btn btn-just-icon btn-simple\" (click)=\"getAuthenticaGoogle()\">\n                                            <i class=\"fa fa-google-plus\"></i>\n                                      </button>\n                                  </div>\n                              </div>\n                              <p class=\"category text-center\">\n                                  ó Ingreso clasico\n                              </p>\n                              <div class=\"card-content\">\n                                  <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">\n                                          <i class=\"material-icons\">email</i>\n                                      </span>\n                                      <div class=\"form-group label-floating\">\n                                          <label class=\"control-label\">Correo electronico</label>\n                                          <input type=\"email\" class=\"form-control\" (input)=\"txtEmail=$event.target.value\">\n                                      </div>\n                                  </div>\n                                  <div class=\"input-group\">\n                                      <span class=\"input-group-addon\">\n                                          <i class=\"material-icons\">lock_outline</i>\n                                      </span>\n                                      <div class=\"form-group label-floating\">\n                                          <label class=\"control-label\">Clave de acceso</label>\n                                          <input type=\"password\" class=\"form-control\" (input)=\"txtPassword=$event.target.value\">\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"footer text-center\">\n                                  <button type=\"button\" class=\"btn btn-info btn-simple btn-wd btn-lg\" (click)=\"getValidarUsers()\">Acceder</button>\n                              </div>\n                          </div>\n                      <!-- </form> -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <footer class=\"footer\">\n          <div class=\"container\">\n              <p class=\"copyright pull-right\">\n                  &copy;\n                  <script>\n                      document.write(new Date().getFullYear())\n                  </script>\n                  Creado por: Julián Romero Salazar\n              </p>\n          </div>\n      </footer>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/security/login/login.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/security/login/login.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/security/login/login.page.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/security/login/login.page.ts ***!
  \********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../validators/email */ "./src/validators/email.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/user.model */ "./src/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//validaciones y conexion



var LoginPage = /** @class */ (function () {
    function LoginPage(router) {
        this.router = router;
        this.showNav = true;
    }
    LoginPage.prototype.ngOnInit = function () {
        $(".plt-desktop").removeClass('nav-open');
        $(".plt-mobile").removeClass('nav-open');
        $('.main-panel').addClass('main-panel-security');
        $('.main-panel-security').removeClass('main-panel');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/demo.js');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initMenu.js');
        //material-dashboard-angular.js
        $().ready(function () {
            //Actualiza control del menu
            try {
                if (mdp) {
                    mdp.initSidebarsCheck();
                }
            }
            catch (e) { }
            //Efectomivimiento en imagen
            demo.checkFullPageBackgroundImage();
            setTimeout(function () {
                // after 1000 ms we add the class animated to the login/register card
                $('.card').removeClass('card-hidden');
            }, 700);
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial
            $('ion-app > div.wrapper').perfectScrollbar();
        });
    };
    LoginPage.prototype.getAuthenticaGoogle = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
            .then(function () {
            $('.main-panel-security').addClass('main-panel');
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().getRedirectResult;
        });
    };
    LoginPage.prototype.getAuthenticaFacebook = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider())
            .then(function (result) {
            $('.main-panel-security').addClass('main-panel');
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().getRedirectResult;
        });
    };
    LoginPage.prototype.getValidarUsers = function () {
        var _this = this;
        if (_validators_email__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"].isValid(this.txtEmail)) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(this.txtEmail, this.txtPassword).then(function (authData) {
                //lineas para almacenamiento - informacion del usuario
                _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].displayName = (authData.user.displayName ? authData.user.displayName : ""),
                    _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].email = (authData.user.email ? authData.user.email : ""),
                    _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].photoURL = (authData.user.photoURL ? authData.user.photoURL : ""),
                    _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].uid = (authData.user.uid ? authData.user.uid : ""),
                    _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].providerData = (authData.user.providerData ? authData.user.providerData : []),
                    localStorage.setItem("currentUser", JSON.stringify(_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]));
                $('.main-panel-security').addClass('main-panel');
                //inicia control
                $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initMenu.js');
                //redireccionamiento
                _this.router.navigate(['/dashboard']);
            }, function (error) {
                demo.Alerta("Inicio sesión", "Usuario y/o clave invalida.", "warning");
                console.log("Error loggueo fallido");
                if (localStorage.getItem("currentUser")) {
                    localStorage.removeItem("currentUser");
                }
            });
        }
        else {
            demo.Alerta("Inicio sesión", "Correo invalido, verifique e intente nuevamente.", "warning");
        }
    };
    LoginPage.prototype.getNewUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/new";
    };
    LoginPage.prototype.getLockUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/lock";
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/dashboard/security/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/dashboard/security/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/dashboard/security/new/new.page.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/security/new/new.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">Comunidapp</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"active\">\n                    <a [routerLink]=\"['/security/new']\"> <!--  href=\"{{ getNewUser() }}\" -->\n                        <i class=\"material-icons\">person_add</i> Regístrate\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/security/login']\"> <!-- href=\"{{ getLoginUser() }}\"-->\n                        <i class=\"material-icons\">fingerprint</i> Inicia sesión\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/security/lock']\"> <!-- href=\"javascript:void(0)\"-->\n                        <i class=\"material-icons\">lock_open</i> Olvide clave?\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"https://sembrandopaz.github.io/villamaria/assets/img/register.jpeg\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                    <div class=\"card card-signup card-hidden\">\n                        <h2 class=\"card-title text-center\">Registro de usuarios</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 col-md-offset-1\">\n                                <div class=\"card-content\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-primary\">\n                                            <i class=\"material-icons\">group</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Comunidapp</h4>\n                                            <p class=\"description\">\n                                                Aplicación multiplataforma, que permite crear lazos más estrechos entre las universidades y la comunidad en la Localidad de la Candelaria. Mediante un sistema que permitirá a la comunidad registrar proyectos sociales y a los universitarios de la localidad generar dos tipos de aportes (comentarios avanzados y participar en solución de necesidades).\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"material-icons\">group</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Universidades amigas</h4>\n                                            <p class=\"description\">\n                                                El eje centrar de la plataforma es crear lazos más estrechos entre las universidades y la comunidad en la candelaria.\n                                            </p>\n                                        </div>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <!-- <div class=\"social text-center\">\n                                    <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                                        <i class=\"fa fa-dribbble\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                                        <i class=\"fa fa-facebook\"> </i>\n                                    </button>\n                                    <h4> or be classical </h4>\n                                </div> -->\n                                <form class=\"form\" method=\"\" action=\"\">\n                                    <div class=\"card-content\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">mail</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Correo...\" (input)=\"txtEmail=$event.target.value\">\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" (input)=\"txtPassword=$event.target.value\"/>\n                                        </div>\n\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                            <input type=\"password\" placeholder=\"Confirmar password\" class=\"form-control\" (input)=\"txtConfirmarPassword=$event.target.value\"/>\n                                        </div>         \n\n                                        <!-- If you want to add a checkbox to this form, uncomment this code -->\n                                        <!-- <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" (input)=\"uiCheck=$event.target.value\"> Acepto los\n                                                <a href=\"#something\">terminos y condiciones</a>.\n                                            </label>\n                                        </div> -->\n                                    </div>\n                                    <div class=\"footer text-center\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"getValidarUsers()\">Registrarse</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    <script>\n                        document.write(new Date().getFullYear())\n                    </script>\n                    Creado por: Julián Romero Salazar\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/security/new/new.page.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/security/new/new.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/security/new/new.page.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/security/new/new.page.ts ***!
  \****************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../validators/email */ "./src/validators/email.ts");
/* harmony import */ var _services_usuario_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/usuario.services */ "./src/services/usuario.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//validaciones y conexion



var NewPage = /** @class */ (function () {
    function NewPage(router, dbUsuario) {
        this.router = router;
        this.dbUsuario = dbUsuario;
    }
    NewPage.prototype.ngOnInit = function () {
        $(".plt-desktop").removeClass('nav-open');
        $(".plt-mobile").removeClass('nav-open');
        $('.main-panel').addClass('main-panel-security');
        $('.main-panel-security').removeClass('main-panel');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/demo.js');
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/init/initMenu.js');
        $().ready(function () {
            //Efectomivimiento en imagen
            demo.checkFullPageBackgroundImage();
            setTimeout(function () {
                // after 1000 ms we add the class animated to the login/register card
                $('.card').removeClass('card-hidden');
            }, 700);
            $('ion-app > div.wrapper').perfectScrollbar();
            $('ion-app > div.wrapper').perfectScrollbar();
            //Actualiza control del menu
            try {
                if (mdp) {
                    mdp.initSidebarsCheck();
                }
            }
            catch (e) { }
        });
    };
    NewPage.prototype.getLoginUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/login";
    };
    NewPage.prototype.getLockUser = function () {
        return "https://julianromerosalazar.github.io/Comunidapp/#/security/lock";
    };
    NewPage.prototype.getValidarUsers = function () {
        var _this = this;
        if (this.txtPassword == this.txtConfirmarPassword) {
            if (_validators_email__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"].isValid(this.txtEmail)) {
                //Ejecuta metodo evento promesa
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(this.txtEmail, this.txtPassword).then(function (authData) {
                    //lineas para eliminar sesion del usuario
                    localStorage.clear();
                    //Crea datos del usuario
                    //registra la información del nuevo usuario;  
                    _this.dbUsuario.insertUsuario(authData.user.uid, {
                        Email: authData.user.email,
                        IdUniversidad: '',
                        Nombres: "Usuario",
                        QuienSoy: '',
                        Telefono: '',
                        URLPhoto: "https://julianromerosalazar.github.io/Comunidapp/assets/img/default-avatar.png",
                        Estado: '1',
                        Perfil: '0',
                        FechaUltimoIngreso: new Date().toISOString(),
                        FechaCreacion: new Date().toISOString()
                    });
                    //redireccionamiento
                    demo.Alerta("Creación usuario", "Usuario creado correctamente, ingresa tus datos para continuar.", "success");
                    _this.router.navigate(['/security/login']);
                }, function (error) {
                    demo.Alerta("Creación usuario", "datos invalidos, verifique e intente nuevamente.", "warning");
                    localStorage.clear();
                });
            }
            else {
                demo.Alerta("Creación usuario", "Correo invalido, verifique e intente nuevamente.", "warning");
            }
        }
        else {
            demo.Alerta("Creación usuario", "Confirmación de password invarido verifique e intente nuevamente.", "warning");
        }
    };
    NewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.page.html */ "./src/app/dashboard/security/new/new.page.html"),
            styles: [__webpack_require__(/*! ./new.page.scss */ "./src/app/dashboard/security/new/new.page.scss")],
            providers: [_services_usuario_services__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_usuario_services__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], NewPage);
    return NewPage;
}());



/***/ }),

/***/ "./src/app/dashboard/widgets/widgets.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/widgets/widgets.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" *ngFor=\"let item of itemProyectos; let impar = odd;let par = even;\">\n            <div class=\"col-md-6\">\n                <div class=\"col-lg-12\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"content\">\n                            <h6 class=\"category\">\n                                <a [routerLink]=\"['/widgets']\" [queryParams]=\"{ filter: item.Nombre }\">\n                                    {{(item)?.Nombre}}\n                                </a>\n                            </h6>\n                            <div class=\"icon\">\n                                <img class=\"img\" src=\"{{(item)?.URLProyecto}}\" style=\"width:70%;border-radius:10%;box-shadow:2px 6px 15px 2px white;\">\n                            </div>\n                            <h3 class=\"card-title\">\n                                Avances {{(item)?.Avances}} %\n                            </h3>\n                            <p class=\"card-description\">\n                                {{(item)?.Descripcion}}\n                            </p>\n                            <div class=\"card-footer text-center\" *ngIf=\"item.Likes_Number > 0\">\n                                <h6 class=\"card-title\">Likes: {{item.Likes_Number}}</h6>\n                                <div *ngFor=\"let itemLikes of item.Likes;\">\n                                    <a [routerLink]=\"['/pages/userline']\" [queryParams]=\"{ filter: itemLikes.IdUsuario }\">\n                                        <img src=\"{{(itemLikes)?.URLPhoto}}\"  title=\"Aplicó el: {{(itemLikes)?.FechaCreacion | date:'dd/MM/yyyy'}}\" style=\"height:35px;width:35px;padding:4px;border-radius:50%;\">\n                                    </a>\n                                </div>\n                            </div>\n\n\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">chat</i>\n                                </span>\n                                <textarea class=\"form-control\" placeholder=\"Escribe tú aporte o comentario...\" rows=\"3\" (change)=\"txtComentarioTexto=$event.target.value\"></textarea>\n                            </div>\n                            <div class=\"footer text-center\">\n                                <button type=\"button\" class=\"btn btn-white btn-round\" (click)=\"insComentario(item.$key)\">Envíar comentario</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <ul class=\"timeline timeline-simple\">\n\n\n                    <li class=\"timeline-inverted\" *ngFor=\"let itemComentario of item.Comentarios; let iComent = index\">\n                        <div class=\"timeline-badge\" [ngClass]=\"{'success' : par , 'info' : impar}\">\n                            <i class=\"material-icons\">fingerprint</i>\n                        </div>\n                        <div class=\"timeline-panel\">\n                            <div class=\"timeline-heading\">\n                                <span class=\"label\" [ngClass]=\"{'label-success' : par , 'label-info' : impar}\">Comentario # {{iComent + 1}}</span>\n                            </div>\n                            <div class=\"timeline-body\">\n                                <p>\n                                    <a [routerLink]=\"['/pages/userline']\" [queryParams]=\"{ filter: (itemComentario)?.idUsuario }\">\n                                        <img src=\"{{(itemComentario)?.URLPhoto}}\" style=\"height:35px;width:35px;padding:4px;border-radius:50%;\" title=\"Ver perfil\">\n                                    </a>\n                                    {{(itemComentario)?.Descripcion}}\n                                </p>\n                            </div>\n                            <h6>\n                                <i class=\"ti-time\"></i> Comentado: {{(itemComentario)?.FechaCreacion | date: 'dd/MM/yyyy HH:mm'}}\n                            </h6>\n                        </div>\n                        <div class=\"timeline-panel\" *ngIf=\"itemComentario.$key=='...'\">\n                            <div class=\"timeline-body text-center\">\n                                <a [routerLink]=\"['/widgets']\" [queryParams]=\"{ filter: item.Nombre }\">Leer mas...</a>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/widgets/widgets.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/widgets/widgets.component.ts ***!
  \********************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _services_comentarios_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/comentarios.services */ "./src/services/comentarios.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent(router, router_act, dbService) {
        var _this = this;
        this.router = router;
        this.router_act = router_act;
        this.dbService = dbService;
        //Propiedades
        this.userUID = _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"];
        this.nombre_proyect = "";
        if (this.CargaInicioSesion()) {
            this.router_act.queryParams.subscribe(function (params) {
                _this.nombre_proyect = params['filter'];
                //carga toda la informacion de la pagina
                _this.CargarProyectosComentarios();
            });
        }
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        $().ready(function () {
            //Inicio - posición inicial
            var body = $(".main-panel");
            var top = body.scrollTop(); // Get position of the body
            if (top != 0) {
                body.animate({ scrollTop: 0 }, '1500');
            }
            //Fin - posicion inicial            
        });
    };
    //Metodos
    //Valida autenticación
    WidgetsComponent.prototype.CargaInicioSesion = function () {
        if (localStorage.getItem("currentUser")) {
            this.userUID = JSON.parse(localStorage.getItem("currentUser"));
            return true;
        }
        else {
            //Control de seguridad
            this.router.navigate(['/security/login']);
            return false;
        }
    };
    //Inicializa proyectos
    WidgetsComponent.prototype.CargarProyectosComentarios = function () {
        var _this = this;
        var x;
        if (this.nombre_proyect == undefined || this.nombre_proyect == "") {
            x = this.dbService.getProyectoData();
            x.snapshotChanges().subscribe(function (item) {
                _this.itemProyectos = [];
                item.forEach(function (element) {
                    var y = element.payload.toJSON();
                    y["$key"] = element.key; //identificador proyecto
                    var objComentarios;
                    var iComentario = 0;
                    objComentarios = [];
                    //recorre la cantidad de comentarios
                    var iLengthComentario = 0;
                    for (var i in y["Comentarios"]) {
                        iLengthComentario++;
                    }
                    //fin recorrido de comentarios           
                    for (var i in y["Comentarios"]) {
                        iComentario++;
                        if (iComentario >= iLengthComentario - 3) {
                            objComentarios.push({
                                $key: (iComentario == iLengthComentario - 3 && iComentario >= 3 ? "..." : i),
                                Id: iComentario,
                                idUsuario: y["Comentarios"][i]["idUsuario"],
                                Descripcion: y["Comentarios"][i]["Descripcion"],
                                URLPhoto: y["Comentarios"][i]["URLPhoto"],
                                FechaCreacion: y["Comentarios"][i]["FechaCreacion"],
                            });
                        }
                    }
                    //Ordena los comentarios de ultimo a primero
                    y["Comentarios"] = objComentarios.sort(function (a, b) { return b.Id - a.Id; });
                    //Likes
                    var objLikes;
                    objLikes = [];
                    var iLikes = 0;
                    for (var i in y["Likes"]) {
                        iLikes++;
                        objLikes.push({
                            $key: i,
                            IdUsuario: y["Likes"][i]["IdUsuario"],
                            FechaCreacion: y["Likes"][i]["FechaCreacion"],
                            URLPhoto: y["Likes"][i]["URLPhoto"]
                        });
                    }
                    y["Likes_Number"] = iLikes; //Total likes                    
                    y["Likes"] = objLikes; //likes de ultimo a primero
                    //End likes
                    _this.itemProyectos.push(y);
                });
            });
        }
        else {
            x = this.dbService.getProyectoKey(this.nombre_proyect);
            x.snapshotChanges().subscribe(function (item) {
                _this.itemProyectos = [];
                item.forEach(function (element) {
                    var y = element.payload.toJSON();
                    y["$key"] = element.key; //identificador proyecto
                    var objComentarios;
                    objComentarios = [];
                    var iComentario = 0;
                    for (var i in y["Comentarios"]) {
                        iComentario++;
                        objComentarios.push({
                            $key: i,
                            Id: iComentario,
                            idUsuario: y["Comentarios"][i]["idUsuario"],
                            Descripcion: y["Comentarios"][i]["Descripcion"],
                            URLPhoto: y["Comentarios"][i]["URLPhoto"],
                            FechaCreacion: y["Comentarios"][i]["FechaCreacion"],
                        });
                    }
                    //ordena los comentarios de ultimo a primero
                    y["Comentarios"] = objComentarios.sort(function (a, b) { return b.Id - a.Id; });
                    //Likes
                    var objLikes;
                    objLikes = [];
                    var iLikes = 0;
                    for (var i in y["Likes"]) {
                        iLikes++;
                        objLikes.push({
                            $key: i,
                            IdUsuario: y["Likes"][i]["IdUsuario"],
                            FechaCreacion: y["Likes"][i]["FechaCreacion"],
                            URLPhoto: y["Likes"][i]["URLPhoto"]
                        });
                    }
                    y["Likes_Number"] = iLikes; //Total likes                    
                    y["Likes"] = objLikes; //likes de ultimo a primero
                    //End likes
                    _this.itemProyectos.push(y);
                });
            });
        }
    };
    WidgetsComponent.prototype.insComentario = function (idProyecto) {
        this.dbService.setProyecto(idProyecto); //determina a que proyecto carresponde
        this.dbService.insertComentarios({
            $key: null,
            idUsuario: this.userUID.uid,
            Descripcion: this.txtComentarioTexto,
            URLPhoto: this.userUID.photoURL,
            FechaCreacion: new Date().toISOString(),
        });
    };
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'widgets-cmp',
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/dashboard/widgets/widgets.component.html"),
            providers: [_services_comentarios_services__WEBPACK_IMPORTED_MODULE_3__["ComentariosService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_comentarios_services__WEBPACK_IMPORTED_MODULE_3__["ComentariosService"]])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            Desarrollado por: JULIAN ALEXANDER ROMERO SALAZAR\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a ng-reflect-router-link=\"dashboard\" href=\"#/dashboard\" class=\"toggled\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Noticias</p>\n                    </a>\n                </li>\n                <li id=\"li_Salir\">\n                    <a ng-reflect-router-link=\"dashboard\" href=\"#/security/login\" class=\"toggled\" (click)=\"getSalir()\"> <!-- -->\n                        <i class=\"material-icons\">logout</i>\n                        <p class=\"hidden-lg hidden-md\">Salir</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n            <div *ngIf=\"isBusqueda()\" class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-search is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar...\" (input)=\"txtBuscar=$event.target.value\" value=\"{{ txtBuscar }}\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\" (click)=\"getBuscar()\">\n                    <i class=\"material-icons\">search</i>\n                    <div class=\"ripple-container\"></div>\n                </button>\n            </div>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar-routes.config */ "./src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _sidebar_sidebar_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././sidebar/sidebar.metadata */ "./src/app/sidebar/sidebar.metadata.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_auth_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/auth-data */ "./src/providers/auth-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, router_act, objSalir, location) {
        this.router = router;
        this.router_act = router_act;
        this.objSalir = objSalir;
        this.txtBuscar = '';
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle.menuType !== _sidebar_sidebar_metadata__WEBPACK_IMPORTED_MODULE_2__["MenuType"].BRAND; });
        //Carga descripcion filtro
        this.router_act.queryParams.subscribe(function (params) {
            _this.txtBuscar = (params['filter'] ? (params['filter']).toLowerCase().replace() : "");
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        if (titlee.split('?').length > 0) {
            titlee = titlee.split('?')[0];
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Comunidapp';
    };
    NavbarComponent.prototype.isBusqueda = function () {
        if (this.location.prepareExternalUrl(this.location.path()).toLowerCase().substring(0, 9) == '#/widgets') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.getSalir = function () {
        var _this = this;
        localStorage.clear();
        this.objSalir.logoutUser().then(function () {
            _this.router.navigate(['/security/login']);
        });
    };
    NavbarComponent.prototype.getBuscar = function () {
        if (this.txtBuscar != "") {
            this.router.navigate(['/widgets'], { queryParams: { filter: this.txtBuscar } });
        }
        else {
            this.router.navigate(['/widgets']);
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            providers: [_providers_auth_data__WEBPACK_IMPORTED_MODULE_5__["AuthData"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_auth_data__WEBPACK_IMPORTED_MODULE_5__["AuthData"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-routes.config.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/sidebar-routes.config.ts ***!
  \**************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.metadata */ "./src/app/sidebar/sidebar.metadata.ts");

var ROUTES = [
    { path: 'dashboard', title: 'Noticias', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'material-icons' },
    { path: 'pages/timeline', title: 'Timeline Page', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'material-icons' },
    { path: 'pages/user', title: 'Mi Perfil', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'material-icons' },
    //{ path: 'components/buttons', title: 'Buttons', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/grid', title: 'Grid System', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/panels', title: 'Panels', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/sweet-alert', title: 'Sweet Alert', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    //{ path: 'components/typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'forms/regular', title: 'Crear proyecto', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'pe-7s-note2' },
    { path: 'forms/extended', title: 'Modificar proyecto', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'pe-7s-note2' },
    //{ path: 'forms/validation', title: 'Validation Forms', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    //{ path: 'forms/wizard', title: 'Wizard', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    // { path: 'tables/regular', title: 'Regular Tables', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    // { path: 'tables/extended', title: 'Extended Tables', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    // { path: 'tables/datatables.net', title: 'DataTables.net', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    // { path: 'maps/google', title: 'Google Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    // { path: 'maps/fullscreen', title: 'Full Screen Map', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    // { path: 'maps/vector', title: 'Vector Map', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'widgets', title: 'Aportes', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'material-icons' },
    { path: 'charts', title: 'Reportes', menuType: _sidebar_metadata__WEBPACK_IMPORTED_MODULE_0__["MenuType"].LEFT, icon: 'material-icons' },
];


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <div class=\"logo-normal\">\n        <img src=\"https://sembrandopaz.github.io/villamaria/assets/img/Logoapp.png\"/>\n    </div>\n</div>\n\n\n<div class=\"sidebar-wrapper\">\n\n    <div class=\"user\">\n        <div class=\"photo\" style=\"width:35px;height:35px;\">\n            <img src=\"{{ (objUser?.photoURL) }}\" />\n        </div>\n        <div class=\"info\">\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                <span>\n                    {{ ((objUser?.displayName).length > 19 ? (objUser?.displayName).substring(0,16) + \"...\" : (objUser?.displayName)) }}\n                    <b class=\"caret\"></b>\n                </span>\n            </a>\n            <div class=\"collapse\" id=\"collapseExample\">\n                <ul class=\"nav\">\n                    <li>\n                        <a [routerLink]=\"[menuItems[2].path]\">\n                            <span class=\"sidebar-mini\"><i class=\"material-icons\">person</i></span>\n                            <span class=\"sidebar-normal\">{{menuItems[2].title}}</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\">\n                <a [routerLink]=\"[menuItems[0].path]\">\n                    <i class=\"{{menuItems[0].icon}}\">dashboard</i>\n                    <p>{{menuItems[0].title}}</p>\n                </a>\n            </li>\n            <li routerLinkActive=\"active\">\n                <a data-toggle=\"collapse\" href=\"#formsExamples\">\n                    <i class=\"material-icons\">content_paste</i>\n                    <p>Proyectos\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <div class=\"collapse\" id=\"formsExamples\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\">\n                            <a  [routerLink]=\"[menuItems[3].path]\">\n                                <span class=\"sidebar-mini\">CP</span>\n                                <span class=\"sidebar-normal\">{{menuItems[3].title}}</span>\n                            </a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                            <a  [routerLink]=\"[menuItems[4].path]\">\n                                <span class=\"sidebar-mini\">EP</span>\n                                <span class=\"sidebar-normal\">{{menuItems[4].title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[5].path]\">\n                    <i class=\"{{menuItems[5].icon}}\">widgets</i>\n\n                    <p>{{menuItems[5].title}}</p>\n                </a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n                <a  [routerLink]=\"[menuItems[6].path]\">\n                    <i class=\"{{menuItems[6].icon}}\">timeline</i>\n\n                    <p>{{menuItems[6].title}}</p>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _sidebar_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.metadata */ "./src/app/sidebar/sidebar.metadata.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.model */ "./src/model/user.model.ts");
/* harmony import */ var _services_usuario_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.services */ "./src/services/usuario.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(dbUsuario) {
        var _this = this;
        this.dbUsuario = dbUsuario;
        this.objUser = _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"];
        this.objUser.displayName = "";
        if (localStorage.getItem("currentUser")) {
            var SessionUser = _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"];
            SessionUser = JSON.parse(localStorage.getItem("currentUser"));
            var x = this.dbUsuario.getDataKey(SessionUser.uid);
            x.snapshotChanges().subscribe(function (item) {
                //lineas para almacenamiento - informacion del usuario
                item.forEach(function (element) {
                    var y = element.payload.toJSON();
                    _this.objUser.displayName = y["Nombres"];
                    _this.objUser.photoURL = y["URLPhoto"];
                });
                if (_this.objUser.displayName == "") {
                    _this.objUser.displayName = "Usuario";
                }
                localStorage.setItem("currentUser", JSON.stringify(_this.objUser));
                return;
            });
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('https://julianromerosalazar.github.io/Comunidapp/assets/js/sidebar-moving-tab.js');
        $(".main-panel").animate({ scrollTop: 0 }, "slow");
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) { return menuItem.menuType !== _sidebar_metadata__WEBPACK_IMPORTED_MODULE_2__["MenuType"].BRAND; });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            providers: [_services_usuario_services__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]],
        }),
        __metadata("design:paramtypes", [_services_usuario_services__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.metadata.ts":
/*!*********************************************!*\
  !*** ./src/app/sidebar/sidebar.metadata.ts ***!
  \*********************************************/
/*! exports provided: MenuType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuType", function() { return MenuType; });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType || (MenuType = {}));


/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/firebaseConfig.ts":
/*!********************************************!*\
  !*** ./src/environments/firebaseConfig.ts ***!
  \********************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    // apiKey: "AIzaSyBdCjyc-sXEhePjPrZDUVoijhDwhlc3DxY",
    // authDomain: "apptemporal-1b3b2.firebaseapp.com",
    // databaseURL: "https://apptemporal-1b3b2.firebaseio.com",
    // projectId: "apptemporal-1b3b2",
    // storageBucket: "apptemporal-1b3b2.appspot.com",
    // messagingSenderId: "1004621425464"
    apiKey: "AIzaSyDkauwtTT03nQJmmup9cDDBgA2gOhpfdKs",
    authDomain: "sembrandopaz-95b8c.firebaseapp.com",
    databaseURL: "https://sembrandopaz-95b8c.firebaseio.com",
    projectId: "sembrandopaz-95b8c",
    storageBucket: "sembrandopaz-95b8c.appspot.com",
    messagingSenderId: "481954211262"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _environments_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/firebaseConfig */ "./src/environments/firebaseConfig.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
firebase__WEBPACK_IMPORTED_MODULE_5__["initializeApp"](_environments_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__["firebaseConfig"]);
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/fileupload.model.ts":
/*!***************************************!*\
  !*** ./src/model/fileupload.model.ts ***!
  \***************************************/
/*! exports provided: FileUploadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
var FileUploadModel = /** @class */ (function () {
    function FileUploadModel(file) {
        this.file = file;
    }
    return FileUploadModel;
}());



/***/ }),

/***/ "./src/model/user.model.ts":
/*!*********************************!*\
  !*** ./src/model/user.model.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = {
    username: null,
    password: null,
    displayName: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    isAnonymous: null,
    uid: null,
    providerData: null,
};


/***/ }),

/***/ "./src/providers/auth-data.ts":
/*!************************************!*\
  !*** ./src/providers/auth-data.ts ***!
  \************************************/
/*! exports provided: AuthData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthData", function() { return AuthData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import firebase from 'firebase';

var AuthData = /** @class */ (function () {
    function AuthData() {
    }
    /**
     * [loginUser We'll take an email and password and log the user into the firebase app]
     * @param  {string} email    [User's email address]
     * @param  {string} password [User's password]
     */
    AuthData.prototype.loginUser = function (email, password) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password);
    };
    /**
     * [signupUser description]
     * This function will take the user's email and password and create a new account on the Firebase app, once it does
     * it's going to log the user in and create a node on userProfile/uid with the user's email address, you can use
     * that node to store the profile information.
     * @param  {string} email    [User's email address]
     * @param  {string} password [User's password]
     */
    AuthData.prototype.signupUser = function (email, password) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function (newUser) {
            // firebase.database().ref('/users').child(email).set({
            //    firstName: "anonymous",
            //   id:newUser.uid,
            // });
            firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('/userProfile').child(newUser.user.uid).set({
                firstName: "anonymous",
                email: email
            });
        });
    };
    /**
     * [resetPassword description]
     * This function will take the user's email address and send a password reset link, then Firebase will handle the
     * email reset part, you won't have to do anything else.
     *
     * @param  {string} email    [User's email address]
     */
    AuthData.prototype.resetPassword = function (email) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().sendPasswordResetEmail(email);
    };
    /**
     * This function doesn't take any params, it just logs the current user out of the app.
     */
    AuthData.prototype.logoutUser = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AuthData.prototype.createUserWitAPIComunidapp = function (provedor) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithRedirect(this.ObtenerProvider(provedor))
            .then(function (result) {
            return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().getRedirectResult;
        });
    };
    AuthData.prototype.ObtenerProvider = function (provedor) {
        switch (provedor) {
            case "Google": {
                //statements; 
                return new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
            }
            case "Facebook": {
                //statements; 
                return new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
            }
            case "Twitter": {
                //statements; 
                return new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider();
            }
            default: {
                //statements;
                return new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
            }
        }
    };
    AuthData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthData);
    return AuthData;
}());



/***/ }),

/***/ "./src/providers/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/providers/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    ///Metodo que valida el acceso a la aplicacion
    ///autor. Ingeniero Julian Alexander Romero Salazar
    ///Celular. 312 382 1914
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    ///Carga la URL que carga inicialmente la page
    ///autor. Ingeniero Julian Alexander Romero Salazar
    ///Celular. 312 382 1914
    AuthGuard.prototype.PageInit = function () {
        if (localStorage.getItem('currentUser')) {
            return 'dashboard';
        }
        else {
            return 'security/login';
        }
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/services/comentarios.services.ts":
/*!**********************************************!*\
  !*** ./src/services/comentarios.services.ts ***!
  \**********************************************/
/*! exports provided: ComentariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosService", function() { return ComentariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComentariosService = /** @class */ (function () {
    function ComentariosService(firebase) {
        this.firebase = firebase;
        this.keyProyecto = "1";
        //this.comentariosList = this.firebase.list('Proyecto/Comentarios');
    }
    ComentariosService.prototype.setProyecto = function (idProyecto) {
        this.keyProyecto = idProyecto;
    };
    ComentariosService.prototype.getProyectoKey = function (key) {
        return this.firebase.list("Proyecto", function (ref) { return ref.orderByChild('Nombre').equalTo(key); });
    };
    ComentariosService.prototype.getProyectoData = function () {
        return this.firebase.list("Proyecto");
    };
    ComentariosService.prototype.getData = function () {
        this.comentariosList = this.firebase.list("Proyecto/" + this.keyProyecto + "/Comentarios");
        return this.comentariosList;
    };
    // Return a single observable item
    ComentariosService.prototype.getItem = function (idComentario) {
        var itemPath = "Proyecto/" + this.keyProyecto + "/Comentarios/" + idComentario;
        return this.firebase.list(itemPath);
    };
    ComentariosService.prototype.insertComentarios = function (comentario) {
        var itemPath = "Proyecto/" + this.keyProyecto + "/Comentarios";
        this.firebase.list(itemPath).push({
            idUsuario: comentario.idUsuario,
            Descripcion: comentario.Descripcion,
            URLPhoto: comentario.URLPhoto,
            FechaCreacion: comentario.FechaCreacion
        });
    };
    ComentariosService.prototype.updateComentarios = function (comentario) {
        this.comentariosList.update(comentario.$key, {
            idUsuario: comentario.idUsuario,
            Descripcion: comentario.Descripcion,
            URLPhoto: comentario.URLPhoto,
            FechaCreacion: comentario.FechaCreacion
        });
    };
    ComentariosService.prototype.deleteComentarios = function ($key) {
        this.comentariosList.remove($key);
    };
    ComentariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ComentariosService);
    return ComentariosService;
}());



/***/ }),

/***/ "./src/services/likes.services.ts":
/*!****************************************!*\
  !*** ./src/services/likes.services.ts ***!
  \****************************************/
/*! exports provided: LikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesService", function() { return LikesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikesService = /** @class */ (function () {
    function LikesService(firebase) {
        this.firebase = firebase;
        this.keyProyecto = "1";
    }
    LikesService.prototype.setProyecto = function (idProyecto) {
        this.keyProyecto = idProyecto;
    };
    LikesService.prototype.getProyectoData = function () {
        return this.firebase.list("Proyecto");
    };
    LikesService.prototype.getData = function () {
        this.likesList = this.firebase.list("Proyecto/" + this.keyProyecto + "/Likes");
        return this.likesList;
    };
    // Return a single observable item
    LikesService.prototype.getItem = function (idLikes) {
        var itemPath = "Proyecto/" + this.keyProyecto + "/Likes/" + idLikes;
        return this.firebase.list(itemPath);
    };
    LikesService.prototype.insertLikes = function (likes) {
        var itemPath = "Proyecto/" + this.keyProyecto + "/Likes";
        this.firebase.list(itemPath).push({
            IdUsuario: likes.IdUsuario,
            FechaCreacion: likes.FechaCreacion,
            URLPhoto: likes.URLPhoto
        });
    };
    LikesService.prototype.updateComentarios = function (likes) {
        this.likesList.update(likes.$key, {
            IdUsuario: likes.IdUsuario,
            FechaCreacion: likes.FechaCreacion
        });
    };
    LikesService.prototype.deleteLikes = function ($key) {
        this.firebase.list("Proyecto/" + this.keyProyecto + "/Likes").remove($key);
    };
    LikesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], LikesService);
    return LikesService;
}());



/***/ }),

/***/ "./src/services/proyectos.services.ts":
/*!********************************************!*\
  !*** ./src/services/proyectos.services.ts ***!
  \********************************************/
/*! exports provided: ProyectosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosService", function() { return ProyectosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProyectosService = /** @class */ (function () {
    function ProyectosService(db) {
        this.db = db;
    }
    ProyectosService.prototype.getData = function () {
        this.itemRef = this.db.list("Proyecto");
        return this.itemRef;
    };
    ProyectosService.prototype.insertProyecto = function (proyecto) {
        var itemPath = "Proyecto";
        return this.db.list(itemPath).push(proyecto).key;
    };
    ProyectosService.prototype.updateProyecto = function (proyecto) {
        var itemPath = "Proyecto/" + proyecto.$key;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(itemPath).update({
            Nombre: proyecto.Nombre,
            Descripcion: proyecto.Descripcion,
            Recursos: proyecto.Recursos,
            Avances: proyecto.Avances,
            //IdUsuarioCreador : proyecto.IdUsuarioCreador,
            IdUsuarioSolucionador: proyecto.IdUsuarioSolucionador,
            //FechaCreacion: new Date().toISOString(),
            FechaModificacion: new Date().toISOString(),
            //URLProyecto: proyecto.URLProyecto,
            Estado: proyecto.Estado
        });
    };
    ProyectosService.prototype.pushFileToStorage = function (key, fileUpload, progress) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var uploadTask = storageRef.child("/Proyecto/" + key + "." + fileUpload.file.name.split('.')[1]).put(fileUpload.file);
        uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                //actualiza la url de la imagen del proyecto
                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('Proyecto/' + key).update({
                    URLProyecto: "" + downloadURL
                });
            });
        });
    };
    ProyectosService.prototype.getFileUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.fileUploads = this.db.list('/Proyecto');
        return this.fileUploads;
    };
    ProyectosService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.$key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    ProyectosService.prototype.deleteFileDatabase = function (key) {
        return this.db.list("/Proyecto/").remove(key);
    };
    ProyectosService.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        storageRef.child("/Proyecto/" + name).delete();
    };
    ProyectosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProyectosService);
    return ProyectosService;
}());



/***/ }),

/***/ "./src/services/usuario.services.ts":
/*!******************************************!*\
  !*** ./src/services/usuario.services.ts ***!
  \******************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    function UsuarioService(db) {
        this.db = db;
    }
    UsuarioService.prototype.getData = function () {
        this.itemRef = this.db.list("Usuarios");
        return this.itemRef;
    };
    UsuarioService.prototype.getDataKey = function (key) {
        this.itemRef = this.db.list("Usuarios/" + key);
        return this.itemRef;
    };
    UsuarioService.prototype.insertUsuario = function (key, usuario) {
        var itemPath = "Usuarios/" + key;
        return this.db.list(itemPath).push(usuario).key;
    };
    UsuarioService.prototype.updateUsuario = function (key, usuario) {
        var itemPath = "Usuarios/" + key + "/" + usuario.$key;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(itemPath).update({
            Email: usuario.Email,
            IdUniversidad: usuario.IdUniversidad,
            Nombres: usuario.Nombres,
            QuienSoy: usuario.QuienSoy,
            Telefono: usuario.Telefono,
            URLPhoto: usuario.URLPhoto,
            FechaModificacion: new Date().toISOString(),
            Estado: usuario.Estado
        });
    };
    UsuarioService.prototype.pushFileToStorage = function (key, keyImagen, fileUpload, progress) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var uploadTask = storageRef.child("/Usuarios/" + key + "." + fileUpload.file.name.split('.')[1]).put(fileUpload.file);
        uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                //actualiza la url de la imagen del proyecto
                firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("Usuarios/" + key + "/" + keyImagen).update({
                    URLPhoto: "" + downloadURL
                });
            });
        });
    };
    UsuarioService.prototype.getFileUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.fileUploads = this.db.list('/Usuarios');
        return this.fileUploads;
    };
    UsuarioService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.$key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UsuarioService.prototype.deleteFileDatabase = function (key) {
        return this.db.list("/Usuarios/").remove(key);
    };
    UsuarioService.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        storageRef.child("/Usuarios/" + name).delete();
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/validators/email.ts":
/*!*********************************!*\
  !*** ./src/validators/email.ts ***!
  \*********************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (texto) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(texto);
        if (re) {
            return true;
        }
        return false;
    };
    return EmailValidator;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\romerojuls\Desktop\Universidad\Proyecto\SembrandoPaz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map