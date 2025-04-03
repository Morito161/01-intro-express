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

router.get('/api/v1/pets', (req, res) => {
    res.json(petList)
})

// export en common JS
module.exports = router