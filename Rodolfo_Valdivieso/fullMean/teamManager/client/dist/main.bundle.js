webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var player_component_1 = __webpack_require__("../../../../../src/app/player/player.component.ts");
var status_component_1 = __webpack_require__("../../../../../src/app/status/status.component.ts");
var player_create_component_1 = __webpack_require__("../../../../../src/app/player/player-create/player-create.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/player/player-list/player-list.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: player_component_1.PlayerComponent, children: [
            { path: '', pathMatch: 'full', component: player_list_component_1.PlayerListComponent }
        ] },
    { path: 'player', component: player_component_1.PlayerComponent, children: [
            { path: '', pathMatch: 'full', component: player_list_component_1.PlayerListComponent },
            { path: 'list', component: player_list_component_1.PlayerListComponent },
            { path: 'addplayer', component: player_create_component_1.PlayerCreateComponent },
        ] },
    { path: 'status/game/:id', component: status_component_1.StatusComponent }
];
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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\tbackground-color: whitesmoke;\r\n\tfont-family: arial;\r\n\tfont-size: 30px;\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a [routerLink]=\"['/player']\">Manage Players</a> |\n\t<a [routerLink]=\"['/status', 'game', '1']\">Manage Player Status</a>\n\n\t<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js"); // <-- Import HttpModule
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var player_service_1 = __webpack_require__("../../../../../src/app/player/player.service.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var player_component_1 = __webpack_require__("../../../../../src/app/player/player.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/player/player-list/player-list.component.ts");
var player_create_component_1 = __webpack_require__("../../../../../src/app/player/player-create/player-create.component.ts");
var status_component_1 = __webpack_require__("../../../../../src/app/status/status.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                player_component_1.PlayerComponent,
                player_list_component_1.PlayerListComponent,
                player_create_component_1.PlayerCreateComponent,
                status_component_1.StatusComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule
            ],
            providers: [player_service_1.PlayerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/player/player-create/player-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div{\r\n\twidth: 900px ;\r\n  \tmargin-left: auto ;\r\n  \tmargin-right: auto ;\r\n  \ttext-align: center;\r\n  \tfont-size: 15px;\r\n  \tbackground-color: white;\r\n  \tmargin-bottom: 100px;\r\n}\r\n\r\n.create{\r\n\tbackground-color: green;\r\n\tcolor: white;\r\n\twidth: 150px;\r\n}\r\n\r\n.alert{\r\n  color:red;\r\n  font-size: 13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player-create/player-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div\">\n\t<h1>Add Player</h1>\n\t<form (submit)=\"onSubmit(); \"  #form=\"ngForm\" >\n\t<table>\n\t\t<tr>\n\t\t\t<td><label for=\"\">Player Name</label></td>\n\t\t\t<td>\n\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t     class=\"alert\">\n\t\t\t          <div *ngIf=\"name.errors\">\n\t\t\t            Name is required.\n\t\t\t          </div>\n\t\t\t    </div>\n\t\t\t\t<input \n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"name\"\n\t\t        required \n\t\t        minlength=\"2\" \n\t\t        maxlength=\"100\"\n\t\t        [(ngModel)]=\"player.name\"\n\t\t        #name=\"ngModel\"\n\t\t\t\t></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><label for=\"\">Preferred Position</label></td>\n\t\t\t<td>\n\t\t\t\t<div *ngIf=\"position.invalid && (position.dirty || position.touched)\"\n\t\t\t     class=\"alert\">\n\t\t\t          <div *ngIf=\"position.errors\">\n\t\t\t            Position is required.\n\t\t\t          </div>\n\t\t\t    </div>\n\t\t\t\t<input \n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"position\" \n\t\t        minlength=\"2\" \n\t\t        maxlength=\"100\"\n\t\t        [(ngModel)]=\"player.position\"\n\t\t        #position=\"ngModel\"\n\t\t\t\t></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t\t<button [disabled]='form.invalid' >Create</button>\n\t\t\t</td>\n\t\t\t\n\t\t</tr>\n\t</table>\n\t</form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/player/player-create/player-create.component.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var player_1 = __webpack_require__("../../../../../src/app/player/player.ts");
var player_service_1 = __webpack_require__("../../../../../src/app/player/player.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var PlayerCreateComponent = /** @class */ (function () {
    function PlayerCreateComponent(_dataService, _route, _router) {
        this._dataService = _dataService;
        this._route = _route;
        this._router = _router;
        //this.player = new Player();
    }
    PlayerCreateComponent.prototype.ngOnInit = function () {
        this.player = new player_1.Player();
    };
    PlayerCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.createPlayer(this.player, function (player) {
            _this.player = new player_1.Player();
            //navigate to other component if needed
            _this._router.navigateByUrl('/player/list');
        }, function (err) {
            console.log(err);
        });
    };
    PlayerCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-player-create',
            template: __webpack_require__("../../../../../src/app/player/player-create/player-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player/player-create/player-create.component.css")]
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService, router_2.ActivatedRoute, router_1.Router])
    ], PlayerCreateComponent);
    return PlayerCreateComponent;
}());
exports.PlayerCreateComponent = PlayerCreateComponent;


