<template>
    <div id="home">
      <div class="topnav">
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/1e31/b460/5eb4b6fa0f4d1c982d9ea9369136d26a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrccaFBoy1l-qOb~6fWwm5WkyqY6jdiHP4UZxUvvy3hprPHve57~ErdsojVc44zLWouvXAscz6e14Xn5xQJTtgWplcG94BLGcKQWsaIe8CqsT6jHK88BhKkLT3sNcUIChEJ1Nz4iZjqD3f5egh9LjWIGkH3UaePcuB27ox6IocnfhRxpAwxpEJA9vQcl8ErMj6jfVHQINR6U49TujoIsQ0k8M3BMfxI-k-noeTAPEMxWfrytpihKFI-kjnb-PVfjvgNeUSnIf0vSgNtGoEQLa19Sj0UazoW82IlZEaW~1MwiMJjMnZIuAswn-21nQCGTimt9T8UfMr6IEtIVpRDKWg__" alt="Example Image" style="width:100px;height:90px;">
      </div>
      <div>
        <ul>
          <li ><a href="#HomePage" >Home</a></li>
          <li ><a href="#AboutPage" >About Us</a></li>
          <li><a href="#LabPage" >LAB</a></li>
          <li><a href="#ServicePage" >Service</a></li>
          <li><a href="#ContactPage" >Contact</a></li>
        </ul>
      </div>
    </div>
     
        <div class="para1">
          enter the blockchain universe from its <br> widest doors
        </div >
        <div >
         <p class="para2"> GCL is an interesting platform that will teach you in more <br>  an interactive way more than just a university</p>
        </div>
        <br>
        <br>
        <br>

        <div  class="button-container">
        <button class="bt1">Get started</button>
         <button class="bt2">learn more </button>
         </div>
      
     </div>
  
    


    

</template>
<script>


export default {
  name: 'HomePage',

  data() {
    return {
      imageSrc:require("../assets/jamila.jpg") ,
    };
  },
}
</script>
<style>
.para1{
  font-family: Poppins;
font-size: 48px;
font-weight: 700;
line-height: 72px;
letter-spacing: 0.02em;
text-align: center;

gap: 0px;
opacity: 0px;
padding-top: 6%;
padding-bottom: 60px;
color:white;

}


.para2 {
  font-family: Nunito Sans;
  font-size: 35px;
  font-weight: 700;
  line-height: 56px;
  text-align:center; /* Aligner le texte à droite */
 
  gap: 0px;
  opacity: 0px;
  
  padding-bottom: 40px;
 
  color:white;
}
#home{
  width: 100%; /* Ajuste la largeur à 100% */
  min-height: 100vh; /* Hauteur minimale de la page égale à la hauteur de l'écran */
 
  background-image: url('@/assets/backround1.png');
  background-size: cover; /* Pour couvrir toute la zone */
    background-position: center; /* Pour centrer l'image */
    background-repeat: no-repeat; /* Pour éviter que l'image se répète */
    background-attachment: fixed; /* 
}
.button-container {
  display: flex;
  justify-content: center; /* Centre les boutons horizontalement */
  margin-top: 60px; /* Marge supérieure pour espacer du contenu précédent */
}

.bt1 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-align: center;
  width: 314px;
  height: 48px;
  background: #8123C7;
  border: 1px solid #000; /* Bordure noire de 2 pixels */
  border-radius: 50px; /* Rayon de bordure */
  margin-right: 10px; /* Marge à droite pour espacer des autres éléments */
  color:white;
  transition: background-color 0.3s, transform 0.3s;
  
 
}

.bt2 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
 
  letter-spacing: 0.02em;
  text-align: center;
  width: 314px;
  height: 48px;
 
  border: 5px solid white; /* Bordure noire de 2 pixels */
  border-radius: 50px; /* Rayon de bordure */
  margin-left: 10px; /* Marge à gauche pour espacer des autres éléments */
  background-color: transparent;
  color:white;
}




ul {
  list-style-type: none;
  padding: 0;
  color: rgb(113, 112, 112);

}

li {
  display: inline-block;
  margin: 0 10px;
  color: rgb(123, 118, 118);




}

img {
  width:auto;
  height: 250px;
  top:-200px;
  left:10px;

}

a {
  color:white;

}
a:link {
  color:white;

}
a:visited {
  color:white;

}

.topnav li:hover {
  background-color: #5DA5B3;

}

.topnav a {


  text-decoration: none;
  font-size: 15px;


}

.topnav {
  background-color:transparent;

  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
 li a{
  color: E8EDDF;
}



 




</style>