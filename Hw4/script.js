// script.js
let storyStage = 0;

// Function to update the story dynamically
function updateStory(text, image, bgColor) {
    document.getElementById("story-text").textContent = text;
    document.getElementById("story-image").src = image;
    document.body.style.backgroundColor = bgColor;
}

// Function to validate user input
function isValidChoice(input, choices) {
    return choices.includes(input);
}

// Main choice function
function makeChoice() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let choices;

    switch (storyStage) {
        case 0:
            choices = ["casual", "formal"];
            if (isValidChoice(input, choices)) {
                if (input === "casual") {
                    updateStory("You head to the casual section. Do you pick a t-shirt, hoodie, jeans, or sneakers?", "images/casual.jpg", "#E3F2FD");
                    storyStage = 1;
                } else {
                    updateStory("You head to the formal section. Do you pick a suit, dress, blazer, or heels?", "images/formal.jpg", "#F3E5F5");
                    storyStage = 2;
                }
            } else {
                updateStory("Invalid choice. Please type 'casual' or 'formal'.", "images/store.jpg", "#FFFFFF");
            }
            break;

        case 1:
            choices = ["t-shirt", "hoodie", "jeans", "sneakers"];
            if (isValidChoice(input, choices)) {
                updateStory(`You chose ${input}. Do you want to accessorize with a hat, watch, or bag?`, "images/accessories.jpg", "#FFF3E0");
                storyStage = 3;
            } else {
                updateStory("Invalid choice. Pick 't-shirt', 'hoodie', 'jeans', or 'sneakers'.", "images/casual.jpg", "#E3F2FD");
            }
            break;

        case 2:
            choices = ["suit", "dress", "blazer", "heels"];
            if (isValidChoice(input, choices)) {
                updateStory(`You chose ${input}. Do you want to accessorize with a tie, necklace, or belt?`, "images/formalaccessories.jpg", "#F3E5F5");
                storyStage = 3;
            } else {
                updateStory("Invalid choice. Pick 'suit', 'dress', 'blazer', or 'heels'.", "images/formalaccessories.jpg", "#F3E5F5");
            }
            break;

        case 3:
            choices = ["hat", "watch", "bag", "tie", "necklace", "belt"];
            if (isValidChoice(input, choices)) {
                updateStory(`You added a ${input}. Now, pick a color: red, orange, yellow, green, blue, indigo, or violet.`, "images/color-selection.jpg", "#FFF3E0");
                storyStage = 4;
            } else {
                updateStory("Invalid choice. Pick an accessory: hat, watch, bag, tie, necklace, or belt.", "images/accessories.jpg", "#FFF3E0");
            }
            break;

        case 4:
            let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
            if (isValidChoice(input, colors)) {
                updateStory(`You pick a stylish ${input} outfit with matching accessories. You look amazing! Time to check out.`, `images/${input}.jpg`, input);
                storyStage = 5;
            } else {
                updateStory("Invalid color. Choose from red, orange, yellow, green, blue, indigo, or violet.", "images/color-selection.jpg", "#FFF3E0");
            }
            break;

        case 5:
            updateStory("Congratulations! You successfully picked out an outfit. Would you like to restart?", "images/checkout.jpg", "#D7CCC8");
            break;
    }
}

// Restart function with a loop to reset values
function restartStory() {
    storyStage = 0;
    let attempts = 3;

    while (attempts > 0) {
        updateStory("You walk into a clothing store looking for the perfect outfit. Do you head to the casual or formal section?", "/images/store.jpg", "#FFFFFF");
        document.getElementById("user-input").value = "";
        attempts--;

        if (attempts === 0) {
            console.log("Story reset complete.");
        }
    }
}
