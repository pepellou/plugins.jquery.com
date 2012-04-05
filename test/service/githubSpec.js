describe("The github service", function () {

	beforeEach(function () {
	});

	it("has a dirname() function that computes the dir name of a path", function () {
		var aPath = "a/path/with/a/file.txt";
		var expectedDirname = "a/path/with/a";
		expect( dirname(aPath) ).toEqual(expectedDirname);
	});

});
