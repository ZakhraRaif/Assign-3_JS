// Adding an event listener to the 'order' button.
document.getElementById("order").addEventListener("click", function(e) {
    // Preventing the page from reloading when clicking the 'order' button 
    e.preventDefault();

    // Capture the form inputs using their IDs
    const base = document.querySelector('[name="base"]:checked').value;
    const size = document.querySelector('[name="size"]:checked').value;
    const toppings = [];
    const checkboxes = document.querySelectorAll('[name="toppings"]:checked');
    checkboxes.forEach((checkbox) => {
        toppings.push(checkbox.value);
    });
    const cheese = document.querySelector('[name="cheese"]:checked').value;
    const sauce = document.querySelector('[name="sauce"]:checked').value;
    const quantity = document.getElementById("quantity").value;

    // Create a Pizza object and pass the captured values
    const pizza = new Pizza(base, size, toppings, cheese, sauce);

    // Displaying the details
    console.log(pizza.description);
    alert(`Your pizza order:
    Base: ${base}
    Size: ${size}
    Toppings: ${toppings.join(', ')}
    Cheese: ${cheese}
    Sauce: ${sauce}
    Quantity: ${quantity}`);
});

class Pizza {
    constructor(base, size, toppings, cheese, sauce) {
        this.base = base;
        this.size = size;
        this.toppings = toppings;
        this.cheese = cheese;
        this.sauce = sauce;
        this.quantity = quantity;

        // Description
        this.description = `
            Pizza description:
            Base: ${base}
            Size: ${size}
            Toppings: ${toppings.join(', ')}
            Cheese: ${cheese}
            Sauce: ${sauce}
            Quantity: ${quantity}
        `;
    }
}