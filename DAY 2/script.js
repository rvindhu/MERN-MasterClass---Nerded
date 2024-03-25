function addCustomer() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var membership = document.getElementById("membership").value;
    
    var customer = {
        name: name,
        contact: contact,
        membership: membership
    };
    
    var customerList = document.getElementById("customerList");
    var listItem = document.createElement("li");
    listItem.textContent = "Name: " + customer.name + " | Contact: " + customer.contact + " | Membership: " + customer.membership;
    customerList.appendChild(listItem);
}

function deleteCustomer() {
    var customerList = document.getElementById("customerList");
    var selectedCustomer = customerList.querySelector("li:last-child");
    if (selectedCustomer) {
        customerList.removeChild(selectedCustomer);
    } else {
        alert("No customers to delete.");
    }
}
