<template>
  <div>
    <Header/>
    <StartUps/>
    <WelcomeToGarage/>
    <Info/>
    <Specialization/>
    <Technology/>
    <Write/>
    <Copyright/>
  </div>
</template>

<script>
import Header from "../layouts/Header";
import StartUps from "../components/StartUps";
import WelcomeToGarage from "../components/WelcomeToGarage";
import Info from "../components/Info";
import Specialization from "../components/Specialization";
import Technology from "../components/Cases";
import Write from "../components/Write";
import Copyright from "../components/Copyright";

export default {
  name: "MainPage",
  components: {
    Header,
    StartUps,
    WelcomeToGarage,
    Info,
    Specialization,
    Technology,
    Write,
    Copyright
  }
}
</script>

<style lang="scss">

</style>
