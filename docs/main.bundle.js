webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_screen_landing_screen_component__ = __webpack_require__("./src/app/landing-screen/landing-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__venue_screen_venue_component__ = __webpack_require__("./src/app/venue-screen/venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_item_details_item_details_component__ = __webpack_require__("./src/app/components/item-details/item-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_empty_component__ = __webpack_require__("./src/app/components/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_place_order_place_order_component__ = __webpack_require__("./src/app/components/place-order/place-order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__landing_screen_landing_screen_component__["a" /* LandingScreenComponent */], pathMatch: 'full' },
    { path: 'venue/:code', component: __WEBPACK_IMPORTED_MODULE_3__venue_screen_venue_component__["a" /* VenueScreenComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_empty_empty_component__["a" /* EmptyComponent */], pathMatch: 'full', data: { mode: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].MENU_MODE } },
            { path: 'food-item-details/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_item_details_item_details_component__["a" /* ItemDetailsComponent */], data: { mode: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].ITEM_DETAILS_MODE } },
            { path: 'tray-item-details', component: __WEBPACK_IMPORTED_MODULE_4__components_item_details_item_details_component__["a" /* ItemDetailsComponent */], data: { mode: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].ITEM_DETAILS_MODE } },
            { path: 'tray', component: __WEBPACK_IMPORTED_MODULE_5__components_empty_empty_component__["a" /* EmptyComponent */], data: { mode: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].TRAY_MODE } },
            { path: 'place-order', component: __WEBPACK_IMPORTED_MODULE_7__components_place_order_place_order_component__["a" /* PlaceOrderComponent */], data: { mode: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].PLACE_ORDER_MODE } },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enter_venue_code_enter_venue_code_component__ = __webpack_require__("./src/app/enter-venue-code/enter-venue-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_screen_landing_screen_component__ = __webpack_require__("./src/app/landing-screen/landing-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__venue_service__ = __webpack_require__("./src/app/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__venue_screen_venue_component__ = __webpack_require__("./src/app/venue-screen/venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_image_image_component__ = __webpack_require__("./src/app/components/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_item_details_item_details_component__ = __webpack_require__("./src/app/components/item-details/item-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_empty_empty_component__ = __webpack_require__("./src/app/components/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_price_json_pipe__ = __webpack_require__("./src/app/pipes/price-json.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_chip_chip_component__ = __webpack_require__("./src/app/components/chip/chip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tray_list_item_tray_list_item_component__ = __webpack_require__("./src/app/components/tray-list-item/tray-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_place_order_place_order_component__ = __webpack_require__("./src/app/components/place-order/place-order.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__enter_venue_code_enter_venue_code_component__["a" /* EnterVenueCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__landing_screen_landing_screen_component__["a" /* LandingScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__venue_screen_venue_component__["a" /* VenueScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_image_image_component__["a" /* ImageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_item_details_item_details_component__["a" /* ItemDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_empty_empty_component__["a" /* EmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_price_json_pipe__["a" /* PriceJsonPipe */],
                __WEBPACK_IMPORTED_MODULE_15__components_chip_chip_component__["a" /* ChipComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_tray_list_item_tray_list_item_component__["a" /* TrayListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_place_order_place_order_component__["a" /* PlaceOrderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__venue_service__["a" /* VenueService */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chip/chip.component.css":
/***/ (function(module, exports) {

module.exports = ".chip-container{\n    font-size: 14px;\n    border:1px solid #a1a1a1;\n    display:inline-block;\n    border-radius:6px;\n    margin-bottom: 5px;\n}\n\n.chip-container.active{\n    border-color: #00d449;\n    color: #00d449;;\n}\n\n.chip-container .chip{\n    display: inline-block;\n    padding: 5px;\n    margin:0;\n    border-radius: 3px;\n    background: #a1a1a1;\n    color: #fff;\n}\n\n.chip-container.active .chip {\n    background: #00d449;\n}"

/***/ }),

/***/ "./src/app/components/chip/chip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chip-container\" [ngClass]=\"{active:isActive}\">\n  <div class=\"chip\">{{name}}</div><span *ngIf=\"price>0\">&nbsp;<span *ngIf=\"isAdditional\">+</span>${{price}} &nbsp;</span>\n</div>"

/***/ }),

/***/ "./src/app/components/chip/chip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChipComponent = /** @class */ (function () {
    function ChipComponent() {
        this.price = 0;
        this.isAdditional = false;
    }
    ChipComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('active'),
        __metadata("design:type", Boolean)
    ], ChipComponent.prototype, "isActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", String)
    ], ChipComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('price'),
        __metadata("design:type", Object)
    ], ChipComponent.prototype, "price", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isAdditional'),
        __metadata("design:type", Object)
    ], ChipComponent.prototype, "isAdditional", void 0);
    ChipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chip',
            template: __webpack_require__("./src/app/components/chip/chip.component.html"),
            styles: [__webpack_require__("./src/app/components/chip/chip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChipComponent);
    return ChipComponent;
}());



