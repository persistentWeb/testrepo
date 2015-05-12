function doQuit(p)
{
	parent.location.href=p;
}

function clearbox()
{
	var textsearchbox=document.getElementsByName("txtsearch")
	textsearchbox[0].value=""
	textsearchbox[0].focus()
	//document.frmsearchmenu.txtsearch.value=""
	//document.frmsearchmenu.txtsearch.focus()
}

function allowonlyrealnumber(myfield,e)
{
	var keycode;

	
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else if (e) keycode = e.which; 
	else return true;

	;// code for ie	
	var browserName=navigator.appName; 

	if (browserName=="Microsoft Internet Explorer")
	{
		var seltext = (document.all) ? document.selection.createRange().text : document.getSelection();
		//
		if (seltext!="")
		{

			if (seltext==myfield.value)
			{
				if (keycode ==0 )
				{
					return true;
				}
				if (keycode ==8 )
				{
					return true;
				}
				if (keycode ==46 )
				{
					return true;
				}
				if (keycode >57 || keycode <48 )
				{
					return false;
				}
				else
			   return true;
			}	
		}
	}
	else
	{
		var selectedtext=myfield.value.substring(myfield.selectionStart, myfield.selectionEnd)

		if (selectedtext==myfield.value)
		{
			if (keycode ==0 )
			{
				return true;
			}
			if (keycode ==8 )
			{
				return true;
			}
			if (keycode ==46 )
			{
				return true;
			}
			if (keycode >57 || keycode <48 )
			{
				return false;
			}
			else
		   return true;
		}
	}

	if (keycode ==46 )
	{
		var str=myfield.value
		temp=str.split(".")
		if (temp.length==1)
		{
			return true;
		}
	}
	if (keycode ==0 )
	{
		return true;
	}
	if (keycode ==8 )
	{
		return true;
	}

	if (keycode >57 || keycode <48 )
	{
		return false;
    }
	else
   return true;
}

function dovalidate123(myfield,e)
{
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;
	if (keycode == 13)
	{

		var path="search_client_patient.html?cmdsearchpatient=true"
		if (document.frmsearchmenu.hidsearchpage.value=="/search_client_patient.html")
		{
			if (document.frmGeneral.selclinic)
			{
				path=path+"&selclinic="+document.frmGeneral.selclinic.value
			}
		}
		document.frmsearchmenu.action=path
		doactionpath(document.frmsearchmenu)
		document.frmsearchmenu.submit();
		return false;
	}
	else
	return true;
}

function dochecksearchmenu()
{

	if (document.frmsearchmenu.txtsearch.value=="")
	{
		alert("Please type a text string!!!")
		document.frmsearchmenu.txtsearch.value="";
		document.frmsearchmenu.txtsearch.focus();
		return false;
	}
	return true;
}

function insertAtCursor(myField, myValue)
{
	//IE support
	if (document.selection)
	{
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') 
	{
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)+ myValue+ myField.value.substring(endPos, myField.value.length);
	}
	else
	{
		myField.value += myValue;
	}
}
// calling the function

function dovalidatesymbolmain(myfield,e)
{
	var keycode;

	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else if (e) keycode = e.which;
	else return true;

	var character = String.fromCharCode(keycode)
	if (keycode ==94 )
	{
		alert("^ Symbol is not allowed")

		return false
	}
	if (keycode ==34 )
	{
		//myfield.value=myfield.value+"`"
		insertAtCursor(myfield, '`');
		return false
	}
	if (keycode ==39 )
	{
		//myfield.value=myfield.value+"`"
		insertAtCursor(myfield, '`');
		return false
	}
	else
   return true;
}
function doaddpatientwarning(id,name)
{
	var flag
	flag = confirm("Do you want to add Patient under Client "+name);
	if (flag)
	{
		var path="patient_add.html?clientid="+id;
		document.location=path;
	}
}
topcDivs = new Array();
function disabletopDivs()
{

	if (document.getElementById("clientinfodet"))
	{
		d = document.getElementsByTagName("BODY")[0];
		xPos = document.getElementById("clientinfodet").offsetLeft;
		yPos = document.getElementById("clientinfodet").offsetTop;
		oWidth = document.getElementById("clientinfodet").offsetWidth;
		oHeight = document.getElementById("clientinfodet").offsetHeight;
		topcDivs[0] = document.createElement("DIV");
		topcDivs[0].style.width = oWidth+"px";
		topcDivs[0].style.height = oHeight+"px";
		topcDivs[0].style.position = "absolute";
		topcDivs[0].style.left = xPos+"px";
		topcDivs[0].style.top = yPos+"px";
		topcDivs[0].style.backgroundColor = "#F4F4F4";
		topcDivs[0].style.opacity = .6;
		topcDivs[0].style.filter = "alpha(opacity=60)";
		d.appendChild(topcDivs[0]);
	}
}
//************ code for stoping some page from going back suing browser back button or using keyboadshortcut [ALT+backarrorwkey]
var str=document.location.href
var urlstring=str.split("/")
var urlwithpara=urlstring[3]
var tempagename=urlwithpara.split("?")

