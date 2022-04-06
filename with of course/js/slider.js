
    const next = document.querySelector('.gallery_button_next')
    const back = document.querySelector('.gallery_button_back')
    const slide_1 = document.querySelector('.slider_1')
    const slide_2 = document.querySelector('.slider_2')
    const slide_3 = document.querySelector('.slider_3')
    const slide_4 = document.querySelector('.slider_4')
    
   
    

    

    next.addEventListener('click', function(evt){
        evt.preventDefault()
        if (!slide_1.classList.contains('slider_1_active')){
            slide_1.classList.add('slider_1_active')
            return false;
        }
        
        if (!slide_2.classList.contains('slider_2_active')){
            slide_2.classList.add('slider_2_active')
            return false;
        }

        if (!slide_3.classList.contains('slider_3_active')){
            slide_3.classList.add('slider_3_active')
            return false;
        }

        if (!slide_4.classList.contains('slider_4_active')){
            slide_4.classList.add('slider_4_active')
            return false;
        }
    })
    

    back.addEventListener('click', function(evt){
        evt.preventDefault()
        if (slide_4.classList.contains('slider_4_active')){
            slide_4.classList.remove('slider_4_active')
            return false;
        }
        
        if (slide_3.classList.contains('slider_3_active')){
            slide_3.classList.remove('slider_3_active')
            return false;
        }
        
        if (slide_2.classList.contains('slider_2_active')){
            slide_2.classList.remove('slider_2_active')
            back.width = back.width
            slide_1.classList.add('slider_1_active')
            return false;
        }
        if (slide_1.classList.contains('slider_1_active')){
            slide_1.classList.remove('slider_1_active')
            return false;
        }
    })

    
