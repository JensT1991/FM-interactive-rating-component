// get all radio inputs to check which one was selected
const radioButtons = document.querySelectorAll('input[name="rating"]')

// get the output span to show the choosen rating
const ratingOutput = document.querySelector("#rating-output")

// function to check what was choosen
function validateRating() {

    // stops reloading the site
    event.preventDefault() 

    // empty let for the rating number
    let selectedRating 

    // check which radio input was checked
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRating = radioButton.value
            break
        }
    }

    // if none radio input was checked return nothing
    if (selectedRating === undefined) return
    
    // output the rating number 
    ratingOutput.innerText = selectedRating

    // change visibility of the cards
    toggleVisibility(".card")
}

// show next card when the submit button is clicked
function toggleVisibility(className) {
    const elements = document.querySelectorAll(className)
    elements.forEach((element) => {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    })
}
