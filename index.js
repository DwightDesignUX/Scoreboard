let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")

let homeScore = 0
let guestScore = 0

function freethrowHome() {
    homeScore += 1
    homePoint.textContent = homeScore
}

function midthrowHome() {
    homeScore += 2
    homePoint.textContent = homeScore
}

function longthrowHome() {
    homeScore += 3
    homePoint.textContent = homeScore
}

function freethrowGuest() {
    guestScore += 1
    guestPoint.textContent = guestScore
}

function midthrowGuest() {
    guestScore += 2
    guestPoint.textContent = guestScore
}

function longthrowGuest() {
    guestScore += 3
    guestPoint.textContent = guestScore
}