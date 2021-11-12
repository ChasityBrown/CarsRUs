const database = {
    paints: [{
        id: 1,
        color: "Silver",
        price: 17
    },{
        id: 2,
        color: "Midnight Blue",
        price: 24
    },{
        id: 3
        color: "Firebrick Red",
        price: 28
    }, {
        id: 4
        color: "Spring Green",
        price: 45
    }
    ],
    interiors: [{
        id: 1,
        seatType: "Beige Fabric",
        price: 250
    },{
        id: 2,
        seatType: "Charcoal Fabric",
        price: 300
    },{
        id: 3,
        seatType: "White Leather",
        price: 555
    },{
        id: 4,
        seatType: "Black Leather",
        price: 475
    }
],
    technologies: [{
        id: 1,
        package: "Basic: basic sound system",
        price: 1125
    },{
        id: 2,
        package: "Navigation: includes integrated navigation controls",
        price: 1715
    },{
        id: 3,
        package: "Visibility: includes side and rear cameras",
        price: 2235
    },{
        id: 4,
        package: "Ultra: includes navigation and visibility packages",
        price: 4567
    }],
    wheels: [{
        id: 1,
        wheelType: "17-inch Pair Radial",
        price: 1500
    },{
        id: 2,
        wheelType: "17-inch Pair Radial Black",
        price: 1750
    },{
        id: 3,
        wheelType: "17-inch Pair Spoke Silver",
        price: 2225
    },{

        id: 4,
        wheelType: "17-inch Pair Spoke Black",
        price: 2750
    }],
    orders: [{}]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}