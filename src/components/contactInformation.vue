<template>
  <div class="contact3 py-5">
    <div class="row no-gutters">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card-shadow"></div>
          </div>
          <div class="col-lg-12">
            <div class="card mt-4 border-0 mb-4">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div
                    class="card-body d-flex align-items-center c-detail pl-0"
                  >
                    <div class="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                      />
                    </div>
                    <div class="">
                      <h6 class="font-weight-medium">Address</h6>
                      <p class="">
                        New Laxmi Nagar <br />
                        Bhramakumari Kumari Chowk <br />Gondia-441614 (MH)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="card-body d-flex align-items-center c-detail">
                    <div class="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                      />
                    </div>
                    <div class="">
                      <h6 class="font-weight-medium">Phone</h6>
                      <p class="">
                        +91 9168096901
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="card-body d-flex align-items-center c-detail">
                    <div class="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                      />
                    </div>
                    <div class="">
                      <h6 class="font-weight-medium">Email</h6>
                      <p class="">
                        kartikchauhan563@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact3 {
  font-family: "Montserrat", sans-serif;
  color: #8d97ad;
  font-weight: 300;
}

.contact3 h1,
.contact3 h2,
.contact3 h3,
.contact3 h4,
.contact3 h5,
.contact3 h6 {
  color: #3e4555;
}

.contact3 .font-weight-medium {
  font-weight: 500;
}

.contact3 .card-shadow {
  -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
  box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
}

.contact3 .btn-danger-gradiant {
  background: #ff4d7e;
  background: -webkit-linear-gradient(
    legacy-direction(to right),
    #ff4d7e 0%,
    #ff6a5b 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff4d7e),
    to(#ff6a5b)
  );
  background: -webkit-linear-gradient(left, #ff4d7e 0%, #ff6a5b 100%);
  background: -o-linear-gradient(left, #ff4d7e 0%, #ff6a5b 100%);
  background: linear-gradient(to right, #ff4d7e 0%, #ff6a5b 100%);
}

.contact3 .btn-danger-gradiant:hover {
  background: #ff6a5b;
  background: -webkit-linear-gradient(
    legacy-direction(to right),
    #ff6a5b 0%,
    #ff4d7e 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff6a5b),
    to(#ff4d7e)
  );
  background: -webkit-linear-gradient(left, #ff6a5b 0%, #ff4d7e 100%);
  background: -o-linear-gradient(left, #ff6a5b 0%, #ff4d7e 100%);
  background: linear-gradient(to right, #ff6a5b 0%, #ff4d7e 100%);
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.25rem;
}
</style>
