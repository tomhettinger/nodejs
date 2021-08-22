import {createDir, fileExists} from '../../utilities/filesysutils';

describe("Test suite for fileExists", () => {
    it("Checks that true returns when file is present", () => {
        expect(fileExists('../resources/cats1.jpg')).toBe(true);
    });

    it("Check that false is returned when file is missing", () => {
        expect(fileExists('../resources/cats2.jpg')).toBe(false);
    });

});