if(tempagename.length>1)
{
	var pagename=tempagename[0]
}
else
{
	var pagename=urlstring[3]
}
//alert(pagename)
if (pagename=="invoice.html" || pagename=="payment.html" || pagename=="medrec_planaction.html")
{
//	window.history.forward(1);
}

;// common code to validate to and from date, From date should always be equal or less then to date
function validatedategreaterthencurrentdate(nameof_datectrl,alertmsg)
{
	
	var startdate=document.getElementsByName(nameof_datectrl)
	var enddate=document.getElementsByName("hidservercurrentdate")
	if (startdate)
	{
		var str_startdate=startdate[0].value
		var str_enbddate=enddate[0].value

		var selecteddate = new Date(str_startdate.substring(6,10),str_startdate.substring(0,2)-1,str_startdate.substring(3,5));
		selecteddate.setHours(0,0)

		var currentdate = new Date(str_enbddate.substring(6,10),str_enbddate.substring(0,2)-1,str_enbddate.substring(3,5));
		currentdate.setHours(0,0)


		if (selecteddate<currentdate)
		{
			if (alertmsg)
			{
				alert(alertmsg) 
			}
			else
			{
				alert("Selected Date should be greater then or egual to current date")
			}
			return false
		}
		else 
		{
			return true
		}
	}
	else
	{
		return true
	}
}

;// common code to validate to and from date, From date should always be equal or less then to date
function validateformandtodate(nameof_fromdate,nameof_todate,alertmsg)
{

	var startdate=document.getElementsByName(nameof_fromdate)
	var enddate=document.getElementsByName(nameof_todate)
	if (startdate)
	{
		var str_startdate=startdate[0].value
		var str_enbddate=enddate[0].value

		var d_fromdate = new Date(str_startdate.substring(6,10),str_startdate.substring(0,2)-1,str_startdate.substring(3,5));
		d_fromdate.setHours(0,0)

		var d_todatedate = new Date(str_enbddate.substring(6,10),str_enbddate.substring(0,2)-1,str_enbddate.substring(3,5));
		d_todatedate.setHours(0,0)

		if (d_fromdate>d_todatedate)
		{
			if (alertmsg)
			{
				alert(alertmsg) 
			}
			else
			{
				alert("From Date should be less then or equal to To Date")
			}
			return false
		}
		else 
		{
			return true
		}
	}
	else
	{
		return true
	}

}

var menustatus=1
function doclosemenu()
{
	setTimeout("menudecesion()",300);	
}

function menudecesion()
{
	if (menustatus==1)
	{
			$(".tabcss").hide();
			$(".tabcss1").hide();
			$(".tabcss2").hide();
		
			//toggelajaxarrow(divid)
			$('.downarrow').removeClass("uparrow")
	
	}
	menustatus=1
}

function dojquerytogglediv(divid) 
{
	
	var abc=$('#'+divid).css("display")
	
	if (abc!="block")
	{
		$(".tabcss").hide();
		$(".tabcss1").hide();
		$(".tabcss2").hide();
		
		//toggelajaxarrow(divid)
		$('.downarrow').removeClass("uparrow")
		menustatus=0
	}
	$('#'+divid).toggle(400);
	toggelajaxarrow(divid)
	//return false;
}

function dontclose()
{
	menustatus=0;
}

