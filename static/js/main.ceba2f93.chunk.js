(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(5),s=c.n(o),a=(c(13),c(7)),j=(c(14),c(8)),i=c(0);function u(e){var t=e.setTodo,c=Object(n.useRef)();return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("input",{ref:c,type:"text",placeholder:"Write a new todo",className:"todoInput"}),Object(i.jsx)("button",{onClick:function(){var e=c.current.value;""!==e&&(t((function(t){return[].concat(Object(j.a)(t),[e])})),c.current.value=null)},className:"add",children:"Add todo"})]})}var d=c(6),b=c.n(d);function l(e){var t=e.todo;Object(n.useRef)();function c(){}return t.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"checkbox",className:"checkbox",onClick:c}),e]},b()())}))}var O="MyTodoApp";var f=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(O));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(O,JSON.stringify(c))}),[c]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"TodoList"}),Object(i.jsx)("br",{}),Object(i.jsx)(u,{setTodo:r})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("main",{children:[Object(i.jsx)("h2",{children:"Todo :"}),Object(i.jsx)("ul",{children:Object(i.jsx)(l,{todo:c})})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ceba2f93.chunk.js.map