/***/ }),

/***/ "./src/app/components/empty/empty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
    };
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-empty',
            template: '',
        }),
        __metadata("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/components/image/image.component.css":
/***/ (function(module, exports) {

module.exports = ".thumbnail{\n    display: block;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}"

/***/ }),

/***/ "./src/app/components/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\" [style.height.px]=\"height\" [style.background-image]=\"'url('+src+')'\" #image></div>"

/***/ }),

/***/ "./src/app/components/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageComponent = /** @class */ (function () {
    function ImageComponent(el) {
        this.el = el;
        this.src = 'nothing';
        this.ratio = 0.698;
        this.height = 0;
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        setTimeout(function () {
            self.height = self.ratio * self.image.nativeElement.offsetWidth;
        }, 3);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('image'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ImageComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('src'),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('ratio'),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "ratio", void 0);
    ImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image',
            template: __webpack_require__("./src/app/components/image/image.component.html"),
            styles: [__webpack_require__("./src/app/components/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/components/item-details/item-details.component.css":
/***/ (function(module, exports) {

module.exports = "#root{\n    position: fixed;\n    z-index: 5000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom:0;\n    padding: 15px;\n    background: #fff;\n    overflow-y: scroll;\n}\n\n.thumbnail{\n\n}\n\nh1{\n    font-size: 21px;\n    padding: 0;\n    margin: 0;\n}\n\n.description p{\n    line-height: 18px;\n    font-size: 13px;\n    margin: 0;\n}\n\n.variation-title{\n\n}\n\n.btn{\n    background: rgba(0,0,0,0);\n    margin-top: 15px;\n    width: 100%;\n    text-align: center;\n    border:thin solid;\n    font-size: 13px;\n    padding: 5px 0;\n    font-weight: 300;\n}\n\n.btn-left {\n    border-radius: 5px 0 0 5px;\n    /*border-right: none;*/\n}\n\n.btn-right{\n    border-radius: 0 5px 5px 0;\n    border-left: #999 1px solid;\n}\n\n.description{\n    padding-left: 15px;\n}\n\n.notes{\n    margin-top: 5px;\n    width: 100%;\n    border-left: none;\n    border-right: none;\n    font-size: 17px;\n    min-height: 70px;\n}"

/***/ }),

/***/ "./src/app/components/item-details/item-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation] id=\"root\">\n<div class=\"row no-gutters\">\n\n  <div class=\"col col-5\">\n    <app-image class=\"thumbnail\" [src]=\"'https://oneorder.com.au/storage/'+item?.image?.path\"></app-image>\n  </div>\n  <div class=\"col col-7 description\">\n    <h1 class=\"color-dark-grey\">{{item?.name}}</h1>\n    <p>{{item?.description}}</p>\n  </div>\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-12 chips-collection\">\n      <app-chip *ngFor=\"let price of item?.price|priceJson\" (click)=\"trayItem.size=price.key\" [active]=\"trayItem.size==price.key\" [name]=\"price.name\" [price]=\"price.price\"></app-chip>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div *ngFor=\"let option of item?.options|priceJson\">\n        <span class=\"variation-title color-dark-grey\">{{option.name}}</span>\n        <div class=\"chips-collection\" >\n          <app-chip *ngFor=\"let variation of option.variations\" (click)=\"trayItem.options[option.id]=variation.id\" [active]=\"trayItem.options[option.id]==variation.id\" [isAdditional]=\"true\" [name]=\"variation.name\" [price]=\"variation.price[trayItem.size]\"></app-chip>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <textarea class=\"border-light-grey notes\" placeholder=\"Add special notes - if any\" [(ngModel)]=\"trayItem.notes\"></textarea>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row no-gutters\">\n    <div class=\"col-3 color-dark-grey\">Quantity:</div>\n    <div class=\"col-1 text-center color-dark-grey\"><i (click)=\"addQuantity(-1)\" class=\"fa fa-lg fa-minus-circle\"></i></div>\n    <div class=\"col-2 text-center color-dark-grey\">{{trayItem.quantity}}</div>\n    <div class=\"col-1 text-center color-dark-grey\"><i (click)=\"addQuantity(1)\" class=\"fa fa-lg fa-plus-circle\"></i></div>\n    <div class=\"col-5 text-center color-dark-grey\"> Total: ${{trayItem.price}}</div>\n  </div>\n  <div *ngIf=\"!isUpdateItem\" class=\"row no-gutters\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-left color-tomato\" (click)=\"goBack()\">Close</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-right color-green\"  (click)=\"add()\">Add</button>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"isUpdateItem\" class=\"row no-gutters\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-left color-tomato\" (click)=\"remove()\">Remove</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-right color-green\" (click)=\"goBack()\">Ok</button>\n    </div>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/item-details/item-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tray_service__ = __webpack_require__("./src/app/services/tray.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tray_item__ = __webpack_require__("./src/app/models/tray-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(trayService, route, activatedRoute, location) {
        this.trayService = trayService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.itemId = this.activatedRoute.snapshot.params['id'];
        this.trayItem = this.trayService.item || new __WEBPACK_IMPORTED_MODULE_4__models_tray_item__["a" /* TrayItem */]();
    };
    ItemDetailsComponent.prototype.goBack = function () {
        if (this.isUpdateItem) {
            this.route.navigate(['../tray'], { relativeTo: this.activatedRoute });
        }
        else {
            this.route.navigate(['../../'], { relativeTo: this.activatedRoute });
        }
    };
    Object.defineProperty(ItemDetailsComponent.prototype, "item", {
        get: function () {
            if (this.trayItem.foodItem) {
                return this.trayItem.foodItem;
            }
            else if (this.trayService.allItems[this.itemId]) {
                this.trayItem.foodItem = this.trayService.allItems[this.itemId];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDetailsComponent.prototype, "isUpdateItem", {
        get: function () {
            if (this.itemId) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ItemDetailsComponent.prototype.add = function () {
        this.trayItem.foodItem = this.item;
        this.trayService.items.push(this.trayItem);
        this.goBack();
    };
    ItemDetailsComponent.prototype.remove = function () {
        var index = this.trayService.items.indexOf(this.trayItem);
        this.trayService.items.splice(index, 1);
        this.goBack();
    };
    ItemDetailsComponent.prototype.addQuantity = function (quantity) {
        if (this.trayItem.quantity + quantity > 0) {
            this.trayItem.quantity += quantity;
        }
    };
    ItemDetailsComponent.prototype.ngOnDestroy = function () {
        this.trayService.item = null;
    };
    ItemDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-details',
            template: __webpack_require__("./src/app/components/item-details/item-details.component.html"),
            styles: [__webpack_require__("./src/app/components/item-details/item-details.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tray_service__["a" /* TrayService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/place-order/place-order.component.css":
/***/ (function(module, exports) {

module.exports = "#root{\n    position: fixed;\n    z-index: 5000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom:0;\n    padding: 15px;\n    background: #fff;\n    overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/components/place-order/place-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"root\">\n  <p>\n    {{trayService.items|json}}\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/place-order/place-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tray_service__ = __webpack_require__("./src/app/services/tray.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(trayService) {
        this.trayService = trayService;
    }
    PlaceOrderComponent.prototype.ngOnInit = function () {
    };
    PlaceOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-place-order',
            template: __webpack_require__("./src/app/components/place-order/place-order.component.html"),
            styles: [__webpack_require__("./src/app/components/place-order/place-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tray_service__["a" /* TrayService */]])
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/tray-list-item/tray-list-item.component.css":
/***/ (function(module, exports) {

module.exports = ".tray-item-container{\n    padding: 5px;\n    background-color:#fff ;\n    margin-bottom: 1px;\n}\n\n.food-title{\n    font-size: 16px;\n    font-weight:400;\n}\n\n.food-selections{\n    font-size: 14px;\n}\n\n.food-selections span:not(:last-of-type):after{\n    content: ',';\n}\n\n.details{\n    position: relative;\n    padding-left: 5px;\n}\n\n.quantity-price{\n    font-size: 14px;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\n.price{\n    font-weight: 500;\n    margin-right: 15px;\n}"

/***/ }),

/***/ "./src/app/components/tray-list-item/tray-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters tray-item-container\">\n  <div class=\"col-4\">\n    <app-image [src]=\"'https://oneorder.com.au/storage/'+trayItem.foodItem.image?.path\">hjgjh</app-image>\n  </div>\n  <div class=\"col-8 details\">\n    <div class=\"food-title\"> {{trayItem.foodItem.name}}</div>\n    <div class=\"food-selections color-dark-grey\">\n      <span>{{trayItem.foodItem.price[trayItem.size].name||trayItem.size}}</span>\n      <span *ngFor=\"let option of trayItem.selectedOptions\"> {{trayItem.allOptions[option.value].option.name}}- {{trayItem.allOptions[option.value].variation.name}} </span>\n    </div>\n    <div class=\"quantity-price\">\n      <span class=\"quantity\">Quantity: {{trayItem.quantity}}</span>\n      <span class=\"pull-right price\">${{trayItem.price}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tray-list-item/tray-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrayListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tray_item__ = __webpack_require__("./src/app/models/tray-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrayListItemComponent = /** @class */ (function () {
    function TrayListItemComponent() {
    }
    TrayListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('trayItem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tray_item__["a" /* TrayItem */])
    ], TrayListItemComponent.prototype, "trayItem", void 0);
    TrayListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tray-list-item',
            template: __webpack_require__("./src/app/components/tray-list-item/tray-list-item.component.html"),
            styles: [__webpack_require__("./src/app/components/tray-list-item/tray-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrayListItemComponent);
    return TrayListItemComponent;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.MENU_MODE = 1;
    Constants.TRAY_MODE = 2;
    Constants.ITEM_DETAILS_MODE = 3;
    Constants.PLACE_ORDER_MODE = 4;
    return Constants;
}());



/***/ }),

/***/ "./src/app/enter-venue-code/enter-venue-code.component.css":
/***/ (function(module, exports) {

module.exports = "\n.input-container{\n    margin-left:20px;\n    margin-right:20px;\n}\ninput{\n    width: 100%;\n}\n.locate-venue-code{\n\n}\n.locate-venue-code .search-results{\n    position: absolute;\n}"

/***/ }),

/***/ "./src/app/enter-venue-code/enter-venue-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-container\">\n    <div class=\"row\">\n        Enter Venue code\n    </div>\n    <form (ngSubmit)=\"submitForm()\">\n    <div class=\"row\">\n        <input [(ngModel)]=\"venueCode\" name=\"code\"  type=\"text\" placeholder=\"Venue Code\">\n        <button>ad</button>\n    </div>\n    </form>\n    <div class=\"row\">\n        Find venue code\n    </div>\n    <div class=\"row locate-venue-code\">\n        <button *ngIf=\"!showNearbyVenue\" class=\"button\" (click)=\"locateVenueCode()\">Find venue code</button>\n        <div class=\"search-results\" *ngIf=\"showNearbyVenue\">\n            <span *ngIf=\"loadingNearbyVenue\">Looking for nearby locations...</span>\n            <span *ngIf=\"!loadingNearbyVenue && nearby.length == 0\">No nearby places found</span>\n            <ul *ngIf=\"!loadingNearbyVenue\">\n                <li *ngFor=\"let venue of nearby\">{{venue.name}}</li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/enter-venue-code/enter-venue-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterVenueCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__venue_service__ = __webpack_require__("./src/app/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnterVenueCodeComponent = /** @class */ (function () {
    function EnterVenueCodeComponent(venueService, router) {
        this.venueService = venueService;
        this.router = router;
        this.nearby = [];
        this.showNearbyVenue = false;
        this.loadingNearbyVenue = false;
    }
    EnterVenueCodeComponent.prototype.ngOnInit = function () { };
    EnterVenueCodeComponent.prototype.locateVenueCode = function () {
        var self = this;
        this.showNearbyVenue = true;
        this.loadingNearbyVenue = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            var location = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude };
            self.venueService.getVenuesByLocation(location).then(function (resp) {
                self.nearby = resp;
                self.loadingNearbyVenue = false;
            });
        });
    };
    EnterVenueCodeComponent.prototype.submitForm = function () {
        console.log(this.venueCode);
        this.router.navigate(['/venue/' + this.venueCode]);
    };
    EnterVenueCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-enter-venue-code',
            template: __webpack_require__("./src/app/enter-venue-code/enter-venue-code.component.html"),
            styles: [__webpack_require__("./src/app/enter-venue-code/enter-venue-code.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], EnterVenueCodeComponent);
    return EnterVenueCodeComponent;
}());



/***/ }),

/***/ "./src/app/landing-screen/landing-screen.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    font-size: 16px;\n}\nh2{\n    font-size: 13px;\n}\nh1,h2{\n    text-align: center;\n}\n.half{\n    overflow: auto;\n    height: 50vh\n}\nul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    text-align: center;\n\n}\nul li {\n    font-size: 20px;\n    padding: 20px 0;\n    border-top: 1px solid #999;\n}\nul li:last-of-type{\n\n    border-bottom: 1px solid #999;\n}"

/***/ }),

/***/ "./src/app/landing-screen/landing-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"half\">\n  <h1>OneOrder</h1>\n  <h2>Ordering from table made it simple</h2>\n\n  <app-enter-venue-code></app-enter-venue-code>\n</div>\n<div class=\"half\">\n  <ul>\n    <li>What in OneOrder</li>\n    <li>What is Venue Code</li>\n    <li>How this works</li>\n    <li>Terms</li>\n    <li>Questions</li>\n    <li>Contact</li>\n    <li>Rate and Review</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/landing-screen/landing-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingScreenComponent = /** @class */ (function () {
    function LandingScreenComponent() {
    }
    LandingScreenComponent.prototype.ngOnInit = function () {
    };
    LandingScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-screen',
            template: __webpack_require__("./src/app/landing-screen/landing-screen.component.html"),
            styles: [__webpack_require__("./src/app/landing-screen/landing-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingScreenComponent);
    return LandingScreenComponent;
}());



/***/ }),

/***/ "./src/app/models/tray-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrayItem; });
var TrayItem = /** @class */ (function () {
    function TrayItem() {
        this.size = 'small';
        this.quantity = 1;
        this.options = {};
        this.notes = '';
    }
    Object.defineProperty(TrayItem.prototype, "selectedOptions", {
        get: function () {
            var resp = [];
            for (var _i = 0, _a = Object.keys(this.options); _i < _a.length; _i++) {
                var id = _a[_i];
                resp.push({ id: id, value: this.options[id] });
            }
            return resp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrayItem.prototype, "allOptions", {
        get: function () {
            var resp = {};
            for (var _i = 0, _a = this.foodItem.options; _i < _a.length; _i++) {
                var option = _a[_i];
                for (var _b = 0, _c = option.variations; _b < _c.length; _b++) {
                    var variation = _c[_b];
                    resp[variation.id] = { variation: variation, option: option };
                }
            }
            return resp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrayItem.prototype, "price", {
        get: function () {
            return this.quantity * this.unitPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrayItem.prototype, "unitPrice", {
        get: function () {
            var price = +this.foodItem.price[this.size].price;
            var allOptions = this.allOptions;
            for (var _i = 0, _a = this.selectedOptions; _i < _a.length; _i++) {
                var option = _a[_i];
                price += +(allOptions[option.value].variation.price[this.size]);
            }
            return price;
        },
        enumerable: true,
        configurable: true
    });
    return TrayItem;
}());



/***/ }),

/***/ "./src/app/pipes/price-json.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceJsonPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PriceJsonPipe = /** @class */ (function () {
    function PriceJsonPipe() {
    }
    PriceJsonPipe.prototype.transform = function (value, args) {
        if (!value) {
            return [];
        }
        var res = [];
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var key = _a[_i];
            var price = JSON.parse(JSON.stringify(value[key]));
            price.key = key;
            price.name = price.name || key;
            res.push(price);
        }
        return res;
    };
    PriceJsonPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'priceJson'
        })
    ], PriceJsonPipe);
    return PriceJsonPipe;
}());



/***/ }),

/***/ "./src/app/services/tray.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrayService = /** @class */ (function () {
    function TrayService() {
        this.item = null;
        this.allItems = {};
        this.items = [];
    }
    Object.defineProperty(TrayService.prototype, "totalCost", {
        get: function () {
            var total = 0;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                total += item.price;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrayService.prototype, "totalItems", {
        get: function () {
            var total = 0;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                total += item.quantity;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    TrayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TrayService);
    return TrayService;
}());



/***/ }),

/***/ "./src/app/venue-screen/venue.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\n    background-color: #e7e7e7;\n}\n\n.header{\n    -webkit-box-shadow: #999999 0 0 1px 1px;\n            box-shadow: #999999 0 0 1px 1px;\n    z-index: 1000;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    padding: 5px 0;\n    color: #fff;\n    text-align: center;\n}\n\n#header-gap{\n    height: 50px;\n}\n\n#content-wrapper{\n    overflow: scroll;\n    height: calc(100vh - 100px);\n}\n\nh1{\n    margin: 0;\n    padding: 5px;\n    font-size: 18px;\n}\n\nul{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul.category{\n    margin-top:10px;\n}\n\nul.category .category-name{\n    padding:10px 5px;\n    margin-left: 0px;\n}\n\nul.category > li{\n    margin-bottom: 1px;\n    background-color: #fff;\n}\n\nul.items{\n    padding: 0px;\n    background-color: #e7e7e7;\n    overflow: hidden;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n\n}\n\nul.items > li{\n    background-color: #fff;\n    margin-top: 1px;\n    /*box-shadow: #ccc 0px 0px 1px 1px;*/\n}\n\nul.items > li:last-of-type{\n    margin-bottom: 2px;\n}\n\n.item-details{\n    padding: 5px 5px 5px 5px;\n}\n\n.item-details .image-container{\n    display: block;\n    float: left;\n}\n\n.item-details .content{\n    position: relative;\n    display: block;\n    padding-left: 5px;\n    float: left;\n}\n\n.food-title{\n    font-size: 16px;\n    font-weight:400;\n}\n\n.food-description{\n    font-size: 14px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.food-price{\n    position: absolute;\n    bottom: 0;\n}\n\n#footer{\n    border-right: none;\n    border-left: none;\n    border-bottom: none;\n    padding-top: 5px;\n    background-color: #fff;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n#footer .icons{\n    position: relative;\n    width: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\n\nimg{\n    max-width: 100%;\n}\n\n#tray-items-count{\n    position: absolute;\n    color: #fff;\n    background: Tomato;\n    padding: 1px 5px;\n    border-radius: 1000px;\n    top:5px;\n    right: 5px;\n    -webkit-transform: translate(50%,-50%);\n            transform: translate(50%,-50%);\n    font-size: 13px;\n}\n\n.tray-items{\n    margin-top: 10px;\n}\n\n.tray-no-items{\n font-size: 14px;\n    line-height: 18px;\n}\n\n.total-price{\n    margin: 10px 15px;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.btn-proceed{\n    font-size: 16px;\n    width: 100%;\n    padding: 10px 0;\n    border: 1px solid;\n}\n\n.clearfix{\n    clear: both;\n}"

/***/ }),

