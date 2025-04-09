// para definir en un nuevo archivo separardo, usando Express, se debe configurar un Router. Un router es un objeto que permite definir rutas y agruparlas. Para crear un Router, se debe llamar a la funcion Router() de Express. Luego, se puede definir las rutas en el Router, de la misma forma que se hacia en la misma aplicacion de express.

const express = require('express')

// Mando a llamar al router express
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Silvestre",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

//router.get('/api/v1/pets', (req, res) => {
//    res.json(petList)
//})

/* PARAMS */
// Un param sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de una mascota en especifico, puedo hacer una ruta que reciba el ID de la mascota y que me regrese la información de esa mascota.

router.get('/api/v1/pets/:petId', (req, res) => {
    console.log(req.params)
    const { petId } = req.params
    const onePet = petList.pets.find(pet => pet.id === parseInt(petId))
    if (!onePet) return res.status(404).json({ message: 'pet not found' })

    res.json(onePet)
})

/* QUERY */
//Una query es similar a un PARAM, pèro e lugar de ser parte de la ruta, se envia como un parametro en la URL (?). SOBRE TODO CUando ocupamos mandar más de un dato, es común usarlas para filtrar información.
//las Querys son abiertas, es decir no se necesita definirlas en la ruta, que reciba el tipo de mascota y que regrese la información de todas las mascotas y que regresen la información de todads las mascotas de ese tipo.
// Query: /api/v1/pets?type=dog&age=3

router.get('/api/v1/pets', (req, res) => {
    console.log(req.query)
    const { type, age } = req.query
    let pets = petList.pets
    if (type && age) {
        pets = pets.filter(pet => pet.type === type && pet.age === parseInt(age))
    }

    if (type) {
        pets = pets.filter(pet => pet.type === type)
    }

    if (age) {
        pets = pets.filter(pet => pet.age === parseInt(age))
    }

    res.json(pets)
})

// export en common JS
module.exports = router