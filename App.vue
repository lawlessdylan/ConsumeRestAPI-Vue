<template>
    <div>
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-dark bg-dark justify-content-between">
            <!-- <a class="navbar-brand navTitle">Enrolments</a> -->
            <router-link :to="{ name: 'home' }" class="navbar-brand">Enrolments</router-link> <!-- navigate to the component named home -->
            <form class="form-inline">
              <button v-if="loggedIn()" v-on:click="logout()" class="btn btn-outline-light" type="submit">Logout</button>
              <!-- if loggedIn method returns true, then show button. On click call the logout method -->
            </form>
          </nav>
        </div>
      </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <router-view/> <!-- router-view, renders other components within this template -->
                    <!-- Successful edit modal -->
                      <div class="modal fade" id="SuccessEditModal" role="dialog">
                        <div class="modal-dialog modal-md">
                          <div class="modal-content">
                            <div class="modal-body">
                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               <p>Successfully edited enrolment.</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Ok</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Successful Delete modal -->
                      <div class="modal fade" id="SuccessDeleteModal" role="dialog">
                        <div class="modal-dialog modal-md">
                          <div class="modal-content">
                            <div class="modal-body">
                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               <p>Successfully deleted enrolment.</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Ok</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Successful Create modal -->
                      <div class="modal fade" id="SuccessCreateModal" role="dialog">
                        <div class="modal-dialog modal-md">
                          <div class="modal-content">
                            <div class="modal-body">
                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               <p>Successfully created enrolment. View</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Ok</button>
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
  export default {
    name: 'App', //name of component
  	data: function () {
  			return {

  			}
  	},
  methods: {
  		loggedIn(){ //check if user is logged in, true = logged in
  			   if(localStorage.getItem('token')!==null){ //method used to hide the login and register and show all other components in the navbar when logged in
  				      return true;
  			      }
  			   else {
  				       return false;
  			    }
  		},

      logout() { //logout function that removes token from localStorage
            var app = this;
            var token = localStorage.removeItem('token'); //removes token
            app.$router.push({ name: 'login' }); //navigates user to login page
            console.log("User logged out"); //consoles that the user has logged out
          }

  	  // logout()
  	  // {
  	  // 		var token = localStorage.getItem('token');
  		// 		var app = this;
  	  //     axios.get('/api/logout', {
  		// 				headers: { Authorization: "Bearer " + token}
  		// 			})
  		// 			.then(function (resp) {
      //         app.$router.push({ name: 'login' }); // re-routes the user back to the login page
      //         localStorage.removeItem('token'); //removes token from localstorage
      //
  		// 				console.log("Successfully logged out.")
  		// 			})
      //
  	  //   }
	 }
}

</script>
<style>
.navbar{
	padding: 20px;
	border-bottom-style: solid;
	border-bottom-color: grey;
	border-width: 0.3px;
	margin-bottom: 20px;
}
</style>
