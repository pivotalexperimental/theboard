function Project(seed) {
  var self = this;

  self.__defineGetter__("name", function() {
    return seed.displayName;
  });

  self.__defineGetter__("status", function() {
    if(seed.color == "red") {
      return "failed";
    }
  });

  return self;

}