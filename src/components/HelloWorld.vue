<template>
  <div class="hello">

    

    <div>
      <div>
        <section id="HomePage" style="overflow-y: auto; overflow-x: hidden;">

          <home-page />
        </section>
      </div>
      <div>
        <section id="AboutPage" style="overflow-y: auto; overflow-x: hidden;">
          <About-page />
        </section>
        <br>
      </div>
      <div>
        <section id="LabPage" style="overflow-y: auto; overflow-x: hidden;">
          <Lab-Page />
        </section>
      </div>
      
      <div>
        <section id="ServicePage" style="overflow-y: auto; overflow-x: hidden;">
          <service-page />
        </section>
      </div>
     
      <br>
      <br>
      <div>
        <section id="ContactPage" style="overflow-y: auto; overflow-x: hidden;">
          <contact-page />
        </section>
      </div>
    </div>



  </div>
</template>

<script>

import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import LabPage from '../components/LabPage.vue'
import ServicePage from '../components/ServicePage.vue'
import ContactPage from '../components/ContactPage.vue'

export default {
  name: 'HelloWorld',
  components: {
    HomePage,
   AboutPage,
    LabPage,
    ServicePage,
    ContactPage,
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  width: 328.27px;
  height: 65.88px;
}

a {
  color: #e5eeee;

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
  position:fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
 li a{
  color: E8EDDF;
}
</style>
