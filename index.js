const radio1 = document.querySelector("#dollar")
const radio2 = document.querySelector("#naira")
const input = document.querySelector("input[type=text]")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")

const dollars = async ()=> {
    const datas = await fetch()
    const data = await datas.json()
    return (data)
}

const dollarSigns = async ()=> {
    const datas = await fetch()
    const data = await datas.json()
    return (data)
}

const nairas = async ()=> {
    const datas = await fetch()
    const data = await datas.json()
    return (data)
}

const nairaSigns = async ()=> {
    const datas = await fetch()
    const data = await datas.json()
    return (data)
}

radio1.addEventListener("click" , ()=> {
    btn1.addEventListener("click" , async ()=> {
        const naira = await nairas()
        const nairaSign = await nairaSigns()
        div3.textContent = `You have ${input.value * naira}${nairaSign}`
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
        const nairaSign = await nairaSigns()
        div3.textContent = `You have ${input.value}${nairaSign}`
        input.value = ""
    })
})