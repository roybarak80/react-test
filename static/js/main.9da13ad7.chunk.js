(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),l=a.n(r),s=(a(79),a(10)),o=a(11),c=a(14),m=a(12),v=a(13),u=a(19),d=a(20),h=a(69),p=a(33),b="FETCH_MOVIES",E="UPDATE_MOVIE",g="NEW_MOVIE",f={items:[],item:{}},O=Object(d.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(p.a)({},e,{items:t.payload});case E:var a=t.payload;return Object(p.a)({},e,{items:e.items.map(function(e){return e.id===a.id?a:e})});case g:return Object(p.a)({},e,{item:t.payload});default:return e}}}),w=[h.a],j=Object(d.e)(O,{},Object(d.d)(d.a.apply(void 0,w),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var N=a(22),y=a(4),k=a(144),C=a(145),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleShow=a.handleShow.bind(Object(y.a)(Object(y.a)(a))),a.handleClose=a.handleClose.bind(Object(y.a)(Object(y.a)(a))),a.onChange=a.onChange.bind(Object(y.a)(Object(y.a)(a))),a.onClick=a.onClick.bind(Object(y.a)(Object(y.a)(a))),a.handleOverview=a.handleOverview.bind(Object(y.a)(Object(y.a)(a))),a.handleTitle=a.handleTitle.bind(Object(y.a)(Object(y.a)(a))),a.state={show:null,id:"",title:"",overview:""},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"handleClose",value:function(){this.setState({show:null})}},{key:"handleShow",value:function(e){this.setState({show:e})}},{key:"handleOverview",value:function(e){this.setState({overview:e.target.value})}},{key:"handleTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onClick",value:function(e){var t=this.props.currMovie;t.original_title=this.state.title,t.title=this.state.title,t.overview=this.state.overview,this.props.updateMovie(t)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(C.a,{bsStyle:"primary",bsSize:"small",onClick:function(){return e.handleShow(e.props.currMovie.id)}},i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-pencil"}))),i.a.createElement(k.a,{show:this.state.show===this.props.currMovie.id},i.a.createElement(k.a.Header,{onClick:function(){return e.handleClose()},closeButton:!0,closeLabel:"close window"}),i.a.createElement(k.a.Body,null,i.a.createElement("input",{className:"form-control",type:"text",name:"title",onChange:this.handleTitle,value:this.state.title,placeholder:this.props.currMovie.title}),i.a.createElement("textarea",{name:"body",className:"form-control",onChange:this.handleOverview,value:this.state.overview,placeholder:this.props.currMovie.overview})),i.a.createElement(k.a.Footer,null,i.a.createElement("button",{type:"button",onClick:this.onClick,className:"btn btn-primary"},"submit"))))}}]),t}(n.Component),S=Object(u.b)(null,{updateMovie:function(e){return function(t){t({type:E,payload:e})}}})(M),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"roundAvarege",value:function(e){var t=Math.ceil(e);return(t=10-t).toString()}},{key:"render",value:function(){for(var e=[],t=this.roundAvarege(this.props.currAverage),a=0;a<t;a++)e.push(i.a.createElement("span",{className:"ratingStar",key:a},i.a.createElement("i",{className:"fa fa-star"})));return i.a.createElement("div",null,e)}}]),t}(n.Component),A=a(47),D=a.n(A),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleShow=a.handleShow.bind(Object(y.a)(Object(y.a)(a))),a.handleClose=a.handleClose.bind(Object(y.a)(Object(y.a)(a))),a.state={show:null},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"handleClose",value:function(){this.setState({show:null})}},{key:"handleShow",value:function(e){this.setState({show:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(C.a,{className:"btn btn-link read-more-btn",onClick:function(){return e.handleShow(e.props.movieObj.id)}},i.a.createElement("span",null,"Read More")),i.a.createElement(k.a,{show:this.state.show===this.props.movieObj.id},i.a.createElement(k.a.Header,{onClick:function(){return e.handleClose()},closeButton:!0,closeLabel:"close window"}),i.a.createElement(k.a.Body,null,i.a.createElement("div",{className:"movie-overview-modal"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},this.props.movieObj.poster_path?i.a.createElement("img",{alt:"",className:"img-responsive",src:"https://image.tmdb.org/t/p/w500".concat(this.props.movieObj.poster_path)}):i.a.createElement("img",{alt:"",className:"img-responsive",src:"".concat(this.props.movieObj.img)})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("p",{className:"movie-title"},this.props.movieObj.title),i.a.createElement("p",null,this.props.movieObj.overview),i.a.createElement(_,{currAverage:this.props.movieObj.vote_average})))))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"getMovieGenres",value:function(){var e=this.props.moviesGenresIds,t=this.props.genresFromApi;if(t){var a=t;a=a.genres;for(var n=[],i=0;i<e.length;i++)for(var r=e[i],l=0;l<a.length;l++)r===a[l].id&&n.push(a[l].name);return n}}},{key:"render",value:function(){var e=this.getMovieGenres(),t=[];if(e)for(var a=0;a<e.length;a++)a===e.length-1?t.push(i.a.createElement("span",{className:"curr-genre",key:a},e[a]+" ")):t.push(i.a.createElement("span",{className:"curr-genre",key:a},e[a]+", "));return i.a.createElement("div",null,t)}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={genres:[]},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=82e0e5a56b04994581c0700e5d61a2e5").then(function(e){return e.json()}).then(function(t){return e.setState({genres:t})}),this.props.fetchMovies()}},{key:"componentWillReceiveProps",value:function(e){e.newMovie&&this.props.movies.unshift(e.newMovie)}},{key:"formatDate",value:function(e){var t="";if(e)t=D()(e.toString()).format("DD-MM-YYYY");else{var a=new Date;t=D()(a.toString()).format("DD-MM-YYYY")}return t}},{key:"render",value:function(){var e=this,t=this.props.movies.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("div",{className:"movie-card-item"},i.a.createElement("div",{className:"panel panel-primary"},i.a.createElement("div",{className:"panel-heading"},i.a.createElement("div",{className:"moviePosterCard"},t.poster_path?i.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}):i.a.createElement("img",{alt:"",src:"".concat(t.img)})),i.a.createElement("div",{className:"movieInfoCard"},i.a.createElement("div",{className:"movie-info-card-wrapper"},i.a.createElement("div",{className:"movie-release-date"},i.a.createElement("span",{className:"italic-title"},"Released"),i.a.createElement("span",{className:"movie-release-date-date"},e.formatDate(t.release_date))),i.a.createElement("div",{className:"movie-rating"},i.a.createElement("span",{className:"italic-title"},t.vote_count,"\xa0 Fan Ratings"),i.a.createElement(_,{currAverage:t.vote_average})),i.a.createElement("div",{className:"movie-genres"},i.a.createElement("span",{className:"italic-title"},"Movie Genres"),i.a.createElement(T,{moviesGenresIds:t.genre_ids,genresFromApi:e.state.genres}))))),i.a.createElement("div",{className:"panel-body"},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("span",{className:"movie-title"},t.title),i.a.createElement("span",{className:"pull-right edit-movie-btn"},i.a.createElement(S,{currMovie:t}))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"movie-overview"},t.overview),i.a.createElement(I,{movieObj:t})))))))});return i.a.createElement("div",null,t)}}]),t}(n.Component),x=Object(u.b)(function(e){return{genres:e.genres,movies:e.movies.items,newMovie:e.movies.item,editedMovie:e.movies.item}},{fetchMovies:function(){return function(e){fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=82e0e5a56b04994581c0700e5d61a2e5").then(function(e){return e.json()}).then(function(t){return e({type:b,payload:t.results})})}}})(Y),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={title:"",overview:"",img:"",genre_ids:"",isOpenAddNewMovie:!0},a.addNewMovie=a.addNewMovie.bind(Object(y.a)(Object(y.a)(a))),a.onChange=a.onChange.bind(Object(y.a)(Object(y.a)(a))),a.onSubmit=a.onSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"addNewMovie",value:function(){this.state.isOpenAddNewMovie?this.setState({isOpenAddNewMovie:!1}):this.setState({isOpenAddNewMovie:!0})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:j.getState().movies.items.length+1,title:this.state.title,overview:this.state.overview,img:this.state.img,genre_ids:this.state.genre_ids};this.props.addNewMovie(t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"panel panel-success"},i.a.createElement("div",{className:"panel-heading"},i.a.createElement("span",{className:"pull-left"},"Add New Movie"),i.a.createElement("button",{onClick:this.addNewMovie,className:"pull-right btn btn-primary"},"Add New Movie")),!0!==this.state.isOpenAddNewMovie?i.a.createElement("div",{className:"panel-body"},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Title"),i.a.createElement("br",null),i.a.createElement("input",{className:"form-control",type:"text",name:"title",onChange:this.onChange,value:this.state.value})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Image Url"),i.a.createElement("br",null),i.a.createElement("input",{className:"form-control",type:"text",name:"img",onChange:this.onChange,value:this.state.img})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Movie Genres"),i.a.createElement("br",null),i.a.createElement("input",{className:"form-control",type:"text",name:"img",onChange:this.onChange,value:this.state.genre_ids})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Movie Description"),i.a.createElement("br",null),i.a.createElement("textarea",{name:"overview",className:"form-control",onChange:this.onChange,value:this.state.overview})),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",className:"btn btn-primary"},"submit")))):i.a.createElement("div",null)))}}]),t}(n.Component),G=Object(u.b)(null,{addNewMovie:function(e){return function(t){t({type:g,payload:e})}}})(B),R=function(){return i.a.createElement("div",{className:"banner"},i.a.createElement("div",{className:"main_cover"},i.a.createElement("div",{className:"logo"},"MOVIES-DB")))},V=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,{store:j},i.a.createElement("div",{className:"App"},i.a.createElement(R,null),i.a.createElement("div",{className:"container"},i.a.createElement(G,null),i.a.createElement(x,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(143)},79:function(e,t,a){}},[[74,2,1]]]);
//# sourceMappingURL=main.9da13ad7.chunk.js.map