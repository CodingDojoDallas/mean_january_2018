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
var core_1 = require("@angular/core");
var data_service_1 = require("../data.service");
var AlphaComponent = /** @class */ (function () {
    function AlphaComponent(_dataService) {
        this._dataService = _dataService;
    }
    AlphaComponent.prototype.ngOnInit = function () {
    };
    AlphaComponent.prototype.blah = function () {
        this._dataService.onclick();
    };
    AlphaComponent.prototype.onclick = function (building) {
        var gold = 0;
        if (building == 'farm') {
            gold += (Math.floor(Math.random() * 3)) + 2;
            var message = "You've earned " + gold + " gold from your swanky adventures at the " + building + "!";
            console.log(gold, message);
        }
        else if (building == 'cave') {
            gold += (Math.floor(Math.random() * 6)) + 5;
            var message = "You've earned " + gold + " gold from your swanky adventures at the " + building + "!";
            console.log(gold, message);
        }
        else if (building == 'casino') {
            var min = -100;
            var max = 100;
            gold += Math.floor(Math.random() * (max - min)) + min;
            var message = "You've earned " + gold + " gold from your swanky adventures at the " + building + "!";
            console.log(gold, message);
        }
        else if (building == 'house') {
            gold += (Math.floor(Math.random() * 9)) + 7;
            var message = "You've earned " + gold + " gold from your swanky adventures at the " + building + "!";
            console.log(gold, message);
        }
    };
    AlphaComponent = __decorate([
        core_1.Component({
            selector: 'app-alpha',
            templateUrl: './alpha.component.html',
            styleUrls: ['./alpha.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AlphaComponent);
    return AlphaComponent;
}());
exports.AlphaComponent = AlphaComponent;
//# sourceMappingURL=alpha.component.js.map