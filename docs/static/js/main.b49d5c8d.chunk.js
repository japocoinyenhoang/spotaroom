(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(15),n(8)),i=n(1),l=n(2),m=n(4),u=n(3),p=n(5),h=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"Menu__link"},r.a.createElement("a",{href:"https://www.spotahome.com/",target:"_blank",rel:"noopener noreferrer",className:"Menu__link--item"},"The company"),r.a.createElement("a",{href:"https://www.spotahome.com/how-it-works",target:"_blank",rel:"noopener noreferrer",className:"Menu__link--item"},"How we work"),r.a.createElement("a",{href:"https://www.spotahome.com/contact-us",target:"_blank",rel:"noopener noreferrer",className:"Menu__link--item"},"Contact us"))}}]),t}(a.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"Btn Btn__moreDetails",type:"button"},"More Details")}}]),t}(a.Component),f=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.photo,n=e.title,o=e.price,c=e.currency;return r.a.createElement(a.Fragment,null,r.a.createElement("img",{className:"Room__img",src:t,alt:"bedroom"}),r.a.createElement("p",{className:"Room__description"},n),r.a.createElement("p",{className:"Room__price"},o," ",c),r.a.createElement("div",{className:"Btn__container"},r.a.createElement(b,null),r.a.createElement("button",{className:"Btn Btn__book",type:"button"},"Book Now!")))}}]),t}(a.Component)),_=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.rooms;return r.a.createElement("ul",{className:"ResultList__container"},e.map(function(e){return r.a.createElement("li",{className:"ResultList__item",key:e.id},r.a.createElement(f,{photo:e.photoUrls.homecardHidpi,title:e.title,price:e.pricePerMonth,currency:e.currencySymbol}))}))}}]),t}(a.Component)),j=(n(19),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={rooms:[]},n.getRoomResult(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getRoomResult",value:function(){var e=this;fetch("/api/homecards").then(function(e){return e.json()}).then(function(t){var n=t.homecards.map(function(e,t){return Object(s.a)({},e,{id:t})});e.setState({rooms:n})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Wrap App"},r.a.createElement("header",{className:"Header__container"},r.a.createElement("h1",{className:"Header__title"},"spotaroom"),r.a.createElement(h,null)),r.a.createElement("main",{className:"Main__container"},r.a.createElement(_,{rooms:this.state.rooms})))}}]),t}(a.Component));c.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b49d5c8d.chunk.js.map