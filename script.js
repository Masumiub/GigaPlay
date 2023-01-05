const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }
        else{
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observerfade = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showfade');

        }
        else{
            entry.target.classList.remove('showfade');
        }
    });
})

const hiddenfadeElements = document.querySelectorAll('.hiddenfade');
hiddenfadeElements.forEach((el) => observerfade.observe(el));



const observerTop = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showTop');

        }
        else{
            entry.target.classList.remove('showTop');
        }
    });
})

const hiddenTopElements = document.querySelectorAll('.hiddenTop');
hiddenTopElements.forEach((el) => observerTop.observe(el));


const observerScale = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showScale');

        }

    });
})

const hiddenScaleElements = document.querySelectorAll('.hiddenScale');
hiddenScaleElements.forEach((el) => observerScale.observe(el));