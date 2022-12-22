const calculator = {
    memory : 0, 
    op : " ",
    second : 0,
}
calculator.setOp = function(op) {
    calculator.op = op
}

const ope = document.getElementsByClassName("operator")  

const arrOpe = Array.from(ope);
arrOpe.forEach((item) => item.addEventListener("click", (events) => {
    calculator.setOp(events.target.id)
    }));

    

