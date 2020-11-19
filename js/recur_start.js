/* custom js for public selection of future recurring start dates 
 * only show option when recurring is selected 
 * start by removing any previously injected similar field
 */
/*jslint indent: 2 */
/*global CRM, ts */
cj(function ($) {
  'use strict';
  $(document).ready(function() {
    if ($('.is_recur-section').length) {
      $('.is_recur-section #iats-recurring-start-date').remove();
      $('.is_recur-section').append($('#iats-recurring-start-date'));
      cj('input[id="is_recur"]').on('change', function() {
        toggleRecur();
      });
      toggleRecur();
    }
    else {
      if (!$('.delayedFields-section').length) {
        // I'm not on the right kind of page, just remove the extra field
        $('#iats-recurring-start-date').remove();
      }
      else {
        cj('#partial_payment').on('change', function() {
          toggleRecurringStartDate();
        });
        toggleRecurringStartDate();
      }
    }
  });

  function toggleRecurringStartDate( ) {
    if ($('#partial_payment').prop('checked')) {
      $('#iats-recurring-start-date').show();
      $('#receive_date').next('input').datepicker('setDate', null);
    }
    else {
      $('#iats-recurring-start-date').hide();
      $('#receive_date').next('input').datepicker('setDate', null);
    }
  }

  function toggleRecur( ) {
    var isRecur = $('input[id="is_recur"]:checked');
    if (isRecur.val() > 0) {
      $('#iats-recurring-start-date').show();
      $('#receive_date').next('input').datepicker('setDate', null);
    }
    else {
      $('#iats-recurring-start-date').hide();
      $('#receive_date').next('input').datepicker('setDate', null);
    }
  }
});
