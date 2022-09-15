import{_ as r,o as s,a as c,e,t as a,m,r as u,c as w,g as p,h as f}from"./index.12b3a04b.js";const h={props:["newsData"]},C={class:"flex flex-col items-center"},g=["src"],v={class:"flex my-8 w-full justify-between"},$={class:"text-xl font-bold"},x={class:"text-md font-bold"};function y(t,l,n,i,o,d){return s(),c("div",null,[e("div",C,[e("img",{src:n.newsData.poster,class:"md:w-5/6 md:h-[32rem] w-full h-96 lg:object-fill object-cover rounded-md",alt:"news poster"},null,8,g),e("div",v,[e("h1",$,a(n.newsData.title),1),e("h1",x,a(n.newsData.createdAt),1)])]),e("div",null,[e("p",null,a(n.newsData.content),1)])])}var D=r(h,[["render",y]]);const N={components:{NewsContentComponent:D},computed:m("isLoadingModule",["getLoadingStatus"]),data(){return{newsContent:null}},async mounted(){try{const t=(await this.$API.mainServices.getNewsContent(this.$route.params.newsId)).data;t.createdAt=new Date(t.createdAt).toLocaleString(),this.newsContent=t}catch(t){this.$store.commit("alertInfoModule/updateError",t)}}},k={key:0},b={key:1,class:"flex justify-center m-5"},S=e("img",{src:f,class:"animate-spin",alt:"spinner"},null,-1),j=[S];function A(t,l,n,i,o,d){const _=u("NewsContentComponent");return t.getLoadingStatus?(s(),c("div",b,j)):(s(),c("div",k,[o.newsContent?(s(),w(_,{key:0,"news-data":o.newsContent},null,8,["news-data"])):p("",!0)]))}var L=r(N,[["render",A]]);export{L as default};
