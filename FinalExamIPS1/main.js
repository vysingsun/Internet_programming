// 1. Define your class
class Recipe {
  chef
  dishName
  description
  direction
  constructor (chef, dishName, description, direction) {
    this.chef = chef
    this.dishName = dishName
    this.direction = direction
    this.description = description
  }

  generate () {
    if(this.chef === undefined || this.dishName === undefined || this.description === undefined || this.direction === undefined) {
      alert("Information is not enough or valid!!")
    }
    else if(this.chef === "" || this.dishName === "" || this.description === "" || this.direction === "") {
      alert("Information is not enough or valid!!")
    }
    else {

    }
  }
}

// 2. Initialize your object
var pork = new Recipe("Vysing", "Beer-Braised Pork Chops", "This is a quick and easy recipe that results in tender and flavorful pork chops.", 
`
Combine flour, salt, and pepper in a large 
resealable plastic bag. Add pork chops and shake 
well to coat thoroughly.
Step 1

Melt butter in a large skillet over medium-high heat. 
Add olive oil and heat until sizzling. Add pork chops 
in a single layer. Saute until browned on one side, 1 
1/2 to 2 minutes. Turn pork chops over and cook for 
an additional 1 1/2 to 2 minutes. Transfer pork chops
to a plate.
Step 2

Add beer, vinegar, mustard, brown sugar, and 
rosemary to the skillet and mix well. Bring to a boil 
over medium-high heat. Return pork chops to the 
skillet, cover, and reduce heat to medium-low. 
Simmer until pork chops are no longer pink in the 
center, 10 to 12 minutes. An instant-read 
thermometer inserted into the center should read 
145 degrees F (63 degrees C).
Step 3

Transfer pork chops to a plate. Increase heat to 
medium and boil pan juices in the skillet until 
thickened, whisking often, about 3 minutes. Top pork
chops with sauce.`)
// 3. Validate your object
pork.generate()
// 4. Generate the template

// 5. Create new object

function render() {
  console.log("render");
  // Generate your object ....
  // Hide button generate
  const buttonGenerate = document.getElementById("button-generate");
  buttonGenerate.style.display = "none";
  // Display template
  const recipeTemplate = document.getElementsByClassName("recipe");
  recipeTemplate.style.display = "flex";
  let ex = document.createElement("")
}
