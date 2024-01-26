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

  <title>Customer Details Page</title>
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
      <h2>Customer Detail</h2>
      <!-- customer details start -->
      <div class="payment-from-copany-user">
        <!--customer profile header start-->
        <div class="profile-header">
          <div class="profile-box">
            <img src="uploads/users/avatar-9.png" alt="" />
            <div class="profile-text">
              <h3>Melinda Keebler</h3>
              <p>Facilitator</p>
            </div>
            <a href="#" class="active">Active</a>
          </div>
          <div class="profile-edit-box">
            <a href=""><img class="img-fluid pen-tools" src="./assets/images/icons/edit-2.svg" alt="pen-images" /></a>
            <a href=""><img class="img-fluid trash-tools" src="./assets/images/icons/trash.svg" alt="trash-images" /></a>
          </div>
        </div>
        <!--customer profile header end-->
        <!--address info start-->
        <div class="address-info">
          <div class="adress-info-text">
            <p>Phone</p>
            <a href="#"><img src="./assets/images/icons/call.svg" alt="" />817-291-2029</a>
          </div>
          <div class="adress-info-text">
            <p>Email</p>
            <a href="#"><img src="./assets/images/icons/envelope.svg" alt="" />Dolly30@yahoo.com</a>
          </div>
          <div class="adress-info-text">
            <p>Website</p>
            <a href="#"><img src="./assets/images/icons/call.svg" alt="" />www.thestarplace.net</a>
          </div>
          <div class="adress-info-text">
            <p>Location</p>
            <a href="#"><img src="./assets/images/icons/location.svg" alt="" />47946
              Mitchel Circles</a>
          </div>
        </div>
        <!--address info end-->
        <!--service part start-->
        <div class="service-profile">
          <div class="service-text">
            <p class="ps-0">Service:</p>
            <a href="#">Dashboard Design</a>
            <a href="#">Hosting</a>
            <a href="#">Marketing</a>
          </div>
          <div class="service-text border-line">
            <p>Company:</p>
            <a href="#">The Star Place</a>
          </div>
          <div class="service-text border-line">
            <p>KVK:</p>
            <a href="">Z005484</a>
          </div>
        </div>
        <!--service part end-->
        <!--details page start-->
        <div class="details">
          <h3>Details</h3>
          <p>
            Ut qui vel libero labore quidem aut veniam. Distinctio et
            doloremque velit iusto amet aut. Qui praesentium consequatur sint
            atque. Aut iure aut possimus libero nisi molestias in et
            consequatur. Cumque soluta beatae dolor enim nostrum est. Rem
            minus dicta et quia. Ut delectus minima commodi. Neque veritatis
            sunt quaerat quasi quo maiores impedit. Dolor sequi fuga rerum
            delectus in necessitatibus non quam. Doloribus molestiae qui esse.
          </p>
        </div>
        <!--details page end-->
        <div class="header">
          <h3>Customer History</h3>
          <span class="paid">Total Paid= $1,956</span>
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
                    <span class="btn-pending">Pending</span>
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
                    <span class="btn-view btn-export">Paid</span>
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
                    <span class="btn-view btn-export">Paid</span>
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
                    <span class="btn-view btn-export">Paid</span>
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
                    <span class="btn-view btn-export">Paid</span>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- payment single item end -->
          </table>
        </div>
      </div>
      <!-- customer details end -->
      
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