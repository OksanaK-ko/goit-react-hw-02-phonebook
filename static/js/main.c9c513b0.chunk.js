(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__3g9GL",title:"App_title__3M4cB"}},14:function(t,e,n){t.exports={label:"Filter_label__NvbGf"}},22:function(t,e,n){},3:function(t,e,n){t.exports={label:"ContactForm_label__1HMmy",button:"ContactForm_button__1u_Mz"}},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(12),o=n.n(i),s=(n(21),n(22),n(15)),l=n(5),u=n(6),m=n(8),b=n(7),h=n(13),d=n(2),j=n.n(d),f=n(3),p=n.n(f),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:p.a.form_element,children:Object(a.jsxs)("label",{className:p.a.label,htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]})}),Object(a.jsxs)("label",{className:p.a.label,htmlFor:this.numberInputId,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(a.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component);C.defaultProps={type:"text",name:null};var O=C,_=n(9),v=n.n(_),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:v.a.ContactList,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:v.a.ContactList_item,children:[c,": ",r,Object(a.jsx)("button",{className:v.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(14),y=n.n(g),N=function(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},S=n(10),F=n.n(S),I=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.formSubmitHandler=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var n={id:j.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))}},t.getFilterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilterContacts(),e=this.state.filter;return Object(a.jsxs)("div",{className:F.a.container,children:[Object(a.jsx)("h1",{className:F.a.title,children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{className:F.a.title,children:"Contacts"}),Object(a.jsx)(N,{value:e,onChangeFilter:this.changeFilter}),Object(a.jsx)(x,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__1FHce",ContactList_item:"ContactList_ContactList_item__1bo1y",button:"ContactList_button__2mPr1"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c9c513b0.chunk.js.map