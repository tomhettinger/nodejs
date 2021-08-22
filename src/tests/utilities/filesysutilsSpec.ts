import {createDir, fileExists} from '../../utilities/filesysutils';

describe("Test suite for fileExists", () => {
    it("Checks that true returns when file is present", () => {
        expect(fileExists( './resources/tests/cats1.jpg')).toBe(true);
    });

    it("Checks that true returns when file is present", () => {
        expect(fileExists( './resources/tests/cats2.jpg')).toBe(false);
    });

});