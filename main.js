const liczby = [55,70,50,60,99,100,120,258,600]
console.log(liczby)

const numbers = liczby.filter(item => {
    if(item > 101 && item < 580)
    return item
})

console.log(numbers)

const tickets = [
    {
        name: "Jan",
        isDog: false
    },
    {
        name: "Andrzej",
        isDog: true
    },
    {
        name: "Adam",
        isDog: false
    },
    {
        name: "Karolina",
        isDog: true
    }
    ]

const hasntDog = tickets.filter(item => {
    if(item.isDog === false) {
        return item
    }
})

console.log(hasntDog)

const num = [54,81,50,28,99,33,66,72]

const dividedByThree = num.filter(item => {
    if(item % 3 === 0) {
        return item
    }
})

console.log(dividedByThree)

const dividedByThreeAndBiggerThanSixty = num.filter(item => {
    if(item % 3 === 0 && item > 60) {
        return item
    }
})

console.log(dividedByThreeAndBiggerThanSixty)

const number = [5,55, 40]

// const doubbled = number.forEach(item => {
//     for (item * 2;) {
//         return item
//     }
// })

// console.log(doubbled)

// function doubbled(number){
//     for(item * 2); {
//         return item 
//     }
// }

const doubbled = number.map(item => item * 2)
console.log(doubbled)

const people = [
    {
        name: "Jan",
        age: 30,
        vaccine: false
    },
    {
        name: "Karol",
        age: 50,
        vaccine: false
    },
    {
        name: "Anna",
        age: 60,
        vaccine: false
    },
    {
        name: "Magda",
        age: 70,
        vaccine: false
    }
]

const vaccinated = people.filter(item => {
    if(item.age >= 50) {
        item.vaccine = true
        return item
    }
})

console.log(vaccinated)

const num3 = [54,81,50,28,99,33,66,72] 

const biggerThanFifty = num3.filter(item => {
    if(item > 50) {
        return item
    }
}).map(item => item / 3)

console.log(biggerThanFifty)

// const par = document.createElement('p')
// par.innerText = ""
// app.appendChild(par)

for(let i = 1; i < 6; i++) {
    const paragraf = document.createElement('p')
    paragraf.innerText = "Jestem paragrafem numer " + i
    app.appendChild(paragraf)
    paragraf.setAttribute('class', 'font')
}

const peoples = [
    {
        name: "Jan",
        age: 30,
        sName: "Kowalski"
    },
    {
        name: "Karol",
        age: 50,
        sName: "Nowak"
    },
    {
        name: "Anna",
        age: 60,
        sName: "Duda"
    },
    {
        name: "Magda",
        age: 70,
        sName: "Tusk"
    }
]

// for(let i = 1; i < 5; i++) {
//     const paragraf2 = document.createElement('p')
//     app2.appendChild(paragraf2)
//     paragraf2.setAttribute('class', 'font')
// }

// const people2 = peoples.every(item => {
//     for(let i = 1; i < 5; i++) {
//         const paragraf2 = document.createElement('p')
//         app2.appendChild(paragraf2)
//         paragraf2.setAttribute('class', 'font')
//     } 
// })

// console.log(people2)

// const app2 = document.getElementById('app2')

//  function objects() {
//      const app2 = document.getElementById('app2')
//      app2.innerHTML = ''
//      for(let i = 0; i < peoples.length; i++){
//          let par = document.createElement('p')
//          par.innerText = peoples[i].name + ' ' + peoples[i].age + ' ' + peoples[i].sName
//          app2.appendChild(par)
//      }
//  }

const app2 = document.getElementById('app2')

for(let i = 0; i < people.length; i++){
    let paragraf = document.createElement('p')
    paragraf.setAttribute('class', 'font2')
    paragraf.innerText = peoples[i].name + " " + peoples[i].sName + " " + peoples[i].age + " " + "lat."
    app2.appendChild(paragraf)
}

// peoples.forEach(item => {
//     const paragraf3 = document.createElement('p')
//     paragraf3.setAttribute('class', 'font2')
//     paragraf3.innerText = peoples.name + " " + peoples.sName + " " + peoples.age + " " + "lat."
//     app2.appendChild('p')
// })