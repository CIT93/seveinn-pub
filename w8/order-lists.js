const orderTableBody = document.getElementById('order-table-body');

const formatRadioValue = function(value) {
    switch(value) {
        case 'Small': return 'Small';
        case 'Medium': return 'Medium';
        case 'Large': return 'Large';
        default: return value;
    }
};

const formatDataForDiplay = function(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const createTableRow = function(entry){
    const row = document.createElement('tr');
    row.dataset.id = entry.id;

    row.innerHTML = `
        <td>${formatDataForDiplay(entry.timestamp)}</td>
        <td>${entry.numberOfShirts}</td>
        <td>${formatRadioValue(entry.shirtSize)}</td>
        <td>$${entry.totalPrice.toFixed(2)}</td>
        <td class="action-cell">
            <button class="action-button edit" data-id="${entry.id}">Edit</button>
            <button class="action-button delete" data-id="${entry.id}">Delete</button>
        </td>
    `;

    return row;
};

export const renderTable = function(orders) {
    orderTableBody.innerHTML = '';

    const sortedOrders = [...orders].sort(function(a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    for (const order of sortedOrders) {
        const row = createTableRow(order);
        orderTableBody.appendChild(row);
    }
};