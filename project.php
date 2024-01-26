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

  <link rel="stylesheet" href="assets/css/project.css">
  <!-- custom CSS end -->

  <title>Project Page</title>
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
      <div class="page-title mb-4">
        <h1>Projects</h1>
        <!-- bttn -->
        <div class="common-bttn">
          <a href="#" class="add" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-plus"></i>
            Add Project</a>
        </div>
        <!-- bttn -->
      </div>
      <div class="project-root-wrap">
        <div class="row align-items-center mb-4">
          <div class="col-lg-6">
            <h2 class="inner-title">All Project</h2>
          </div>
          <div class="col-lg-6">
            <div class="common-dropdown project-dropdown text-end">
              <div class="dropdown dropdown-porject-item">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Project<i class="fas fa-angle-down"></i>
                </button>
                <ul class="dropdown-menu project-dropdown-menu">
                  <li><a class="dropdown-item project-dropdown-item" href="#">All Projects<i class="fas fa-check"></i></a></li>
                  <li><a class="dropdown-item project-dropdown-item" href="#">In Progress</a></li>
                  <li><a class="dropdown-item project-dropdown-item" href="#">Completed</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle danger"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span>Completed</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>

            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle danger"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span>Completed</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle danger"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span>Completed</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
          <!--project single box start-->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-15">
            <div class="project-single-box">
              <div class="project-status">
                <span class="in_progress"><i class="fas fa-circle"></i> In Progress</span>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </div>
              <div class="title">
                <h3><a href="project-details">Dashboard Design</a></h3>
              </div>
              <div class="thumbnail">
                <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
              </div>
              <div class="d-flex">
                <p><img src="./assets/images/icons/calendar.svg" alt="a" class="img-fluid"> 20 Oct - 30 Oct 2023</p>
                <p><img src="./assets/images/icons/clock.svg" alt="a" class="img-fluid">4 Days Remaining</p>
              </div>
              <hr>
              <div class="project-bottom">
                <div class="media">
                  <img src="./uploads/users/avatar-18.png" alt="a" class="img-fluid avatar">
                  <div class="media-body">
                    <h5>Louise Schuppe</h5>
                    <p>Strategist</p>
                  </div>
                </div>
                <h4>$460</h4>
              </div>
            </div>
          </div>
          <!--project single box end-->
        </div>
      </div>
    </section>
    <!-- main page wrapper end -->
  </main>
  <!-- dashboard page wrapper end -->

  <!-- project add modal start -->
  <div class="custom-modal">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header modal-header-two">
            <h1 class="modal-title" id="staticBackdropLabel">Add New Project</h1>
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
                                <h3>Project Information</h3>
                              </div>
                              <hr>
                              <input type="file" name="thumbnail" id="thumbnail" class="d-none">
                              <!-- upload avatar -->
                              <div class="project-thumbnail-upload">
                                <h3>Project Thumbnail</h4>
                                  <div class="d-flex">
                                    <div class="thumbnail-preview">
                                      <img src="./uploads/projects/project-01.png" alt="a" class="img-fluid">
                                    </div>
                                    <label for="thumbnail" class="thumbnail-upload-icon">
                                      <img src="./assets/images/icons/anchor.svg" alt="Upload" class="img-fluid">
                                      <p> Upload </p>
                                    </label>
                                  </div>
                              </div>
                              <!-- upload avatar -->
                            </div>
                          </div>
                          <div class="col-xl-12">
                            <div class="form-group form-error">
                              <label for="name">Project Name</label>
                              <input type="text" placeholder="Enter Name" id="name" name="name" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group form-error">
                              <label for="email">Amount</label>
                              <input type="amount" placeholder="$0000" id="amount" name="amount" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group form-error">
                              <label for="phone">Tax</label>
                              <input type="tax" placeholder="$0000" id="tax" name="tax" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group form-error">
                              <label for="location">Start Date</label>
                              <input type="date" placeholder="dd-mm-yyyy" id="date" name="date" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group form-error">
                              <label for="location">End Date</label>
                              <input type="date" placeholder="dd-mm-yyyy" id="date" name="date" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="form-group form-error">
                              <label for="note">Note</label>
                              <input type="note" placeholder="Write note" id="note" name="note" class="form-control">
                            </div>
                          </div>
                          <div class="col-xl-6">
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
                            <h3>Customer Information</h3>
                          </div>
                          <hr>
                          <div class="col-xl-12">
                            <div class="select-title">
                              <h3>Select Customer</h3>
                            </div>
                            <!-- customer search form start -->
                            <div class="form-group search-by-name">
                              <div class="search-item">
                                <img src="assets/images/icons/search-ic.svg" alt="a" class="img-fluid">
                                <input type="text" placeholder="Search by name" name="search" class="form-control">
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
  <!-- project add modal end -->

  <!-- Bootstrap Bundle with Popper JS start -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <!-- Bootstrap Bundle with Popper JS end -->

</body>

</html>