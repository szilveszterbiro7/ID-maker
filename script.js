const nameInput=document.getElementById("name");
const ageInput=document.getElementById("age");
const occInput=document.getElementById("occupation");
const cardName=document.getElementById("card-name");
const cardAge=document.getElementById("card-age");
const cardOcc=document.getElementById("card-occupation");
const generateBtn=document.getElementById("generate_btn");
const cardId=document.getElementById("card-id");
const photoInput=document.getElementById("photo")
const cardPhoto=document.getElementById("card-photo")
const themeInput=document.getElementById("theme")
const idCard=document.getElementById("id-card")
const download=document.getElementById("download-btn")
const qr=document.getElementById("qr-code")
generateBtn.addEventListener("click", function(){
    console.log("Generate button clicked!");
});
generateBtn.addEventListener("click", function(){
    const randomId=Math.floor(10000000+Math.random()*90000000);
    cardId.textContent="ID: "+randomId;
    const name=nameInput.value;
    const age=ageInput.value;
    const occupation=occInput.value;
    console.log(name, age, occupation);
    cardName.textContent=name || "YOUR NAME";
    cardAge.textContent=age || "--";
    cardOcc.textContent=occupation || "UNKNOWN";
    qr.innerHTML="";
    const qrText="Name: "+name+"\nOccupation: "+occupation+"\nID"+randomId;
    new QRCode(qr, {
        text:qrText,
        width:150,
        height:150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel:  QRCode.CorrectLevel.M
    });
});
photoInput.addEventListener("change", function(){
    const file=photoInput.files[0];
    if (file){
        const imageUrl=URL.createObjectURL(file);
        cardPhoto.src=imageUrl;
    }
});
function newTheme(){
    const selectedTheme=themeInput.value;
    idCard.classList.remove("government", "cyberpunk", "agent");
    idCard.classList.add(selectedTheme);
}
themeInput.addEventListener("change", newTheme);
newTheme();
download.addEventListener("click", function(){
    html2canvas(idCard, {
        scale: 2,
        useCORS:true
    }).then (function(canvas){
        const link=document.createElement("a");
        link.download="my-id-card.png";
        link.href=canvas.toDataURL("image/png");
        link.click();
    });
});