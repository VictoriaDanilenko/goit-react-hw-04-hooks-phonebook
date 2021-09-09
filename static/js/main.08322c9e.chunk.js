(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),r=n.n(c),o=(n(16),n(11)),s=n(2),i=n(8),l=n.n(i),u=n(3),m=n.n(u),b=n(20),f=n(0);function d(e){var t=e.submit,n=e.option,c=Object(a.useState)(0),r=Object(s.a)(c,1)[0],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),h=j[0],p=j[1],O=Object(b.a)(),_=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":u(a);break;case"number":p(a);break;default:return}};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:n}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({id:r,name:l,number:h}),u(""),p("")},autoComplete:"off",className:m.a.phoneBookForm,children:[Object(f.jsx)("label",{htmlFor:O,className:m.a.formLabel,children:"Name"}),Object(f.jsx)("input",{className:m.a.formInput,type:"text",name:"name",placeholder:"Enter full name",id:O,value:l,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0}),Object(f.jsx)("label",{htmlFor:O,className:m.a.formLabel,children:"Number"}),Object(f.jsx)("input",{className:m.a.formInput,type:"tel",name:"number",placeholder:"Enter number",id:O,value:h,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must be digits and can contain spaces, dashes and should start with +",required:!0}),Object(f.jsx)("button",{type:"submit",className:m.a.formBtn,children:"Add contact"})]})]})}var j=n(5),h=n.n(j),p=function(e){var t=e.list,n=e.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.number,a=e.name;return Object(f.jsxs)("li",{className:h.a.listItem,children:[Object(f.jsxs)("p",{className:h.a.contactName,children:[a,": ",t]}),Object(f.jsx)("button",{className:h.a.contactBtn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})})},O=n(9),_=n.n(O),x=function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{htmlFor:"filter",className:_.a.filterLabel,children:["Find contacts by name",Object(f.jsx)("input",{className:_.a.filterInput,type:"text",value:t,onChange:n,id:"filter"})]})};function N(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"+79274591256"},{id:"id-2",name:"Hermione Kline",number:"+792174438912"},{id:"id-3",name:"Eden Clements",number:"+79676451779"},{id:"id-4",name:"Annie Copeland",number:"+7967275126"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],m=i[1],b=Object(a.useMemo)((function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}),[n,u]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));if(e)return c(e)}),[]),Object(a.useEffect)((function(){return localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(f.jsxs)("div",{className:l.a.container,children:[Object(f.jsx)(d,{option:"Phonebook",submit:function(e){n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),Object(f.jsx)("h2",{className:l.a.contactList,children:"Contacts"}),Object(f.jsx)(x,{value:u,onChange:function(e){var t=e.currentTarget.value;m(t)}}),Object(f.jsx)(p,{list:b,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.number!==e}))}))}})]})}r.a.render(Object(f.jsx)(N,{}),document.getElementById("root"))},3:function(e,t,n){e.exports={phoneBookForm:"form_phoneBookForm__2zgVQ",formLabel:"form_formLabel__1_eLj",formInput:"form_formInput__3uoAJ",formBtn:"form_formBtn__3NqgR"}},5:function(e,t,n){e.exports={list:"contacts_list__3wcae",listItem:"contacts_listItem__2mucc",contactName:"contacts_contactName__3H0Ot",contactBtn:"contacts_contactBtn__Lf-9-"}},8:function(e,t,n){e.exports={container:"container_container__3gKmY",contactList:"container_contactList__2LHSN"}},9:function(e,t,n){e.exports={filterLabel:"filter_filterLabel__1hYoT",filterInput:"filter_filterInput__KcP-x"}}},[[18,1,2]]]);
//# sourceMappingURL=main.08322c9e.chunk.js.map