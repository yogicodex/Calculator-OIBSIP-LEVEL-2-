// Add JavaScript code here


const btnAll = document.querySelectorAll(".input-btn");
const displayInput = document.querySelector(".display-input");



Array.from(btnAll).map(button => {
    button.addEventListener("click", (e) => {

        switch (e.target.value) {
            case "AC":
                displayInput.value = "";
                break;
            case "DEL":
                displayInput.value = displayInput.value.slice(0, -1);
                break;
            case "=":
                try {
                    displayInput.value = eval(displayInput.value);
                } catch {
                    displayInput.value = "Invaid value!";
                }

                break;


            default:
                displayInput.value += e.target.value;

        }

    })
})





