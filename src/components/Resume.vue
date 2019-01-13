<template>
  <div class="container">
    <div class="resume-body">
      <object :data="pdf" class="resume" ></object>
    </div>
  </div>
</template>

<script>
  import pdf from '../assets/pdf/minimal-resume.pdf'

    export default {
        name: "Resume",
      pdf: pdf
    }
</script>

<style scoped>

</style>
