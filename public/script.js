console.log("Script running...")

// Task 1: Complete the code to make a fetch call to the /creatures endpoint
async function getCreatures(){
    // fill in the path
    const response = await fetch("...")
    const data = await response.json()
    console.log(data)
}

// Uncomment to test the function once you finish Task 1
// getCreatures()

// You should see the data print in the client-side console
// You should see GET /creatures in the server-side console

// Task 2: Complete the code to post a new creature
async function postCreature() {
    try {
        // fill in the path
        const response = await fetch("...", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // fill in the data
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

// Uncomment to test the function once you finish Task 1
// postCreature()

// Task 3: Write a function that gets the specific creature you just added
// Make sure to test it and confirm you hit the server correctly




// Task 4: Write a function that updates the endangered status of the creature you added
// Make sure to test it and confirm you hit the server correctly




// Task 5: Write a function that deletes the creature you added
// Make sure to test it and confirm you hit the server correctly
