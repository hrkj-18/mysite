console.log("Hi")

var ToC =
  "<div class='col s12, m3, l3' id='tutorial_toc'>"+
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>On this page:</h2>" +
    "<ul>";

var newLine, el, title, link;

$("#tutorial_id h2").each(function() {
console.log("inside_method")
  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");
  console.log("inside_method_2", el, title, link)
  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;
  console.log("inside_method_3", ToC, newLine)
});

ToC +=
   "</ul>" +
  "</nav>"+
  "</div>";

$(".toc_parent").prepend(ToC);