function dojqueryhidediv(divid)
{
	$('#'+divid).hide(400);
	if ($('#span'+divid).hasClass("uparrow"))
	{
		$('#span'+divid).removeClass("uparrow")
	}
	
	if ($('#span'+divid).hasClass("uparrowleft")) 
	{
		$('#span'+divid).removeClass("uparrowleft")
	}

	// for plan action Action button and div
	if ($('#span'+divid).hasClass("uparrowplanaction"))
	{
		$('#span'+divid).removeClass("uparrowplanaction")
	}
	
  //  return false;
}
function dojqueryshowdiv(divid)
{
	$('#'+divid).show(400);
  //  return false;
}

function ajaxload(divid,action,label,path)
{
	if (action=="show")
	{
		$('#'+divid).load(path);
		$('#'+divid).show(100);
		var porpermsg="<a href=\"javascript:ajaxload('"+divid+"','hide','"+label+"','"+path+"')\"><font style=\"font-size:20px;FONT-FAMILY: Arial, Helvetica, sans-serif;\"><b>-</b></font></a>"
		$("#"+label).html(porpermsg)
	}
	else 
	{
		$('#'+divid).hide(100);
       var porpermsg="<a href=\"javascript:ajaxload('"+divid+"','show','"+label+"','"+path+"')\"><font style=\"font-size:20px;FONT-FAMILY: Arial, Helvetica, sans-serif;\"><b>+</b></font></a>"
		$("#"+label).html(porpermsg)
	}
	
}
function dojqueryshowhide(divid,action,label)
{
	if (action=="show")

	{
		$('#'+divid).show();
		var porpermsg="<a href=\"javascript:dojqueryshowhide('"+divid+"','hide','"+label+"')\" class='plusminuslink'>-</a>"
		$("#"+label).html(porpermsg)
	}
	else
	{
		$('#'+divid).hide();
       var porpermsg="<a href=\"javascript:dojqueryshowhide('"+divid+"','show','"+label+"')\" class='plusminuslink'>+</a>"
		$("#"+label).html(porpermsg)
	}
	
  //  return false;
}

function dojqueryshowhideheading(divid,action,labelid,textmsg,plusminuslabel,msgonhide)
{
	if (action=="show")
	{
		$('#'+divid).show();
		if (msgonhide=="no")
		{
			var porpermsg=""
		}
		else
		{
			var porpermsg="<a href=\"javascript:dojqueryshowhideheading('"+divid+"','hide','"+labelid+"','"+textmsg+"','"+plusminuslabel+"','"+msgonhide+"')\" class='bigheading'><b>"+textmsg+"</b></a>"
		
		}
		
		$("#"+labelid).html(porpermsg)

		var spporpermsg="<a href=\"javascript:dojqueryshowhideheading('"+divid+"','hide','"+labelid+"','"+textmsg+"','"+plusminuslabel+"','"+msgonhide+"')\" class='plusminuslink'>-</a>"
		$("#"+plusminuslabel).html(spporpermsg)
	}
	else
	{
		$('#'+divid).hide();
		
		var porpermsg="<a href=\"javascript:dojqueryshowhideheading('"+divid+"','show','"+labelid+"','"+textmsg+"','"+plusminuslabel+"','"+msgonhide+"')\" class='bigheading'><b>"+textmsg+"</b></a>"
		
		
		$("#"+labelid).html(porpermsg)

		var spporpermsg="<a href=\"javascript:dojqueryshowhideheading('"+divid+"','show','"+labelid+"','"+textmsg+"','"+plusminuslabel+"','"+msgonhide+"')\" class='plusminuslink'>+</a>"
		$("#"+plusminuslabel).html(spporpermsg)
	}
	
  //  return false;
}

;// code for ajax call 
function dojqueryajaxcallshowresult(divid,path)
{
	
	dojqueryshowdiv(divid)
	//$('#'+divid).load(path); 
	return false
}
function dojqueryajaxcall(divid,path)
{

	dojquerytogglediv(divid)
	$('#'+divid).load(path);
//	return false
}

function jquery_ajax_loadresult(divid,path)
{
	$('#'+divid).load(path);
	$('#'+divid).show(400);
	//return false
}

