const customHtml = document.querySelector("#custom-html");

console.log("the DOM is taken at " + customHtml.attributes);

const says = (req,res, e) => {
    console.log("say was called");
}

function postXml(){
	var req = new XMLHttpRequest();
	if (req) {
		req.onreadystatechange = function(){
			if (req.readyState == 4 && req.status == 200) {
				console.log(req.responseText);
			}};
		var url = "https://secure-test.worldpay.com/jsp/merchant/xml/paymentService.jsp.xml";
		//req.setRequestHeader("content-type","text/xml");
		req.open('POST', url, [true, "KVLZNJLLHCMSONK1JPSF","DEmo2000"]);
		req.setRequestHeader("Content-Type","text/xml");
		req.setRequestHeader("Access-Control-Allow-Origin","*");
		req.setRequestHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
		req.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');
		req.send("./request.xml");


	}
}

window.globalFunction = {};
window.globalFunction.postXml = postXml;
