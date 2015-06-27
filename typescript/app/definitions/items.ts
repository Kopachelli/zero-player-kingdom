// The global population items and operations related to them

class Items {
  // The list of all items
  private list = [];
  
  // Adds an item to the list
  addItem(item: Item) {
    this.list.push(item);
  }
  
  // Get an item from the list
  // @param index (int) : The index in the list to return
  // @return the item object at the requested index of the list
  getItem(index: number): Item {
    return this.list[index];
  }
  
  // Remove an item from the list
  // @param item The item to remove
  destroyItem(item: Item) {
    zpkMsgBox.innerHTML += '<p>' + item.name + ' has been destroyed!';
                        + '</p>';
    // Remove the item from the global list
    items.list.splice(items.list.indexOf(item.name));
    // Destroy the item
    item = null;
  }
}