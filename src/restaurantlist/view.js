var controller = require('./controller');

exports.customizeUI = function(page) {
  var tabBar = tabris.create("TabFolder", {
    layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    paging: true
  }).appendTo(page);

  var tabs = [
    tabris.create("Tab", {title: "Menu"}).appendTo(tabBar),
    tabris.create("Tab", {title: "Orders"}).appendTo(tabBar),
    tabris.create("Tab", {title: "Tables"}).appendTo(tabBar),
    tabris.create("Tab", {title: "Bills"}).appendTo(tabBar)
  ];
  var menuItems = [{name: "Menu Item 1"}, {name: "Menu Item 2"}];
  var collectionView = tabris.create("CollectionView", {
    layoutData: {left: 15, top: 0, right: 15, bottom: 0},
    items: menuItems,
    itemHeight: 40,
    initializeCell: function(cell) {
      var text = tabris.create("TextView", {
        layoutData: { left: 5, top: 5, right: 5, bottom: 5}
      }).appendTo(cell);
      cell.on("change:item", function(widget, menuItem) {
        text.set("text", menuItem.name);
      });
    }
  }).on("select", function(target, value) {
    console.log("selected", value.name);
  }).appendTo(tabs[0]);
};