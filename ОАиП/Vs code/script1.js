let output = document.querySelector('.output')
let example = document.querySelector('.example')
let input = document.querySelectorAll('.num')
let zn = document.querySelectorAll('.znac')
let result = document.querySelector('.result')
let clear = document.querySelector('.clear')
let point = document.querySelector('.point')
let a = ''
let b = ''
let c = ''
let sr = [0,1,2,3,4,5,6,7,8,9]
let znac = ['+','-','/','x','^','%']

input.forEach((item) => {
        item.addEventListener('click', () => {
                sr.forEach((number) => {
                        if(number == item.textContent){
                                if(output.textContent.includes('+') == true || output.textContent.includes('%') == true || output.textContent.includes('-') == true || output.textContent.includes('^') == true || output.textContent.includes('x') == true || output.textContent.includes('/') == true){
                                        if(output.textContent.includes('/') == true && item.textContent == 0){
                                                output.textContent = 'Ошибка' 
                                        }else{
                                                c += String(item.textContent)
                                                output.textContent += String(item.textContent)
                                        }
                                }else{
                                        a += String(item.textContent)
                                        output.textContent += String(item.textContent)
                                }
                        }
                })
                
        })
})

zn.forEach((item) => {
        item.addEventListener('click', () => {
                if(b.length == 0){
                znac.forEach((elem) =>{
                        if(elem == item.textContent){
                                b = String(item.textContent)
                                output.textContent += b
                        }
                })
                
        }})
})

point.addEventListener('click', () => {
        if(a.includes('.') == false){
                a += '.'
                output.textContent += '.'
        }else if(c.includes('.') == false){
                if(output.textContent.includes('+') == true || output.textContent.includes('%') == true || output.textContent.includes('-') == true || output.textContent.includes('^') == true || output.textContent.includes('x') == true || output.textContent.includes('/') == true){
                        c += '.'
                        output.textContent += '.'
                }
        }else{
                output.textContent = 'Ошибка' 
        }
})

result.addEventListener('click', () => {
        example.textContent = output.textContent
        if(b == '+'){output.textContent = Number(a)+Number(c)}
        else if(b == '-'){output.textContent = Number(a)-Number(c)}
        else if(b == '/'){output.textContent = Number(a)/Number(c)}
        else if(b == 'x'){output.textContent = Number(a)*Number(c)}
        else if(b == '^'){output.textContent = Number(a)**Number(c)}
        else if(b == '%'){output.textContent = Number(a)/100*Number(c)}
})

clear.addEventListener('click', () => {
        output.textContent = ''
        example.textContent = ''
        a = ''
        b = ''
        c = ''
})