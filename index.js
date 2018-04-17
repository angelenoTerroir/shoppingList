// SINGLE STATE OBJECT

var state = {
    items: []
};


// STATE MODIFICATION FUNCTIONS

var addItem = function(state, item) {
    state.items.push(item);
};

var removeItem = function(state, item) {
    state.items.remove(item);
};


// RENDER FUNCTIONS

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

var deleteList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.remove(itemsHTML);
};


// EVENT LISTENERS

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

//check
$(".shopping-item-toggle").on(click, function(event){
	event.preventDefault();
	$(".shopping-item").toggleClass('shopping-item shopping-item__checked');
});

//delete
$('.shopping-item-delete').on(click, function(event) {
    event.preventDefault();
    removeItem(state, $('#shopping-list-entry').val());
    deleteList(state, $('.shopping-list'));
});