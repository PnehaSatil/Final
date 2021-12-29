window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://resumecounter.azurewebsites.net/api/Resume?code=SB9lTmxQZvQRAD1JScYIonka9dzoCmL0LPLeLYAR88cwKE3/yKK5Yg==';
const localfunctionApi = 'http://localhost:7071/api/Resume';

const getVisitCount = () => {
    let count = 30 
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count; 
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
