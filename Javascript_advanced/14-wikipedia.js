function createElement(data){
    let p = document.createElement('p')
    p.textContent = data
    document.body.appendChild(p)
}

function queryWikipedia(callback){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText)
            let pages = response.query.pages
            let extract = pages[Object.keys(pages)[0]].extract
            callback(extract)
        } else {
            console.error(xhr.statusText);
        }
      };
      
    xhr.send();
}

queryWikipedia(createElement)