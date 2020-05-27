// code to display image on Canvas
document.getElementById("mapContainer").setAttribute("align", "center");

document.getElementById('buttonContainer').style.height = 100 + 'px';


d3.select("#mapContainer").append("canvas")
    .attr('id','canvas');
    // .attr("width", i)
    // .attr("height", c)
    // .style("width", i / r + "px")
    // .style("height", c / r + "px");

let fileInput = document.getElementById('fileinput');

fileInput.addEventListener('change', function (ev) {
    if (ev.target.files) {
        let file = ev.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function (ev) {
                var canvas = document.getElementById('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0);
            }
        }
    }
});