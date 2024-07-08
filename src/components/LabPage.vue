<template>
    <div id="lab">
   <div style="display: flex;justify-content: space-around;">
    <div>
        <h1 class="labTitre">Why choose Grain Chain Lab</h1>
        <p class="paraLab">Grain Chain Lab represents the link between the main<br> actors that can make a change. <br>
            GCL gives the student a set of important assets that <br>help him create his own project :</p>
            <div style="display: block; text-align: left;margin-top: 50px;">
                <p style="font-family: Inter;font-size: 20px;font-weight: 400;line-height: 35.3px;text-align: left;color:white"><i class="bi bi-check" style="color:white;margin-right:10px"></i>First of all, the technical knowledge to carry his project.</p>
                <p style="font-family: Inter;font-size: 20px;font-weight: 400;line-height: 35.3px;text-align: left;color:white"><i class="bi bi-check" style="color:white;margin-right:10px"></i>Second, the soft skills.</p>
                <p style="font-family: Inter;font-size: 20px;font-weight: 400;line-height: 35.3px;text-align: left;color:white"><i class="bi bi-check" style="color:white;margin-right:10px"></i>Then there’s the IDEATION phase.</p>
                <p style="font-family: Inter;font-size: 20px;font-weight: 400;line-height: 35.3px;text-align: left;color:white"><i class="bi bi-check" style="color:white;margin-right:10px"></i>The DEMO DAY to bring aboard investors and launch their projects</p>
            </div>
    </div>
    <div>
        <img src="@/assets/image1.png" style="width: 600px;height: 500px;padding-top:30px">
    </div>

   </div>
</div>

</template>
<script>
export default {
    name: "LabPage",
    components: {

    }
}
</script>
<style>
.labTitre{
    font-family: Inter;
font-size: 36px;
font-weight: 800;
line-height: 63.54px;
text-align: left;
color: white;

}
#lab{
    width: 100%; /* Ajuste la largeur à 100% */
  min-height: 100vh; /* Hauteur minimale de la page égale à la hauteur de l'écran */
 
  background-image: url('@/assets/backround3.png');
  background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
}
.paraLab{
    font-family: Inter;
font-size: 24px;

line-height: 38.4px;
text-align: left;
color: #FFFFFF;


}
</style>