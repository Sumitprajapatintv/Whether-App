const api={
    key:"6b14c960cf603131054d47d501988d40",
    base:"https://api.openweathermap.org/data/2.5/"
}
const search=document.querySelector(".search");
const btn=document.querySelector(".btn");
console.log(search.value);


btn.addEventListener("click",getInput);

function getInput(event){
    event.preventDefault;
    if(event.type=="click")
    {
        getData(search.value);  
        console.log(search.value);
    }
}
getData=()=>{
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
}
function displayData(response)
{
    if(response.cod==="404")
    {
        const err=document.querySelector(".error");
        err.textContent="Please Enter a Valid City";
        search.value="";

    }
    else 
    {
    
    const city=document.querySelector(".city");
    city.innerText=`${response.name},${response.sys.country}`;

    const date=new Date();
    const d=document.querySelector(".date");
    d.innerText=setDate(date);

    const temp=document.querySelector(".temp");
    temp.innerText=`Temp: ${Math.round(response.main.temp)} °C`;

    const wether =document.querySelector(".weather");
    wether.innerText=`Weather: ${response.weather[0].main}`;

    const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;



    }
}
function setDate(date)
{
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today=date.getDate();
    const month=months[date.getMonth()];
    const year=date.getFullYear();

    return `${today},${month},${year}`;
}
