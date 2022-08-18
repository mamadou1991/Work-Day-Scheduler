// Looding the document before running functions.
$(document).ready(function() {
//Setting the date
var date = moment().format('ll'); 
  
$('#currentDay').text(date);

});

 // functions
  function handleSaveTask() {
    //Setting text value.
    let textValue = $(this).siblings('.task').val();

    // Setting time value.
    let timeValue = $(this).parent().attr('data-time');

    // saving textarea text to local storage.
    localStorage.setItem(timeValue, textValue);

  }

    // color the row based on hour 
    function colorRowBlocks() {
        // current hour
        const currentHour = moment().hours();
        console.log(currentHour);
        // Going through rows and adding colors class based on time.
     $('.js-row').each(function() {
          const rowHour = parseInt($(this).attr('data-time'));
          if (rowHour < currentHour) {
            $(this).addClass('gray');
          } else if (rowHour === currentHour) {
            $(this).addClass('red');
          } else {
            $(this).addClass('green');
          }
        })
      }
    
  
 colorRowBlocks();

  

//Events on click.
    $('#five').on('click', handleSaveTask);
    $('#seven').on('click', handleSaveTask);
    $('#nine').on('click', handleSaveTask);
    $('#eleven').on('click', handleSaveTask);
    $('#thirteen').on('click', handleSaveTask);
    $('#seventeen').on('click', handleSaveTask);
    $('#twenty').on('click', handleSaveTask);
    $('#twentytwo').on('click', handleSaveTask);
    $('#fifteen').on('click', handleSaveTask);
    

 
