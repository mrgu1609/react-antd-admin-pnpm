import{r as e,j as s,a as r,H as t,K as i}from"./index-929010a3.js";import{P as a,X as o}from"./websiteSetting-4b7d47a9.js";import{u as n}from"./useExcel-655b5d7a.js";import{T as l}from"./Table-778a863b.js";import{U as c}from"./index-db538e96.js";import{C as d}from"./CloudUploadOutlined-e6429ebf.js";import"./iconUtil-33ddadde.js";import"./objectDestructuringEmpty-47c1eead.js";import"./index-e4dac1ba.js";import"./index-92447f04.js";import"./DeleteOutlined-a1729e5b.js";const x=x=>{const{Dragger:m}=c,[p,u]=e.useState([]),[j,f]=e.useState([]),{readDataFromExcel:g}=n();return s.jsx(a,{plugin:o,children:s.jsx(r,{bordered:!1,children:s.jsxs(t,{direction:"vertical",size:16,style:{width:"100%"},children:[s.jsxs(m,{accept:".xlsx, .xls, .csv",showUploadList:!1,maxCount:1,onChange:function(e){const{file:s}=e,r=s.originFileObj;if(!r)return;if(!/\.(xlsx|xls|csv)$/.test(r.name))return void i.warning("Excel文件只支持.xlsx, .xls, .csv格式!");r.size/1024/1024<1?function(e){const s=new FileReader;s.onload=e=>{const s=e.target&&e.target.result,{header:r,results:t}=g(s,"array"),i=r.map((e=>({title:e,dataIndex:e,align:"center"})));f(i),u(t)},s.readAsArrayBuffer(e),s.onerror=()=>{i.error("Excel文件读取出错!")}}(r):i.warning("上传的Excel文件大小不能超过1M!")},children:[s.jsx("p",{className:"ant-upload-drag-icon",style:{marginBottom:0},children:s.jsx(d,{rev:void 0})}),s.jsxs("p",{children:["将Excel文件拖到此处, 或",s.jsx("span",{style:{color:"#1890ff"},children:"点击上传"})]})]}),s.jsx(l,{dataSource:p,columns:j,pagination:!1})]})})})};export{x as default};