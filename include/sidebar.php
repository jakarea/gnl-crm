<?php
$currentUrl = basename($_SERVER['REQUEST_URI']);
?>

<aside class="sidebar-wrap custom-scroll-bar">
  <!-- logo -->
  <div class="logo-box">
    <a href="index">
      <img src="./assets/images/logo.svg" alt="Logo" class="img-fluid">
    </a>
  </div>
  <!-- logo -->

  <!-- navbar -->
  <div class="side-navbar-wrap">
    <ul class="side-nav">
      <li class="side-item">
        <a href="index" class="<?= $currentUrl == "index" ? "active" : "" ?> side-link"><img src="./assets/images/icons/sidebar/dashboard.svg" alt="I" class="img-fluid">
          Dashboard
        </a>
      </li>
      <li class="side-item"><a href="analytics" class="<?= $currentUrl == "analytics" ? "active" : "" ?> side-link"><img src="./assets/images/icons/sidebar/analytics.svg" alt="I" class="img-fluid">
          Analytics
        </a>
      </li>
      <li class="side-item"><a href="customer" class="<?= $currentUrl == "customer" ? "active " : "" ?>side-link"><img src="./assets/images/icons/sidebar/customer.svg" alt="I" class="img-fluid"> Customer</a>
      </li>
      <li class="side-item">
        <a href="to-do-list" class="<?= $currentUrl == "to-do-list" ? "active" : "" ?> side-link">
          <img src="./assets/images/icons/sidebar/calendar.svg" alt="I" class="img-fluid"> To Do
          List
        </a>
      </li>
      <li class="side-item"><a href="project" class="<?= $currentUrl == "project" ? "active" : "" ?> side-link"><img src="./assets/images/icons/sidebar/project.svg" alt="I" class="img-fluid"> Project</a></li>
      <li class="side-item side-subitem">
        <a class="side-link  <?= $currentUrl == "leads" ? "active" : "" ?>" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img src="./assets/images/icons/sidebar/leads.svg" alt="I" class="img-fluid"> Leads
          <i class="fas fa-angle-down"></i>
        </a>
        <div class="collapse  <?= $currentUrl == "leads" ? "show" : "" ?>" id="collapseExample">
          <ul class="sub-nav">
            <li><a href="leads" class="sub-link <?= $currentUrl == "leads" ? "active" : "" ?>">Hosting Leads</a></li>
            <li><a href="leads" class="sub-link">Marketing Leads</a></li>
            <li><a href="leads" class="sub-link">Project Leads</a></li>
            <li><a href="leads" class="sub-link">Website Leads</a></li>
            <li><a href="leads" class="sub-link">Lost Leads</a></li>
          </ul>
        </div>
      </li>
      <li class="side-item side-subitem">
        <a class="side-link <?= $currentUrl == "earning" ? "active" : "" ?>" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
          <img src="./assets/images/icons/sidebar/earnings.svg" alt="I" class="img-fluid"> Earning
          <i class="fas fa-angle-down"></i>
        </a>
        <div class="collapse <?= $currentUrl == "earning" ? "show" : "" ?>" id="collapseExample2">
          <ul class="sub-nav">
            <li><a href="earning" class="sub-link <?= $currentUrl == "earning" ? "active" : "" ?>">Total</a></li>
            <li><a href="earning" class="sub-link">Hosting</a></li>
            <li><a href="earning" class="sub-link">Marketing</a></li>
            <li><a href="earning" class="sub-link">Website</a></li>
            <li><a href="earning" class="sub-link">Project</a></li>
          </ul>
        </div>
      </li>
      <li class="side-item"><a href="expense" class="side-link <?= $currentUrl == "expense" ? "active" : "" ?>">
          <img src="./assets/images/icons/sidebar/expense.svg" alt="I" class="img-fluid"> Expenses</a>
      </li>
      <li class="side-item">
        <a href="#" class="side-link">
          <i class="fas fa-sign-out me-3"></i>
          Logout
        </a>
      </li>
    </ul>
  </div>

  <!-- navbar -->
</aside>