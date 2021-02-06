
// api url 
const api_url =  
      "https://api.rootnet.in/covid19-in/stats/latest"; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    var requiredData = data.data.regional;
    console.log(typeof(data.data.regional[0].loc));
    console.log(data.data.regional[0])
    requiredDataLength = requiredData.length
    console.log(requiredData.length);
    console.log(data.data.regional); 
    if (response) { 
        hideloader(); 
    } 
    show(requiredData); 
} 
// Calling that async function 
getapi(api_url); 
  
// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(requiredData) { 
    
        let tab="";
        console.log(typeof(requiredData));
        console.log(requiredData);
    
    // Loop to access all rows  
    for(let r of requiredData) { 
        tab += `<div style="margin-top:25px;"class="col-lg-4 col-md-6 col-sm-12"><div class="card h-100 bg-danger"> <div class="card-header">
    <h4 class="card-title" >${r.loc}</h4> </div><div class="card-body bg-warning">
    <div> Confirmed cases Indian: ${r.confirmedCasesIndian}</div>
    <div> Confirmed cases Foreign: ${r.confirmedCasesForeign}</div>
    <div> Discharged: ${r.discharged}</div>
    <div> Deaths : ${r.deaths}</div>
    <div> Total Confirmed : ${r.totalConfirmed}</div></div></div></div>`; 
    } 
    // Setting innerHTML as tab variable 
    document.getElementById("covidData").innerHTML = tab; 
} 
