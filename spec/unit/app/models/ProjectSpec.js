describe("Project", function () {
  var project;

  beforeEach(function() {
    project = new Project(JSON.parse(testResponses.getProject.success.responseText));
  });

  describe("(properties)", function () {

    it("should have a name", function() {
      expect(project.name).toEqual("Workstation Chef")
    });

    it("should have a build status URL", function() {
      expect(project.statusUrl).toEqual("http://collingwood.flood.pivotallabs.com:8080/job/Workstation%20Chef/api/json")
    });
  });
});