function toggelajaxarrow(divid)
{
	if ($('#span'+divid).hasClass("uparrow"))
	{
		$('#span'+divid).removeClass("uparrow")
	}
	else if ($('#span'+divid).hasClass("downarrow"))
	{
		$('#span'+divid).toggleClass("uparrow");
	}

	
	if ($('#span'+divid).hasClass("uparrowleft"))
	{
		$('#span'+divid).removeClass("uparrowleft")
	}
	else if ($('#span'+divid).hasClass("downarrowleft"))
	{
		$('#span'+divid).toggleClass("uparrowleft");
	}

	// for plan action Action button and div
	if ($('#span'+divid).hasClass("uparrowplanaction"))
	{
		$('#span'+divid).removeClass("uparrowplanaction")
	}
	else if ($('#span'+divid).hasClass("downarrowplanaction"))
	{
		$('#span'+divid).toggleClass("uparrowplanaction");
	}

}

//********************* show hide div iwth timmer function
 var popupTimerHandle = null;
function showBoxwithtimmer(div) 
{
//	if (popupTimerHandle != null) 
//	{
//		clearTimeout(popupTimerHandle);
//		popupTimerHandle = null;
//	}
//	dojqueryshowdiv(div)
}

function hideBoxwithtimmer(div) 
{
	//popupTimerHandle = setTimeout("dojqueryhidediv('" + div + "');", 500);
}

$(document).ready(function() {
	$('.scrollabletable').fixedtableheader();

});

$(document).ready(function() {
	$('#scrollableheader').fixedtableheader();
});




 $(document).ready(function() {  
	 $('td[rel=tooltip]').mouseover(function(e) {  
           
         //Grab the title attribute's value and assign it to a variable  
        var tip = $(this).attr('title');      
        var width= $(this).attr('width'); 
		halfwidth=width/2	
		var aligndirection=$(this).attr('alignment');
		//  alert(width)
         //Remove the title attribute's to avoid the native tooltip from the browser  
         $(this).attr('title','');  
           
         //Append the tooltip template and its value  
         $(this).append('<div id="tooltip" style="width:"'+width+'px;white-space: normal;"><div class="tipHeader" style="white-space: normal;"></div><div class="tipBody" style="white-space: normal;">' + tip + '</div><div class="tipFooter"></div></div>');       
           
         //Set the X and Y axis of the tooltip  
         
		 $('#tooltip').css('top', e.pageY + 10 );  
		 if (aligndirection=="right")
		 {
			$('#tooltip').css('left', e.pageX - width-30 );  
		 }
		 else
		 {
			$('#tooltip').css('left', e.pageX - halfwidth );  
		 }
           
         //Show the tooltip with faceIn effect  
         $('#tooltip').fadeIn('500');  
         $('#tooltip').fadeTo('10',1);  
           
     }).mousemove(function(e) {  
       
		var width= $(this).attr('width'); 
		halfwidth=width/2	
		var aligndirection=$(this).attr('alignment');
         //Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse  
         $('#tooltip').css('top', e.pageY + 10 ); 
		 if (aligndirection=="right")
		 {
			$('#tooltip').css('left', e.pageX - width );  
		 }
		 else
		 {
			$('#tooltip').css('left', e.pageX - halfwidth  );  
		 }
           
     }).mouseout(function() {  
       
         
		 //Put back the title attribute's value  
         $(this).attr('title',$('.tipBody').html());  
       
         //Remove the appended tooltip template  
         $(this).children('div#tooltip').remove();  
	
           
     }); 
   
     //Select all anchor tag with rel set to tooltip
	 
     $('a[rel=tooltip]').mouseover(function(e) {  
           
         //Grab the title attribute's value and assign it to a variable  
        var tip = $(this).attr('title');      
        var width= $(this).attr('width'); 
		halfwidth=width/2	
		var aligndirection=$(this).attr('alignment');
		//  alert(width)
         //Remove the title attribute's to avoid the native tooltip from the browser  
         $(this).attr('title','');  
           
         //Append the tooltip template and its value  
         $(this).append('<div id="tooltip" style="width:"'+width+'px;white-space: normal;position:absolute;"><div class="tipHeader" style="white-space: normal;"></div><div class="tipBody" style="white-space: normal;">' + tip + '</div><div class="tipFooter"></div></div>');       
           
         //Set the X and Y axis of the tooltip  
         
		 $('#tooltip').css('top', e.pageY + parseInt($(this).css("top")));  
		 if (aligndirection=="right")
		 {
			$('#tooltip').css('left', e.pageX - width-30 );  
		 }
		 else
		 {
			$('#tooltip').css('left', e.pageX - halfwidth );  
		 }
           
         //Show the tooltip with faceIn effect  
         $('#tooltip').fadeIn('500');  
         $('#tooltip').fadeTo('10',1);  
           
     }).mousemove(function(e) {  
       
		var width= $(this).attr('width'); 
		halfwidth=width/2	
		var aligndirection=$(this).attr('alignment');
         //Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse  
         $('#tooltip').css('top', e.pageY + parseInt($(this).css("top"))); 
		 if (aligndirection=="right")
		 {
			$('#tooltip').css('left', e.pageX - width );  
		 }
		 else
		 {
			$('#tooltip').css('left', e.pageX - halfwidth  );  
		 }
           
     }).mouseout(function() {  
       
         
		 //Put back the title attribute's value  
         $(this).attr('title',$('.tipBody').html());  
       
         //Remove the appended tooltip template  
         $(this).children('div#tooltip').remove();  
	
           
     });  
   
 });  
 
   

