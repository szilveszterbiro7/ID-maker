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
generateBtn.addEventListener("click", function(){
    console.log("Generate button clicked!");
});
generateBtn.addEventListener("click", function(){
    const randomId=Math.floor(10000000 + Math.random() * 90000000);
    cardId.textContent="ID: "+randomId;
    const name=nameInput.value;
    const age=ageInput.value;
    const occupation=occInput.value;
    console.log(name, age, occupation);
    cardName.textContent=name || "YOUR NAME";
    cardAge.textContent=age || "--";
    cardOcc.textContent=occupation || "UNKNOWN";
});
photoInput.addEventListener("change", function(){
    const file=photoInput.files[0];
    if (file){
        const imageUrl=URL.createObjectURL(file);
        cardPhoto.src=imageUrl;
    }
});