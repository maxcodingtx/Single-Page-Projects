
/* 
    on click:
    - update the number of elements (+1)
    - increase the number of elements inside element
    container if there are less than 3 items inside container
 */
function numIncrease () {
    
    // converting HTML of 'numItem' into integer
    var num = document.getElementById('numItem').innerHTML;
    num *= 1 

    /* 
    if number of elements is less than three:
    - increase that number by 1
    - keep adding elements inside element container 
    */
    if (num < 3) {
        num += 1
        document.getElementById('numItem').innerHTML = num;

        // for each each click, crate element in container
        for (let i=0; i<1; i++) {
            var divFlex = document.querySelector("#divFlex");
            
            divFlex.insertAdjacentHTML("afterbegin", '<p id=newNum class=section1__item></p>')
            document.getElementById("newNum").innerHTML = num
        }
    }

}

/* 
    on click:
    - update the number if elements (-1)
    - delete an element inside container 
*/
function numDecrease () {

    // converting HTML of 'numItem into integer
    var num = document.getElementById('numItem').innerHTML;
    num *= 1

    /* 
    if number of elements is greater than 1: 
    - update number of elements (-1)
    - delete an element in container 
    */
    if (num > 1) {
        num -= 1
        document.getElementById('numItem').innerHTML = num;

        // for each click, remove element
        for (let i=0; i<1; i++) {
            element = document.getElementById("newNum")
            element.remove();
        }
    }

}