/***/ }),

/***/ "../../../../../src/app/player/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\twidth: 900px ;\r\n  \tmargin-left: auto ;\r\n  \tmargin-right: auto ;\r\n  \ttext-align: center;\r\n  \tfont-size: 15px;\r\n  \tbackground-color: white;\r\n  \tmargin-bottom: 100px;\r\n}\r\n\r\n.delete{\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n\twidth: 150px;\r\n}\r\n\r\nth{\r\n\twidth: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<table>\n\t\t<thead>\n\t\t\t<th>Player Name</th>\n\t\t\t<th>Preferred Position</th>\n\t\t\t<th>Actions</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor='let player of players'>\n\t\t\t\t<td>{{player.name}}</td>\n\t\t\t\t<td>{{player.position}}</td>\n\t\t\t\t<td><button (click)='deletePlayer(player._id, player.name);' class=\"delete\">DELETE</button></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/player/player-list/player-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var player_service_1 = __webpack_require__("../../../../../src/app/player/player.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(_dataService, _route, _router) {
        this._dataService = _dataService;
        this._route = _route;
        this._router = _router;
        this.players = [];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.retrievePlayers(function (players) {
            //console.log(players);
            _this.players = players;
        }, function (err) {
            console.log(err);
        });
    };
    PlayerListComponent.prototype.deletePlayer = function (id, name) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + name + '?')) {
            this._dataService.deletePlayer(id, function (players) {
                //console.log(players);
                _this.players = players;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            // Do nothing!
        }
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            template: __webpack_require__("../../../../../src/app/player/player-list/player-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService, router_1.ActivatedRoute, router_2.Router])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;


/***/ }),

/***/ "../../../../../src/app/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\tbackground-color: green;\r\n\tfont-family: arial;\r\n\tfont-size: 30px;\r\n\tpadding-bottom: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a [routerLink]=\"['list']\">List</a> |\n\t<a [routerLink]=\"['/player', 'addplayer']\">Add Player</a>\n\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-player',
            template: __webpack_require__("../../../../../src/app/player/player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;


/***/ }),

