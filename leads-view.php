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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- plugin CSS end -->

  <!-- custom CSS start -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">

  <link rel="stylesheet" href="assets/css/leads.css">
  <!-- custom CSS end -->

  <title>Leads Page</title>
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
      <div class="page-title">
        <h1>Hosting Leads</h1>
        <!-- filter -->
        <div class="page-filter d-flex">
          <div class="dropdown">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Leads<i class="fas fa-angle-down"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">All Leads<i class="fas fa-check"></i></a></li>
              <li><a class="dropdown-item" href="#">New Leads</a></li>
              <li><a class="dropdown-item" href="#">In Progress</a></li>
              <li><a class="dropdown-item" href="#">No Answer Yet</a></li>
            </ul>
          </div>
          <div class="dropdown dropdown-category">
            <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropFour">
              <i class="fa-solid fa-plus"></i>Add Leads
            </button>
          </div>
        </div>
      </div>
      <div class="all-customer-box payment-from-copany-user">
        <div class="user-payment-table">
          <table>
            <tr>
              <th width="3%">No</th>
              <th class="d-flex justify-content-between">
                <span>Name</span>
              </th>
              <th>Phone</th>
              <th>Company</th>
              <th>Website</th>
              <th>Code</th>
              <th>Status</th>
            </tr>
            <!-- payment single item start -->
            <tr>
              <td>
                1
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-1.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Lela Mraz</h5>
                    <span>zlincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>575-491-3111</p>
              </td>
              <td>
                <p>Farrell LLC</p>
              </td>
              <td>
                <p>www.breanna.net</p>
              </td>
              <td>
                <p>99824254</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view">New</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                2
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-2.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Cecil Sporer</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>989-769-2178</p>
              </td>
              <td>
                <p>White - Weber</p>
              </td>
              <td>
                <p>www.melba.com</p>
              </td>
              <td>
                <p>99824254</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view">New</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                3
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-3.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Leah Skiles</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>506-881-3208</p>
              </td>
              <td>
                <p>Lockman and Lemke</p>
              </td>
              <td>
                <p>www.evalyn.net</p>
              </td>
              <td>
                <p>96406470</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view btn-completed">Completed</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                4
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-4.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Bradley Heathcote</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>774-699-3689</p>
              </td>
              <td>
                <p>Hackett - Considine</p>
              </td>
              <td>
                <p>www.willie.org</p>
              </td>
              <td>
                <p>83622377</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view btn-progress">In Progress</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                5
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-5.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Claire Turcotte</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>434-984-0055</p>
              </td>
              <td>
                <p>Walter Group</p>
              </td>
              <td>
                <p>www.edgar.biz</p>
              </td>
              <td>
                <p>50380514</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view btn-completed">Completed</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                6
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-6.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Rita Kovacek</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>614-594-2629</p>
              </td>
              <td>
                <p>Klocko - McGlynn</p>
              </td>
              <td>
                <p>www.jamaal.net</p>
              </td>
              <td>
                <p>55393669</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view no-ans-btn">No ans yet</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                7
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-7.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Mr. Roy Cole</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>611-805-5505</p>
              </td>
              <td>
                <p>Dickens and Wehner</p>
              </td>
              <td>
                <p>www.ben.name</p>
              </td>
              <td>
                <p>38137645</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view">New</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
            <!-- payment single item start -->
            <tr>
              <td>
                8
              </td>
              <td>
                <div class="media">
                  <img src="./uploads/users/avatar-8.png" alt="A" class="img-fluid">
                  <div class="media-body">
                    <h5>Cecilia Fisher</h5>
                    <span>lincoln@unpixel.com</span>
                  </div>
                </div>
              </td>
              <td>
                <p>534-492-2869</p>
              </td>
              <td>
                <p>Littel and Rolfson</p>
              </td>
              <td>
                <p>www.rickey.org</p>
              </td>
              <td>
                <p>33225105</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a href="#" class="btn-view no-ans-btn">No ans yet</a>
                  </li>
                  <li>
                    <a href="#" class="lead-dots"><img src="./assets/images/icons/dots-horizontal.svg" class="img-fluid" alt=""></a>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
          </table>
        </div>
        <!--pagination started-->
        <div class="pagination-section">
          <nav class="mt-4" aria-label="...">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link page-link-left"><i class="fa-solid fa-angle-left"></i></a>
              </li>
              <li class="page-item" aria-current="page"><a class="page-link" href="#">1</a></li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">10</a></li>
              <li class="page-item">
                <a class="page-link page-link-right ms-0" href="#"><i class="fa-solid fa-angle-right"></i></a>
              </li>
            </ul>
          </nav>
          <div class="pagination-text">
            <p>Showing 1 to 8 of 80 entries</p>
          </div>
        </div>
        <!--pagination end-->
      </div>
    </section>
    <!-- main page wrapper end -->
  </main>
  <!-- dashboard page wrapper end -->

  <!-- leads add modal start -->
  <div class="custom-modal custom-modal-leads">
    <div class="modal fade" id="staticBackdropFour" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropFourLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-leads">
          <div class="modal-header modal-header-leads">
            <h1 class="modal-title fs-5" id="staticBackdropFourLabel">Add Leads</h1>
            <button type="button" class="btn" data-bs-dismiss="modal">
              <i class="fas fa-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <form action="" class="common-form">
              <div class="add-customer-form">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="">Profile Image</label>
                      <input type="file" name="avatar" id="avatar" class="d-none">
                      <!-- upload avatar -->
                      <div class="d-flex">
                        <label for="avatar" class="avatar">
                          <img src="./uploads/users/avatar-13.png" alt="avatar" class="img-fluid">
                          <span class="avatar-ol">
                            <img src="./assets/images/icons/camera.svg" alt="camera" class="img-fluid">
                          </span>
                        </label>
                        <p><img src="./assets/images/icons/anchor.svg" alt="anchor" class="img-fluid"> Upload</p>
                      </div>
                      <!-- upload avatar -->
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="form-group form-error">
                      <label for="name">Name</label>
                      <input type="text" placeholder="Enter Name" id="name" name="name" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="phone">Phone</label>
                      <input type="text" placeholder="Enter Phone number" id="phone" name="phone" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="email">E-mail</label>
                      <input type="email" placeholder="Enter email address" id="email" name="email" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="instagram">Instagram</label>
                      <input type="text" placeholder="Enter Instagram" id="instagram" name="instagram" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="linkedin">Linkedin</label>
                      <input type="text" placeholder="Enter location" id="linkedin" name="linkedin" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="company">Company</label>
                      <input type="text" placeholder="Enter company name" id="company" name="company" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="website">Website</label>
                      <input type="text" placeholder="Enter website" id="website" name="website" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="kvk">KVK</label>
                      <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" class="form-control">
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="lead_type">Type of Lead</label>
                      <div class="common-dropdown common-dropdown-two">
                        <div class="dropdown dropdown-two dropdown-three">
                          <button class="btn w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Type of Lead<i class="fas fa-angle-down"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-two w-100">
                            <li><a class="dropdown-item dropdown-item-two" href="#">Hosting Lead<i class="fas fa-check"></i></a></li>
                            <li><a class="dropdown-item dropdown-item-two" href="#">Marketing Lead</a></li>
                            <li><a class="dropdown-item dropdown-item-two" href="#">Project Lead</a></li>
                            <li><a class="dropdown-item dropdown-item-two" href="#">Website Lead</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group form-error">
                      <label for="details">Notes</label>
                      <textarea name="details" id="details" rows="7" class="form-control" placeholder="Enter details"></textarea>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-bttn">
                      <button type="button" class="btn btn-cancel">Cancel</button>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-bttn">
                      <button type="submit" class="btn btn-submit">Submit</button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- leads add modal end -->

  <!-- Bootstrap Bundle with Popper JS start -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <!-- Bootstrap Bundle with Popper JS end -->

</body>

</html>