(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{17:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(5),n=r.n(s),i=r(4),o=r.n(i),d=r(6),l=r(7),u=r(8),h=r(2),j=r(10),S=r(9),m=r(0);var b=function(e){return Object(m.jsxs)("div",{className:"card",onClick:function(){return e.onCardClicked()},children:[Object(m.jsx)("img",{src:e.imgSource,alt:""}),Object(m.jsx)("p",{className:"card-description",children:e.title})]})};var k=function(e){return Object(m.jsxs)("div",{className:"score-container",children:[Object(m.jsxs)("div",{className:"score-text",children:["Current Score: ",e.currentScore]}),Object(m.jsxs)("div",{className:"score-text",children:["High Score: ",e.highScore]})]})},p={1:"balmoral",2:"bloodhawk",3:"brigand",4:"devastator",5:"fury",6:"kestrel",7:"peacemaker"},g={1:"Bristol Type 140 Balmoral",2:"Hughes Bloodhawk",3:"Fairchild F611 Brigand",4:"Hughes P21-J Devastator",5:"Curtiss-Wright J2 Fury",6:"McDonnell S2B Kestrel",7:"William and Colt Peacemaker 370"},v=[1,2,3,4,5,6,7],O=function(e){Object(j.a)(r,e);var t=Object(S.a)(r);function r(e){var c;return Object(l.a)(this,r),(c=t.call(this,e)).state={highScore:0,currentScore:0,cardsClicked:[],cards:v},c.increaseScore=c.increaseScore.bind(Object(h.a)(c)),c.resetScore=c.resetScore.bind(Object(h.a)(c)),c.clickCard=c.clickCard.bind(Object(h.a)(c)),c}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.randomizeCards();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"increaseScore",value:function(){this.state.currentScore>=this.state.highScore?this.setState({currentScore:this.state.currentScore+1,highScore:this.state.currentScore+1}):this.setState({currentScore:this.state.currentScore+1})}},{key:"resetScore",value:function(){this.setState({currentScore:0,cardsClicked:[]})}},{key:"randomizeCards",value:function(){for(var e=v.map((function(e){return e})),t=[];e.length>=1;){var r=Math.round(Math.random()*(e.length-1));t.push(e.splice(r,1))}this.setState({cards:t})}},{key:"clickCard",value:function(e){this.state.cardsClicked.includes(parseInt(e,10))?this.resetScore():(this.setState({cardsClicked:this.state.cardsClicked.concat(e)}),this.increaseScore()),this.randomizeCards()}},{key:"render",value:function(){var e=this,t=this.state,r=t.currentScore,c=t.highScore,a=t.cards;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{src:"images/cs title.png",alt:""}),Object(m.jsx)("p",{className:"instructions-text",children:"Increase your score by clicking a plane, but don't click the same plane twice!"}),Object(m.jsx)(k,{currentScore:r,highScore:c})]}),Object(m.jsx)("div",{className:"card-container",children:a.map((function(t){return Object(m.jsx)(b,{title:g[t],id:t,onCardClicked:function(){return e.clickCard(t)},imgSource:"images/"+p[t]+".png"},t.toString())}))})]})}}]),r}(c.Component);n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f7ec7815.chunk.js.map