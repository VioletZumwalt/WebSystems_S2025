
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", startAdventure);
});
//Beginning section
function startAdventure() {
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>You find yourself in a dark forest with an eerie silence surrounding you. A narrow path leads forward, but you hear whispers in the trees. Do you:";
    choices.innerHTML = `
        <button onclick="choosePath('cabin')">Go towards a flickering light in the distance</button>
        <button onclick="choosePath('cave')">Investigate a dark cave nearby</button>
        <button onclick="choosePath('stay1')">Stay where you are and listen closely</button>
    `;
}
//Initial choices + Stay Options
function choosePath(choice) {
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if (choice === 'cabin') {
        story.innerHTML = "<img src='images/cabin.jpg' alt='Dark Cabin' style='height:250px;'><br>You approach an old, abandoned cabin. The door creaks open, revealing a dimly lit room with strange symbols on the walls. Do you:";
        choices.innerHTML = `
            <button onclick="enterCabin('read')">Try to read the symbols</button>
            <button onclick="enterCabin('leave')">Quickly leave the cabin</button>
            <button onclick="enterCabin('search')">Search the room for clues</button>
        `;
    } else if (choice === 'cave') {
        story.innerHTML = "<img src='images/cave.webp' alt='Dark Cave' style='height:250px;'><br>Inside the cave, you hear deep breathing. Something is in here with you! Do you:";
        choices.innerHTML = `
            <button onclick="enterCave('run')">Run out as fast as you can</button>
            <button onclick="enterCave('hide')">Find a place to hide</button>
            <button onclick="enterCave('torch')">Light a torch to see better</button>
        `;
    } else if (choice === 'stay1') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>The whispers intensify, surrounding you. Shadows seem to move closer. Do you:";
        choices.innerHTML = `
            <button onclick="choosePath('stay2')">Close your eyes and hope it stops</button>
            <button onclick="choosePath('move')">Move away from the area</button>
        `;
    } else if (choice === 'stay2') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>A chill runs down your spine as a voice whispers directly into your ear. You cannot understand, but it sounds scared. Do you:";
        choices.innerHTML = `
            <button onclick="choosePath('stay3')">Whisper back</button>
            <button onclick="choosePath('move')">Run away</button>
        `;
    } else if (choice === 'stay3') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>The darkness grows thicker, the ground beneath you trembling. You can hear them clearer, now.";
        choices.innerHTML = `
            <button onclick="choosePath('stay4')">Stand your ground</button>
            <button onclick="choosePath('move')">Try to escape</button>
        `;
    } else if (choice === 'stay4') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>You feel unseen hands brushing against your skin. The whispers become screams. They beg you to run.";
        choices.innerHTML = `
            <button onclick="choosePath('stay5')">Scream back</button>
            <button onclick="choosePath('move')">Run as fast as you can</button>
        `;
    } else if (choice === 'stay5') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>A deep, guttural laugh echoes around you. The sky darkens unnaturally. Something is coming. Something that scares the bravest spirit.";
        choices.innerHTML = `
            <button onclick="choosePath('stay6')">Refuse to move</button>
            <button onclick="choosePath('move')">Break into a sprint</button>
        `;
    } else if (choice === 'stay6') {
        story.innerHTML = "<img src='images/boulder.webp' alt='Giant Boulder' style='height:250px;'><br>A massive rock falls from the darkness above, crushing you instantly. You never stood a chance.";
        choices.innerHTML = `<button onclick="location.reload()">Try Again</button>`;
    } else if (choice === 'move') {
        story.innerHTML = "<img src='images/Forest.jpg' alt='Dark Forest' style='height:250px;'><br>You run, unsure of what may follow. The whispers are left behind, never to be heard again.";
        choices.innerHTML = `<button onclick="location.reload()">Play Again</button>`;
    }
}
//Cabin Choices
function enterCabin(action) {
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if (action === 'read') {
        story.innerHTML = "<img src='images/symbols.jpg' alt='Satanic Symbols' style='height:250px;'><br>As you decipher the symbols, a shadowy figure emerges from the floor. The air turns ice cold...";
    } else if (action === 'leave') {
        story.innerHTML = "<img src='images/forest.jpg' alt='Dark Forest' style='height:250px;'><br>You bolt out of the cabin, but the whispers follow you into the night...";
        choices.innerHTML = `<button onclick="location.reload()">Play Again</button>`;
    } else {
        story.innerHTML = "<img src='images/images/book.jpg' alt='Evil Book' style='height:250px;'><br>You find an old journal detailing a way to banish the spirits haunting the forest. You now have a chance to survive. Do you:";
        choices.innerHTML = `
            <button onclick="finalChoice('banish')">Perform the ritual to banish the spirits</button>
            <button onclick="finalChoice('run')">Leave them be, and try to flee.</button>
        `;
    }
}
//Cave choices 
function enterCave(action) {
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if (action === 'run') {
        story.innerHTML = "<img src='images/forest.jpg' alt='Dark Forest' style='height:250px;'><br>You escape just in time, but something is now following you...";
        choices.innerHTML = `<button onclick="location.reload()">Try Again</button>`;
    } else if (action === 'hide') {
        story.innerHTML = "<img src='images/eyes.jpg' alt='Red Eyes' style='height:250px;'><br>You hide behind a rock, but glowing red eyes find you in the darkness...";
        choices.innerHTML = `<button onclick="location.reload()">Try Again</button>`;
    } else {
        story.innerHTML = "<img src='images/lightcave.jpg' alt='Light at end of cave' style='height:250px;'><br><br>With the torch lit, you see ancient markings on the walls. A hidden passage is revealed. Cold air blows from it";
        choices.innerHTML = `
            <button onclick="finalChoice('passage')">Enter the hidden passage</button>
            <button onclick="finalChoice('stay')">Stay in the cave and wait</button>
        `;
    }
}
//Endings
function finalChoice(choice) {
    let story = document.getElementById("story");
    let choices = document.getElementById("choices");

    if (choice === 'banish') {
        story.innerHTML = "<img src='images/lightforest.jpg' alt='Light Forest'><br>You chant the ritual words, and the spirits scream as they are pulled into the abyss. The forest is now safe. You win!";
    } else if (choice === 'run') {
        story.innerHTML = "<img src='images/hand.jpg' alt='Hand Reaching from the dark'><br>You run through the trees, but the spirits chase you down. There is no escape...";
    } else if (choice === 'passage') {
        story.innerHTML = "<img src='images/lightforest.jpg' alt='Light Forest'><br>You follow the hidden passage and find an exit leading to safety. You have escaped the horror. You win!";
    } else {
        story.innerHTML = "<img src='images/hand.jpg' alt='Hand Reaching from the dark'><br>You wait in the cave, but soon, the darkness consumes you...";
    }
    choices.innerHTML = `<button onclick="location.reload()">Play Again</button>`;
}
