(this["webpackJsonpeshop-project"]=this["webpackJsonpeshop-project"]||[]).push([[0],{77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){},88:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},92:function(e,t,r){},94:function(e,t,r){},95:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var c=r(0),s=r.n(c),a=r(11),n=r.n(a),i=(r(77),r(13)),o=r(21),l=r(10),d=(r(78),r(136)),j=r(137),m=r(127),b=r(130),u=r(131),h=r(132),x=r(133),p=r(134),O=r(135),f=r(17),v=(r(79),r(1));var g=function(e){var t=Object(c.useState)(1),r=Object(l.a)(t,2),s=r[0],a=(r[1],"https://image.tmdb.org/t/p/original/".concat(e.poster));return Object(v.jsx)("div",{className:"wrapper",children:Object(v.jsxs)(m.a,{className:"card-root",children:[Object(v.jsxs)(b.a,{children:[Object(v.jsx)(u.a,{className:"product-image",image:a,title:"Product Image"}),Object(v.jsxs)(h.a,{children:[Object(v.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(v.jsx)("p",{className:"product-title",children:e.title})}),Object(v.jsx)(x.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",children:function(){var t=e.description.length>145?e.description.substring(0,145):e.description;return(t=200!==t.length?t.substring(0,Math.min(t.length,t.lastIndexOf(" ")))+" . . .":t).trim()}()}),Object(v.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["Total price: ",Object(v.jsxs)("span",{children:[e.price*s,"\u20ac"]})]})]})]}),Object(v.jsx)("div",{className:"action-area",children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/product/".concat(e.id),children:Object(v.jsx)(O.a,{size:"small",color:"secondary",children:Object(v.jsx)("span",{className:"details-btn",children:"View Details"})})}),Object(v.jsx)(O.a,{className:"add-btn",size:"small",color:"primary",onClick:function(){return e.addToCart("".concat(e.id))},children:Object(v.jsx)("span",{className:"add-btn",children:"Add to Cart"})})]})})]})})},N=Object(c.createContext)({listOfProducts:[],cartProducts:[],addToCart:function(){},removeFromCart:function(){},changeQuantity:function(){},changeListOfProducts:function(){}});r(86);var y=function(){return Object(v.jsx)("div",{className:"horror-title text-center mb-5",children:"The Horror Movie Poster Shop!"})};r(87);var w=function(){var e=Object(c.useContext)(N),t=e.listOfProducts,r=(e.cartProducts,e.addToCart),s=(e.removeFromCart,Object(c.useState)(t)),a=Object(l.a)(s,2),n=a[0],i=a[1];return Object(v.jsxs)(d.a,{className:"container",fixed:!0,children:[Object(v.jsx)(y,{className:"title"}),Object(v.jsx)("div",{className:"mb-5",children:Object(v.jsx)("form",{className:" justify-content-center form-inline my-2 my-lg-0",onChange:function(e){var r=e.target.value.toLowerCase();i(t.filter((function(e){return e.title.toLowerCase().includes(r)})))},children:Object(v.jsx)("div",{className:"search-container",children:Object(v.jsx)("input",{name:"searchBar",className:"form-control mr-sm-2",type:"search",placeholder:"Search for a movie title...","aria-label":"Search"})})})}),Object(v.jsx)(j.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(v.jsx)(j.a,{item:!0,xs:4,children:Object(v.jsx)(g,{id:e.id,title:e.title,description:e.overview,price:e.vote_average,poster:e.poster_path,addToCart:r},e.id)})}))})]})};r(88);var S=function(){var e=Object(c.useContext)(N),t=(e.listOfProducts,e.cartProducts);return e.changeListOfProducts,Object(v.jsx)("div",{className:"navbar-container",children:Object(v.jsxs)("nav",{class:"navbar fixed-top navbar-light p-4 justify-content-center",children:[Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/",children:Object(v.jsxs)("i",{class:"fas fa-ghost",children:[" ",Object(v.jsx)("span",{children:" Home"})]})}),Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/cart",children:Object(v.jsxs)("div",{className:"ml-3 cart-icon",children:[Object(v.jsxs)("i",{class:"fas fa-shopping-cart",children:[" ",Object(v.jsx)("span",{children:" Cart"})]}),Object(v.jsx)("div",{className:"products-number",children:t.length})]})}),Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/login",children:Object(v.jsx)("div",{className:"ml-3",children:Object(v.jsxs)("i",{class:"fas fa-sign-in-alt",children:[" ",Object(v.jsx)("span",{children:" Sign in"})]})})}),Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/registration",children:Object(v.jsx)("div",{className:"ml-3",children:Object(v.jsxs)("i",{class:"fas fa-address-card",children:[" ",Object(v.jsx)("span",{children:" Register"})]})})})]})})},P=r(143);r(89);var C=function(e){var t=Object(c.useState)(1),r=Object(l.a)(t,2),s=r[0],a=r[1];Object(c.useEffect)((function(){e.changeQuantity(e.id,s)}),[s]);var n="https://image.tmdb.org/t/p/original/".concat(e.poster);return Object(v.jsxs)(m.a,{className:"card-root",children:[Object(v.jsxs)(b.a,{children:[Object(v.jsx)(u.a,{className:"product-image",image:n,title:"Product Image"}),Object(v.jsxs)(h.a,{children:[Object(v.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(v.jsx)("span",{class:"poster-title",children:e.title})}),Object(v.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["Total price: ",Object(v.jsxs)("span",{children:[e.price*s," \u20ac"]})]})]})]}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(O.a,{size:"small",variant:"contained",color:"secondary",onClick:function(){a((function(e){return e-1}))},disabled:!(s-1),children:"-"}),Object(v.jsx)(P.a,{value:s,className:"quantity-input",size:"small",id:"filled-basic",variant:"filled"}),Object(v.jsx)(O.a,{p:0,className:"quantity-btn",size:"small",variant:"contained",color:"primary",onClick:function(){a((function(e){return e+1}))},disabled:s>=5,children:"+"}),Object(v.jsx)(O.a,{className:"quantity-btn",size:"small",color:"primary",onClick:function(){return e.removeFromCart("".concat(e.id))},children:"Remove"})]})]})},E=r(138),q=r(139),F=r(140),k=r(141),M=r(142);r(90);var T=function(){var e=Object(c.useContext)(N),t=(e.listOfProducts,e.cartProducts);return e.addToCart,e.removeFromCart,Object(v.jsxs)("div",{className:"table-container border border-white rounded text-white p-2",children:[Object(v.jsx)("h2",{className:"table-title",children:"Cart Summary"}),Object(v.jsxs)(E.a,{className:"table",size:"small","aria-label":"a dense table",children:[Object(v.jsx)(q.a,{children:Object(v.jsxs)(F.a,{className:"text-white",children:[Object(v.jsx)(k.a,{className:"text-white",children:"Product"}),Object(v.jsx)(k.a,{className:"text-white",children:"Unit Price"}),Object(v.jsx)(k.a,{className:"text-white",children:"Quantity"})]})}),Object(v.jsxs)(M.a,{children:[t.map((function(e){return Object(v.jsxs)(F.a,{children:[Object(v.jsx)(k.a,{component:"th",scope:"row",className:"text-white",children:e.title}),Object(v.jsxs)(k.a,{className:"text-white",children:[e.vote_average,"\u20ac"]}),Object(v.jsx)(k.a,{className:"text-white",children:e.quantity})]},e.id)})),Object(v.jsxs)(F.a,{children:[Object(v.jsx)(k.a,{rowSpan:3}),Object(v.jsx)(k.a,{className:"text-white",colSpan:1,children:"Total Price"}),Object(v.jsxs)(k.a,{className:"text-white",children:[function(){var e=0;return t.forEach((function(t){e+=t.quantity*t.vote_average})),(Math.round(100*e)/100).toFixed(2)}(),"\u20ac"]})]})]})]}),0!==t.length?Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)(f.b,{to:"/React-Horror-Movie-Poster-Shop/checkout",children:Object(v.jsx)("button",{className:"btn",children:"Checkout"})})}):Object(v.jsx)(v.Fragment,{})]})};r(91);var _=function(){var e=Object(c.useContext)(N),t=(e.listOfProducts,e.cartProducts),r=(e.addToCart,e.removeFromCart),s=e.changeQuantity;return Object(v.jsx)(d.a,{className:"container",fixed:!0,children:Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(T,{item:!0,xs:3}),Object(v.jsx)(j.a,{item:!0,xs:9,container:!0,spacing:3,children:0===t.length?Object(v.jsxs)("h2",{className:"empty-cart-text ml-5 text-white",children:["Your cart is empty, almost like... a haunted house!",Object(v.jsx)("br",{}),"Try clicking \xa0",Object(v.jsx)(f.b,{className:"link-to-home",to:"/React-Horror-Movie-Poster-Shop/",children:Object(v.jsx)("span",{className:"link-to-home",children:"here"})}),"\xa0 and adding some products."]}):t.map((function(e){return Object(v.jsx)(j.a,{item:!0,xs:4,children:Object(v.jsx)(C,{id:e.id,title:e.title,description:e.description,price:e.vote_average,poster:e.poster_path,removeFromCart:r,changeQuantity:s},e.id)})}))})]})})},H=r(9),R=r(145),L=(r(92),r(15)),A=r.n(L),I=r(61),D=r(24);var Q=function(e,t){var r=Object(c.useState)(e),s=Object(l.a)(r,2),a=s[0],n=s[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),d=o[0],j=o[1],m="382f7f7f00233c7b0b8ec7ca0042ea67",b="https://api.themoviedb.org/3",u={method:"GET",headers:{"Content-Type":"application/json"}};return Object(c.useEffect)((function(){(function(){var e=Object(D.a)(A.a.mark((function e(){var r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),console.log("".concat(b,"/").concat(a,"?api_key=").concat(m,"&").concat(t)),e.next=5,fetch("".concat(b,"/").concat(a,"?api_key=").concat(m,"&").concat(t),Object(I.a)({},u));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,j(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),{response:d,query:a,setQuery:n}};r(94);var Y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],a=Object(H.f)().id,n=Q("movie/".concat(a,"/similar"),""),i=n.response,o=(n.query,n.setQuery);Object(c.useEffect)((function(){o("movie/".concat(a,"/similar"),"")}),[a]);var d=Object(c.useContext)(N).listOfProducts.sort((function(){return.5-Math.random}));return d=d.filter((function(e){return e.id!=a})),Object(c.useEffect)((function(){s(i.results)}),[i]),console.log(r),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:"recommendations-title text-white mt-4",children:"Other similar products:"}),Object(v.jsx)("div",{className:"row mb-5",children:r&&0!=r.length?r.slice(0,4).map((function(e){return Object(v.jsx)("div",{className:"col-3",children:Object(v.jsx)(g,{id:e.id,title:e.title,description:"",price:e.vote_average,poster:e.poster_path},e.id)})})):d.slice(0,3).map((function(e){return Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)(g,{id:e.id,title:e.title,description:"",price:e.vote_average,poster:e.poster_path},e.id)})}))})]})};var z=function(){var e=Object(c.useContext)(N),t=(e.listOfProducts,e.cartProducts,e.addToCart),r=(e.removeFromCart,Object(H.f)().id),s=Q("movie/".concat(r),""),a=s.response,n=(s.query,s.setQuery);Object(c.useEffect)((function(){n("movie/".concat(r),"")}),[r]);var i=a,o="https://image.tmdb.org/t/p/original/".concat(i.poster_path);return Object(v.jsxs)(d.a,{className:"container",fixed:!0,children:[Object(v.jsxs)(j.a,{container:!0,spacing:2,children:[Object(v.jsx)(R.a,{className:"img-container border border-white",style:{backgroundImage:"url(".concat(o,")")},item:!0,xs:5,m:5}),Object(v.jsxs)(R.a,{className:"info-container text-white",item:!0,xs:4,m:5,children:[Object(v.jsx)("p",{className:"movie-title",children:"".concat(i.title)}),Object(v.jsx)("p",{children:"".concat(i.overview)}),Object(v.jsxs)("p",{children:["Price: ","".concat(i.vote_average,"\u20ac")]}),Object(v.jsx)("button",{className:"btn add-button",onClick:function(){return t(r)},children:"Add to cart"})]})]}),Object(v.jsx)(Y,{})]})},V=r(30);r(95);var B=function(){var e,t,r=Object(V.a)(),s=r.register,a=r.handleSubmit,n=r.errors,i=r.watch,o=Object(c.useRef)({});return o.current=i("password",""),Object(v.jsxs)("div",{className:"container",onSubmit:a((function(e){console.log("Form Submitted Succesfully"),console.log("Data submitted: ".concat(JSON.stringify(e)))})),children:[Object(v.jsx)("h2",{className:"form-title text-white text-center",children:"Don't Have an Account? Register Here!"}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsxs)("form",{className:"form-body p-3 rounded col-6",children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"firstName",className:"text-white",children:"First Name"}),Object(v.jsx)("input",{name:"firstName",ref:s({required:"Enter your First Name"}),type:"text",class:"form-control",id:"form_firstName",placeholder:"Enter Your First Name"}),n.firstName&&Object(v.jsx)("p",{children:"First name is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"lastName",className:"text-white",children:"Last Name"}),Object(v.jsx)("input",{name:"lastName",ref:s({required:"Enter your Last Name"}),type:"text",class:"form-control",id:"form_lastName",placeholder:"Enter Your Last Name"}),n.lastName&&Object(v.jsx)("p",{children:n.lastName.message})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"email",className:"text-white",children:"Email address"}),Object(v.jsx)("input",{name:"email",ref:s({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}}),type:"text",class:"form-control",id:"email",placeholder:"Enter Your Email"}),"required"===(null===(e=n.email)||void 0===e?void 0:e.type)&&"Email is required","pattern"===(null===(t=n.email)||void 0===t?void 0:t.type)&&"Please enter valid email"]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"repeatPassword",className:"text-white",children:"Password"}),Object(v.jsx)("input",{name:"repeatPassword",ref:s({validate:function(e){return e===o.current||"The passwords do not match"}}),type:"password",class:"form-control",id:"repeatPassword",placeholder:"Repeat Your Password"}),n.repeatPassword&&Object(v.jsx)("p",{children:n.repeatPassword.message})]}),Object(v.jsxs)("div",{class:"form-check",children:[Object(v.jsx)("input",{name:"terms",ref:s({required:"You must accept the terms in order to continue."}),type:"checkbox",class:"form-check-input",id:"terms"}),n.terms&&Object(v.jsx)("p",{children:n.terms.message}),Object(v.jsx)("label",{class:"form-check-label",for:"terms ",className:"text-white",children:"Click to Accept the Terms & Conditions"})]}),Object(v.jsx)("input",{type:"submit",class:"btn btn-dark mt-3"})]})})]})};var J=function(){return Object(v.jsx)(B,{})};r(96);var Z=function(){var e=Object(V.a)(),t=e.register,r=e.handleSubmit,c=e.errors,s=[{email:"antegeia21@hotmail.com",password:"1qaz!QAZ"}];return Object(v.jsxs)("div",{className:"container p-3",onSubmit:r((function(e){console.log("Form Submitted Succesfully");var t=e.email,r=e.password;console.log("Data submitted: ".concat(JSON.stringify(e))),s.forEach((function(e){e.email===t&&e.password===r?console.log("Succesful login!"):e.email===t&&e.password!==r?console.log("Wrong Password!"):console.log("Cannot find account with specified email!")}))})),children:[Object(v.jsx)("h2",{className:"form-title h2 text-center mb-4 text-white",children:"Log in to the Shop"}),Object(v.jsx)("div",{class:"row justify-content-center",children:Object(v.jsxs)("form",{className:" form-body rounded col-6 p-3",children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{className:"text-white",for:"email",children:"Email address"}),Object(v.jsx)("input",{name:"email",ref:t({required:"Email is required"}),type:"text",class:"form-control",id:"email",placeholder:"Enter your Email"}),c.email&&Object(v.jsx)("p",{children:c.email.message})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{className:"text-white",for:"password",children:"Password"}),Object(v.jsx)("input",{name:"password",ref:t({required:"Password is required"}),type:"password",class:"form-control",id:"password",placeholder:"Enter your Password"}),c.password&&Object(v.jsx)("p",{children:c.password.message})]}),Object(v.jsx)("input",{type:"submit",class:"btn btn-dark mt-3"})]})})]})};var $=function(){return Object(v.jsx)(Z,{})};var G=function(e){var t,r,c,s,a=Object(V.a)(),n=a.register,i=a.handleSubmit,o=a.errors;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"payment-form",onSubmit:i((function(){e.toggleShowPaymentForm(!1),e.toggleShowInfoForm(!0)})),children:[Object(v.jsx)("h2",{className:"form-title h2 text-center mb-4 text-white",children:"Enter your payment details"}),Object(v.jsx)("div",{class:"row justify-content-center",children:Object(v.jsxs)("form",{className:" form-body rounded col-6 p-3",children:[Object(v.jsxs)("div",{class:"icons",children:[" ",Object(v.jsx)("img",{src:"https://img.icons8.com/color/48/000000/visa.png"})," ",Object(v.jsx)("img",{src:"https://img.icons8.com/color/48/000000/mastercard-logo.png"})," ",Object(v.jsx)("img",{src:"https://img.icons8.com/color/48/000000/maestro.png"})," "]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"firstName",className:"text-white",children:"Cardholder's Name"}),Object(v.jsx)("input",{name:"firstName",ref:n({required:"Enter cardholder's name"}),type:"text",class:"form-control",id:"firstName",placeholder:"Enter cardholder's name"}),o.firstName&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"Cardholder's name is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"cardNumber",className:"text-white",children:"Credit Card Number"}),Object(v.jsx)("input",{name:"cardNumber",ref:n({required:!0,pattern:{value:/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/}}),type:"text",class:"form-control",id:"cardNumber",placeholder:"Enter a  16-digit card number"}),"required"===(null===(t=o.cardNumber)||void 0===t?void 0:t.type)&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"Card number is required"}),"pattern"===(null===(r=o.cardNumber)||void 0===r?void 0:r.type)&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"Please enter a valid credit card number"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"expiryDate",className:"text-white",children:"Expiry Date"}),Object(v.jsx)("input",{name:"expiryDate",ref:n({required:"Enter card's expiry date"}),type:"text",class:"form-control",id:"expiryDate",placeholder:"MM/YYYY"}),o.expiryDate&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"Expiry date is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"cvv",className:"text-white",children:"CVV Number"}),Object(v.jsx)("input",{name:"cvv",ref:n({required:!0,pattern:{value:/^[0-9]{3,4}$/}}),type:"text",class:"form-control",id:"cvv",placeholder:"Please enter CVV number"}),"required"===(null===(c=o.cvv)||void 0===c?void 0:c.type)&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"CVV number is required"}),"pattern"===(null===(s=o.cvv)||void 0===s?void 0:s.type)&&Object(v.jsx)("p",{className:"text-danger font-italic",children:"Please enter a valid CVV number"})]}),Object(v.jsx)("input",{type:"submit",class:"btn btn-dark mt-3",value:"Next Step"})]})})]})})};var U=function(e){var t=Object(V.a)(),r=t.register,c=t.handleSubmit,s=t.errors;return t.watch,Object(H.e)(),Object(v.jsxs)("div",{className:"container",onSubmit:c((function(t){e.toggleShowInfoForm(!1),e.toggleShowCompletionMessage(!0)})),children:[Object(v.jsx)("h2",{className:"form-title text-white text-center",children:"Enter your Delivery Information"}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsxs)("form",{className:"form-body p-3 rounded col-6",children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"firstName",className:"text-white",children:"First Name"}),Object(v.jsx)("input",{name:"firstName",ref:r({required:"Enter your First Name"}),type:"text",class:"form-control",id:"form_firstName",placeholder:"Enter your First Name"}),s.firstName&&Object(v.jsx)("p",{children:"First name is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"lastName",className:"text-white",children:"Last Name"}),Object(v.jsx)("input",{name:"lastName",ref:r({required:"Enter your Last Name"}),type:"text",class:"form-control",id:"form_lastName",placeholder:"Enter your Last Name"}),s.lastName&&Object(v.jsx)("p",{children:s.lastName.message})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"address",className:"text-white",children:"Address"}),Object(v.jsx)("input",{name:"address",ref:r({required:"Enter your Address"}),type:"text",class:"form-control",id:"address",placeholder:"Enter your Street and Number "}),s.address&&Object(v.jsx)("p",{children:"Address is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"city",className:"text-white",children:"City"}),Object(v.jsx)("input",{name:"city",ref:r({required:"Enter your City"}),type:"text",class:"form-control",id:"city",placeholder:"Enter your City "}),s.city&&Object(v.jsx)("p",{children:"City is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"state",className:"text-white",children:"State/Province"}),Object(v.jsx)("input",{name:"state",ref:r({required:"Enter your State/Province"}),type:"text",class:"form-control",id:"state",placeholder:"Enter the state/province your city belongs in"}),s.state&&Object(v.jsx)("p",{children:"State/Province is required"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"postal",className:"text-white",children:"Postal Code"}),Object(v.jsx)("input",{name:"postal",ref:r({required:"Enter your Postal Code"}),type:"text",class:"form-control",id:"state",placeholder:"Enter your postal code"}),s.state&&Object(v.jsx)("p",{children:"Postal Code is required"})]}),Object(v.jsx)("input",{type:"submit",class:"btn btn-dark mt-3",value:"Finalize order"})]})})]})};r(97);var W=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)(!1),n=Object(l.a)(a,2),i=n[0],o=n[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),m=j[0],b=j[1];return Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"row justify-content-center",children:[Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)(T,{})}),Object(v.jsxs)("div",{className:"col-6",children:[r?Object(v.jsx)(G,{toggleShowPaymentForm:s,toggleShowInfoForm:o}):Object(v.jsx)(v.Fragment,{}),i?Object(v.jsx)(U,{toggleShowInfoForm:o,toggleShowCompletionMessage:b}):Object(v.jsx)(v.Fragment,{children:" "}),m?Object(v.jsxs)("h2",{className:"text-white completion-message",children:["Thank you for shopping from the Horror Movie Poster Shop!",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"You will receive a confirmation email, as soon as your order is processed.",Object(v.jsx)("br",{}),"Meanwhile you can browse more items \xa0",Object(v.jsx)(f.b,{className:"link-to-home",to:"/React-Horror-Movie-Poster-Shop/",children:Object(v.jsx)("span",{className:"link-to-home",children:"here"})}),"."]}):Object(v.jsx)(v.Fragment,{})]})]})})};var K=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)([]),n=Object(l.a)(a,2),d=n[0],j=(n[1],Q("discover/movie","with_genres=27&page=3")),m=j.response;return j.query,j.setQuery,console.log(m.results),d=m.results,Object(v.jsx)("div",{className:"main-container",children:Object(v.jsx)(f.a,{children:Object(v.jsxs)(N.Provider,{value:{listOfProducts:d,cartProducts:r,addToCart:function(e){d.forEach((function(t){if(t.id==e){var c,a=!1,n=Object(o.a)(r);try{for(n.s();!(c=n.n()).done;){c.value.id==t.id&&(alert("This product is already in your cart! If you want to increase the quantity, you can do so inside the cart."),a=!0)}}catch(l){n.e(l)}finally{n.f()}a||s((function(e){return[].concat(Object(i.a)(e),[t])}))}}))},removeFromCart:function(e){var t=new Array;r.forEach((function(r){r.id==e||t.push(r),s(t)}))},changeQuantity:function(e,t){r.forEach((function(c,a){if(c.id==e){var n=Object(i.a)(r);n[a].quantity=t,s(n)}}))}},children:[Object(v.jsx)(S,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/",component:d&&w}),Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/cart",component:_}),Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/product/:id",component:z}),Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/registration",component:J}),Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/login",component:$}),Object(v.jsx)(H.a,{exact:!0,path:"/React-Horror-Movie-Poster-Shop/checkout",component:W})]})]})})})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,148)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;r(e),c(e),s(e),a(e),n(e)}))};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root")),X()}},[[98,1,2]]]);
//# sourceMappingURL=main.053b5022.chunk.js.map