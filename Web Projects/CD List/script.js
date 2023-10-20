//Running the getData() function when the document is ready (as soon as the page is loaded up)
$(document).ready(function (){
    getData();
});

//Creating the function to get the XML data
function getData() {
    //AJAX function that will get the data from the xml file and display it
    //If it's a success, the function will run
    $.ajax({

      type: "GET",
      url: "cd_catalog.xml",
      dataType: "xml",
      success: function(data) {

        $("ul").children().remove();

        $(data).find("CD").each(function () {

            //Alternate way to display the CD items:
            //var cd_data = "<li class='bold'>Title: "+$(this).find("TITLE").text()+"</li><li class='square-bullet'>Artist: "+$(this).find("ARTIST").text()+"</li><li class='bold'>Country: "+$(this).find("COUNTRY").text()+"</li><li>Price: $"+$(this).find("PRICE").text()+"</li>";
            //$("ul").append(cd_data);
            //The alternate way is not used because it makes the code congested and harder to read. However, it is the more effecient solution.
            //Creating the list of CDs and appending it to the unordered list (w/o variables):
            $("ul").append("<li class='bold'>Title: " + $(this).find("TITLE").text() + "</li>");
            $("ul").append("<li class='square-bullet'>Artist: " + $(this).find("ARTIST").text() + "</li>");
            $("ul").append("<li class='bold'>Country: " + $(this).find("COUNTRY").text() + "</li>");
            $("ul").append("<li>Price: $" + $(this).find("PRICE").text() + "</li>");
            //Adding break lines to add spacing for each CD (more easier to read on the site)
            $("ul").append("<br/><br/><br/>");

        });

      }

    });
};