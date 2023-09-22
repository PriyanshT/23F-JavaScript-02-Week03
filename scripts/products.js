// STEP 1: Declare and initialize variables
// STEP 1a: Grab the parts of the DOM that we need to build the invoice
var productBody = document.querySelector("tbody");
var finalPrice = document.querySelector("td");
// STEP 1b: Build the products array in the format 'Product Name: 0.00'
var productsArray = ["Shirts: 19.99", "Caps: 15.621324265252", "Pants: 30.44", "Tshirts: 23.32"];
// STEP 1c: Set up invoiceTotal variable - start at zero
var invoiceTotal = 0;
// STEP 2: Build a loop to iterate through the products array
for(let i=0;i<productsArray.length;i++){
    // console.log(productsArray[i]);
    // STEP 3: Break apart the product name from the price for each item with split()
    var product = productsArray[i].split(": ");
    // console.log(product);
    // STEP 4: Now we have an array as an element of an array - 
    //set the second array element to the product price (as type number)
    var productPrice = Number(product[1]);
    // console.log(productPrice);
    // STEP 5: Add the price of this product to the invoice total
    invoiceTotal += productPrice; // invoiceTotal = invoiceTotal + productPrice;
                                    // invoiceTotal = 0 + 19.99
                                    // invoiceTotal = 19.99 + 15.62
    // STEP 6: Capture each product name and price as variables 
    var productName = product[0];
    console.log(productName);
    // STEP 7: Create a TR element for this product and price in the invoice table
    var tableTr = document.createElement("tr"); // <tr></tr>
    // STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
    // <td>productName</td><td>productPrice</td>
    var tableTd = "<td>" + productName + "</td><td>" + productPrice + "</td>";
    // STEP 9: Set the above string as the innerHTML of the new TR element, 
    //and then append the new element to the table body (var productList)
    tableTr.innerHTML = tableTd;
    console.log(tableTr);
    productBody.appendChild(tableTr);
    // STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
    finalPrice.textContent = "$" + invoiceTotal.toFixed(2);
}