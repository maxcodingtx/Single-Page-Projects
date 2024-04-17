
/* 
    on click:
    - update the number of elements (+1)
    - increase the number of elements inside element
    container if there are less than 3 items inside container
 */
function numIncrease() {
    
    // converting HTML of 'numItem' into integer
    var num = document.getElementById('numItem').innerHTML;
    num *= 1 

    /* 
    if number of elements is less than three:
    - increase that number by 1
    - keep adding elements inside element container 
    */
    if (num < 12) {
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
function numDecrease() {

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

var flexDirection = [
    'flex-direction-row',
    'flex-direction-column',
    'flex-direction-row-reverse',
    'flex-direction-column-reverse'
];

function directionRow() {
    const element = document.getElementById('divFlex');

    for (const i of element.classList) {
        for (const j of flexDirection) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('flex-direction-row')
            } else {
                element.classList.add('flex-direction-row')
            };
        };
    };
};

function directionColumn() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of flexDirection) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('flex-direction-column')
            } else {
                element.classList.add('flex-direction-column')
            };
        };
    };
};

function directionRowReverse() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of flexDirection) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('flex-direction-row-reverse')
            } else {
                element.classList.add('flex-direction-row-reverse')
            };
        };
    };
};

function directionColumnReverse() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of flexDirection) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('flex-direction-column-reverse')
            } else {
                element.classList.add('flex-direction-column-reverse')
            };
        };
    };
};


var alignItems = [
    'align-items-flex-start',
    'align-items-center',
    'align-items-flex-end',
    'align-items-stretch'
];

function alignitemsStart() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignItems) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-items-flex-start')
            } else {
                element.classList.add('align-items-flex-start')
            };
        };
    };
};

function alignitemsCenter() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignItems) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-items-center')
            } else {
                element.classList.add('align-items-center')
            };
        };
    };
};

function alignitemsEnd() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignItems) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-items-flex-end')
            } else {
                element.classList.add('align-items-flex-end')
            };
        };
    };
};

function alignitemsStretch() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignItems) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-items-stretch')
            } else {
                element.classList.add('align-items-stretch')
            };
        };
    };
};


var justifyContent = [
    'justify-content-start',
    'justify-content-center',
    'justify-content-end',
    'justify-content-between',
    'justify-content-around',
    'justify-content-evenly'
];


function justifycontentStart() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-start')
            } else {
                element.classList.add('justify-content-start')
            };
        };
    };
};

function justifycontentCenter() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-center')
            } else {
                element.classList.add('justify-content-center')
            };
        };
    };
};

function justifycontentEnd() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-end')
            } else {
                element.classList.add('justify-content-end')
            };
        };
    };
};

function justifycontentBetween() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-between')
            } else {
                element.classList.add('justify-content-between')
            };
        };
    };
};

function justifycontentAround() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-around')
            } else {
                element.classList.add('justify-content-around')
            };
        };
    };
};

function justifycontentEvenly() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of justifyContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('justify-content-evenly')
            } else {
                element.classList.add('justify-content-evenly')
            };
        };
    };
};

var alignContent = [
    'align-content-start',
    'align-content-center',
    'align-content-end',
    'align-content-stretch',
    'align-content-between',
    'align-content-around'
];

function aligncontentStart() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-start')
            } else {
                element.classList.add('align-content-start')
            };
        };
    };
};

function aligncontentCenter() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-center')
            } else {
                element.classList.add('align-content-center')
            };
        };
    };
};

function aligncontentEnd() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-end')
            } else {
                element.classList.add('align-content-end')
            };
        };
    };
};

function aligncontentStretch() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-stretch')
            } else {
                element.classList.add('align-content-stretch')
            };
        };
    };
};

function aligncontentBetween() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-between')
            } else {
                element.classList.add('align-content-between')
            };
        };
    };
};

function aligncontentAround() {
    const element = document.getElementById('divFlex');
    
    for (const i of element.classList) {
        for (const j of alignContent) {
            if (i == j) {
                element.classList.remove(i)
                element.classList.add('align-content-around')
            } else {
                element.classList.add('align-content-around')
            };
        };
    };
};


document.addEventListener('click', function() {
    let element = document.getElementById('divFlex');
    console.log(element.classList);
})