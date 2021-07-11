
function downloadFile() {

    var canvas = document.getElementById("the-canvas");
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
    window.location.href = image;

  }

  function downloadPDF () {
    return html2canvas($('#the-canvas'), {
        background: "#ffffff",
        onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/jpeg");
          var imgWidth = (canvas.width * 50) / 240;
          var imgHeight = (canvas.height * 50) / 240; 
          var pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(myImage, 'JPEG', 8, 2, imgWidth, imgHeight); // 2: 19
          pdf.save('New.pdf');
        }
    });
}