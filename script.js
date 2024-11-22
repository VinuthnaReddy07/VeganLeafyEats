// script.js

document.getElementById('generate-recipe').addEventListener('click', function() {
    const selectedVeggies = Array.from(document.querySelectorAll('.veggie:checked')).map(input => input.value);
    
    if (selectedVeggies.length > 0) {
        generateRecipe(selectedVeggies);
    } else {
        alert("Please select at least one veggie.");
    }
});

function generateRecipe(veggies) {
    let recipeName = "Vegan Veggie Salad";
    let recipeInstructions = "Mix the following ingredients: " + veggies.join(", ") + ". Add your favorite vegan dressing.";
    let totalCalories = calculateCalories(veggies);

    document.getElementById('recipe-name').innerText = recipeName;
    document.getElementById('recipe-instructions').innerText = recipeInstructions;
    document.getElementById('calories').innerText = totalCalories + " kcal";

    // Show the recipe section
    document.getElementById('recipe-section').style.display = 'block';
}

function calculateCalories(veggies) {
    const veggieCalories = {
        'Spinach': 7,   // calories per 100g
        'Kale': 33,
        'Tomato': 18,
        'Carrot': 41,
        'Cucumber': 16
    };

    let totalCalories = 0;

    veggies.forEach(veggie => {
        if (veggieCalories[veggie]) {
            totalCalories += veggieCalories[veggie];
        }
    });

    return totalCalories;
}
