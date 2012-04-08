describe("The github service", function () {

	beforeEach(function () {
	});

	it("has a dirname() function that computes the dir name of a path", function () {
		var dirName = "a/path/with/a";
		var fileName = "file.txt";
		expect( dirname(dirName + '/' + fileName) ).toEqual(dirName);
	});

	it("has an extend() function that works like the jquery extend method but not returning a value", function () {
		var anObject = {
			aField: "aValue",
			anotherField: "anotherValue"
		}
		var anotherObject = {
			aField: "aNewValue",
			aNewField: "anotherDistinctValue"
		}
		var extendedObject = jQuery.extend({}, anObject, anotherObject);

		extend(anObject, anotherObject);

		expect( anObject ).toEqual( extendedObject );
	});

});
