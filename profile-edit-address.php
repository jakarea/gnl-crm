<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="D&D is a Ecommerce Platform">
  <meta property="og:title" content="D&D">
  <meta property="og:type" content="E-Commerce">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <meta name="theme-color" content="#fff">

  <!-- Bootstrap CSS start -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <!-- Bootstrap CSS end -->

  <!-- plugin CSS start -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- plugin CSS end -->

  <!-- custom CSS start -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css"> 
  <link rel="stylesheet" href="assets/css/profile.css">
  <!-- custom CSS end -->

  <title>Profile Edit Address</title>
</head>

<body>

  <!-- dashboard page wrapper start -->
  <main class="root-main-wrapper">
    <!-- sidebar wrapper start -->
    <?php include("include/sidebar.php") ?>
    <!-- sidebar wrapper end -->

    <!-- header part start -->
    <?php include("include/header.php") ?>
    <!-- header part end -->

    <!-- main page wrapper start -->
    <section class="main-page-wrapper">
        <!-- page title -->
        <div class="page-title">
          <h1>Profile</h1>
        </div>
        <!-- page title -->
  
        <!-- customer details start -->
        <div class="row">
           <div class="col-12 col-md-4 col-xl-3">
            <!-- customer about start -->
            <div class="company-about-box">
                <div class="avatar-wrap">
                    <img src="./uploads/users/avatar-11.png" alt="U" class="img-fluid">
                </div>
              <div class="txt">
                <h1>Yvette Schmitt</h1>
                <p>Engineer</p>
  
                <hr>
  
                <ul>
                  <li>
                    <p><img src="./assets/images/icons/envelope.svg" alt="I" class="img-fluid">macejkovic@yahoo.com</p>
                  </li>
                  <li>
                    <p><img src="./assets/images/icons/call.svg" alt="I" class="img-fluid">294-528-6776</p>
                  </li>
                  <li>
                    <p><img src="./assets/images/icons/global.svg" alt="I" class="img-fluid">Bedfordsh</p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- customer about end -->
          </div>
          <div class="col-12 col-md-8 col-xl-9">
            <!-- customer info start -->
            <div class="company-edit-from-wrapper"> 
              <!-- customer personal info start -->
              <div class="form-box">
                <div class="title">
                  <h3>Personal Info</h3>
                  <a href="#">
                    <img src="./assets/images/icons/pen.svg" alt="I" class="img-fluid">
                  </a>
                </div> 
                
                <!-- table start -->
                <div class="personal-info-table-wrap">
                    <table>
                      <tr>
                        <td>
                          <p>Full Name</p>
                        </td>
                        <td>
                          <h6>Michael Windler</h6>
                        </td>
                        <td>
                          <p>Gender</p>
                        </td>
                        <td>
                          <h6>Female</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Designation</p>
                        </td>
                        <td>
                          <h6>Admin</h6>
                        </td>
                        <td>
                          <p>Marital Status</p>
                        </td>
                        <td>
                          <h6>Unmarried</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Date of Birth</p>
                        </td>
                        <td>
                          <h6>21 Oct 1995</h6>
                        </td>
                        <td>
                          <p>Phone Number</p>
                        </td>
                        <td>
                          <h6>911-415-0350</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Nationality</p>
                        </td>
                        <td>
                          <h6>Singapore</h6>
                        </td>
                        <td>
                          <p>Email Address</p>
                        </td>
                        <td>
                          <h6>Elton26@hotmail.com</h6>
                        </td>
                      </tr>
                    </table>
                </div>
                <!-- table end -->
              </div>
              <!-- customer personal info end -->
              <!-- customer address info start -->
              <div class="form-box mt-4">
                <div class="title">
                  <h3>Address</h3>
                  <a href="#">
                    <img src="./assets/images/icons/pen.svg" alt="I" class="img-fluid">
                  </a>
                </div> 
                <div class="form-group">
                  <label for="name">Primary Address <span>*</span></label>
                  <input type="text" class="form-control" placeholder="Pristia Candra Nelson"  name="name" id="name">
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="text">Country<span>*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Country" value="" name="text" id="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="text">City <span>*</span></label>
                      <input type="text" class="form-control" placeholder="Enter City" value="" name="text" id="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="text">State<span>*</span></label>
                      <input type="text" class="form-control" placeholder="Enter State" value="" name="text" id="text">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="number">Post Code<span>*</span></label>
                      <select name="" id="" class="form-control">
                        <option value="">002134</option>
                        <option value="">002584</option>
                      </select>
                      <div class="fields-icons">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-submit">
                  <button type="submit" class="btn btn-submit">Save Changes</button>
                </div>
              </div>
              <!-- customer address info end -->
            </div>
            <!-- customer info end -->
           </div>
          </div>
      </section>
    <!-- main page wrapper end -->
  </main>
  <!-- dashboard page wrapper end -->

  <!-- Bootstrap Bundle with Popper JS start -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <!-- Bootstrap Bundle with Popper JS end -->

</body>

</html>