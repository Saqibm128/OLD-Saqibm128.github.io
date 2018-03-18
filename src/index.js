$(document).ready(function() {
  console.log("work")
  var majorsDetails = [{id: "#choose-bme", tag: "BME"},{id: "#choose-cs", tag: "CS"},{id:"#choose-both", tag:"BME-CS"}]
  majorsDetails.forEach(function(major) {
    $(major.id).on('click', function() {
      console.log("hey" + major.id)
      $("." + major.tag + " > .to-hide").show()
    })
    $("." + major.tag + " > .to-hide").hide()
  })
})
