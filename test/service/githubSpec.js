describe("The github service", function () {

	beforeEach(function () {
	});

	it("has a dirname() function that computes the dir name of a path", function () {
		var dirName = "a/path/with/a";
		var fileName = "file.txt";
		expect( dirname(dirName + '/' + fileName) ).toEqual(dirName);
	});

});
