const radio1 = document.querySelector("#dollar")
const radio2 = document.querySelector("#naira")
const input = document.querySelector("input[type=text]")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")

radio1.addEventListener("click" , ()=> {
    btn1.addEventListener("click" , ()=> {
        div3.textContent = `You have ${input.value * 10}`
    })
    btn2.addEventListener("click" , ()=> {
        div4.textContent = `You have ${input.value}`
        input.value = ""
    })
})

radio2.addEventListener("click" , ()=> {
    btn2.addEventListener("click" , ()=> {
        div4.textContent = `You have ${input.value * 10}`
    })
    btn1.addEventListener("click" , ()=> {
        div3.textContent = `You have ${input.value}`
        input.value = ""
    })
})