/***/ "../../../../../src/app/player/player.service.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var PlayerService = /** @class */ (function () {
    function PlayerService(_http) {
        this._http = _http;
        this.players = [];
    }
    PlayerService.prototype.createPlayer = function (player, callback, errorback) {
        var _this = this;
        //console.log(note);
        this._http.post('players', player).subscribe(function (res) {
            var player = res.json();
            //this.players.push(player);
            //push at beginning unshift
            _this.players.unshift(player);
            callback(player);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService.prototype.deletePlayer = function (id, callback, errorback) {
        var _this = this;
        this._http.delete('players/' + id).subscribe(function (res) {
            //this.players = res.json();
            //remove player from array
            _this.removePlayer(id);
            callback(_this.players);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService.prototype.updateStatus1 = function (id, player, game, callback, errorback) {
        var _this = this;
        this._http.put('players/' + id + '/game/' + game, player).subscribe(function (res) {
            //this.players = res.json();
            var player = res.json();
            //need to update the arr with the new object.......
            _this.updateArr(player);
            callback(_this.players);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService.prototype.updateArr = function (player) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id == player._id) {
                this.players[i] = player;
            }
        }
    };
    PlayerService.prototype.removePlayer = function (id) {
        var newArr = [];
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id != id) {
                newArr.push(this.players[i]);
            }
        }
        this.players = newArr;
    };
    PlayerService.prototype.retrievePlayers = function (callback, errorback) {
        var _this = this;
        this._http.get('players').subscribe(function (res) {
            _this.players = res.json();
            callback(_this.players);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;


/***/ }),

/***/ "../../../../../src/app/player/player.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(id, name, position, status1, status2, status3) {
        if (id === void 0) { id = ""; }
        if (name === void 0) { name = ""; }
        if (position === void 0) { position = ""; }
        if (status1 === void 0) { status1 = null; }
        if (status2 === void 0) { status2 = null; }
        if (status3 === void 0) { status3 = null; }
        this.id = id;
        this.name = name;
        this.position = position;
        this.status1 = status1;
        this.status2 = status2;
        this.status3 = status3;
    }
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div{\r\n\tbackground-color: green;\r\n\tfont-family: arial;\r\n\tfont-size: 30px;\r\n\tpadding-bottom: 50px;\r\n}\r\n\r\n.div2{\r\n\twidth: 900px ;\r\n  \tmargin-left: auto ;\r\n  \tmargin-right: auto ;\r\n  \ttext-align: center;\r\n  \tfont-size: 15px;\r\n  \tbackground-color: white;\r\n  \tmargin-bottom: 100px;\r\n}\r\n\r\n.delete{\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n\twidth: 150px;\r\n}\r\n\r\n.playing{\r\n  background-color: green;\r\n}\r\n\r\n.notPlaying{\r\n  background-color: red;\r\n}\r\n\r\n.undecided{\r\n  background-color: yellow;\r\n}\r\n\r\nbutton{\r\n  display: inline-block;\r\n  width: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"div\">\n\t<h1>Player Status - Game {{game}}</h1>\n\n\t<a [routerLink]=\"['/status', 'game', '1']\">Game 1</a> |\n\t<a [routerLink]=\"['/status', 'game', '2']\">Game 2</a> |\n\t<a [routerLink]=\"['/status', 'game', '3']\">Game 3</a> \n\n\t\t\n\t<div class=\"div2\">\n\t\t<table>\n\t\t\t<thead>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Actions</th>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor='let player of players' >\n\t\t\t\t\t<td>{{player.name}}</td>\n\t\t\t\t\t<td *ngIf='game==1'>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button *ngIf='player.status1' class=\"playing\">Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status1==false  || player.status1== null' (click)='updateStatus1(player._id, player, true, game);' >Playing</button>\n\t\n\n\t\t\t\t\t\t<button *ngIf='player.status1==false' class=\"notPlaying\">Not Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status1==true || player.status1== null' (click)='updateStatus1(player._id, player, false, game);' >Not Playing</button>\n\n\n\t\t\t\t\t\t<button *ngIf='player.status1==null'  class=\"undecided\">Undecided</button>\n\t\t\t\t\t\t<button *ngIf='player.status1==true || player.status1== false' (click)='updateStatus1(player._id, player, null, game);' >Undecided</button>\n\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td  *ngIf='game==2' >\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button *ngIf='player.status2' class=\"playing\">Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status2==false  || player.status2== null' (click)='updateStatus1(player._id, player, true, game);' >Playing</button>\n\t\n\n\t\t\t\t\t\t<button *ngIf='player.status2==false' class=\"notPlaying\">Not Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status2==true || player.status2== null' (click)='updateStatus1(player._id, player, false, game);' >Not Playing</button>\n\n\n\t\t\t\t\t\t<button *ngIf='player.status2==null'  class=\"undecided\">Undecided</button>\n\t\t\t\t\t\t<button *ngIf='player.status2==true || player.status2== false' (click)='updateStatus1(player._id, player, null, game);' >Undecided</button>\n\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf='game==3'>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button *ngIf='player.status3' class=\"playing\">Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status3==false  || player.status3== null' (click)='updateStatus1(player._id, player, true, game);' >Playing</button>\n\t\n\n\t\t\t\t\t\t<button *ngIf='player.status3==false' class=\"notPlaying\">Not Playing</button>\n\t\t\t\t\t\t<button *ngIf='player.status3==true || player.status3== null' (click)='updateStatus1(player._id, player, false, game);' >Not Playing</button>\n\n\n\t\t\t\t\t\t<button *ngIf='player.status3==null'  class=\"undecided\">Undecided</button>\n\t\t\t\t\t\t<button *ngIf='player.status3==true || player.status3== false' (click)='updateStatus1(player._id, player, null, game);' >Undecided</button>\n\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\n\n\n<!-- \t<router-outlet></router-outlet> -->\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var player_service_1 = __webpack_require__("../../../../../src/app/player/player.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var StatusComponent = /** @class */ (function () {
    function StatusComponent(_dataService, _route, _router) {
        var _this = this;
        this._dataService = _dataService;
        this._route = _route;
        this._router = _router;
        this.players = [];
        this.game = 0;
        this._route.paramMap.subscribe(function (params) {
            _this.game = params.get('id');
            _this.getPlayers(_this.game);
        });
    }
    StatusComponent.prototype.getPlayers = function (game) {
        var _this = this;
        this._dataService.retrievePlayers(function (players) {
            //console.log(players);
            _this.players = players;
        }, function (err) {
            console.log(err);
        });
    };
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.updateStatus1 = function (id, player, status, game) {
        var _this = this;
        console.log(game);
        var p1 = player;
        if (game == 1) {
            p1.status1 = status;
        }
        else if (game == 2) {
            p1.status2 = status;
        }
        else {
            p1.status3 = status;
        }
        this._dataService.updateStatus1(id, p1, game, function (players) {
            //console.log(players);
            _this.players = players;
        }, function (err) {
            console.log(err);
        });
    };
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'app-status',
            template: __webpack_require__("../../../../../src/app/status/status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService, router_1.ActivatedRoute, router_2.Router])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map