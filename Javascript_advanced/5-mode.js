function changeMode(size, weight, transform, background, color){
    return function(){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor= background;
        document.body.style.color = color;
    }
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    let screamMode = changeMode(12, "normal","lowercase", "white", "black")
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome';
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement('button')
    spookyButton.innerText = "Spooky"
    document.body.appendChild(spookyButton)

    const darkModeButton = document.createElement('button')
    darkModeButton.innerText = 'Dark Mode'
    document.body.appendChild(darkModeButton)

    const screamModeButton = document.createElement('button')
    screamModeButton.innerText = 'Scream Mode'
    document.body.appendChild(screamModeButton)

    spookyButton.addEventListener('click', spooky)
    darkModeButton.addEventListener('click', darkMode)
    screamModeButton.addEventListener('click', screamMode)
}

main()