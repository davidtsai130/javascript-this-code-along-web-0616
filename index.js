const app = "I don't do much."

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}
 
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");

serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}
 
deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);