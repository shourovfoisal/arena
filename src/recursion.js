export const currentMenuList = [
  {
    id: 1,
    name: "Menu 1",
    menuPath: "/menu-one",
    parentMenuId: null,
    menuOrder: 1,
    menuPosition: null,
    iconCode: null,
    children: [],
  },
  {
    id: 4,
    name: "Menu 3",
    menuPath: "/menu-three",
    parentMenuId: null,
    menuOrder: 1,
    menuPosition: null,
    iconCode: null,
    children: [
      {
        id: 3,
        name: "Menu 3a",
        menuPath: "/menu-threeA",
        parentMenuId: 4,
        menuOrder: 1,
        menuPosition: null,
        iconCode: null,
        children: [],
      },
    ],
  },
];

/**
 * Expected output format for each item
 * {
      "id": 1,
      "name": "Configuration",
      "parentId": null,
      "menuOrder": 0,
      "isLeaf": false,
      "action": "configuration",
      "iconCode": "settings",
      "children": []
    } 
 */

// Item could be anything -> menu, submenu, nested child menu etc.
export function adaptMenuList(itemList) {
  return itemList.map((eachItem) => ({
    id: eachItem?.id,
    name: eachItem?.name,
    parentId: eachItem?.parentMenuId,
    menuOrder: eachItem?.menuOrder,
    isLeaf: !eachItem?.children?.length,
    action: eachItem?.menuPath,
    iconCode: eachItem?.iconCode,
    children: eachItem?.children?.length
      ? adaptMenuList(eachItem.children)
      : [],
  }));
}
