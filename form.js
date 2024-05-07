const psw = document.querySelector("#password")
const cfmpsw = document.querySelector("#confirmpassword")

const sumbitBtn = document.querySelector(".submit")

sumbitBtn.addEventListener("click", () => {
    if (psw.value != cfmpsw.value) {
        console.log("psw not the same")
    }
})
