"use strict";(self["webpackChunkquiz"]=self["webpackChunkquiz"]||[]).push([[443],{8001:function(s,e,t){t.r(e),t.d(e,{default:function(){return x}});var n=t(3396),i=t(7139),r=t(9242);const u={class:"quiz-wrapper"},o={class:"quiz"},c={class:"question-wrapper"},a={class:"counter"},l={class:"question"},d=["onClick","disabled"],w=(0,n._)("input",{hidden:"",type:"radio",name:"answer"},null,-1),h={class:"score"};function g(s,e,t,g,p,Q){const q=(0,n.up)("card-component");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",o,[(0,n.Wm)(q,{image:"/image/cat.jpg"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",c,[(0,n._)("div",a,(0,i.zw)(p.currentQuestionIndex+1)+" / "+(0,i.zw)(p.questions.length),1),(0,n._)("h3",l,(0,i.zw)(p.currentQuestion.question),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.currentQuestion.answers,((s,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"answers-wrapper",key:s},[(0,n._)("label",{onClick:(0,r.iM)((s=>Q.checkAnswer(e)),["prevent"]),class:(0,i.C_)(["answers button",s.class]),disabled:p.isDisabled},[w,(0,n.Uk)(" "+(0,i.zw)(s.text),1)],10,d)])))),128))],512),[[r.F8,!p.isEnded]]),(0,n.wy)((0,n._)("div",null,[(0,n._)("p",h,"You got "+(0,i.zw)(p.score)+" / "+(0,i.zw)(p.questions.length),1)],512),[[r.F8,p.isEnded]])])),_:1},8,["image"])])])}var p=t(5774),Q={components:{CardComponent:p.Z},data(){return{questions:[{question:"What is Vue.js?",answers:[{text:"Programming language",class:"answer"},{text:"Framework",class:"answer"}],correctAnswer:1},{question:"What color is Vue.js logo?",answers:[{text:"Green",class:"answer"},{text:"Blue",class:"answer"}],correctAnswer:0}],currentQuestionIndex:0,currentQuestion:{},score:0,isEnded:!1,isDisabled:!1}},mounted(){this.currentQuestion=this.questions[this.currentQuestionIndex]},methods:{checkAnswer(s){this.isDisabled=!0,s==this.currentQuestion.correctAnswer?(this.score++,this.currentQuestion.answers[s].class="right"):this.currentQuestion.answers[s].class="wrong",setTimeout((()=>{this.getNextQuestion()}),500)},getNextQuestion(){console.log(this.currentQuestionIndex),void 0==this.questions[this.currentQuestionIndex+1]?this.isEnded=!0:(this.isDisabled=!1,this.currentQuestionIndex++,this.currentQuestion=this.questions[this.currentQuestionIndex])}}},q=t(89);const m=(0,q.Z)(Q,[["render",g]]);var x=m}}]);
//# sourceMappingURL=about.81a34157.js.map