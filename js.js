btn = document.getElementById('btn')
tear = document.getElementById('tear') // tear - textarea
line = document.getElementById('line')
btn.addEventListener('click', function(){
    for(let i = 0; i < 5; i++)
        line.children[i].style.setProperty('background-color', 'white')
    let ves = parseFloat(document.getElementById('in1').value)
    let rost = parseFloat(document.getElementById('in2').value) / 100
    let imt = Number((ves / (rost * rost)).toFixed(1))
    tear.textContent = imt
    let ch = 0 // ch - номер child
    if(imt < 18.5)
        ch = 0
    else if(imt >= 18.5 && imt <= 24.9)
        ch = 1
    else if(imt >= 25 && imt <= 29.9)
        ch = 2
    else if(imt >= 30 && imt <= 34.9)
        ch = 3
    else if(imt >= 35)
        ch = 4
    line.children[ch].style.setProperty('background-color', '#c2c1be')
})