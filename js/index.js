let icon = document.getElementById("demo")
let movieContainer = document.getElementById("Movies")

$("#sidebar").animate({ left: `-${$("#linkBox").outerWidth()}` }, 0)
    $('a').eq(0).animate({ bottom: `-${$('a').eq(0).outerHeight()}` }, 0, ()=>{
        $('a').eq(1).animate({ bottom: `-${$('a').eq(1).outerHeight()}` }, 0 ,()=>{
            $('a').eq(2).animate({ bottom: `-${$('a').eq(2).outerHeight()}` }, 0,()=>{
                $('a').eq(3).animate({ bottom: `-${$('a').eq(3).outerHeight()}` }, 0,()=>{
                    $('a').eq(4).animate({ bottom: `-${$('a').eq(4).outerHeight()}` }, 0,()=>{
                        $('a').eq(5).animate({ bottom: `-${$('a').eq(5).outerHeight()}` }, 0)        
                    })
                })
            })
        })
    })
    let a0 ,a1,a2,a3,a4,a5 ;
   
$("#demo").click(function () {
    
     a1 = $('a').eq(1).outerHeight(true) 
     a2 = $('a').eq(2).outerHeight(true)
     a3 = $('a').eq(3).outerHeight(true)
     a4 = $('a').eq(4).outerHeight(true)
    a5 = $('a').eq(5).outerHeight(true)

        $("#sidebar").animate({ left: "0px" }, 500, () => {
            $('a').eq(0).animate({ top: `0px` , left:`15px`,marginTop:`10px` }, 300 , ()=>{
                $('a').eq(1).animate({ top: `${a1}`, left:`15px`,marginTop:`10px` }, 300 , ()=>{
                    $('a').eq(2).animate({ top: `${a1+a2}`, left:`15px` , marginTop:`10px` }, 300 ,()=>{
                        $('a').eq(3).animate({ top: `${a1+a2+a3}`, left:`15px`,marginTop:`10px` }, 300, ()=>{
                            $('a').eq(4).animate({ top: `${a1+a2+a3+a4}`, left:`15px`,marginTop:`10px` }, 300 ,()=>{
                                $('a').eq(5).animate({ top: `${a1+a2+a3+a4+a5}`, left:`15px`,marginTop:`10px` }, 300,()=>{
                                    $("#demo").addClass('d-none')
                                    $("#close").removeClass('d-none')
                                    $("body").animate({paddingLeft:`${$("#linkBox").outerWidth()}`})
                                })
                                 
                            })
                        }) 
                    })
                })
            } )
        })

       
})

$("#close").click(function(){
    a0 = $('a').eq(1).outerHeight(true) 
    a1 = $('a').eq(1).outerHeight(true) 
    a2 = $('a').eq(2).outerHeight(true)
    a3 = $('a').eq(3).outerHeight(true)
    a4 = $('a').eq(4).outerHeight(true)
    a5 = $('a').eq(5).outerHeight(true)
    $('a').eq(5).animate({ top:`${a0+a1+a2+a3+a4+a5}`, left:`15px` }, 200,()=>{
        $('a').eq(4).animate({ top:`${a0+a1+a2+a3+a4}`, left:`15px` }, 200 , ()=>{
            $('a').eq(3).animate({ top: `${a0+a1+a2+a3}`, left:`15px` }, 200,()=>{
                $('a').eq(2).animate({ top: `${a0+a1+a2}`, left:`15px` }, 200 ,()=>{
                    $('a').eq(1).animate({ top: `${a0+a1}`, left:`15px` }, 200 ,()=>{
                        $('a').eq(0).animate({ top:`${a0}` , left:`15px` }, 200 ,()=>{
                            $("#sidebar").animate({ left:`-${$("#linkBox").outerWidth()}`}, 200 , ()=>{
                                $("#close").addClass('d-none')
                                    $("#demo").removeClass('d-none') 
                                    $("body").animate({paddingLeft:`0px`}) 
                            })
                        })  
                    } ) 
                })
            })
        })

    }) 
    

})

let nowPlayingLink = document.getElementById('nowPlaying')
let pop = document.getElementById("pop")
let topRatedLink = document.getElementById ("topRated")
let trandingLink = document.getElementById('tranding')
let upcomingLink = document.getElementById('upcoming')
let nowPlaying = [];
let topRated = [];
let trending = [] ;
let upcoming = [];
let allMovies = [];
let totalMovies=[]; 
// arr off 500 arr 
async function getMovies() {
    let x = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k')
    nowPlaying= (await x.json()).results;
    displayMovies(nowPlaying);

}

async function gettopRated(){
    let x = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=18237d7fd58ff3b5638a399d30df53e8&language=en-US&page=1')
    topRated = (await x.json()).results;
    displayMovies (topRated)
}
async function gettrending(){
    let x = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=18237d7fd58ff3b5638a399d30df53e8')
    trending = (await x.json()).results;
    displayMovies (trending)
}
async function getUpcoming(){
    let x = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=18237d7fd58ff3b5638a399d30df53e8&language=en-US&page=1')
    upcoming = (await x.json()).results;
    displayMovies (upcoming)
}


