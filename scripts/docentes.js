
function showTeacher(array){
    let htmlContentToAppend = "";
    for(let i=0; i<array.docentes.length;i++){
        let teacher=array[i];
        htmlContentToAppend +=`
        <div class="rounded" style="background-color: #ff4400; padding: 2px 20px 2px 20px; color: white;">
            <h3>`+teacher.name+teacher.surname +`</h3>
        </div>
        <div class="row" style="display: flex; margin: auto;">
            <div class="col-3 rounded" style="border:black solid 1px; margin: 5px;">
                <img class="rounded-circle" style="width: 100%;" src="data:image/jpeg;base64,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" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur iure ad cupiditate amet accusamus libero nam laudantium odio, repellat vel ipsum ex quae quod sapiente omnis rerum facilis accusantium.</p>
            </div>
            <div class="col rounded" style="margin: 5px; background-color: rgba(255, 255, 255, 0.50);">
                <p style="text-align:justify;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptate quae perspiciatis deserunt neque adipisci facere suscipit porro, laboriosam a ipsam consequuntur temporibus quisquam repudiandae nisi nemo dolor ea. Laboriosam.</p>

            </div>

        </div>
        `;
        document.getElementById("cuerpo").innerHTML = htmlContentToAppend;
    };
    
};




const LINK="https://rodrigo2000m.github.io/ClasesParticulares/json/docentes.json"
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LINK).then(function(resultObj){
        if (resultObj.status === "ok"){
            showTeacher(resultObj.data);
        };
    
    })
});