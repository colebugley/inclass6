// ADD NEW ITEM TO END OF LIST
var node = document.createElement("li");
var text_node = document.createTextNode("cream");
node.appendChild(text_node);
document.getElementsByTagName("ul")[0].appendChild(node);

// ADD NEW ITEM START OF LIST
var node1 = document.createElement("li");
var text_node1 = document.createTextNode("kale");
var unordered_list = document.getElementsByTagName("ul");

node1.appendChild(text_node1);
unordered_list[0].insertBefore(node1, unordered_list[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var elementz = document.getElementsByTagName("li"); //need to add do more elements for the added items at the start and end
elementz[0].setAttribute("class", "cool"); //might not work cause the elements dont have a class yet
elementz[1].setAttribute('class', 'cool');
elementz[2].setAttribute('class', 'cool');
elementz[3].setAttribute('class', 'cool');
elementz[4].setAttribute('class', 'cool');
elementz[5].setAttribute('class', 'cool');

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var number = document.getElementsByTagName("h2")[0].innerHTML = "Buy Groceries";
