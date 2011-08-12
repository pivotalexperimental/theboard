function Project(seed) {
  var self = this;

  self.__defineGetter__("name", function() {
    return seed.displayName;
  });

  self.__defineGetter__("statusUrl", function() {
    return seed.url+"api/json";
  });

  return self;

}