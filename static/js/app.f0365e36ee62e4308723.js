webpackJsonp([0],{0:function(e,t){},"0E2r":function(e,t){var s={apiKey:"AIzaSyD6rORknvqkyGddzhuddjPbbpw7yZAYAQQ",authDomain:"handwritingdetecting.firebaseapp.com",databaseURL:"https://handwritingdetecting.firebaseio.com/",storageBucket:"handwritingdetecting.appspot.com",csvUrlTemp:function(e){return"https://spreadsheets.google.com/feeds/list/{{id}}/od6/public/values?alt=json".replace(/\{\{id\}\}/,e)},imageUrlTemp:"https://drive.google.com/uc?export=view&id={{id}}",en_imagesListKey:"1JH-1eOr9k-AR2kaXamtge1lhzZGDQ4j7yOA1M_PARPY",heb_imagesListKey:"1hFDAw3--OmIoN7QRiqmfb8px3lj9_E83B_i6Bkdy1iY"};window.questionIndex=0,window.getRandomImages=function(e){var t=[];for(e=e>window.imagesData.length?window.imagesData.length:e;e>0;){var n=Math.floor(Math.random()*window.imagesData.length);if(-1==t.indexOf(n)){t.push(n);var i,r=window.imagesData[n].gsx$name.$t,o=window.imagesData[n].gsx$link.$t.replace(/(https\:\/\/drive\.google\.com\/file\/d\/|\/view\?usp\=drivesdk)/g,""),a=s.imageUrlTemp.replace(/\{\{id\}\}/,o);i=1==app.$store.getters.getTypeSelection?null!=r.match(/\_M/)?"M":"F":null!=r.match(/\_L/)?"L":"R",app.$store.dispatch("setQuestionData",{type:app.$store.getters.getTypeSelection,imgName:r,imgUrl:a,correctAnswer:i,userAnswer:null,imageLoad:new Image}),app.$store.getters.userAnswersData[questionIndex].imageLoad.src=a,app.$store.getters.userAnswersData[questionIndex].imageLoad.onload=function(){},questionIndex++,e--}}return[]},window.getAllListQuestions=function(e,t,n){var i=s[e+"_imagesListKey"];app.$http.get(s.csvUrlTemp(i)).then(function(e){imagesData=e.body.feed.entry;getRandomImages(t);"function"==typeof n&&n()},function(e){})},window.imagesData=null},"1/oy":function(e,t){},"4mHW":function(e,t){},Id91:function(e,t){},LN57:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};s.d(n,"loadData",function(){return L});var i=s("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},r,!1,function(e){s("TdB5")},null,null).exports,a=s("/ocq"),u={name:"Instractions",data:function(){return{openOnSafariIOS:"This web application does not support Chrome broswer in IOS. Please open this URL in Safari broswer.",welecomeMsg1:"סקר זיהוי מגדר",welecomeMsg2:"לפי כתב היד",instractionMsg1:"במסגרת לימודי תואר שני במדעי המחשב, אני חוקר את יכולת הזיהוי של מאפיינים דמוגרפיים העולים מכתב יד באמצעות אלגוריתם בינה מלאכותית.‏",instractionMsg2:"לפניכם יוצגו * כתבי יד בעברית ו-% כתבי יד באנגלית.‏",instractionMsg3:"בסקר זה תיבחן היכולת שלכם להכריע האם הקטע נכתב על ידי % או *.‏",instractionMsg4:"‏‏משך הסקר הוא כדקה, אנא מלאו את הסקר בתשומת לב.‏",instractionMsg5:"בתום השאלון תוצג רמת הדיוק שלכם בכל שפה.‏",instractionMsg6:"הסקר הינו אנונימי וישמש לצרכי מחקר.‏",instractionMsg7:".תודה רבה על השתתפותכם",btnMsg:"המשך",isBroswerSupport:!(null!=navigator.userAgent.match("CriOS")&&null!=navigator.userAgent.toLowerCase().match(/iphone|ipad/))}},created:function(){void 0!==this.$route.query.qt?1==this.$route.query.qt?this.$store.dispatch("setSelectionOptions",{left:"זכר",leftMark:"M",right:"נקבה",rightMark:"F",type:this.$route.query.qt}):2==this.$route.query.qt&&this.$store.dispatch("setSelectionOptions",{left:"ימני",leftMark:"L",right:"שמאלי",rightMark:"R",type:this.$route.query.qt}):this.$store.dispatch("setSelectionOptions",{left:"זכר",leftMark:"M",right:"נקבה",rightMark:"F",type:1}),void 0!==this.$route.query.en&&this.$store.dispatch("setNumberEnQuestions",this.$route.query.en),void 0!==this.$route.query.heb&&this.$store.dispatch("setNumberHebQuestions",this.$route.query.heb)}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isBroswerSupport?s("div",[s("h1",[e._v(e._s(e.welecomeMsg1))]),e._v(" "),s("h2",[e._v(e._s(e.welecomeMsg2))]),e._v(" "),s("br"),e._v(" "),s("p",[e._v(e._s(e.instractionMsg1))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg2.replace(/\%/,this.$store.getters.getNumberEnQuestions).replace(/\*/,this.$store.getters.getNumberHebQuestions)))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg3.replace(/\%/,this.$store.getters.getLeftSelection).replace(/\*/,this.$store.getters.getRightSelection)))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg4))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg5))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg6))]),e._v(" "),s("p",[e._v(e._s(e.instractionMsg7))]),e._v(" "),s("br"),e._v(" "),s("router-link",{attrs:{to:"/userdetails"}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button",href:"/userdetails"}},[e._v(e._s(e.btnMsg))])])],1):s("div",[s("h2",[e._v(e._s(e.openOnSafariIOS))])])},staticRenderFns:[]};var l=s("VU/8")(u,c,!1,function(e){s("X4KT")},"data-v-69cb91b6",null).exports,d={name:"Transition Screen",data:function(){return{lang:"*",welecomeMsg1:"Handwriting based gender classification",instractionMsg1:"",welecomeMsg2:"survey",btnMsg:"Start",currentLang:"en"==app.$store.state.questionsModule.questions.currentQuestionLang?"English":"Hebrew"}},created:function(){window.setTimeout(function(){app.$router.push("questions")},1200)}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"langTitle"},[t("h1",[this._v(this._s(this.lang.replace(/\*/,this.currentLang)))])])])},staticRenderFns:[]};var p=s("VU/8")(d,g,!1,function(e){s("4mHW")},"data-v-09058f3a",null).exports,h={name:"User Details",data:function(){return{TitleMsg:"Please fill the following details:",AgeLabel:"Age",AgeRanges:["<18","18-24","25-35","36-49","50-64","65>"],GenderLabel:"Gender",GenderSelection:["Male","Female"],GenderMarks:["Female","Male"],EducationLabel:"Education",EducationSelection:["Other","Dr","Second Degree","First Degree","High School Diploma","High School Student"],EducationMarks:["Other","Dr","Second Degree","First Degree","High School Diploma","High School Student"],btnMsg:"Start Survey"}},methods:{submitDetails:function(){if(3==$(".active").length){var e=$(".active"),t=this.$store.getters.userDetails;t.age=$(e[0]).attr("data-val"),t.gender=$(e[1]).attr("data-val"),t.education=$(e[2]).attr("data-val"),this.$router.push("transitionscreen")}}},created:function(){this.$store.dispatch("setImagesLoadedStatus",!0),getAllListQuestions("en",app.$store.getters.getNumberEnQuestions,function(){getAllListQuestions("heb",app.$store.getters.getNumberHebQuestions)})}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v(e._s(e.TitleMsg))]),e._v(" "),s("p",[e._v(e._s(e.AgeLabel))]),e._v(" "),s("div",{staticClass:"btn-group btn-group-toggle limit-width",attrs:{"data-toggle":"buttons"}},[e._l(e.AgeRanges,function(t){return[s("label",{staticClass:"btn btn-outline-secondary",attrs:{"data-val":t}},[s("input",{attrs:{type:"radio",name:"options",autocomplete:"off"}}),e._v(" "+e._s(t)+"\n        ")])]})],2),e._v(" "),s("p",[e._v(e._s(e.GenderLabel))]),e._v(" "),s("div",{staticClass:"btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},[e._l(e.GenderSelection,function(t,n){return[s("label",{staticClass:"btn btn-outline-secondary",attrs:{"data-val":e.GenderMarks[n]}},[s("input",{attrs:{type:"radio",name:"options",autocomplete:"off"}}),e._v(" "+e._s(t)+"\n        ")])]})],2),e._v(" "),s("p",[e._v(e._s(e.EducationLabel))]),e._v(" "),s("div",{staticClass:"btn-group btn-group-toggle limit-width",attrs:{"data-toggle":"buttons"}},[e._l(e.EducationSelection,function(t,n){return[s("label",{staticClass:"btn btn-outline-secondary",attrs:{"data-val":e.EducationMarks[n]}},[s("input",{attrs:{type:"radio",name:"options",value:"g",autocomplete:"off"}}),e._v(" "+e._s(t)+"\n        ")])]})],2),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.submitDetails}},[e._v(e._s(e.btnMsg))])])},staticRenderFns:[]};var _=s("VU/8")(h,m,!1,function(e){s("dIpO")},"data-v-62e05b72",null).exports,f={data:function(){return{userIndexQuestion:0,btnDisabled:!1,leftMark:this.$store.getters.getLeftMarkSelection,rightMark:this.$store.getters.getRightMarkSelection,leftOption:"Female",rightOption:"Male",totalQuestions:app.$store.state.questionsModule.questions[app.$store.state.questionsModule.questions.currentQuestionLang]}},computed:{totalQuestionsForEnAndHeb:function(){return"en"==app.$store.state.questionsModule.questions.currentQuestionLang?Number(app.$store.state.questionsModule.questions[app.$store.state.questionsModule.questions.currentQuestionLang]):Number(app.$store.state.questionsModule.questions[app.$store.state.questionsModule.questions.currentQuestionLang])+Number(app.$store.state.questionsModule.questions.en)},img:function(){if(this.$store.getters.userAnswersData.length>0&&this.$store.getters.userDataIndex<this.totalQuestionsForEnAndHeb){var e=this.$store.getters.userDataIndex;return"heb"==app.$store.state.questionsModule.questions.currentQuestionLang&&(e=this.$store.getters.userDataIndex),this.$store.getters.userAnswersData[e].imgUrl}return this.totalQuestions<=this.$store.getters.userDataIndex&&("en"==app.$store.state.questionsModule.questions.currentQuestionLang?(this.$store.state.userAnswerIndex=0,app.$store.state.questionsModule.questions.currentQuestionLang="heb",this.$router.push("transitionscreen")):this.$router.push("complete")),null},isActive:function(){return this.$store.getters.isImagesLoaded}},methods:{userAnswer:function(e){this.$store.dispatch("setUserAnswer",e),this.delayAnswer()},delayAnswer:function(){this.btnDisabled=!0,window.setTimeout(function(e){e.btnDisabled=!1},800,this)}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isActive?s("div",{staticClass:"questionsContainer"},[s("img",{staticClass:"questionImg",attrs:{src:e.img,alt:""}}),e._v(" "),s("div",{staticClass:"btnContainer"},[s("button",{staticClass:"btn btn-danger btn-lg",attrs:{type:"button",disabled:e.btnDisabled},on:{click:function(t){e.userAnswer(e.rightMark)}}},[s("b",[e._v(e._s(e.rightOption))])]),e._v(" "),s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button",disabled:e.btnDisabled},on:{click:function(t){e.userAnswer(e.leftMark)}}},[s("b",[e._v(e._s(e.leftOption))])])])]):s("div",[s("p",[e._v("Loading...")])])])},staticRenderFns:[]};var v={components:{appQuestion:s("VU/8")(f,b,!1,function(e){s("P+BD")},"data-v-79412a04",null).exports},data:function(){return{totalQuestions:app.$store.state.questionsModule.questions[app.$store.state.questionsModule.questions.currentQuestionLang]}},computed:{curentUserIndex:function(){return"heb"==app.$store.state.questionsModule.questions.currentQuestionLang?Number(this.$store.getters.userDataIndex)-Number(app.$store.state.questionsModule.questions.en):Number(this.$store.getters.userDataIndex)}},created:function(){window.setTimeout(function(){app.$store.getters.isImagesLoaded||app.$router.push("/")},1500)}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"process"},[this._v(this._s(this.curentUserIndex+1)+" / "+this._s(this.totalQuestions))]),this._v(" "),t("app-question")],1)},staticRenderFns:[]};var S=s("VU/8")(v,w,!1,function(e){s("W8Tg")},"data-v-ae74aa7a",null).exports,A={name:"Instractions",data:function(){return{welecomeMsg:"Thank you for your participation",answerResultsMsg:"Here is your classification rate in this task",answerResultsEnMsg:"% English",answerResultsHebMsg:"% Hebrew",enRes:app.$store.state.questionsModule.questions.currectAnswersOn_en,hebRes:app.$store.state.questionsModule.questions.currectAnswersOn_heb,enQuestions:this.$store.getters.getNumberEnQuestions,hebQuestions:this.$store.getters.getNumberHebQuestions,instractionMsg:"",btnMsg1:"Agree",btnMsg2:"No Thanks",isThereOtherSurvey:!1}},computed:{enLbRes:function(){return"("+this.enRes+"/"+this.enQuestions+") "+(Number(this.enRes)/Number(this.enQuestions)*100).toFixed(2)+"%"},hebLbRes:function(){return"("+this.hebRes+"/"+this.hebQuestions+") "+(Number(this.hebRes)/Number(this.hebQuestions)*100).toFixed(2)+"%"}},created:function(){window.setTimeout(function(){app.$store.getters.isImagesLoaded||app.$router.push("/")},1500)},methods:{startNewSurvey:function(){this.$store.dispatch("initUserDataIndex"),window.questionIndex=0,this.$store.dispatch("setSelectionOptions",{left:"ימני",leftMark:"L",right:"שמאלי",rightMark:"R",type:2}),this.$store.dispatch("initQuestionData"),getAllListQuestions("en",app.$store.getters.getNumberEnQuestions,function(){getAllListQuestions("heb",app.$store.getters.getNumberHebQuestions),app.$router.push("questions")})},closeWindow:function(){window.close()}}},M={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(e._s(e.welecomeMsg))]),e._v(" "),s("p",[e._v(e._s(e.answerResultsMsg))]),e._v(" "),s("p",[e._v(e._s(e.answerResultsEnMsg.replace(/\%/,e.enLbRes)))]),e._v(" "),s("p",[e._v(e._s(e.answerResultsHebMsg.replace(/\%/,e.hebLbRes)))]),e._v(" "),e.isThereOtherSurvey?s("div",[s("p",[e._v(e._s(e.instractionMsg))]),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.startNewSurvey()}}},[e._v(e._s(e.btnMsg1))])]):e._e()])},staticRenderFns:[]};var E=s("VU/8")(A,M,!1,function(e){s("LN57")},"data-v-891f366e",null).exports,D=s("e6fC");i.a.use(D.a),i.a.use(a.a);var I=new a.a({mode:"history",routes:[{path:"/",name:"instractions",component:l},{path:"/userdetails",name:"userdetails",component:_},{path:"/transitionscreen",name:"transitionScreen",component:p},{path:"/questions",name:"questionsManager",component:S},{path:"/complete",name:"complete",component:E}]}),T=s("NYxO"),q=(s("0E2r"),{SET_CURRENT_QUESTION_LANG:function(e,t){e.questions.currentQuestionLang=t},SET_LOADED_IMAGES_STATUS:function(e,t){e.isLoaded=t},SET_USER_ANSWER:function(e,t){if(e.userAnswersData[e.userAnswerIndex].userAnswer=t,t==e.userAnswersData[e.userAnswerIndex].correctAnswer){var s=e.questions.currentQuestionLang;e.questions["currectAnswersOn_"+s]++}window.updateDB(e.userAnswersData[e.userAnswerIndex].type,e.userDetails.userId,e.userDetails.age,e.userDetails.gender,e.userDetails.education,e.userAnswersData[e.userAnswerIndex].userAnswer,e.userAnswersData[e.userAnswerIndex].correctAnswer,e.userAnswersData[e.userAnswerIndex].imgName),e.userAnswerIndex++},SET_QUESTIONS_DATA:function(e,t){e.userAnswersData.push(t)},INIT_QUESTIONS_DATA:function(e){e.userAnswersData=[]},SET_USER_DETAILS:function(e,t){e.userDetails=t},INCREASE_USER_DATA_INDEX:function(e){e.userAnswerIndex++},INIT_USER_DATA_INDEX:function(e){e.userAnswerIndex=0},SET_CURRENT_IMAGE:function(e,t){e.currentImageUrl=t},SET_NUMBER_HEB_QUESTIONS:function(e,t){e.questions.heb=t},SET_NUMBER_EN_QUESTIONS:function(e,t){e.questions.en=t},SET_SELECTION_TYPE:function(e,t){e.questions.selectOptions=t}}),N={state:{imageListNames:imagesData,userAnswersData:[],userAnswerIndex:0,userDetails:{userId:(new Date).getTime(),age:"",gender:"",education:"",timeCreated:new Date},questions:{en:15,heb:15,currectAnswersOn_en:0,currectAnswersOn_heb:0,currentQuestionLang:"en",selectOptions:{left:"",right:""}},isLoaded:!1},mutations:q,actions:{setImagesLoadedStatus:function(e,t){(0,e.commit)("SET_LOADED_IMAGES_STATUS",t)},setUserAnswer:function(e,t){(0,e.commit)("SET_USER_ANSWER",t)},setQuestionData:function(e,t){(0,e.commit)("SET_QUESTIONS_DATA",t)},initQuestionData:function(e){(0,e.commit)("INIT_QUESTIONS_DATA")},setUserDetails:function(e,t){(0,e.commit)("SET_USER_DETAILS",t)},increaseUserDataIndex:function(e){(0,e.commit)("INCREASE_USER_DATA_INDEX")},initUserDataIndex:function(e){(0,e.commit)("INIT_USER_DATA_INDEX")},setCurrentImageUrl:function(e,t){(0,e.commit)("SET_CURRENT_IMAGE",t)},setNumberHebQuestions:function(e,t){(0,e.commit)("SET_NUMBER_HEB_QUESTIONS",t)},setNumberEnQuestions:function(e,t){(0,e.commit)("SET_NUMBER_EN_QUESTIONS",t)},setSelectionOptions:function(e,t){(0,e.commit)("SET_SELECTION_TYPE",t)}},getters:{imagesNameData:function(e){return e.imageListNames},userAnswersData:function(e){return e.userAnswersData},userDetails:function(e){return e.userDetails},userDataIndex:function(e){return e.userAnswerIndex},currentImageUrl:function(e){return e.currentImageUrl},isImagesLoaded:function(e){return e.isLoaded},getNumberHebQuestions:function(e){return e.questions.heb},getNumberEnQuestions:function(e){return e.questions.en},getLeftSelection:function(e){return e.questions.selectOptions.left},getRightSelection:function(e){return e.questions.selectOptions.right},getLeftMarkSelection:function(e){return e.questions.selectOptions.leftMark},getRightMarkSelection:function(e){return e.questions.selectOptions.rightMark},getTypeSelection:function(e){return e.questions.selectOptions.type}}},L=function(e){e.commit};i.a.use(T.a);var Q=new T.a.Store({actions:n,modules:{questionsModule:N}}),y=s("8+8L");i.a.config.productionTip=!1,i.a.use(y.a),window.app=new i.a({el:"#app",router:I,store:Q,components:{App:o},template:"<App/>"});window.updateDB=function(e,t,s,n,i,r,o,a){var u="https://script.google.com/macros/s/AKfycbz48_jYTfxjJzGLx4I_jTV1EU8xmLY8jGpN73e4ttilS9SVceMc/exec?callback=ctrlq&type="+e+"&userId="+t+"&age="+s+"&gender="+n+"&eduction="+i+"&userAnswer="+r+"&correctAnswer="+o+"&imageName="+a+"&action=insert";jQuery.ajax({crossDomain:!0,url:u,method:"GET",dataType:"jsonp"});window.ctrlq=function(e){console.log(e)}}},"P+BD":function(e,t){},TdB5:function(e,t){},W8Tg:function(e,t){},X4KT:function(e,t){},dIpO:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f0365e36ee62e4308723.js.map