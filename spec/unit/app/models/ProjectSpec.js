describe("Project", function () {
  var project;

  beforeEach(function() {
    project = new Project(JSON.parse(testResponses.getProject.success.responseText));
  });

  describe("(properties)", function () {

    it("should have a name", function() {
      expect(project.name).toEqual("Workstation Chef")
    });

    it("should have a status", function() {
      expect(project.status).toEqual("failed")
    });
  });
});