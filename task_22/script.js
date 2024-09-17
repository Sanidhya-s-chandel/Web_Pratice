document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('new-item');
    newItemInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});

function addItem() {
    const newItemText = document.getElementById('new-item').value.trim();
    if (newItemText === '') {
        alert('Please enter an item.');
        return;
    }

    const itemList = document.getElementById('item-list');
    
    const li = document.createElement('li');
    li.textContent = newItemText;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="ri-close-line"></i>';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        itemList.removeChild(li);
    });

    itemList.prepend(li);
    li.appendChild(removeButton);

    document.getElementById('new-item').value = '';
}
