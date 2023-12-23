function addItem() {
    var itemInput = document.getElementById('itemInput');
    var itemList = document.getElementById('itemList');

    if (itemInput.value.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = itemInput.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            itemList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);

        itemInput.value = '';
    }
}