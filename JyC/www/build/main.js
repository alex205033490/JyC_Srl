webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Prueba" tabIcon="logo-angular"></ion-tab>\n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.getFormatoFecha();
        this.getcodigoOferta();
    }
    AboutPage.prototype.getcodigoOferta = function () {
        this.codigoOferta = 'Numero:' + ' ' + '1';
    };
    AboutPage.prototype.getFormatoFecha = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var mes = dateObj.getMonth().toString();
        var dia = dateObj.getDate().toString();
        var mesArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.formatoFecha = dia + '/' + mesArray[mes] + '/' + year;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>\n\n      <h1>R - 101</h1>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label>Creacion</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label>{{formatoFecha}}</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label>{{codigoOferta}}</ion-label>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>      \n\n\n\n  <ion-item>\n\n\n\n    <ion-label>Responsable</ion-label>\n\n  \n\n    <ion-select [(ngModel)]="Responsable">\n\n      <ion-option value="0">Juan Perez</ion-option>\n\n      <ion-option value="1">Luis Felipe Mayta Arandia</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n<accordion-obra> </accordion-obra>\n\n<accordion-cliente> </accordion-cliente>\n\n\n\n\n\n\n\n<ion-item>\n\n  <button color="secondary" ion-button icon-end>\n\n    Crear R-102\n\n    <ion-icon name="md-add-circle"></ion-icon>\n\n  </button>\n\n</ion-item>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title >\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.loginpage1 = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">    \n\n    <ion-title  >MENU</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>  \n\n    <img src="assets/imgs/JYC_logo.png" class="img1" >     \n\n\n\n \n\n    <ion-list>\n\n      \n\n       <ion-item [navPush]="loginpage1" >\n\n          <ion-icon name="people" item-start></ion-icon>\n\n            COMERCIAL\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="construct" item-start></ion-icon>\n\n            PROYECTOS\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n            ADMINISTRATIVO\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="call" item-start></ion-icon>\n\n            CALL-CENTER\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="md-cash" item-start></ion-icon>\n\n            COBRANZA\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="clipboard" item-start></ion-icon>\n\n            ENCUESTA\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      \n\n      <ion-item [navPush]="loginpage1">\n\n          <ion-icon name="pin" item-start></ion-icon>\n\n            LOCALIZACION-GPS\n\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <br/>\n\n   \n\n       <h1>CALL-CENTER 800-121213</h1> \n\n   \n\n    <p>\n\n    llamada Gratuita 24hrs.\n\n  </p>\n\n  \n\n \n\n  \n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_accordion_obra_accordion_obra__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_accordion_cliente_accordion_cliente__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_accordion_cliente_accordion_cliente__["a" /* AccordionClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_accordion_obra_accordion_obra__["a" /* AccordionObraComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionObraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionObraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionObraComponent = /** @class */ (function () {
    function AccordionObraComponent(renderer) {
        this.renderer = renderer;
        this.accordionObraComponent = false;
    }
    AccordionObraComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    };
    AccordionObraComponent.prototype.toggleAccordion = function () {
        if (this.accordionObraComponent) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionObraComponent = !this.accordionObraComponent;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionObraComponent.prototype, "cardContent", void 0);
    AccordionObraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion-obra',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\components\accordion-obra\accordion-obra.html"*/'<ion-card>\n\n\n\n    <ion-card-header (click)="toggleAccordion()">\n\n      Datos de la Obra\n\n    </ion-card-header>\n\n  \n\n    <ion-card-content #cc>\n\n        <ion-grid>  \n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-label>Nombre del Edificio</ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n              </ion-col>\n\n            </ion-row>\n\n    \n\n            <ion-row>\n\n                <ion-col>\n\n                 <ion-label>Ciudad</ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-select [(ngModel)]="Ciudad">\n\n                       <ion-option value="0">Santa Cruz</ion-option>\n\n                       <ion-option value="1">Cochabamba</ion-option>\n\n                       <ion-option value="2">La Paz</ion-option>\n\n                       <ion-option value="3">Oruro</ion-option>\n\n                       <ion-option value="4">Beni</ion-option>\n\n                       <ion-option value="5">Pando</ion-option>\n\n                       <ion-option value="6">Tarija</ion-option>\n\n                       <ion-option value="7">Chuquisaca</ion-option>\n\n                       <ion-option value="8">Potosi</ion-option>\n\n                  </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n    \n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-label>Direccion</ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n              </ion-col>\n\n\n\n            </ion-row>\n\n    \n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-label>Zona</ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n              </ion-col>\n\n            </ion-row>\n\n            \n\n            <ion-grid>\n\n              <ion-row>\n\n                  <ion-col>\n\n                      <button color="secondary" ion-button icon-end>\n\n                          Agregar Ubicacion (Opcional)\n\n                          <ion-icon name="md-map"></ion-icon>\n\n                        </button>\n\n                  </ion-col>\n\n\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            \n\n          </ion-grid>\n\n    </ion-card-content>\n\n  \n\n  </ion-card>'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\components\accordion-obra\accordion-obra.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionObraComponent);
    return AccordionObraComponent;
}());

//# sourceMappingURL=accordion-obra.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionClienteComponent = /** @class */ (function () {
    function AccordionClienteComponent(renderer) {
        this.renderer = renderer;
        this.accordionClienteExapanded = false;
    }
    AccordionClienteComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    };
    AccordionClienteComponent.prototype.toggleAccordionCliente = function () {
        if (this.accordionClienteExapanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionClienteExapanded = !this.accordionClienteExapanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionClienteComponent.prototype, "cardContent", void 0);
    AccordionClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion-cliente',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\components\accordion-cliente\accordion-cliente.html"*/'<ion-card>\n\n    <ion-card-header (click)="toggleAccordionCliente()">\n\n         Datos del Cliente\n\n    </ion-card-header>\n\n      \n\n    <ion-card-content #cc>\n\n      <ion-grid>\n\n          <ion-row>\n\n              <ion-col>\n\n                <ion-label>Nombre</ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n              </ion-col>\n\n            </ion-row>\n\n  \n\n            <ion-row>\n\n                <ion-col>\n\n                  <ion-label>Correo</ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n                </ion-col>\n\n              </ion-row>\n\n  \n\n              <ion-row>\n\n                  <ion-col>\n\n                    <ion-label>Telefono Celular</ion-label>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <ion-input placeholder="Campo Obligatorio*"></ion-input>\n\n                  </ion-col>\n\n                </ion-row>\n\n  \n\n                <ion-row>\n\n                    <ion-col>\n\n                      <ion-label>Telefono Oficina</ion-label>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-input placeholder="Oficina"></ion-input>\n\n                    </ion-col>\n\n                  </ion-row>\n\n  \n\n            \n\n      </ion-grid>\n\n    </ion-card-content>\n\n  \n\n  </ion-card>'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\components\accordion-cliente\accordion-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionClienteComponent);
    return AccordionClienteComponent;
}());

//# sourceMappingURL=accordion-cliente.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title >login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <img src="assets/imgs/JYC_logo.png" >\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label>Username</ion-label>\n\n          <ion-input type="text" value=""></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label>Password</ion-label>\n\n          <ion-input type="password" value=""></ion-input>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n    \n\n      <div padding>\n\n        <button ion-button color="primary" block>Sign In</button>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Documentos\GitHub\JyC_Srl\jyc\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map