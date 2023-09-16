
let container=document.createElement("div");
container.classList.add("container-fluid");
container.setAttribute("id","container");

let empty_0=document.createElement("div");
empty_0.setAttribute('id',"empty_0");
empty_0.setAttribute("class","col-0 col-lg-1");

let page = document.createElement("div");
page.setAttribute('id',"page");
page.setAttribute("class","col-12 col-lg-10");

let entireRow=document.createElement("div");
entireRow.setAttribute("id","entireRow");
entireRow.setAttribute("class","row");

let empty_1=document.createElement("div");
empty_1.setAttribute('id',"empty_1");
empty_1.setAttribute("class","col-md-0 col-lg-1");

let empty_end=document.createElement("div");
empty_end.setAttribute('id',"empty_end");
empty_end.setAttribute("class","col-md-0 col-lg-1");

let login_bg=document.createElement("div");
login_bg.setAttribute('id',"login_bg");
login_bg.setAttribute("class","col-12 col-lg-10");

let page_bg_row=document.createElement("div");
page_bg_row.setAttribute('id',"page_bg_row");
page_bg_row.setAttribute("class","row");

let empty_2 = document.createElement("div");
empty_2.setAttribute('id',"empty_2");
empty_2.setAttribute("class","col-1");

let page_bg=document.createElement("div");
page_bg.setAttribute('id',"page_bg");
page_bg.setAttribute("class","col-10");

let row=document.createElement("div");
row.setAttribute('id',"row");
row.setAttribute("class","row");

let login_col = document.createElement("div");
login_col.setAttribute('id',"login_col");
login_col.setAttribute("class","col-md-5 col-sm-12");

let login_row_1 = document.createElement("div");
login_row_1.setAttribute('id',"login_row_1");
login_row_1.setAttribute("class","row");

let logintitle = document.createElement("div");
logintitle.setAttribute('id',"logintitle");
logintitle.setAttribute("class","col-12");

let loginH5 = document.createElement("h5");
loginH5.setAttribute('id',"loginH5");
loginH5.setAttribute("class","col-12");
loginH5.innerText="Login";

let login_row_2 = document.createElement("div");
login_row_2.setAttribute('id',"login_row_2");
login_row_2.setAttribute("class","row");

let acc = document.createElement("div");
acc.setAttribute('id',"acc");
acc.setAttribute("class","col-9");

let haveAcc = document.createElement("p");
haveAcc.setAttribute('id',"haveAcc");
haveAcc.innerText="Doesn't have an account yet?";

let signup = document.createElement("div");
signup.setAttribute('id',"signup");
signup.setAttribute("class","col-3");

let signUpText = document.createElement("a");
signUpText.setAttribute('id',"signUpText");
signUpText.setAttribute("href","#");
signUpText.setAttribute("onclick","signInOrSignUp()");
signUpText.innerText="Sign Up";

let login_row_3 = document.createElement("div");
login_row_3.setAttribute('id',"login_row_3");
login_row_3.setAttribute("class","row");

let emaildiv = document.createElement("div");
emaildiv.setAttribute('id',"emaildiv");
emaildiv.setAttribute("class","col-12");

let emaillabel = document.createElement("label");
emaillabel.setAttribute('id',"emaillabel");

let emailH6 = document.createElement("H6");
emailH6.setAttribute('id',"emailH6");
emailH6.innerText="Email Address";

let login_row_4 = document.createElement("div");
login_row_4.setAttribute('id',"login_row_4");
login_row_4.setAttribute("class","row");

let emailInputdiv = document.createElement("div");
emailInputdiv.setAttribute('id',"emailInputdiv");
emailInputdiv.setAttribute("class","col-12");

let emailInput = document.createElement("input");
emailInput.setAttribute('id',"emailInput");
emailInput.setAttribute("class","form-control");
emailInput.setAttribute('type',"text");
emailInput.setAttribute('placeholder',"you@example.com");

let emailErrDiv = document.createElement("div");
emailErrDiv.setAttribute('id',"emailErrDiv");

let emailErrMsg = document.createElement("small");
emailErrMsg.setAttribute('id',"emailErrMsg");
emailErrMsg.innerText="err";

emailErrDiv.appendChild(emailErrMsg);

let login_row_5 = document.createElement("div");
login_row_5.setAttribute('id',"login_row_5");
login_row_5.setAttribute("class","row");

let passworddiv = document.createElement("div");
passworddiv.setAttribute('id',"passworddiv");
passworddiv.setAttribute("class","col-6");

let passwordLabel = document.createElement("label");
passwordLabel.setAttribute('id',"passwordLabel");

