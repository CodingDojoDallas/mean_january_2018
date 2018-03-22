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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary'>\n  <h1>{{ title }}</h1>\n</mat-toolbar>\n\n<app-gold></app-gold>\n<app-buildings></app-buildings>\n<app-messages></app-messages>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ninja Gold';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var toolbar_1 = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
var grid_list_1 = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
var card_1 = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
var button_1 = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
var list_1 = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
var buildings_component_1 = __webpack_require__("./src/app/buildings/buildings.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var gold_component_1 = __webpack_require__("./src/app/gold/gold.component.ts");
var gold_service_1 = __webpack_require__("./src/app/gold.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                buildings_component_1.BuildingsComponent,
                messages_component_1.MessagesComponent,
                gold_component_1.GoldComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                toolbar_1.MatToolbarModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                list_1.MatListModule
            ],
            providers: [gold_service_1.GoldService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/buildings/buildings.component.css":
/***/ (function(module, exports) {

module.exports = ".building-card {\r\n  width: 200px;\r\n  display: inline-block;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/buildings/buildings.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let building of buildings\" class=\"building-card\">\n  <mat-card-title>{{ building.name }}</mat-card-title>\n  <mat-card-content>\n    {{ building.minGold }} to {{ building.maxGold }} gold!\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\"\n      (click)=\"updateGold(building)\"\n    >\n    {{ building.name }}!\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/buildings/buildings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var default_buildings_1 = __webpack_require__("./src/app/buildings/default-buildings.ts");
var gold_service_1 = __webpack_require__("./src/app/gold.service.ts");
var BuildingsComponent = /** @class */ (function () {
    function BuildingsComponent(_goldService) {
        this._goldService = _goldService;
        this.buildings = default_buildings_1.BUILDINGS;
    }
    BuildingsComponent.prototype.ngOnInit = function () {
    };
    BuildingsComponent.prototype.updateGold = function (building) {
        this._goldService.updateGold(building);
    };
    BuildingsComponent = __decorate([
        core_1.Component({
            selector: 'app-buildings',
            template: __webpack_require__("./src/app/buildings/buildings.component.html"),
            styles: [__webpack_require__("./src/app/buildings/buildings.component.css")]
        }),
        __metadata("design:paramtypes", [gold_service_1.GoldService])
    ], BuildingsComponent);
    return BuildingsComponent;
}());
exports.BuildingsComponent = BuildingsComponent;


/***/ }),

/***/ "./src/app/buildings/default-buildings.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BUILDINGS = [
    { name: 'Farm', minGold: 2, maxGold: 5 },
    { name: 'Cave', minGold: 5, maxGold: 10 },
    { name: 'House', minGold: 7, maxGold: 15 },
    { name: 'Casino', minGold: -100, maxGold: 100 }
];


/***/ }),

/***/ "./src/app/gold.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var message_1 = __webpack_require__("./src/app/messages/message.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var GoldService = /** @class */ (function () {
    function GoldService(_http) {
        this._http = _http;
        this.goldCount = { gold: 0 };
        this.messages = [];
    }
    GoldService.prototype.retrieveGold = function () {
        return this.goldCount;
    };
    GoldService.prototype.retrieveMessages = function () {
        return this.messages;
    };
    GoldService.prototype.updateGold = function (building) {
        var message = new message_1.Message;
        message.building = building.name;
        message.gold = this.randomNumber(building.minGold, building.maxGold);
        this.addMessage(message);
        this.goldCount.gold += message.gold;
    };
    GoldService.prototype.addMessage = function (message) {
        var _this = this;
        this._http.post('/messages', message).subscribe(function (savedMessage) {
            _this.messages.push(savedMessage);
        }, function (error) { return console.log(error); });
    };
    GoldService.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GoldService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GoldService);
    return GoldService;
}());
exports.GoldService = GoldService;


/***/ }),

/***/ "./src/app/gold/gold.component.css":
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/gold/gold.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Gold Count</mat-card-title>\n  <h1>{{ goldCount.gold }}</h1>\n</mat-card>"

/***/ }),

/***/ "./src/app/gold/gold.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var gold_service_1 = __webpack_require__("./src/app/gold.service.ts");
var GoldComponent = /** @class */ (function () {
    function GoldComponent(_goldService) {
        this._goldService = _goldService;
        this.goldCount = { gold: null };
    }
    GoldComponent.prototype.ngOnInit = function () {
        this.goldCount = this._goldService.retrieveGold();
    };
    GoldComponent = __decorate([
        core_1.Component({
            selector: 'app-gold',
            template: __webpack_require__("./src/app/gold/gold.component.html"),
            styles: [__webpack_require__("./src/app/gold/gold.component.css")]
        }),
        __metadata("design:paramtypes", [gold_service_1.GoldService])
    ], GoldComponent);
    return GoldComponent;
}());
exports.GoldComponent = GoldComponent;


/***/ }),

/***/ "./src/app/messages/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin-top: 20px;\r\n}\r\n\r\n.red {\r\n  color: #f44336;\r\n}\r\n\r\n.green {\r\n  color: #4CAF50;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Adventure Log</mat-card-title>\n  <mat-card-content [style.overflow]=\"'auto'\" [style.height.px]=\"'104'\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let message of messages\">\n        <span *ngIf=\"message.gold > 0\" class=\"green\">You earned {{ message.gold }} gold at the {{ message.building }}!</span>\n        <span *ngIf=\"message.gold < 0\" class=\"red\">You lost {{ message.gold }} gold at the {{ message.building }}!</span>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var gold_service_1 = __webpack_require__("./src/app/gold.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(_goldService) {
        this._goldService = _goldService;
        this.messages = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagesComponent.prototype.getMessages = function () {
        this.messages = this._goldService.retrieveMessages();
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [gold_service_1.GoldService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map