"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_service_1 = require("./data.service");
describe('DataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [data_service_1.DataService]
        });
    });
    it('should be created', testing_1.inject([data_service_1.DataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data.service.spec.js.map