;// function for workflow
function workflow_nextstep(pathfornextstep)
{
	var path=doopenwindowpath(pathfornextstep)
	document.location=path

}
// code for modal popup
function modalwindow_opener(url,titleid)
{
	jQuery.noConflict();
	if(typeof(titleid) == "undefined")
	{
	;//	title for modal popup window is not defined, so do nothing
	}
	else
	{
		$('#modal-popuptitle').html(titleid)
	}
	url=encodeURI(url)
	$('.modal-body').html("")
	$('.modal-body').load(url)
	$('.modal').modal('show')
}
function hidemodal_popup()
{
	jQuery.noConflict();
	$('.modal').modal('hide')
}

function dopopenpopupwithiframewithpara(path,height,width,title)
{
	jQuery.noConflict();
	
	//window.frames["modal_body_iframe"].location=path
	path=encodeURI(path)
	$("#modal_body_iframe").attr('src',path);
	$('.modal').modal('show')
}

function dopopenpopupwithiframebyid(path,titleid,id)
{
	
	jQuery.noConflict();
	if(typeof(titleid) == "undefined")
	{
	;//	title for modal popup window is not defined, so do nothing
	}
	else
	{
		$('#modal-popuptitle').html(titleid)
	}
	path=encodeURI(path)
	$("#modal_body_iframe").attr('src',path);
	$('#'+id).modal('show')
}

function dopopenpopupwithiframe(path,titleid)
{
	
	jQuery.noConflict();
	if(typeof(titleid) == "undefined")
	{
	;//	title for modal popup window is not defined, so do nothing
	}
	else
	{
		$('#modal-popuptitle').html(titleid)
	}
	path=encodeURI(path)
	$("#modal_body_iframe").attr('src',path);
	$('#myModal').modal('show')
}
function modalwindow_openerwithid(path,id,titleid)
{
	
	jQuery.noConflict();
	if(typeof(titleid) == "undefined")
	{
	;//	title for modal popup window is not defined, so do nothing
	}
	else
	{
		$('#'+id+' #modal-popuptitle').html(titleid)
	}
	path=encodeURI(path)
	$('#'+id+' .modal-body').html("")
	$('#'+id+' .modal-body').load(path)
	$('#'+id).modal('show')
}



//*********************

/********** function to remove or replace unwanted class*/
jQuery(function($){
	$( ".coloredButton" ).removeClass("coloredButton").addClass("btn btn-primary btn-sm");	
	$( ".coloredbutton" ).removeClass("coloredbutton").addClass("btn btn-primary btn-sm");
	$( ".creambutton" ).removeClass("creambutton").addClass("btn btn-primary btn-sm");
	$( ".blackbutton" ).removeClass("blackbutton").addClass("btn btn-primary btn-sm");
	$( ".greenbutton" ).removeClass("greenbutton").addClass("btn btn-primary btn-sm");
	$( ".lnkContentNav" ).removeClass("lnkContentNav");
});
/***********************************************************/