// jquery for add to cart

$(document).ready(function(){

  $("#cart").hide();

  $(".fa-shopping-cart").click(function(){
    $('#cart').show();
  })

  $("#cart").mouseleave(function(){
    $("#cart").hide();
  })


  var cart_item_count = 0;
  $('.cart_btn').click(function(){
    cart_item_count++;
   
    var titlte = $(this).parents(".d-flex").siblings(".d-flex").find(".card-title").text();
    var price = $(this).parents(".d-flex").siblings(".d-flex").find("span:nth-child(2)").text();


    var cart_item =  `
     
     <div class=" main d-flex p-3 border border-left-0 border-right-0 border-top-0">
    

      <div id="title" class="col-md-3 d-flex flex-wrap align-content-center">
         <h6 style="font-size:13px;">${titlte}</h6>
      </div>

      <div class="col-md-3 d-flex flex-wrap align-content-center">
      <span class="mx-2"> 1 </span>
      </div>

      <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
        <h6 class="mt-2 d-flex"><span> £ </span><span class="cart_item_price"> ${price} </span></h6>
      </div>

      <div class="col-md-1 d-flex flex-wrap align-content-center">
      <span class="close" style="cursor:pointer;font-size:25px;">&times;</span>
      </div>

     </div>

    `
     
     $("#order").append(cart_item);

     $("#cart_item_count").text(cart_item_count);
     $(".close").click(function(){
      $(this).parents(".main").remove();

      item_count();
     })
     item_count();
  })
  function item_count(){

    var res = $("#order").children().length;
    $("#cart_item_count").text(res);
  }

 })