$(document).ready(function () {

    // Wrap unwrapped inputs
    $('input[type=checkbox]:visible').each(function () {
        $(this).wrap('<i class="alt-checkbox">');
    });
    $('input[type=radio]:visible').each(function () {
        $(this).wrap('<i class="alt-radio">');
    });

    $('i.alt-checkbox input, i.alt-radio input').each(function () {
        $(this).parent().addClass(this.className);
        //this.className = '';
    });


    // Add event listeners
    $(document)
        .on('click', 'label, .alt-checkbox, .alt-radio', function (event) {
            if (!$(event.target).is('input')) {
                event.preventDefault();
                event.stopImmediatePropagation();
                $(this)
                    .find('input[type=checkbox], input[type=radio]')
                    .each(function () {
                        //this.checked = !this.checked;
                        // TODO: remove this with YUI and add .change() after the each
                       // YAHOO.util.UserAction.click(this);
                    })


            }
        })
        .on('change', '.alt-checkbox input, .alt-radio input', function () {
            var $this = $(this);
            if ($this.is(':radio')) {
                $('input[type=radio][name=' + this.name + ']').parent().removeClass('checked');
                $this.parent().toggleClass('checked', this.checked);
            }
            $this.parent().toggleClass('checked', this.checked);
        });
    // Init
    $('.alt-checkbox input, .alt-radio input:checked').change();


  $('[data-toggle="popover"]').popover()

$(".js-toggle-images").hide();
  $(".js-view-files").on("click", function(){
    $(this).parents(".list-group-item").find(".js-toggle-images").toggle();
  });

    $(".project-heading").on("click", function(){
    $(this).next(".js-tasks").toggle();
    $(this).next(".js-tasks").next(".js-tasks").toggle();
  });

$(".sortable").sortable();

   $( "#quick-access-sortable, .apps-sortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

var shareNewText = $(".share-new-text")

shareNewText.hide();
$(".share-new").hover( function(){
  shareNewText.show('slow');
},
function(){
shareNewText.hide();
});

$('#shareModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var image = button.data('image') // Extract info from data-* attributes

  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.img-solo').attr('src', image);
});



// Remove widget button

var removecardBtn = $(".js-remove-card");

removecardBtn.on("click", function(e){
  e.preventDefault();
  $(this).closest(".js-card").remove();
});

$(".card-header-heading").on("click", function(e){
  e.stopPropagation();
  $(this).parents(".js-card").find(".js-minimize").slideToggle(200);
  $(this).parent(".card-header").toggleClass("no-border-radius");
});

// The Tour!
var tour = new Tour({
  storage: false,
  steps: [
  {
    element: ".js-start-tour",
    title: "Welcome to Brandzone",
    content: "Welcome to your Brandzone, Matthew. Let us show you around the place.",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".tour-home",
    title: "Going home",
    content: "You're on the homepage right now. If you venture away and want to return, click the icon",
    backdrop: true
  },
  {
    element: ".tour-myapps",
    title: "The App menu",
    content: "This is your app menu. Drag to rearrange their order.",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".quick-tour",
    title: "Quick access apps",
    content: "Drag apps from the menu to this area to have easy access to your favourites",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".notifications-icon",
    title: "Notifications",
    content: "View all your latest notications here. Never miss a thing",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".tour-share",
    title: "Sharing",
    backdrop: true,
    content: "See a piece of news, an image, or an asset that you want people to know about? Hit this button, fill in the modal, and you're on your way."
  },
  {
    element: ".js-widget-column",
    title: "My cards",
    backdrop: true,
    content: "These are your cards. Add a new one by lorem ipsum. Drag to rearrange them. Choose to hide them by clicking the arrows. Don't use a card anymore? Drag it into the recyling bin",
    placement: "left"
  },
  {
      element: ".workspaces",
      title: "Workspaces",
      backdrop: true,
      content: "Workspaces is the place to share files, ideas, in one place, lorem ipsum",
      placement: "left"
  },
    {
      element: ".my-tasks",
      title: "My Tasks",
      backdrop: true,
      content: "View all your latest tasks here",
      placement: "left"
  },
    {
      element: ".my-approvals",
      title: "My Approvals",
      backdrop: true,
      content: "View all your latest approvals here",
      placement: "left"
  }
]});

// Initialize the tour
tour.init();

$(".js-start-tour").on("click", function(e){
e.preventDefault();
// Start the tour
tour.start();
});

$('.infinite-scroll').jscroll({
   autoTrigger: false
 });


// Adding cards

var cardSelect = $("#card-select"),
      addcardBtn = $(".js-add-card"),
      cardIcons = $(".js-card-icons"),
      cardModal = $("#cardModal");

addcardBtn.on("click", function(e){
    e.stopPropagation();
    $.get("/" + cardSelect.val() + ".html", function(data) {
      cardIcons.after(data);
    });
  cardModal.modal('hide');

});


// Hide card sidebar
var cardIcons = $(".js-card-icons");
cardIcons.hide();

$(".js-close-cards").on("click", function(e) {
  var self = $(this);
  cardIcons.toggle();
  $(".js-card").toggle();
  self.find("span").toggleClass("icon-fast-forward").toggleClass("icon-rewind");
  $(".js-widget-column").toggleClass("col-md-4").toggleClass("col-md-2");
  $(".js-widget-column").toggleClass("hidden-widget-column");
  $(".js-main-content").toggleClass("col-md-offset-2");
});
    
});
