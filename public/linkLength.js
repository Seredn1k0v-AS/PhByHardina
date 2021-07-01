    let textWidth = document.querySelectorAll('#menu li a');
    let lineWidth = document.querySelectorAll('#menu a::before');

    for(let l of textWidth){
        let length = $(l).width();
        console.log(length);
    }