getMovies();
async function getAllPopular() {
    for(let w =1 ; w<=500 ; w++)
    {
        let xx = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18237d7fd58ff3b5638a399d30df53e8&language=en-US&page=${w}`)
        allMovies= (await xx.json()).results;
        totalMovies.push(allMovies)
    }
    
}
getAllPopular()
nowPlayingLink.addEventListener("click", async function(){
        await getMovies() ;
})
pop.addEventListener ("click", async function (){
   await getAllPopular()
   displayMovies(totalMovies[1])
    
})
topRatedLink.addEventListener ("click", async function (){
    await gettopRated(); 
 })
 trandingLink.addEventListener ("click", async function (){
    await gettrending(); 
 })
 upcomingLink.addEventListener ("click", async function (){
    await getUpcoming(); 
 })




function displayMovies(x) {
    let cartona = ``
    for (let i = 0; i <x.length&& i<20 ; i++) {
        cartona += `
        <div class="p-2 col-md-4">
        <div  class="  my-3 text-center position-relative  d-flex justify-content-center align-items-center catch">
            <div class="text-center  ">
                <img src="https://image.tmdb.org/t/p/w500${x[i].poster_path}" class="w-100" alt=""></img>
            </div>
            
            <div class="text-center overlay  ">
            <div class="d-flex flex-column align-items-center justify-content-center mt-5  ">
            
            <h2 class="colorBlack p-2 mb-2 ">${x[i].title}</h2>
            <p class="colorBlack fw-bold p-2 ">${x[i].overview}</p>
            <h5 class="colorBlack mt-2 " >Rate:${x[i].vote_average}</h5>
            <h5 class="colorBlack mt-1 " >${x[i].release_date}</h5>
            
            </div>
            </div>
        </div>
        </div>
`
    }
    movieContainer.innerHTML = cartona;

}

getMovies();

function clear() {
    movieContainer = ''
}
let searcharr = [];

let searchHome = document.getElementById('searchHome');
searchHome.addEventListener( 'keyup', function () {
    searcharr = []
    if (searchHome.value == '') {
        getMovies()
    }
    for (let d = 0; d < nowPlaying.length; ++d) {

        if ((nowPlaying[d].title.toLowerCase().includes(searchHome.value.toLowerCase())) == true) {
            searcharr.push(nowPlaying[d])
        }
    }
    
    displayMovies(searcharr)

})


let searchAll = document.getElementById('searchAll')
searchAll.addEventListener( 'keyup', function () {
    searcharr=[]
    if (searchAll.value == '') {
        getMovies()
    }
    for (let i=0 ; i<totalMovies.length;i++)
    {
        for (let d = 0; d < 20; d++) {

            if ((totalMovies[i][d].title.toLowerCase().includes(searchAll.value.toLowerCase())) == true) {
                searcharr.push(totalMovies[i][d])
            }
        }

    }
   
    
    displayMovies(searcharr)

})

let btn =  document.getElementById("mainButton")

let NameInput = document.getElementById("nameInput")
NameInput.addEventListener('keyup',function(){
    validateName ()
})
NameInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function validateName ()
{
    var regex = /^[A-Z]{1}[a-z]{3,8}$/;
    if(regex.test(NameInput.value)==true)
    {
        document.getElementById("testName").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testName").innerHTML= "name must start with UpperCase";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
    
}
let phoneInput = document.getElementById("phoneInput")
phoneInput.addEventListener('keyup',function(){
    validatePhone ()
})
phoneInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function validatePhone ()
{
    var regex = /^01[0125]{1}[12456789]{1}[0-9]{7}$/;
    if(regex.test(phoneInput.value)==true)
    {
        document.getElementById("testPhone").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testPhone").innerHTML= "Phone must consist of 11 number";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
    
}
let passwordInput = document.getElementById("passwordInput")
passwordInput.addEventListener('keyup',function(){
    validatePassword ()
})
passwordInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function validatePassword ()
{
    var regex = /^[a-z A-Z 0-9 ]{8}$/;
    if(regex.test(passwordInput.value)==true)
    {
        document.getElementById("testPassword").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testPassword").innerHTML= "Password must consist of 8 digit";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
   
}

let emailInput = document.getElementById("emailInput")
emailInput.addEventListener('keyup',function(){
    validateEmail ()
})
emailInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function validateEmail ()
{
    var regex = /^\w{1,30}@(gmail|yahoo|outlook|msn){1}.com$/;
    if(regex.test(emailInput.value)==true)
    {
        document.getElementById("testEmail").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testEmail").innerHTML= "invalid Email";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
    
}
let ageInput = document.getElementById("ageInput")
ageInput.addEventListener('keyup',function(){
    validateAge ()
})
ageInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function validateAge ()
{
    var regex = /^([1-7][0-9]|80)/;
    if(regex.test(ageInput.value)==true)
    {
        document.getElementById("testAge").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testAge").innerHTML= "age range from 10-80";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
    
}
let reEnterInput = document.getElementById("password1Input")
reEnterInput.addEventListener('keyup',function(){
    validateRenter ()
})
reEnterInput.addEventListener('keyup',function(){
    ckeckBtn ();
})
function  validateRenter ()
{
    if(reEnterInput.value==passwordInput.value)
    {
        document.getElementById("testPassword1").innerHTML= "";
        return true ;
    } 
    else
    {
        document.getElementById("testPassword1").innerHTML= "Password Dis-match";
        document.getElementById("mainButton").setAttribute('disabled','disabled');
    }
    
}

function ckeckBtn ()
{
    if ((validateName ()&& validatePhone () && validatePassword ()&&validateEmail () &&validateAge () && validateRenter () ) == true)
    {
        document.getElementById("mainButton").removeAttribute('disabled');
        document.getElementById("mainButton").classList.replace ("btn-outline-danger","btn-danger") ;

        return true ;
    }
}
