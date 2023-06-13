<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100" style="background-color: #F5F8FA;">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start" style="background-color: #F5F8FA;">
                  <img src="imm.png" class="col-xl-12 mb-3">
                  <h5 class="font-weight-bolder">Login</h5>
                </div>
                <div class="card-body" >
                  <form role="form">
                    <div class="mb-3">
                      <p>Username</p>
                      <argon-input type="text" placeholder="Username" name="text" size="md" />
                    </div>
                    <div class="mb-3">
                      <p>Password</p>
                      <argon-input type="password" placeholder="Password" name="password" size="md" />
                    </div>
                    <argon-switch id="rememberMe">Remember me</argon-switch>
                    <div class="text-end" >
                      <argon-button
                        class="mt-4"
                        style="background-color: #246AFC;"
                        size="md"
                      >Login</argon-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="top-0 col-6 position-absolute end-0 ">
                <img src="procu.png" class="img-fluid" style="position:absolute; " >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
