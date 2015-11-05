var controller = require('./controller');

exports.customizeUI = function(page) {
  var restaurants = [{name: "Restaurant 1"}, {name: "Restaurant 2"}];
  var collectionView = tabris.create("CollectionView", {
    layoutData: {left: 15, top: 0, right: 15, bottom: 0},
    items: restaurants,
    itemHeight: 40,
    initializeCell: function(cell) {
      var text = tabris.create("TextView", {
        layoutData: { left: 5, top: 5, right: 5, bottom: 5}
      }).appendTo(cell);
      cell.on("change:item", function(widget, restaurant) {
        text.set("text", restaurant.name);
      });
    }
  }).on("select", function(target, value) {
    console.log("selected", value.name);
  }).appendTo(page);
};