export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {
    const url = "/dogs"

    const body = new URLSearchParams({
        name: "jim",
        age: 13
    })

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    const options = {
         headers: headers,
         method: "POST",
         body: body
        }

    return fetch(url, options)
}

export function postNewDogV2(name, age) {
    const url = "/dogs"

    const body = new URLSearchParams({
        name,
        age
    })

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    const options = {
         headers: headers,
         method: "POST",
         body: body
        }

    return fetch(url, options)
}

export function deleteDog(id) {
    const url = `/dogs/${id}/delete`
    const headers = {
        "AUTH": "ckyut5wau0000jyv5bsrud90y",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    const options = {
        headers: headers,
        method: "POST"
    }

      return fetch(url, options)
}
