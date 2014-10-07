$( document ).ready(function() 
{
	console.log("ready!");
	Parse.initialize("icl8qTAQSYAN0u1PbR7vY09pEqIRKEROSxiIPgbg", "s28CiSWVOxaoJRWB1fnAMHa0T3GkAb6XoRwglhW4");
	var myfruits = Parse.Object.extend("Fruit");
	var query = new Parse.Query(myfruits);
	query.find(
		{
			success: function(results)
				{
		  			var contenido = "";
					for (var i = 0; i < results.length; i++) 
						{ 
							var object = results[i];
							var objectId = object.id;/*							
contenido += "<div class='panel-group' id='accordion'>";
contenido += "	<div class='panel panel-primary'>";
contenido += "    	<div class='panel-heading'>";
contenido += "        	<h4 class='panel-title text-left'>";
contenido += "            	<a data-toggle='collapse' data-parent='#accordion' href='#" +object.get('Name')+ "'>";
contenido += "               " +object.get('Name')+ " ";
contenido += "                </a>";
contenido += "            </h4>";
contenido += "        </div>";
contenido += "        <div id='" +object.get('Name')+ "' class='panel-collapse colapse in'>";*/
contenido += "<h1><a href='"+object.get('URLVideo')+ "' >" +object.get('Name')+ "</a><h1><br>";
//contenido += "  <iframe width='100%' height='315' src='" +object.get('URLVideo')+ "' frameborder='0' allowfullscreen></iframe>"; 
/*contenido += "        </div>";
contenido += "    </div>";
contenido += "</div>";	*/							
						}
					$( "#myfruits" ).append( contenido );
	  			},
	  		error: function(error) 
				{
					alert("Error: " + error.code + " " + error.message);
	  			}
		});	
});
