import * as KaiSDK from '../src/index'
import {expect} from "chai"
import {constants} from "../src/constants"

describe("Library TESTS", function(){
    after(function (){
        KaiSDK.disconnect();
    });

    it("it should connect to the SDK", function (done){
        this.timeout(1000);
        KaiSDK.connect();
        KaiSDK.KaiEvents.onconnect(function(data: String) {
            expect(data).to.equal(constants.Connected);
            done();
        })
    });
});