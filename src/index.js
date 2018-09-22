$(document).ready(function() {
  console.log("work")
  var majorsDetails = [{
    id: "#choose-bme",
    tag: "BME"
  }, {
    id: "#choose-cs",
    tag: "CS"
  }, {
    id: "#choose-both",
    tag: "BME-CS"
  }]
  majorsDetails.forEach(function(major) {
    $(major.id).on('click', function() {
      $(".choose-a-major-already").removeClass("btn-primary")
      $(major.id).addClass("btn-primary")
      console.log("hey" + major.id)
      $(".to-hide").hide()
      $("." + major.tag + " > .to-hide").show()
      $("." + major.tag + ".to-hide").show()
    })
    $(".to-hide").hide()
  })
})