/***/ "./src/app/venue-screen/venue.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"venueLoading\">\n  Please wait, Loading venue details\n</div>\n\n<div class=\"cont\" *ngIf=\"venueLoaded\">\n  <div class=\"header bg-dark-blue\">\n  <span class=\"fa-stack fa-sm pull-right\">\n    <i class=\"fa fa-circle-o fa-stack-1x\" style=\"font-size: 21px\"></i>\n    <i class=\"fa fa-info fa-stack-1x fa-inverse\" style=\"font-size: 12px\"></i>\n  </span>\n    <h1>{{venue.name}}</h1>\n  </div>\n  <div id=\"header-gap\"></div>\n  <div id=\"content-wrapper\">\n    <ul class=\"category\" [hidden]=\"mode != Constants.MENU_MODE\">\n      <li *ngFor=\"let category of venue.categories\" [hidden]=\"category.items.length == 0\">\n        <div class=\"category-name\" (click)=\"expand(category)\">{{category.name}}</div>\n        <ul class=\"items\" [@enterAnimation] *ngIf=\"category.expanded\">\n          <li *ngFor=\"let item of category.items\" (click)=\"showDetailsFor(item)\">\n            <div class=\" row item-details no-gutters\">\n              <div class=\"col-5 image-container\">\n                <app-image [src]=\"'https://oneorder.com.au/storage/'+item.image?.path\"></app-image>\n              </div>\n              <div class=\" col-7 content\">\n                <div class=\"food-title\"> {{item.name}}</div>\n                <div class=\"food-description color-dark-grey\"> {{item.description}}</div>\n                <div class=\"food-price\"> ${{item.price.small.price}}</div>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <div class=\"tray-items\" *ngIf=\"mode == Constants.TRAY_MODE\">\n      <div *ngIf=\"trayService.totalItems > 0\">\n        <app-tray-list-item (click)=\"trayItemDetails(item)\" *ngFor=\"let item of trayService.items\" [trayItem]=\"item\"></app-tray-list-item>\n        <div class=\"row no-gutters\">\n          <div class=\"col-6\"></div>\n          <div class=\"col-6\"><span class=\"pull-right total-price\">Total: ${{trayService.totalCost}}</span></div>\n        </div>\n        <div class=\"row no-gutters\">\n          <div class=\"col-12\">\n            <button (click)=\"placeOrder()\" class=\"btn-proceed text-center bg-white color-dark-blue\">Proceed</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center tray-no-items\" *ngIf=\"trayService.totalItems == 0\">\n        <span class=\" color-dark-grey\"><br> Please select items from <a routerLink=\"./\">Menu</a> to place order.</span>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row no-gutters border-grey\" id=\"footer\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n      <img class=\"icons\" (click)=\"showMenu()\"  src=\"/assets/images/menu.png\">\n    </div>\n    <div class=\"col-5\">\n      <div class=\"icons\" >\n        <span id=\"tray-items-count\" style=\"background-color: Tomato\">{{trayService.totalItems}}</span>\n        <img (click)=\"showtray()\"  src=\"/assets/images/tray.png\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/venue-screen/venue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venue_service__ = __webpack_require__("./src/app/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tray_service__ = __webpack_require__("./src/app/services/tray.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VenueScreenComponent = /** @class */ (function () {
    function VenueScreenComponent(activatedRoute, venueService, route, location, trayService) {
        this.activatedRoute = activatedRoute;
        this.venueService = venueService;
        this.route = route;
        this.location = location;
        this.trayService = trayService;
        this.venueLoading = false;
        this.venueLoaded = false;
        this.mode = __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].MENU_MODE;
        this.Constants = __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */];
    }
    VenueScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.venueCode = this.activatedRoute.snapshot.params['code'];
        this.venueLoading = true;
        this.venueService.getVenueByCode(this.venueCode).then(function (venue) {
            self.venue = venue;
            self.venueLoading = false;
            self.venueLoaded = true;
            self.storeItems();
        });
        this.mode = this.activatedRoute.firstChild.snapshot.data.mode || __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].MENU_MODE;
        this.route.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.mode = _this.activatedRoute.firstChild.snapshot.data.mode || __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].MENU_MODE;
        });
    };
    VenueScreenComponent.prototype.expand = function (category) {
        category.expanded = !category.expanded;
        for (var _i = 0, _a = this.venue.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat.expanded && cat.id !== category.id) {
                cat.expanded = false;
            }
        }
    };
    VenueScreenComponent.prototype.showDetailsFor = function (item) {
        this.route.navigate(['food-item-details/' + item.id], { relativeTo: this.activatedRoute });
    };
    VenueScreenComponent.prototype.trayItemDetails = function (item) {
        this.trayService.item = item;
        this.route.navigate(['tray-item-details/'], { relativeTo: this.activatedRoute });
    };
    VenueScreenComponent.prototype.showMenu = function () {
        if (this.mode === __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].MENU_MODE) {
            this.toggleExpansion();
        }
        else {
            this.goBack();
        }
    };
    VenueScreenComponent.prototype.goBack = function () {
        this.route.navigate(['./'], { relativeTo: this.activatedRoute });
    };
    VenueScreenComponent.prototype.toggleExpansion = function () {
        var counter = 0;
        var expanded = false;
        for (var _i = 0, _a = this.venue.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat.expanded) {
                counter++;
            }
            if (counter > 1) {
                expanded = true;
                break;
            }
        }
        for (var _b = 0, _c = this.venue.categories; _b < _c.length; _b++) {
            var cat = _c[_b];
            cat.expanded = expanded ? false : true;
        }
    };
    VenueScreenComponent.prototype.showtray = function () {
        this.route.navigate(['tray'], { relativeTo: this.activatedRoute });
    };
    VenueScreenComponent.prototype.placeOrder = function () {
        this.route.navigate(['place-order'], { relativeTo: this.activatedRoute });
    };
    VenueScreenComponent.prototype.storeItems = function () {
        for (var _i = 0, _a = this.venue.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            for (var _b = 0, _c = category.items; _b < _c.length; _b++) {
                var item = _c[_b];
                this.trayService.allItems[item.id] = item;
            }
        }
    };
    VenueScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-venue-screen',
            template: __webpack_require__("./src/app/venue-screen/venue.component.html"),
            styles: [__webpack_require__("./src/app/venue-screen/venue.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_tray_service__["a" /* TrayService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ height: '0', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ height: '150px', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ height: '100px', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ height: '0', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__venue_service__["a" /* VenueService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__services_tray_service__["a" /* TrayService */]])
    ], VenueScreenComponent);
    return VenueScreenComponent;
}());



/***/ }),

/***/ "./src/app/venue.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VenueService = /** @class */ (function () {
    function VenueService(http) {
        this.http = http;
        this.url = 'https://oneorder.com.au/api';
    }
    VenueService.prototype.getVenuesByLocation = function (location) {
        return this.http.get(this.url + '/nearby', { params: location }).toPromise();
    };
    VenueService.prototype.getVenueByCode = function (venueCode) {
        return this.http.get(this.url + '/venueDetails/' + venueCode, { params: { code: venueCode } }).toPromise();
    };
    VenueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VenueService);
    return VenueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map