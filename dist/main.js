(()=>{"use strict";const e=(e,t,n,d)=>{function r(){return[e,t,n,d]}return{toJSON:function(){return r()},getTitle:()=>e,getDesc:()=>t,getDate:()=>n,getPriority:()=>d,getInfo:r}},t=e=>{const t=[],n=()=>e;return{toJSON:()=>[n(),t],addTask:e=>{t.push(e)},getTasks:()=>t,getTitle:n,removeTask:e=>{t.splice(e,1)}}},n=(e,t)=>{const n=()=>""===e?"":new Date(e).toDateString(),d=()=>""===t?"":i(t),r=()=>[n(),d()],i=e=>{const t=e.split(":");let n="AM",d=Number(t[0]);return d>12&&(d-=12,n="PM"),d+":"+t[1]+" "+n};return{toJSON:()=>r(),getDate:n,getTime:d,conv24to12HourClock:i,getInfoInList:r}},d=()=>{const e=[];let t=null;const n=()=>e;return{toJSON:()=>n(),removeProject:t=>{e.splice(t,1)},getList:n,getProject:n=>(t=n,e[n]),addProject:t=>{e.push(t)},getCurrentProject:()=>e[t],getCurrentProjectIndex:()=>t}},r=document.getElementById("content");let i=d();const a={saveDirector:e=>{localStorage.setItem("todolist",JSON.stringify(e))},getDirector:()=>{let r=JSON.parse(localStorage.getItem("todolist")),i=d();return r.forEach((d=>{let r=t(d[0]);d[1].forEach((t=>{let d=(t=>{let d=t[2],r=n(d[0],d[1]);return e(t[0],t[1],r,t[3])})(t);r.addTask(d)})),i.addProject(r)})),i},addProject:e=>{},addTask:(e,t)=>{},deleteTask:(e,t)=>{},deleteProject:e=>{}},l=()=>{document.getElementById("project-list").innerHTML="",a.saveDirector(i);let e=i.getList();for(let t=0;t<e.length;t++){let n=e[t];c(n.getTitle(),t)}},c=(e,t)=>{const n=document.getElementById("project-list"),d=document.createElement("li");d.classList.add("project"),d.setAttribute("data",t);const r=document.createElement("img"),a=document.createElement("p");a.innerText=e,r.src="./images/inboxIcon.png",d.appendChild(r),d.appendChild(a);const c=document.createElement("p");c.innerText="x",c.classList.add("project-delete"),c.addEventListener("click",(e=>{i.removeProject(t),l()})),d.appendChild(c),d.addEventListener("click",(e=>{o(d.getAttribute("data"))})),n.appendChild(d)},o=e=>{a.saveDirector(i);let t=i.getProject(e).getTasks(),n=document.getElementById("work-list");n.innerHTML="";for(let e=0;e<t.length;e++){let d=s(t[e],e);n.appendChild(d)}let d=E(),r=m();d.addEventListener("click",(e=>{n.lastElementChild!==r&&n.appendChild(r)})),n.appendChild(d)},s=(e,t)=>{let n=document.createElement("li");n.classList.add("task");let d=document.createElement("button");d.classList.add("check-button"),d.addEventListener("click",(e=>{u(t)}));let r=document.createElement("div");r.classList.add("task-header");let i=document.createElement("p"),a=document.createElement("p");i.innerText=e.getTitle(),a.innerText=e.getDate().getDate()+" "+e.getDate().getTime(),r.appendChild(i),r.appendChild(a);let l=document.createElement("div");l.innerText=e.getDesc(),l.classList.add("description-area");const c=()=>{n.lastElementChild===l?n.removeChild(l):n.appendChild(l)};return r.addEventListener("click",(e=>c())),l.addEventListener("click",(e=>c())),n.appendChild(d),n.appendChild(r),n},u=e=>{i.getCurrentProject().removeTask(e),o(i.getCurrentProjectIndex())},m=()=>{let e=document.createElement("form");e.id="task-form";let t=document.createElement("label");t.innerText="Task:",t.setAttribute("for","task");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","task"),n.id="task-input",n.required=!0;let d=document.createElement("label");d.innerText="Description:",d.setAttribute("for","task-desc");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","task-desc"),r.id="task-desc";let a=document.createElement("label");a.innerText="Due Date:",a.setAttribute("for","task-due-date");let l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","task-due-date"),l.id="task-due-date";let c=document.createElement("input");c.setAttribute("type","time"),c.setAttribute("name","task-due-time"),c.id="task-due-time";let s=document.createElement("label");s.innerText="Priority:",s.setAttribute("for","priority");let u=document.createElement("select");u.setAttribute("name","priority"),u.id="task-priority";let m=document.createElement("option");m.setAttribute("value","1"),m.innerText="1";let E=document.createElement("option");E.setAttribute("value","2"),E.innerText="2";let h=document.createElement("option");h.setAttribute("value","3"),h.innerText="3",u.appendChild(m),u.appendChild(E),u.appendChild(h);let g=document.createElement("button");return g.id="task-submit",g.innerText="Submit",g.addEventListener("click",(e=>{if(""===n.value)return;e.preventDefault();let t=p(n,r,l,c,u);i.getCurrentProject().addTask(t),o(i.getCurrentProjectIndex())})),e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(r),e.appendChild(a),e.appendChild(l),e.appendChild(c),e.appendChild(s),e.appendChild(u),e.appendChild(g),e},p=(t,d,r,i,a)=>e(t.value,d.value,n(r.value,i.value),a.value),E=()=>{let e=document.createElement("div");return e.classList.add("add-task"),e.innerText="+ Add New Task",e};(()=>{const e=document.createElement("div");e.setAttribute("id","header");const n=document.createElement("p");n.innerText="Todo List";const d=document.createElement("img");d.setAttribute("id","header-icon"),d.src="./images/checkmarkimage.svg",e.appendChild(d),e.appendChild(n);const c=document.createElement("div");c.setAttribute("id","navigation");let o=document.createElement("ul");o.setAttribute("id","project-list");let s=(()=>{let e=document.createElement("div");return e.classList.add("add-project"),e.innerText="+ Create Project",e})(),u=(()=>{let e=document.createElement("form");e.id="project-form";let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","project"),n.id="project-input",n.required=!0;let d=document.createElement("button");return d.id="project-submit",d.innerText="Submit",d.addEventListener("click",(e=>{if(""===n.value)return;e.preventDefault();let d=t(n.value);i.addProject(d);let r=document.getElementById("navigation");r.removeChild(r.lastElementChild),l()})),e.appendChild(n),e.appendChild(d),e})();s.addEventListener("click",(e=>{c.lastElementChild!==u&&c.appendChild(u)})),c.appendChild(o),c.appendChild(s);const m=document.createElement("div");m.setAttribute("id","work-area");let p=document.createElement("ul");p.setAttribute("id","work-list"),m.appendChild(p),r.appendChild(e),r.appendChild(c),r.appendChild(m),i=a.getDirector(),l()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RDNUUsRUFBSU4sV0FBV29CLEdBQ2YsSUFBSXFFLEVBQWFyRixTQUFTQyxlQUFlLGNBQ3pDb0YsRUFBV3hCLFlBQVl3QixFQUFXaEMsa0JBQ2xDM0IsR0FBYyxJQUdoQm9DLEVBQUtyQixZQUFZZ0QsR0FDakIzQixFQUFLckIsWUFBWW9DLEdBQ1ZmLENBQUksRUF6RVU0QixHQUVyQkosRUFBaUIzQyxpQkFBaUIsU0FBVTVCLElBQ3RDc0UsRUFBV2hDLG1CQUFxQm1DLEdBRTdCSCxFQUFXNUMsWUFBWStDLEVBQWUsSUFFL0NILEVBQVc1QyxZQUFZbkQsR0FDdkIrRixFQUFXNUMsWUFBWTZDLEdBRXZCLE1BQU1LLEVBQVczRixTQUFTaUMsY0FBYyxPQUN4QzBELEVBQVN2RCxhQUFhLEtBQU0sYUFDNUIsSUFBSXdELEVBQVc1RixTQUFTaUMsY0FBYyxNQUN0QzJELEVBQVN4RCxhQUFhLEtBQU0sYUFDNUJ1RCxFQUFTbEQsWUFBWW1ELEdBRXJCN0YsRUFBUTBDLFlBQVl5QyxHQUNwQm5GLEVBQVEwQyxZQUFZNEMsR0FDcEJ0RixFQUFRMEMsWUFBWWtELEdBS3BCekYsRUFBTUMsRUFBUU0sY0FDZGlCLEdBTGMsRUV4Q2hCbUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXJlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICByZXR1cm4gW3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHldO1xuICB9XG4gIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gZ2V0SW5mbygpO1xuICB9XG4gIHJldHVybiB7IHRvSlNPTiwgZ2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5LCBnZXRJbmZvIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvZG9saXN0ID0gW107XG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdG9kb2xpc3Q7XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb2xpc3QucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtnZXRUaXRsZSgpLCB0b2RvbGlzdF07XG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICByZXR1cm4geyB0b0pTT04sIGFkZFRhc2ssIGdldFRhc2tzLCBnZXRUaXRsZSwgcmVtb3ZlVGFzayB9O1xufTtcblxuY29uc3QgZGF0ZUhlbHBlciA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBsZXQgZm9ybWF0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcmV0dXJuIGZvcm1hdC50b0RhdGVTdHJpbmcoKTtcbiAgfTtcblxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIGlmICh0aW1lID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnYyNHRvMTJIb3VyQ2xvY2sodGltZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5mb0luTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gW2dldERhdGUoKSwgZ2V0VGltZSgpXTtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldEluZm9Jbkxpc3QoKTtcbiAgfTtcblxuICBjb25zdCBjb252MjR0bzEySG91ckNsb2NrID0gKHRpbWUpID0+IHtcbiAgICBjb25zdCB0aW1lQXJyYXkgPSB0aW1lLnNwbGl0KFwiOlwiKTtcbiAgICBsZXQgbWVyaWRpZW1QZXJpb2QgPSBcIkFNXCI7XG4gICAgbGV0IGhvdXJzID0gTnVtYmVyKHRpbWVBcnJheVswXSk7XG4gICAgbGV0IG1pbnV0ZXMgPSB0aW1lQXJyYXlbMV07XG4gICAgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIGhvdXJzIC09IDEyO1xuICAgICAgbWVyaWRpZW1QZXJpb2QgPSBcIlBNXCI7XG4gICAgfVxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiIFwiICsgbWVyaWRpZW1QZXJpb2Q7XG4gIH07XG5cbiAgcmV0dXJuIHsgdG9KU09OLCBnZXREYXRlLCBnZXRUaW1lLCBjb252MjR0bzEySG91ckNsb2NrLCBnZXRJbmZvSW5MaXN0IH07XG59O1xuXG5leHBvcnQgeyB0b2RvSXRlbSwgcHJvamVjdCwgZGF0ZUhlbHBlciB9O1xuIiwiY29uc3QgZGlyZWN0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gbnVsbDtcblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XTtcbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3RJbmRleCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKG51bSkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBudW07XG4gICAgcmV0dXJuIHByb2plY3RMaXN0W251bV07XG4gIH07XG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0TGlzdCgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRvSlNPTixcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldExpc3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG4gIH07XG59O1xuXG5leHBvcnQgeyBkaXJlY3RvciB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdCwgdG9kb0l0ZW0sIGRhdGVIZWxwZXIgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBkaXJlY3RvciB9IGZyb20gXCIuL2RpcmVjdG9yXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xubGV0IGRpciA9IGRpcmVjdG9yKCk7XG5jb25zdCBzdG9yYWdlID0gU3RvcmFnZSgpO1xuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9oZWFkZXIgZWxlbWVudFxuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIlRvZG8gTGlzdFwiO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1pY29uXCIpO1xuICBpY29uLnNyYyA9IFwiLi9pbWFnZXMvY2hlY2ttYXJraW1hZ2Uuc3ZnXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZpZ2F0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2aWdhdGlvblwiKTtcbiAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbGlzdFwiKTtcblxuICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RCdXR0b24oKTtcbiAgbGV0IGFkZFByb2plY3RGb3JtID0gY3JlYXRlUHJvamVjdEZvcm0oKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChuYXZpZ2F0aW9uLmxhc3RFbGVtZW50Q2hpbGQgPT09IGFkZFByb2plY3RGb3JtKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgY29uc3Qgd29ya0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3b3JrQXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmstYXJlYVwiKTtcbiAgbGV0IHdvcmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB3b3JrTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmstbGlzdFwiKTtcbiAgd29ya0FyZWEuYXBwZW5kQ2hpbGQod29ya0xpc3QpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3b3JrQXJlYSk7XG4gIGluaXRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgaW5pdFByb2plY3RzID0gKCkgPT4ge1xuICBkaXIgPSBzdG9yYWdlLmdldERpcmVjdG9yKCk7XG4gIGxvYWRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBzdG9yYWdlLnNhdmVEaXJlY3RvcihkaXIpO1xuICBsZXQgbGlzdCA9IGRpci5nZXRMaXN0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBlID0gbGlzdFtpXTtcbiAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChlLmdldFRpdGxlKCksIGkpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiKyBDcmVhdGUgUHJvamVjdFwiO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uaWQgPSBcInByb2plY3QtZm9ybVwiO1xuXG4gIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQuaWQgPSBcInByb2plY3QtaW5wdXRcIjtcbiAgcHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLmlkID0gXCJwcm9qZWN0LXN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgZGlyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIik7XG4gICAgbmF2aWdhdGlvbi5yZW1vdmVDaGlsZChuYXZpZ2F0aW9uLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0RWxlbWVudCA9ICh0aXRsZSwgbnVtKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBudW0pO1xuICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHRpdGxlO1xuICBwcm9qZWN0SWNvbi5zcmMgPSBcIi4vaW1hZ2VzL2luYm94SWNvbi5wbmdcIjsgLy9UT0RPOiBjaGFuZ2UgdG8gZHluYW1pY1xuICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REZWxldGUuaW5uZXJUZXh0ID0gXCJ4XCI7XG4gIHByb2plY3REZWxldGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlXCIpO1xuICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRpci5yZW1vdmVQcm9qZWN0KG51bSk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gIH0pO1xuICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcbiAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgb3BlblByb2plY3QocHJvamVjdEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSk7XG4gIH0pO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG59O1xuXG5jb25zdCBvcGVuUHJvamVjdCA9IChudW0pID0+IHtcbiAgc3RvcmFnZS5zYXZlRGlyZWN0b3IoZGlyKTtcbiAgbGV0IGN1clByb2plY3QgPSBkaXIuZ2V0UHJvamVjdChudW0pO1xuXG4gIGxldCB0YXNrTGlzdCA9IGN1clByb2plY3QuZ2V0VGFza3MoKTtcbiAgbGV0IHRhc2tBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLWxpc3RcIik7XG4gIHRhc2tBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2tMaXN0W2ldLCBpKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgfVxuXG4gIGxldCBjcmVhdGVCdXR0b24gPSBjcmVhdGVUYXNrQnV0dG9uKCk7XG4gIGxldCBhZGRUYXNrRm9ybSA9IGNyZWF0ZVRhc2tGb3JtKCk7XG5cbiAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICh0YXNrQXJlYS5sYXN0RWxlbWVudENoaWxkID09PSBhZGRUYXNrRm9ybSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gIH0pO1xuICB0YXNrQXJlYS5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSAodGFza09iamVjdCwgaW5kZXgpID0+IHtcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgbGV0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoZWNrLWJ1dHRvblwiKTtcblxuICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW1vdmVUYXNrKGluZGV4KTtcbiAgfSk7XG5cbiAgbGV0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcblxuICBsZXQgdGFza0hlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRhc2tIZWFkZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tIZWFkZXJUZXh0LmlubmVyVGV4dCA9IHRhc2tPYmplY3QuZ2V0VGl0bGUoKTtcbiAgdGFza0hlYWRlckRhdGUuaW5uZXJUZXh0ID1cbiAgICB0YXNrT2JqZWN0LmdldERhdGUoKS5nZXREYXRlKCkgKyBcIiBcIiArIHRhc2tPYmplY3QuZ2V0RGF0ZSgpLmdldFRpbWUoKTtcblxuICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tIZWFkZXJUZXh0KTtcbiAgdGFza0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyRGF0ZSk7XG5cbiAgbGV0IGRlc2NyaXB0aW9uQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uQXJlYS5pbm5lclRleHQgPSB0YXNrT2JqZWN0LmdldERlc2MoKTtcbiAgZGVzY3JpcHRpb25BcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1hcmVhXCIpO1xuXG4gIGNvbnN0IHJlbW92ZURlc2MgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2subGFzdEVsZW1lbnRDaGlsZCA9PT0gZGVzY3JpcHRpb25BcmVhKSB7XG4gICAgICB0YXNrLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uQXJlYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25BcmVhKTtcbiAgICB9XG4gIH07XG5cbiAgdGFza0hlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHJlbW92ZURlc2MoKSk7XG4gIGRlc2NyaXB0aW9uQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHJlbW92ZURlc2MoKSk7XG5cbiAgdGFzay5hcHBlbmRDaGlsZChjaGVja0J1dHRvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gIGRpci5nZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZVRhc2soaW5kZXgpO1xuICBvcGVuUHJvamVjdChkaXIuZ2V0Q3VycmVudFByb2plY3RJbmRleCgpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKCkgPT4ge1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmlkID0gXCJ0YXNrLWZvcm1cIjtcblxuICBsZXQgdGFza2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0YXNrbGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrOlwiO1xuICB0YXNrbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza1wiKTtcblxuICBsZXQgdGFza2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNraW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRhc2tpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza1wiKTtcbiAgdGFza2lucHV0LmlkID0gXCJ0YXNrLWlucHV0XCI7XG4gIHRhc2tpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgbGV0IGRlc2NsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY2xhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGRlc2NsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG5cbiAgbGV0IGRlc2NpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY2lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGVzY1wiKTtcbiAgZGVzY2lucHV0LmlkID0gXCJ0YXNrLWRlc2NcIjtcblxuICBsZXQgZGF0ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlbGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZGF0ZWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZHVlLWRhdGVcIik7XG5cbiAgbGV0IGRhdGVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZWlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZHVlLWRhdGVcIik7XG4gIGRhdGVpbnB1dC5pZCA9IFwidGFzay1kdWUtZGF0ZVwiO1xuXG4gIGxldCB0aW1laW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpbWVpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGltZVwiKTtcbiAgdGltZWlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWR1ZS10aW1lXCIpO1xuICB0aW1laW5wdXQuaWQgPSBcInRhc2stZHVlLXRpbWVcIjtcblxuICBsZXQgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlsYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5OlwiO1xuICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuXG4gIGxldCBwcmlvcml0eWlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5aW5wdXQuaWQgPSBcInRhc2stcHJpb3JpdHlcIjtcblxuICBsZXQgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIxXCIpO1xuICBvcHRpb24xLmlubmVyVGV4dCA9IFwiMVwiO1xuICBsZXQgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIyXCIpO1xuICBvcHRpb24yLmlubmVyVGV4dCA9IFwiMlwiO1xuICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIzXCIpO1xuICBvcHRpb24zLmlubmVyVGV4dCA9IFwiM1wiO1xuXG4gIHByaW9yaXR5aW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gIHByaW9yaXR5aW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gIHByaW9yaXR5aW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5pZCA9IFwidGFzay1zdWJtaXRcIjtcbiAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAodGFza2lucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhcbiAgICAgIHRhc2tpbnB1dCxcbiAgICAgIGRlc2NpbnB1dCxcbiAgICAgIGRhdGVpbnB1dCxcbiAgICAgIHRpbWVpbnB1dCxcbiAgICAgIHByaW9yaXR5aW5wdXRcbiAgICApO1xuICAgIGRpci5nZXRDdXJyZW50UHJvamVjdCgpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgb3BlblByb2plY3QoZGlyLmdldEN1cnJlbnRQcm9qZWN0SW5kZXgoKSk7XG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza2xhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNraW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NsYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY2lucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlbGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVpbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGltZWlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eWxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eWlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoXG4gIHRhc2tpbnB1dCxcbiAgZGVzY2lucHV0LFxuICBkYXRlaW5wdXQsXG4gIHRpbWVpbnB1dCxcbiAgcHJpb3JpdHlpbnB1dFxuKSA9PiB7XG4gIGxldCB0YXNrID0gdG9kb0l0ZW0oXG4gICAgdGFza2lucHV0LnZhbHVlLFxuICAgIGRlc2NpbnB1dC52YWx1ZSxcbiAgICBkYXRlSGVscGVyKGRhdGVpbnB1dC52YWx1ZSwgdGltZWlucHV0LnZhbHVlKSxcbiAgICBwcmlvcml0eWlucHV0LnZhbHVlXG4gICk7XG4gIHJldHVybiB0YXNrO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIisgQWRkIE5ldyBUYXNrXCI7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0RWxlbWVudCwgaW5pdCB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdCwgdG9kb0l0ZW0sIGRhdGVIZWxwZXIgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBkaXJlY3RvciB9IGZyb20gXCIuL2RpcmVjdG9yXCI7XG5cbmNvbnN0IFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmVEaXJlY3RvciA9IChkaXIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9saXN0XCIsIEpTT04uc3RyaW5naWZ5KGRpcikpO1xuICB9O1xuXG4gIGNvbnN0IGdldERpcmVjdG9yID0gKCkgPT4ge1xuICAgIGxldCBwYXJzZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9saXN0XCIpKTtcbiAgICBsZXQgcmVzdWx0RGlyZWN0b3IgPSBkaXJlY3RvcigpO1xuICAgIHBhcnNlZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGVbMF0pO1xuICAgICAgbGV0IHRhc2tMaXN0ID0gZVsxXTtcbiAgICAgIHRhc2tMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB0YXNrQ29tcGlsZXIoZSk7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0RGlyZWN0b3IuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0RGlyZWN0b3I7XG4gIH07XG5cbiAgY29uc3QgdGFza0NvbXBpbGVyID0gKHRhc2tBcnJheSkgPT4ge1xuICAgIGxldCBkYXRlQXJyYXkgPSB0YXNrQXJyYXlbMl07XG4gICAgbGV0IGRhdGVPYmplY3QgPSBkYXRlSGVscGVyKGRhdGVBcnJheVswXSwgZGF0ZUFycmF5WzFdKTtcbiAgICBsZXQgdGFza09iamVjdCA9IHRvZG9JdGVtKFxuICAgICAgdGFza0FycmF5WzBdLFxuICAgICAgdGFza0FycmF5WzFdLFxuICAgICAgZGF0ZU9iamVjdCxcbiAgICAgIHRhc2tBcnJheVszXVxuICAgICk7XG4gICAgcmV0dXJuIHRhc2tPYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7fTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7fTtcbiAgY29uc3QgYWRkVGFzayA9IChQcm9qZWN0LCBuZXdUYXNrKSA9PiB7fTtcbiAgY29uc3QgZGVsZXRlVGFzayA9IChQcm9qZWN0LCB0YXNrKSA9PiB7fTtcblxuICByZXR1cm4ge1xuICAgIHNhdmVEaXJlY3RvcixcbiAgICBnZXREaXJlY3RvcixcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IHsgU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgdG9kb0l0ZW0sIHByb2plY3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgaW5pdCB9IGZyb20gXCIuL1VJXCI7XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6WyJ0b2RvSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJnZXRJbmZvIiwidG9KU09OIiwiZ2V0VGl0bGUiLCJnZXREZXNjIiwiZ2V0RGF0ZSIsImdldFByaW9yaXR5IiwicHJvamVjdCIsInRvZG9saXN0IiwiYWRkVGFzayIsInRvZG8iLCJwdXNoIiwiZ2V0VGFza3MiLCJyZW1vdmVUYXNrIiwiaW5kZXgiLCJzcGxpY2UiLCJkYXRlSGVscGVyIiwiZGF0ZSIsInRpbWUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwiZ2V0VGltZSIsImNvbnYyNHRvMTJIb3VyQ2xvY2siLCJnZXRJbmZvSW5MaXN0IiwidGltZUFycmF5Iiwic3BsaXQiLCJtZXJpZGllbVBlcmlvZCIsImhvdXJzIiwiTnVtYmVyIiwiZGlyZWN0b3IiLCJwcm9qZWN0TGlzdCIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJnZXRMaXN0IiwicmVtb3ZlUHJvamVjdCIsImdldFByb2plY3QiLCJudW0iLCJhZGRQcm9qZWN0IiwiZ2V0Q3VycmVudFByb2plY3QiLCJnZXRDdXJyZW50UHJvamVjdEluZGV4IiwiY29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXIiLCJzdG9yYWdlIiwic2F2ZURpcmVjdG9yIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXREaXJlY3RvciIsInBhcnNlZExpc3QiLCJwYXJzZSIsImdldEl0ZW0iLCJyZXN1bHREaXJlY3RvciIsImZvckVhY2giLCJlIiwibmV3UHJvamVjdCIsIm5ld1Rhc2siLCJ0YXNrQXJyYXkiLCJkYXRlQXJyYXkiLCJkYXRlT2JqZWN0IiwidGFza0NvbXBpbGVyIiwiUHJvamVjdCIsImRlbGV0ZVRhc2siLCJ0YXNrIiwiZGVsZXRlUHJvamVjdCIsImxvYWRQcm9qZWN0cyIsImlubmVySFRNTCIsImxpc3QiLCJpIiwibGVuZ3RoIiwiY3JlYXRlUHJvamVjdEVsZW1lbnQiLCJwcm9qZWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJwcm9qZWN0SWNvbiIsInByb2plY3ROYW1lIiwiaW5uZXJUZXh0Iiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0RGVsZXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5Qcm9qZWN0IiwiZ2V0QXR0cmlidXRlIiwidGFza0xpc3QiLCJ0YXNrQXJlYSIsImNyZWF0ZVRhc2tFbGVtZW50IiwiY3JlYXRlQnV0dG9uIiwiY3JlYXRlVGFza0J1dHRvbiIsImFkZFRhc2tGb3JtIiwiY3JlYXRlVGFza0Zvcm0iLCJsYXN0RWxlbWVudENoaWxkIiwidGFza09iamVjdCIsImNoZWNrQnV0dG9uIiwidGFza0hlYWRlciIsInRhc2tIZWFkZXJUZXh0IiwidGFza0hlYWRlckRhdGUiLCJkZXNjcmlwdGlvbkFyZWEiLCJyZW1vdmVEZXNjIiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWQiLCJ0YXNrbGFiZWwiLCJ0YXNraW5wdXQiLCJyZXF1aXJlZCIsImRlc2NsYWJlbCIsImRlc2NpbnB1dCIsImRhdGVsYWJlbCIsImRhdGVpbnB1dCIsInRpbWVpbnB1dCIsInByaW9yaXR5bGFiZWwiLCJwcmlvcml0eWlucHV0Iiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIiwic3VibWl0QnV0dG9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVRhc2siLCJidXR0b24iLCJoZWFkZXIiLCJoZWFkZXJUZXh0IiwiaWNvbiIsIm5hdmlnYXRpb24iLCJhZGRQcm9qZWN0QnV0dG9uIiwiY3JlYXRlUHJvamVjdEJ1dHRvbiIsImFkZFByb2plY3RGb3JtIiwicHJvamVjdElucHV0IiwiY3JlYXRlUHJvamVjdEZvcm0iLCJ3b3JrQXJlYSIsIndvcmtMaXN0IiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=