let passwordH6 = document.createElement("H6");
passwordH6.setAttribute('id',"passwordH6");
passwordH6.innerText="Password";

let forgotPassworddiv = document.createElement("div");
forgotPassworddiv.setAttribute('id',"forgotPassworddiv");
forgotPassworddiv.setAttribute("class","col-6");

let forgotPasswordLink = document.createElement("a");
forgotPasswordLink.setAttribute('id',"forgotPasswordLink");
forgotPasswordLink.setAttribute("href","#");
forgotPasswordLink.innerText="Forgot Password?";

let login_row_6 = document.createElement("div");
login_row_6.setAttribute('id',"login_row_6");
login_row_6.setAttribute("class","row");

let eyeIconDiv = document.createElement("div");
eyeIconDiv.setAttribute('id',"eyeIconDiv");

let eyeIcon = document.createElement("i");
eyeIcon.setAttribute('id',"eyeIcon");
eyeIcon.setAttribute('class',"fa-regular fa-eye-slash");
eyeIcon.setAttribute("onclick","viewOrHide()");

eyeIconDiv.appendChild(eyeIcon);
login_row_6.appendChild(eyeIconDiv);

let passwordInputDiv = document.createElement("div")
passwordInputDiv.setAttribute('id',"passwordInputDiv");
passwordInputDiv.setAttribute("class","col-12");

let passwordInput = document.createElement("input");
passwordInput.setAttribute('id',"passwordInput");
passwordInput.setAttribute("class","form-control");
passwordInput.setAttribute("onfocus","suggestion()");
passwordInput.setAttribute("onblur","removesuggestion()");
passwordInput.setAttribute('type',"password");
passwordInput.setAttribute('placeholder',"Enter 6 character or more");

let login_row_7 = document.createElement("div");
login_row_7.setAttribute('id',"login_row_7");

let errorMsg = document.createElement("small")
errorMsg.setAttribute('id',"errorMsg");
errorMsg.innerText="err";

let login_row_8 = document.createElement("div");
login_row_8.setAttribute('id',"login_row_8");
login_row_8.setAttribute("class","row");
 
let checkBoxDiv = document.createElement("div");
checkBoxDiv.setAttribute('id',"checkBoxDiv");
checkBoxDiv.setAttribute("class","col-12");

let checkBoxInput = document.createElement("input");
checkBoxInput.setAttribute('id',"checkBoxInput");
checkBoxInput.setAttribute('type',"checkbox");

let checkBoxLabel = document.createElement("label");
checkBoxLabel.innerText="Remember Me";

let login_row_9 = document.createElement("div");
login_row_9.setAttribute('id',"login_row_9");
login_row_9.setAttribute("class","row");

let loginButtonDiv = document.createElement("div");
loginButtonDiv.setAttribute('id',"loginButtonDiv");
loginButtonDiv.setAttribute("class","col-12");

let loginButton = document.createElement("button");
loginButton.setAttribute('id',"loginButton");
loginButton.setAttribute("class","btn btn-primary");
loginButton.setAttribute('onclick',"check()");
loginButton.innerText="LOGIN";

let login_row_10 = document.createElement("div");
login_row_10.setAttribute('id',"login_row_10");
login_row_10.setAttribute("class","row");

let line_1_div = document.createElement("div");
line_1_div.setAttribute('id',"line_1_div");
line_1_div.setAttribute("class","col-4");

let line_1 = document.createElement("hr");

let loginWith = document.createElement("div");
loginWith.setAttribute('id',"loginWith");
loginWith.setAttribute("class","col-4");
loginWith.innerText="or login with";

let line_2_div = document.createElement("div");
line_2_div.setAttribute('id',"line_2_div");
line_2_div.setAttribute("class","col-4");

let line_2 = document.createElement("hr");

let login_row_11 = document.createElement("div");
login_row_11.setAttribute('id',"login_row_11");
login_row_11.setAttribute("class","row");

let googleDiv = document.createElement("div");
googleDiv.setAttribute('id',"googleDiv");
googleDiv.setAttribute("class","col-6");

let googleButton = document.createElement("button");
googleButton.setAttribute('id',"googleButton");
googleButton.setAttribute("class","btn btn-outline-danger");
googleButton.setAttribute("type","button");

let googleSpan = document.createElement("span");

let googleImg = document.createElement("img");
googleImg.setAttribute('src',"./svg images/1534129544.svg");
googleImg.setAttribute('alt',"googleIcon");  
googleImg.setAttribute('id',"googleImg");  

let googleTextSpan = document.createElement("span");
googleTextSpan.innerText="Google";

let fbDiv = document.createElement("div");
fbDiv.setAttribute('id',"fbDiv");
fbDiv.setAttribute("class","col-6");

