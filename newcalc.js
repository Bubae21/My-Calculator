let p_btn = document.querySelectorAll('.p-btn')
let result = document.querySelector('.result')
let equal_to = document.querySelector('.equal-to')
let clear_btn = document.querySelector('.clear-btn')

for (let btn of p_btn) {
    btn.addEventListener('click', function () {
        if (result.value == '0') {
            result.value = ''
        }



        result.value += btn.value
    })
}

equal_to.addEventListener('click', function () {
    let exp = result.value.replace('&#247;', '/' )
    result.value = eval(exp)
   exp = exp.replace('X', '*')
   
    //result.value = eval(result.value)
})

clear_btn.addEventListener('click', function () {
    result.value = '0'
})

