<template>
  <div class="row">
    <div class="col-lg-7 mx-auto">
      <!-- Timeline -->
      <ul class="timeline">
        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
          <div class="timeline-arrow"></div>
          <h2 class="h5 mb-0">Bachelor degree</h2>
          <span class="small text-gray"
            ><i class="fa fa-clock-o mr-1"></i>Amravati University</span
          >
          <p class="text-small mt-2 font-weight-light">
            Pursuing Degree in Information Technology from Shri Sant Gajanan
            Maharaj College of Engineering, Shegaon
          </p>
        </li>
        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
          <div class="timeline-arrow"></div>
          <h2 class="h5 mb-0">Diploma</h2>
          <span class="small text-gray"
            ><i class="fa fa-clock-o mr-1"></i>Maharashtra State Board of
            Technical Education (June, 2019)</span
          >
          <p class="text-small mt-2 font-weight-light">
            Completed Diploma in Computer Engineering from Government
            Polytechnic College, Gondia with 80.00% aggregate in 2019
          </p>
        </li>
        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
          <div class="timeline-arrow"></div>
          <h2 class="h5 mb-0">School</h2>
          <span class="small text-gray"
            ><i class="fa fa-clock-o mr-1"></i>Maharashtra State Board of
            Secondary & Higher Secondary Education, 2016)</span
          >
          <p class="text-small mt-2 font-weight-light">
            Completed SSC from Ravindranath Tagore High School,Gondia with
            76.00% in 2016
          </p>
        </li>
      </ul>
      <!-- End -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

/* Timeline holder */
ul.timeline {
  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;
}

/* Timeline vertical line */
ul.timeline:before {
  content: " ";
  background: #fff;
  display: inline-block;
  position: absolute;
  left: 16px;
  width: 4px;
  height: 100%;
  z-index: 400;
  border-radius: 1rem;
}

li.timeline-item {
  margin: 20px 0;
}

/* Timeline item arrow */
.timeline-arrow {
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid #fff;
  border-bottom: 0.5rem solid transparent;
  display: block;
  position: absolute;
  left: 2rem;
}

/* Timeline item circle marker */
li.timeline-item::before {
  content: " ";
  background: #ddd;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #fff;
  left: 11px;
  width: 14px;
  height: 14px;
  z-index: 400;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/
body {
  background: #e8cbc0;
  background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
  background: linear-gradient(to right, #e8cbc0, #636fa4);
  min-height: 100vh;
}

.text-gray {
  color: #999;
}
</style>
