
export const scroll_to_section = async  (
    id:string, 
    offsetTop:number=0
) => {
    setTimeout( 
        ()=>{
            const element = document.getElementById(id);
            if (element) {
                // element.scrollIntoView({ 
                //     behavior: 'smooth',
                //     block: 'center'
                // });      
                const rect = element.getBoundingClientRect();
                const desiredPosition = rect.top + window.scrollY - offsetTop;
                window.scrollTo({
                    top: desiredPosition,
                    behavior: 'smooth'
                });
            }
        },
        100
    );
};