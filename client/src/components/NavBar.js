import React from "react";

const NavBar = () => {
  return (
    <div className="navigationbar">
      <header className="header">
      <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="/">Portfolio.</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="services">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/contacts">Contacts</a>
      </li>
    </ul>
  </div>
</nav>
      </header>
    </div>
  );
};
export default NavBar;
