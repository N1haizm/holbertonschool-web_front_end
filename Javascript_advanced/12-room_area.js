let roomDimensions = {
    width: 50,
    height: 100,
    getArea: () => {
        return height*width
    }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions)