//To give the styles to the generated HTML document
	function makewrapper(r){
		let result = `
			<title>README</title>
			<style>
				h1,h2,h3,h4,h5{
					font-weight:bold;
				}
				h1{
					padding-bottom:0.3em;
					border-bottom:1px solid #eaecef;
				}
			</style>
				<body>
				<div style='margin:25px;padding:25px;border:1px solid #e8e5e5;'>`+r+`</div>`;
		return result;
	}
	//To make the html file downloadable
	function download(filename, text) {
	  var element = document.createElement('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	  element.setAttribute('download', filename);

	  element.style.display = 'none';
	  document.body.appendChild(element);

	  element.click();

	  document.body.removeChild(element);
	}

	//To stop the browser from using a cached file
	function uniqueId() { return new Date().getTime(); };

	//Convert the Markup to HTML and preview it in a div
	function converthtml(){
		if($("#markup").val()=="")
		{
			alert('Please provide a link')
			return false;
		}
		let url=$("#markup").val()+"?uid="+uniqueId();
		$.ajax({
			url:url,
			method:"GET",
			success:function(r){
				let converter = new showdown.Converter();
	      		html = converter.makeHtml(r);
	      		html = makewrapper(html);
	      		$("#loadread").html(html).show();
 			}
		})
		
	}
	//Convert the Markup to HTML and download it
	function convertanddownloadhtml(){
		if($("#markup").val()=="")
		{
			alert('Please provide a link')
			return false;
		}
		let url=$("#markup").val()+"?uid="+uniqueId();
		$.ajax({
			url:url,
			method:"GET",
			success:function(r){
				let converter = new showdown.Converter();
	      		html = converter.makeHtml(r);
	      		html = makewrapper(html);
				downloadconvert(html);
 			}
		})
		
	}
	function downloadconvert(r){
		download("readme.html",r);
	}