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
var DataService = /** @class */ (function () {
    function DataService() {
        this.messages = [];
    }
    DataService.prototype.addMessage = function (message) {
        this.messages.push(message);
        return this.messages;
    };
    DataService.prototype.setgoldCount = function () {
        if (this.goldCount[0] + gold)
            ;
        {
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
// 	// this_gold = 0
// 	// action = 'earned'
// 	// if building_type == 'farm':
// 	// 	this_gold = random.randrange(10, 21)
// 	// elif building_type == 'cave':
// 	// 	this_gold = random.randrange(5, 11)
// 	// elif building_type == 'house':
// 	// 	this_gold = random.randrange(2, 6)
// 	// elif building_type == 'casino':
// 	// 	this_gold = random.randrange(-50, 51)
// 	// 	if this_gold < 0:
// 	// 		action = 'lost'
// } 
//# sourceMappingURL=data.service.js.map