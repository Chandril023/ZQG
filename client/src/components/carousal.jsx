import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://efootballchampionship.konami.net/media/club-exclusive/008_eFootball-Championship-2024_Open_%E5%8F%82%E5%8A%A0%E5%91%8A%E7%9F%A5.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://bleedingcool.com/wp-content/uploads/2023/12/003_eFootball_Championship_2024_ClubEvent_KeyVisual-2000x1125.jpg" class="d-block w-100" alt="..."/>
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  );
}

export default Carousel;