let fbButton = document.createElement("button");
fbButton.setAttribute('id',"fbButton");
fbButton.setAttribute("class","btn btn-outline-primary");
fbButton.setAttribute("type","button");
fbButton.innerHTML=`<i class="fa-brands fa-facebook-f"></i>Facebook`;

let rightCol= document.createElement("div");
rightCol.setAttribute('id',"rightCol");
rightCol.setAttribute('class',"col-7 col-sm-0");

let rightRow = document.createElement("div");
rightRow.setAttribute('id',"rightRow");
rightRow.setAttribute('class',"row");

let empty_3 = document.createElement("div");
empty_3.setAttribute('id',"empty_3");
empty_3.setAttribute('class',"col-1");

let rightImgDiv = document.createElement("div");
rightImgDiv.setAttribute('id',"rightImgDiv");
rightImgDiv.setAttribute('class',"col-10");

let rightImg = document.createElement("img");
rightImg.setAttribute('id',"rightImg");
rightImg.setAttribute('src',"./svg images/undraw_secure_login_pdn4.svg");
rightImg.setAttribute('alt',"workplace");

let popupDiv = document.createElement("div");
popupDiv.setAttribute('id',"popupDiv");
popupDiv.setAttribute('class',"popupDiv");

let popupMsg = document.createElement("h5");
popupMsg.setAttribute('id',"popupMsg");
popupMsg.setAttribute('class',"popupMsg");

let popupCloseDiv = document.createElement("div");
popupCloseDiv.setAttribute('id',"popupCloseDiv");

let popupClose = document.createElement("i");
popupClose.setAttribute('id',"popupClose");
popupClose.setAttribute('class',"fa-solid fa-xmark fa-lg");

popupDiv.appendChild(popupMsg);
popupCloseDiv.appendChild(popupClose)
popupDiv.appendChild(popupCloseDiv);
container.appendChild(popupDiv);

rightImgDiv.appendChild(rightImg);
rightRow.appendChild(empty_3);
rightRow.appendChild(rightImgDiv);
rightCol.appendChild(rightRow);

googleSpan.appendChild(googleImg);
googleButton.appendChild(googleSpan);
googleButton.appendChild(googleTextSpan);
googleDiv.appendChild(googleButton);
login_row_11.appendChild(googleDiv);

fbDiv.appendChild(fbButton);
login_row_11.appendChild(fbDiv);

line_1_div.appendChild(line_1);
line_2_div.appendChild(line_2);
login_row_10.appendChild(line_1_div);
login_row_10.appendChild(loginWith);
login_row_10.appendChild(line_2_div);

loginButtonDiv.appendChild(loginButton);
login_row_9.appendChild(loginButtonDiv);

checkBoxDiv.appendChild(checkBoxInput);
checkBoxDiv.appendChild(checkBoxLabel);
login_row_8.appendChild(checkBoxDiv);

login_row_7.appendChild(errorMsg);

passwordInputDiv.appendChild(passwordInput);
login_row_6.appendChild(passwordInputDiv);

passwordLabel.appendChild(passwordH6);
passworddiv.appendChild(passwordLabel)
forgotPassworddiv.appendChild(forgotPasswordLink);
login_row_5.appendChild(passworddiv);
login_row_5.appendChild(forgotPassworddiv);

emailInputdiv.appendChild(emailInput);
login_row_4.appendChild(emailInputdiv);

emaillabel.appendChild(emailH6);
emaildiv.appendChild(emaillabel);
login_row_3.appendChild(emaildiv);

signup.appendChild(signUpText);
acc.appendChild(haveAcc);
login_row_2.appendChild(acc);
login_row_2.appendChild(signup);

logintitle.appendChild(loginH5);
login_row_1.appendChild(logintitle);

login_col.appendChild(login_row_1);
login_col.appendChild(login_row_2);
login_col.appendChild(login_row_3);
login_col.appendChild(login_row_4);
login_col.appendChild(emailErrDiv);
login_col.appendChild(login_row_5);
login_col.appendChild(login_row_6);
login_col.appendChild(login_row_7);
login_col.appendChild(login_row_8);
login_col.appendChild(login_row_9);
login_col.appendChild(login_row_10);
login_col.appendChild(login_row_11);

row.appendChild(login_col);
row.appendChild(rightCol);
page_bg.appendChild(row);
page_bg_row.appendChild(empty_2);
page_bg_row.appendChild(page_bg);
login_bg.appendChild(page_bg_row);
entireRow.appendChild(empty_1);
entireRow.appendChild(login_bg);
entireRow.appendChild(empty_end);
container.appendChild(entireRow);
document.body.appendChild(container);