<template>
    <div id="about">
        <div>
            <h2 class="titre">Our partners</h2>
        </div>
        <div>
            <p class="para4">We collaborate with leading top <br> blockchain networks</p>
        </div>
        <br>
        <br>
        <br>
        <div class="image-container">
            <img :src="require('@/assets/poly.png')" alt="Example Image" class="img1">
            <img :src="require('@/assets/aval.png')" alt="Example Image" class="img1" style="width: 200px;height: 39.68px;">
            <img :src="require('@/assets/fant.png')" alt="Example Image" class="img1" style="width: 179px;height: 47px">
            <img :src="require('@/assets/arbit.png')" alt="Example Image" class="img1" style="width: 272px;height: 68.45px;">
            <img :src="require('@/assets/file.png')" alt="Example Image" class="img1" style="width: 208px;height: 51.59px;">
        </div>
        <div>
            <h2 class="titre2">Digital currency is our expertise</h2>
        </div>
        <div>
            <p class="para3">become the main supporter of the young entrepreneurs in MENA region</p>
        </div>
        

        <div class="sstyle-card">
            <div class="card" v-for="(carde, index) in prodCopy " :key="index">
  <div class="card-image-container">
    <img :src="carde.imglink" alt="Profile Image" class="card-image">
  </div>
  <div class="card-content">
    <h2 class="card-title">{{carde.title}}</h2>
    <p class="card-description">  {{ carde.description }}</p>
   
  </div>
</div>
    
  </div>

  <div class="container">
   <div>
    <img src="@/assets/image.png" class="style-img">
   </div>
   <div> 
    <h1 style="font-family: Poppins;font-size: 40px;font-weight: 700;line-height: 60px;text-align:left;color:#6400C3;margin-bottom: 20px;">Welcome to GCL</h1>
    <p style="font-family: Inter;font-size: 28px;font-weight: 500;line-height: 49.42px;text-align: left;color: #444444; margin-bottom: 50px">Grain Chain Lab is a Tunisian incubator that helps young entrepreneurs turn their brilliant ideas into successful startups on the blockchain networks.</p>
    <div style=" display: block ;text-align: left;margin-bottom: 30px;">
      <div style="color: #000000; font-family: Inter;font-size: 28px;font-weight: 500;line-height: 49.42px;">
    <i class="bi bi-grid-fill" style="color: #6953D3;margin-right: 10px;"></i>Blockchain courses and workshops
  </div>
  <div  style="color: #000000; font-family: Inter;font-size: 28px;font-weight: 500;line-height: 49.42px;">
    <i class="bi bi-arrow-repeat" style="color: #6953D3;margin-right: 10px;"></i>Soft skills and management guidance
  </div>
  <div  style="color: #000000; font-family: Inter;font-size: 28px;font-weight: 500;line-height: 49.42px;">
    <i class="bi bi-arrow-down-left-circle-fill" style="color: #6953D3;margin-right: 10px;"></i>Startup creation
  </div>
  </div>
    <button class="bt1">Get started</button>
   </div>

  </div>
</div>

       
 
</template>
  
<script>


export default {
    name: "AboutPgae",
    data() {
    return {
      prodCopy: this.$store.state.cards,
    }
  },
    components: {

    }
}
</script>
<style>
.titre{
    width: 271px;
height: 60px;
gap: 0px;
opacity: 0px;
font-family: Poppins;
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: 0.02em;
text-align: center;
margin-right: 590px;
margin-left: 590px;


}
.para4{
    font-family: Poppins;
font-size: 32px;
font-weight: 400;
line-height: 48px;
letter-spacing: 0.02em;
text-align: center;
color: #000000;

gap: 0px;
opacity: 0px;





}
#about{
  width: 100%; /* Ajuste la largeur à 100% */
  min-height: 100vh; /* Hauteur minimale de la page égale à la hauteur de l'écran */
  margin-right: 20px;
 
}
.img1{
    width: 204px;
height: 44.64px;
gap: 0px;
opacity: 0px;
margin: 10px;

}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.titre2{
    font-family: Poppins;
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: 0.02em;
text-align: center;
color: #000000;
margin-top: 50px;


}
.para3{
    font-family: Poppins;
font-size: 30px;
font-weight: 400;
line-height: 45px;
letter-spacing: 0.02em;
text-align: center;
color: #0007FF;
margin-left: 150px;
margin-right: 150px;
padding-bottom: 30px;


}

.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  padding-top: 60px; /* Adjust based on the size of the image */


}

.card:hover {
  transform: translateY(-50px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image-container {
  position: absolute;
  top: 50px; /* Adjust based on the size of the image */
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-100%);
  width: 99px;
height: 99px;

border: 1px 0px 0px 0px;

  background-color: #6011A3; /* Background color to change the image color */
  border-radius: 50%;
  display: flex;
 
}
.sstyle-card{
    display: flex;
    align-items: center;
    justify-content:space-around;

}
.container{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.style-img {
  width: 680px;
  height: 720px;
  gap: 0px;
  opacity: 0px;
   /* Ajout de la rotation */
}


</style>