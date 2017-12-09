$(function (){

  $.get('./songs.json').then(function (response){
    let items = response;
    items.forEach((i) => {
      let $li = $(`
        <li>      
        <a href="./song.html?id=${i.id}">
          <h3>${i.songname}</h3>
          <p><svg class="sq">
            <use xlink:href="#icon-sq"></use>
          </svg>${i.singer}</p>
          <svg class="play">
            <use xlink:href="#icon-play1"></use>
          </svg>
        </a>
      </li>
      `)
      $('#lastestMusic').append($li);
    });
    $('#loading').remove();
  })

  /* tab切换 */
  $('.tabs-btn').on('click','li',function (e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    $li.addClass('active').siblings().removeClass('active')
    $('.tabs-content').children().eq(index)
     .addClass('active').siblings().removeClass('active')
  })
})