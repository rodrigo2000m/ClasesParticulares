const URL_DATOS=url("/datos.json")

var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

let listado=[]
function showList(array){
    let htmlContentToAppend = "";
    for(let i=0; i<array.length;i++){
        let materia=array[i];
        htmlContentToAppend +=`
                <div class="row">
                    <div class="col-3">
                        <img src="` +  + `" alt="` + materia.description + `" class="img-thumbnail">
                    </div>
                      <div class="col">
                        <h2>`+ materia.name+`</h2>
                      </div>
                  
                        
                </div>
        `;
        document.getElementById("list").innerHTML = htmlContentToAppend;
    };
    
};



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(URL_DATOS).then(function(resultObj){
        if (resultObj.status === "ok"){
            listado = resultObj.data;

            showList(listado);
        };
    
    })
});
