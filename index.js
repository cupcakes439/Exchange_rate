const radio1 = document.querySelector("#dollar")
const radio2 = document.querySelector("#naira")
const input = document.querySelector("input[type=text]")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")

const dollars = async ()=> {
    const datas = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const data = await datas.json()
    return (data.rates.USD)
}

const southSigns = async ()=> {
    const datas = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const data = await datas.json()
    return (data.base)
}

const souths = async ()=> {
    const datas = await fetch("https://api.frankfurter.app/latest?from=USD")
    const data = await datas.json()
    return (data.rates.ZAR)
}

const dollarSigns = async ()=> {
    const datas = await fetch("https://api.frankfurter.app/latest?from=USD")
    const data = await datas.json()
    return (data.base)
}

radio1.addEventListener("click" , ()=> {
    btn1.addEventListener("click" , async ()=> {
        const south = await souths()
        const southSign = await southSigns()
        div3.textContent = `You have ${input.value * south}${southSign}`
    })
    btn2.addEventListener("click" , async ()=> {
        const dollarSign = await dollarSigns()
        div4.textContent = `You have ${input.value}${dollarSign}`
        input.value = ""
    })
})

radio2.addEventListener("click" , ()=> {
    btn2.addEventListener("click" , async ()=> {
        const dollar = await dollars()
        const dollarSign = await dollarSigns()
        div4.textContent = `You have ${input.value * dollar}${dollarSign}`
    })
    btn1.addEventListener("click" , async ()=> {
        const southSign = await southSigns()
        div3.textContent = `You have ${input.value}${southSign}`
        input.value = ""
    })
})