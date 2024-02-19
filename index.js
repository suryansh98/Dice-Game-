var randomNumber1 = Math.ceil(Math.random() * 6);

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//console.log(randomNumber1);

var randomNumber2 = Math.ceil(Math.random() * 6);

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else
document.querySelector("h1").innerHTML = "Draw";