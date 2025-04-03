let cars = ["BMW", "Audi", "TATA", "LandRover"]

document.getElementById('demo1').innerHTML = cars;
cars[1] = "Suzuki";

 document.getElementById('demo2').innerHTML=` After modifying <br>${cars}`;
cars.push("Ford");
document.getElementById('demo3').innerHTML= cars;
