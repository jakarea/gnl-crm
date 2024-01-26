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
  <link rel="stylesheet" href="assets/css/todo.css">
  <link rel="stylesheet" href="assets/css/project.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
  <!-- custom CSS end -->

  <title>Todo List </title>
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
        <h1 class="pb-0">To Do List</h1>
      </div>
      <!-- page title -->

      <div class="row">
        <div class="col-lg-3">
          <!-- my task list box start -->
          <div class="my-task-list-box">
            <div class="header">
              <h4>My Task</h4>
              <a href="#" class="add inter" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-plus me-2"></i>Task</a>
            </div>

            <!-- task list -->
            <div class="task-list-area custom-scroll-bar">
              <!-- task item start -->
              <div class="task-item">
                <div class="top">
                  <span><i class="fas fa-circle"></i> Priority</span>
                  <a href="#"><i class="fas fa-ellipsis-vertical"></i></a>
                </div>
                <h4><img src="./assets/images/icons/camera-2.svg" alt="a" class="img-fluid"> Meeting</h4>
                <p>Let us know what is the our new project updates.</p>
                <hr />

                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <span>Strategist</span>
                  </div>
                </div>
                <hr />
                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Dashboard Design</h5>
                    <span><img src="./assets/images/icons/close-3.svg" alt="a" class="img-fluid "> 4 Days Remaining</span>
                  </div>
                </div>
                <hr />

                <div class="ftr">
                  <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> Today</p>
                  <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid"> 12:30 PM</p>
                </div>

              </div>
              <!-- task item end -->
              <!-- task item start -->
              <div class="task-item">
                <div class="top">
                  <span class="important"><i class="fas fa-circle"></i> Important</span>
                  <a href="#"><i class="fas fa-ellipsis-vertical"></i></a>
                </div>
                <h4><img src="./assets/images/icons/camera-2.svg" alt="a" class="img-fluid"> Meeting</h4>
                <p>Let us know what is the our new project updates.</p>
                <hr />

                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <span>Strategist</span>
                  </div>
                </div>
                <hr />
                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Dashboard Design</h5>
                    <span><img src="./assets/images/icons/close-3.svg" alt="a" class="img-fluid "> 4 Days Remaining</span>
                  </div>
                </div>
                <hr />

                <div class="ftr">
                  <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> Today</p>
                  <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid"> 12:30 PM</p>
                </div>

              </div>
              <!-- task item end -->
              <!-- task item start -->
              <div class="task-item">
                <div class="top">
                  <span class="basic"><i class="fas fa-circle"></i> Basic</span>
                  <a href="#"><i class="fas fa-ellipsis-vertical"></i></a>
                </div>
                <h4><img src="./assets/images/icons/camera-2.svg" alt="a" class="img-fluid"> Meeting</h4>
                <p>Let us know what is the our new project updates.</p>
                <hr />

                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <span>Strategist</span>
                  </div>
                </div>
                <hr />
                <div class="media">
                  <img src="./uploads/users/avatar-10.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Dashboard Design</h5>
                    <span><img src="./assets/images/icons/close-3.svg" alt="a" class="img-fluid "> 4 Days Remaining</span>
                  </div>
                </div>
                <hr />

                <div class="ftr">
                  <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> Today</p>
                  <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid"> 12:30 PM</p>
                </div>

              </div>
              <!-- task item end -->
            </div>
            <!-- task list -->
          </div>
          <!-- my task list box end -->
        </div>
        <div class="col-lg-9">
          <!-- schedule part here -->
          <div class="schedule-part-box">
            <div class="header">
              <a href="#"><i class="fas fa-plus me-2"></i> Schedule</a>
            </div>

            <h4>Schedule Comming soon.....</h4>
          </div>
        </div>
      </div>

    </section>
    <!-- main page wrapper end -->
  </main>
  <!-- dashboard page wrapper end -->

  <!-- task add modal start -->
  <div class="custom-modal">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header modal-header-two">
            <h1 class="modal-title" id="staticBackdropLabel">Add Task</h1>
            <button type="button" class="btn" data-bs-dismiss="modal">
              <i class="fas fa-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <form action="" class="common-form another-form">
              <div class="add-customer-form">
                <div class="row">

                  <div class="col-xl-12">
                    <div class="row">
                      <!--modal left part start-->
                      <div class="col-lg-6">
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="form-group mt-0">
                              <div class="customer-modal-title">
                                <h3>Task Information</h3>
                              </div>
                              <hr>
                            </div>
                          </div>
                          <div class="col-xl-12">
                            <div class="form-group form-error mt-0">
                              <label for="title">Task Title</label>
                              <input type="text" placeholder="Enter title" id="title" name="title" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-12">
                            <div class="form-group form-error">
                              <label for="website">Priority</label>
                              <div class="common-dropdown common-dropdown-two">
                                <div class="dropdown dropdown-two">
                                  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Priority<i class="fas fa-angle-down"></i>
                                  </button>
                                  <ul class="dropdown-menu dropdown-menu-two">
                                    <li><a class="text-primary dropdown-item dropdown-item-two" href="#">Basic<i class="fas fa-check"></i></a></li>
                                    <li><a class="text-warning dropdown-item dropdown-item-two" href="#">Important</a>
                                    </li>
                                    <li><a class="text-danger dropdown-item dropdown-item-two" href="#">Priority</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-12">
                            <div class="form-group form-error">
                              <label for="date">Date</label>
                              <input type="date" placeholder="dd-mm-yyyy" id="date" name="date" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-12">
                            <div class="form-group form-error">
                              <label for="schedule">Schedule</label>
                              <input type="time" placeholder="dd-mm-yyyy" id="schedule" name="schedule" class="form-control">
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="form-group form-error">
                              <label for="details">Description</label>
                              <textarea name="details" id="details" rows="7" class="form-control" placeholder="Enter details"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--modal left part end-->
                      <div class="col-lg-6">
                        <div class="project-add-scrollbar custom-scroll-bar">
                          <div class="customer-modal-title">
                            <h3>Project Information</h3>
                          </div>
                          <hr>
                          <div class="col-xl-12">
                            <div class="select-title">
                              <h3>Select Project</h3>
                            </div>
                            <!-- customer search form start -->
                            <div class="form-group search-by-name mt-2 grid-100">
                              <div class="search-item">
                                <img src="assets/images/icons/search-ic.svg" alt="a" class="img-fluid">
                                <input type="text" placeholder="Search Project" name="search" class="form-control">
                              </div>
                            </div>

                            <div class="customer-modal-title">
                              <h3>Customer Information</h3>
                            </div>
                            <hr>

                            <!-- customer search form end -->
                            <div class="select-title">
                              <h3>Select Customer</h3>
                            </div>
                            <!-- customer search form start -->
                            <div class="form-group search-by-name mt-2">
                              <div class="search-item">
                                <img src="assets/images/icons/search-ic.svg" alt="a" class="img-fluid">
                                <input type="text" placeholder="Search Project" name="search" class="form-control">
                              </div>
                              <div class="avatar-btn">
                                <a data-bs-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo" type="button">
                                  <img src="./assets/images/icons/user-add-two.svg" alt="a" class="img-fluid">Add Manually</a>
                              </div>
                            </div>
                            <!-- customer search form end -->

                            <!-- selected customer start  -->
                            <div class="row">
                              <!-- person -->
                              <div class="col-lg-6">
                                <div class="selected-profile-box">
                                  <div class="media">
                                    <img src="uploads/users/avatar-19.png" class="img-fluid avatar" alt="avatar">
                                    <div class="media-body">
                                      <h3>Glenda Miller</h3>
                                      <p>Manager</p>
                                    </div>
                                    <a href="#">
                                      <img src="./assets/images/icons/close-2.svg" alt="a" class="img-fluid">
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <!-- person -->
                              <!-- person -->
                              <div class="col-lg-6">
                                <div class="selected-profile-box">
                                  <div class="media">
                                    <img src="uploads/users/avatar-12.png" class="img-fluid avatar" alt="avatar">
                                    <div class="media-body">
                                      <h3>Glenda Miller</h3>
                                      <p>CEO</p>
                                    </div>
                                    <a href="#">
                                      <img src="./assets/images/icons/close-2.svg" alt="a" class="img-fluid">
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <!-- person -->
                            </div>
                            <!-- selected customer end  -->

                            <!--collapse part start-->
                            <div class="collapse" id="collapseTwo">
                              <div class="card-body">
                                <div class="modal-body">
                                  <form action="" class="common-form">
                                    <div class="add-customer-form">
                                      <div class="row">
                                        <div class="col-12">
                                          <hr>
                                          <div class="form-group">
                                            <label for="avatar">Profile Image</label>
                                            <input type="file" name="avatar" id="avatar" class="d-none">
                                            <!-- upload avatar -->
                                            <div class="d-flex">
                                              <label for="avatar" class="avatar">
                                                <img src="./uploads/users/avatar-9.png" alt="avatar" class="img-fluid">
                                                <span class="avatar-ol">
                                                  <img src="./assets/images/icons/camera.svg" alt="camera" class="img-fluid">
                                                </span>
                                              </label>
                                              <label for="avatar">
                                                <p><img src="./assets/images/icons/anchor.svg" alt="anchor" class="img-fluid"> Upload</p>
                                              </label>
                                            </div>
                                            <!-- upload avatar -->
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="name">Name</label>
                                            <input type="text" placeholder="Enter Name" id="name" name="name" class="form-control">
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="designation">Designation</label>
                                            <input type="text" placeholder="Enter Designation" id="designation" name="designation" class="form-control">
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
                                            <label for="phone">Phone</label>
                                            <input type="number" placeholder="Enter phone number" id="phone" name="phone" class="form-control">
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="location">Location</label>
                                            <input type="text" placeholder="Enter location" id="location" name="location" class="form-control">
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="website">Active Status</label>
                                            <div class="common-dropdown common-dropdown-two common-dropdown-three">
                                              <div class="dropdown dropdown-two dropdown-three">
                                                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                  Active<i class="fas fa-angle-down"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-two dropdown-menu-three">
                                                  <li><a class="dropdown-item dropdown-item-two" href="#">Active<i class="fas fa-check"></i></a></li>
                                                  <li><a class="dropdown-item dropdown-item-two" href="#">Inactive</a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="company">KVK</label>
                                            <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" class="form-control">
                                          </div>
                                        </div>
                                        <div class="col-xl-6">
                                          <div class="form-group form-error">
                                            <label for="service">Service</label>
                                            <input type="text" placeholder="Enter service" id="service" name="service" class="form-control">
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
                                        <div class="col-12">
                                          <div class="form-group form-error">
                                            <label for="details">Details</label>
                                            <textarea name="details" id="details" rows="7" class="form-control" placeholder="Enter details"></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <!--collapse part end-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--modal button start-->
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
                  <!--modal button end-->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- task add modal end -->

  <!-- Bootstrap Bundle with Popper JS start -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <!-- Bootstrap Bundle with Popper JS end -->

</body>

</html>