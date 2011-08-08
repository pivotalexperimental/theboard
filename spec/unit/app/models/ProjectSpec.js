describe("Project", function () {
  var project;

  beforeEach(function() {
    project = new Project(testResponses.getProject.success);
  });

  describe("(properties)", function () {

    it("should have a name", function() {
      expect(project.name()).toEqual("Clients")
    });
  });
});