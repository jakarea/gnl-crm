<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="D&D is a Ecommerce Platform" />
  <meta property="og:title" content="D&D" />
  <meta property="og:type" content="E-Commerce" />
  <meta property="og:url" content="" />
  <meta property="og:image" content="" />
  <meta name="theme-color" content="#fff" />

  <!-- Bootstrap CSS start -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <!-- Bootstrap CSS end -->

  <!-- plugin CSS start -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- plugin CSS end -->

  <!-- custom CSS start -->
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
  <link rel="stylesheet" href="assets/css/customer.css" />
  <!-- custom CSS end -->

  <title>Customer List - Page</title>
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
    <section class="main-page-wrapper customer-page-wrapper">
      <!-- page title -->
      <div class="page-title">
        <h1 class="pb-0">Customer</h1>

        <!-- bttn -->
        <div class="common-bttn">
          <a href="#" type="button" class="add" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-plus"></i> Add Customer</a>
        </div>
        <!-- bttn -->
      </div>
      <!-- page title -->

      <!-- customer status car start -->
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="customer-status-box">
            <h5>
              <img src="./assets/images/icons/user-add.svg" alt="icon" class="img-fluid" />
              Total Customer
            </h5>
            <h3>4,136</h3>
            <div class="d-flex">
              <span>+4.3%</span>
              <p>Higher than last month</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <div class="customer-status-box">
            <h5>
              <img src="./assets/images/icons/user-add.svg" alt="icon" class="img-fluid" />
              New Customer
            </h5>
            <h3>4,136</h3>
            <div class="d-flex">
              <span>+4.3%</span>
              <p>Higher than last month</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <div class="customer-status-box">
            <h5>
              <img src="./assets/images/icons/user-add.svg" alt="icon" class="img-fluid" />
              Repeat Customer
            </h5>
            <h3>3646</h3>
            <div class="d-flex">
              <span>+4.3%</span>
              <p>Higher than last month</p>
            </div>
          </div>
        </div>
      </div>
      <!-- customer status car end -->

      <!-- all customer list start -->
      <div class="all-customer-box mt-15">
        <!-- customer header filter start -->
        <div class="row">
          <div class="col-lg-5">
            <div class="customer-filter-title">
              <h2 class="common-title pb-0">All Customer</h2>
            </div>
          </div>
          <div class="col-lg-7">
            <form action="">
              <div class="filters-area">
                <!-- filter item -->
                <div class="dropdown">
                  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Leads <i class="fas fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item active" href="#">All Leads <i class="fas fa-check"></i></a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Hosting Leads</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Marketing Leads</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Project Leads</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Website Leads</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Lost Leads</a></li>
                  </ul>
                </div>
                <!-- filter item -->

                <!-- filter item -->
                <div class="dropdown">
                  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Service <i class="fas fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item active" href="#">All Service <i class="fas fa-check"></i></a>
                    </li>
                    <li><a class="dropdown-item" href="#">App Design</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Dashboard Design</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Landing Page Design</a>
                    </li>
                  </ul>
                </div>
                <!-- filter item -->

                <!-- filter item -->
                <div class="dropdown">
                  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Customer <i class="fas fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item active" href="#">All Customer <i class="fas fa-check"></i></a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Active Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Inactive Customer</a>
                    </li>
                  </ul>
                </div>
                <!-- filter item -->
              </div>
            </form>
          </div>
        </div>
        <!-- customer header filter end -->

        <!-- list start -->
        <div class="row">
          <!-- customer start -->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-1.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="new">New Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carlton Collins</a></h4>
                <h6>Assistant</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i> Owen4@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-3.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="repeat">Repeat Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Tiffany Metz</a></h4>
                <h6>Manager</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i> Owen4@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a class="details" href="customer-details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-4.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="repeat">Repeat Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Delia Lehner</a></h4>
                <h6>Executive</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i> Owen4@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-4.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="new">New Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Tiffany Metz</a></h4>
                <h6>Manager</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i> Owen4@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-5.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="repeat">Repeat Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Antoinette Bosco</a></h4>
                <h6>Coordinator</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i>
                  Gabrielle90@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-6.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="new">New Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Dwayne Walker</a></h4>
                <h6>Director</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i>
                  Don.Heller@hotmail.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-7.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="new">New Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Adrienne Crist</a></h4>
                <h6>Consultant</h6>
                <hr />
                <p>
                  <i class="fa-regular fa-envelope"></i> Gustave13@yahoo.com
                </p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-15">
            <div class="customer-person-box-wrap">
              <div class="avatar">
                <img src="./uploads/users/avatar-8.png" alt="avatar" class="img-fluid" />
              </div>
              <div class="text">
                <span class="repeat">Repeat Customer</span>
                <h4><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Andrea Dare</a></h4>
                <h6>Technician</h6>
                <hr />
                <p><i class="fa-regular fa-envelope"></i>Asha98@gmail.com</p>
              </div>
              <div class="actions">
                <a href="customer-details" class="details">View Details</a>
                <div class="btn-group dropstart">
                  <a href="#" type="button" class="ellipse dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                  <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                      <a class="dropdown-item" href="profile-edit">Edit Customer</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Delete Customer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- customer end -->
        </div>
        <!-- list end -->
        <!--pagination started-->
        <div class="pagination-section">
          <nav class="mt-4" aria-label="...">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link page-link-left"><i class="fa-solid fa-angle-left"></i></a>
              </li>
              <li class="page-item" aria-current="page">
                <a class="page-link" href="#">1</a>
              </li>
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
      <!-- all customer list end -->
    </section>
    <!-- main page wrapper end -->
  </main>
  <!-- dashboard page wrapper end -->

  <!-- customer details sidebar start -->
  <div class="customer-sidebar-details">
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-body offcanvas-body-details">
        <div class="payment-from-copany-user payment-from-offcanvas">
          <!--customer profile header start-->
          <div class="customer-details-title">
            <h3>Customer Detail</h3>
            <button type="button" class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <i class="fas fa-close"></i>
            </button>
          </div>
          <div class="profile-header profile-header-address">
            <img src="uploads/users/avatar-9.png" alt="" />
            <div class="profile-box profile-box-address">
              <div class="profile-text profile-text-address">
                <div class="profile-text-box">
                  <h3>Melinda Keebler</h3>
                  <p>Facilitator</p>
                </div>
                <span href="#" class="active inactive">Active</span>
              </div>
              <div class="profile-edit-box profile-edit-details-box">
                <img class="img-fluid pen-tools" src="./assets/images/icons/edit-1.svg" alt="pen-images" />
                <img class="img-fluid trash-tools" src="./assets/images/icons/trash-1.svg" alt="trash-images" />
              </div>
            </div>
          </div>
          <!--customer profile header end-->
          <!--address info start-->
          <div class="address-info">
            <div class="adress-info-text">
              <p>Email</p>
              <a href="#"><img src="./assets/images/icons/envelope.svg" alt="" />Dolly30@yahoo.com</a>
            </div>
            <div class="adress-info-text">
              <p>Phone</p>
              <a href="#"><img src="./assets/images/icons/call.svg" alt="" />817-291-2029</a>
            </div>
            <div class="adress-info-text">
              <p>Location</p>
              <a href="#"><img src="./assets/images/icons/location.svg" alt="" />47946 Mitchel Circles</a>
            </div>
          </div>
          <!--address info end-->
          <!--service part start-->
          <div class="service-profile service-profile-details">
            <div class="service-text service-text-details">
              <p>Service:</p>
              <span>Dashboard Design</span>
            </div>
            <div class="service-text service-text-details">
              <p>Company:</p>
              <span>The Star Place</span>
            </div>
          </div>
          <div class="service-profile service-profile-details">
            <div class="service-text service-text-details">
              <p>Website:</p>
              <span>www.thestarplace.net</span>
            </div>
            <div class="service-text service-text-details">
              <p>KVK:</p>
              <span href="">Z005484</span>
            </div>
          </div>
          <!--service part end-->
          <!--details page start-->
          <div class="details details-two">
            <h3>Details</h3>
            <p>
              Ut qui vel libero labore quidem aut veniam. Distinctio et
              doloremque velit iusto amet aut. Qui praesentium consequatur
              sint atque. Aut iure aut possimus libero nisi molestias in
              et consequatur. Cumque soluta beatae dolor enim nostrum est.
              Rem minus dicta et quia. Ut delectus minima commodi. Neque
              veritatis sunt quaerat quasi quo maiores impedit. Dolor
              sequi fuga rerum delectus in necessitatibus non quam.
              Doloribus molestiae qui esse.
            </p>
          </div>
          <!--details page end-->
          <div class="header header-details">
            <h3>Customer History</h3>
          </div>
          <div class="user-payment-table">
            <table>
              <tr>
                <th width="3%">No</th>
                <th class="d-flex justify-content-between">
                  <span>Service</span>
                  <div class="filter-sort-box">
                    <div class="dropdown">
                      <button class="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownBttn"></button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item filterItem" href="#" data-value="asc">In order A-Z</a>
                        </li>
                        <li>
                          <a class="dropdown-item filterItem" href="#" data-value="desc">In order Z-A</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </th>
                <th>Payment Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
              <!-- payment single item start -->
              <tr>
                <td>1</td>
                <td>
                  <div class="media">
                    <div class="media-body">
                      <h5>Dashboard Design</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p>09 Oct, 2023</p>
                </td>
                <td>
                  <p>$1,290</p>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="#" class="btn-pending">Pending</a>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- payment single item end -->
              <!-- payment single item start -->
              <tr>
                <td>2</td>
                <td>
                  <div class="media">
                    <div class="media-body">
                      <h5>App Design</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p>09 Oct, 2023</p>
                </td>
                <td>
                  <p>$2,640</p>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="#" class="btn-view btn-export">Paid</a>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- payment single item end -->
              <!-- payment single item start -->
              <tr>
                <td>3</td>
                <td>
                  <div class="media">
                    <div class="media-body">
                      <h5>Landing Page Design</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p>09 Oct, 2023</p>
                </td>
                <td>
                  <p>$1,290</p>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="#" class="btn-view btn-export">Paid</a>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- payment single item end -->
              <!-- payment single item start -->
              <tr>
                <td>4</td>
                <td>
                  <div class="media">
                    <div class="media-body">
                      <h5>Logo Design</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p>09 Oct, 2023</p>
                </td>
                <td>
                  <p>$2,609</p>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="#" class="btn-view btn-export">Paid</a>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- payment single item end -->
              <!-- payment single item start -->
              <tr>
                <td>5</td>
                <td>
                  <div class="media">
                    <div class="media-body">
                      <h5>Dashboard Design</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p>09 Oct, 2023</p>
                </td>
                <td>
                  <p>$2,608</p>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="#" class="btn-view btn-export">Paid</a>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- payment single item end -->
            </table>
          </div>
          <div class="pb-5"></div>
        </div> 
      </div>
    </div>
  </div>
  <!-- customer details sidebar end -->

  <!-- customer add modal start -->
  <div class="custom-modal">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Add New Customer
            </h1>
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
                      <input type="file" name="avatar" id="avatar" class="d-none" />
                      <!-- upload avatar -->
                      <div class="d-flex">
                        <label for="avatar" class="avatar">
                          <img src="./uploads/users/avatar-13.png" alt="avatar" class="img-fluid" />
                          <span class="avatar-ol">
                            <img src="./assets/images/icons/camera.svg" alt="camera" class="img-fluid" />
                          </span>
                        </label>
                        <p>
                          <img src="./assets/images/icons/anchor.svg" alt="anchor" class="img-fluid" />
                          Upload
                        </p>
                      </div>
                      <!-- upload avatar -->
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="name">Name</label>
                      <input type="text" placeholder="Enter Name" id="name" name="name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="designation">Designation</label>
                      <input type="text" placeholder="Enter Designation" id="designation" name="designation" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="email">E-mail</label>
                      <input type="email" placeholder="Enter email address" id="email" name="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="phone">Phone</label>
                      <input type="number" placeholder="Enter phone number" id="phone" name="phone" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="location">Location</label>
                      <input type="text" placeholder="Enter location" id="location" name="location" class="form-control" />
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
                            <li>
                              <a class="dropdown-item dropdown-item-two" href="#">Active<i class="fas fa-check"></i></a>
                            </li>
                            <li>
                              <a class="dropdown-item dropdown-item-two" href="#">Inactive</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="company">KVK</label>
                      <input type="text" placeholder="Enter kvk number" id="kvk" name="kvk" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="service">Service</label>
                      <input type="text" placeholder="Enter service" id="service" name="service" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="company">Company</label>
                      <input type="text" placeholder="Enter company name" id="company" name="company" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group form-error">
                      <label for="website">Website</label>
                      <input type="text" placeholder="Enter website" id="website" name="website" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group form-error">
                      <label for="details">Details</label>
                      <textarea name="details" id="details" rows="7" class="form-control" placeholder="Enter details"></textarea>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-bttn">
                      <button type="button" class="btn btn-cancel">
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-bttn">
                      <button type="submit" class="btn btn-submit">
                        Submit
                      </button>
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
  <!-- customer add modal end -->

  <!-- Bootstrap Bundle with Popper JS start -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <!-- Bootstrap Bundle with Popper JS end -->
</body>

</html>