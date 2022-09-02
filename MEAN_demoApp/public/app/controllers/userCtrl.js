angular
  .module("userControllers", [])
  .controller("regCtrl", function ($http, $location, $timeout) {
    var app = this;
    this.regUser = function (regData) {
      app.loading = true;
      app.errorMsg = false;

      if (
        this.regData.email.includes("@") &&
        this.regData.password.length >= 8
      ) {
        $http.post("/api/users", this.regData).then(function (data) {
          console.log(data.data.message);
          if (data.data.success) {
            app.loading = false;
            app.successMsg = data.data.message + "...Redirecting";
            $timeout(function () {
              $location.path("/");
            }, 1000);
          } else {
            app.loading = false;
            app.errorMsg = data.data.message;
          }
        });
      } else {
        app.loading = false;
        app.errorMsg = "Enter correct data ,password should be of 8 characters";
      }
    };
  });
