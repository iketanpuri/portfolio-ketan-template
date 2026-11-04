const projects=[
{id:'coderxhub',name:'CoderXHub',type:'Developer community',category:'web',icon:'⌘',x:135,y:195,color:'#74628c',tags:['Templates','Community','Web'],description:'A small community for developers to post and download reusable website templates. A place to share useful starting points and discover what others are building.'},
{id:'hewrites',name:'HeWrites.blog',type:'Storytelling blog',category:'writing',icon:'✎',x:425,y:125,color:'#7e6591',tags:['Storytelling','Writing','Blog'],description:'A blog for storytelling, personal writing, reflections, and ideas. A space where stories and experiences have room to unfold.'},
{id:'clarifake',name:'Clarifake',type:'AI media analysis',category:'ai',icon:'◈',x:755,y:175,color:'#697994',tags:['AI media','Web matching','Confidence scores'],description:'An AI-media analysis website for photos, videos, and audio. It examines signals such as pixel intensity in visual media, checks web matches and source context, and presents a confidence score to help people assess the content.'},
{id:'explore-cgc',name:'Explore CGC',type:'Open-world campus game',category:'games',icon:'△',x:1050,y:140,color:'#658982',tags:['Open world','Campus','Exploration'],description:'An open-world exploration game set around CGC University. Players can freely roam the campus, discover their surroundings, and take part in activities.'},
{id:'portfolio',name:'Portfolio',type:'Interactive portfolio',category:'web',icon:'✦',x:255,y:390,color:'#877296',tags:['HTML','CSS','JavaScript'],description:'My personal corner of the internet, built as a retro campus adventure. It brings together my projects, skills, milestones, and ways to connect in an explorable world.'},
{id:'hackathon',name:'Hackathon Project',type:'AI innovation',category:'ai',icon:'⚡',x:540,y:345,color:'#9b799c',tags:['AI','Innovation','Hackathon'],description:'A hackathon project focused on AI innovation, exploring ideas through practical building and experimentation.'},
{id:'quizn',name:'QuizN',type:'Short quiz application',category:'web',icon:'?',x:840,y:415,color:'#8c7d99',tags:['Quizzes','Learning','Web app'],description:'A small quiz application designed for taking short quizzes. A simple way to try a few questions and check your knowledge.'},
{id:'bhagwa',name:'bhagwayehind.in.net',type:'Ancient India & history',category:'writing',icon:'▥',x:1090,y:370,color:'#a18d91',tags:['History','Ancient India','Blog'],description:'A blog and website exploring ancient India and its history, built around sharing historical stories and perspectives.'}
];
const shapes=document.querySelector('#mountain-shapes'),buttons=document.querySelector('#peak-buttons'),index=document.querySelector('#project-index');
projects.forEach((p,i)=>{
const base=680,half=i<4?240:220,h=base-p.y;
const x=p.x,y=p.y;
const silhouette=`M${x-half} ${base} L${x-half*.77} ${y+h*.76} L${x-half*.65} ${y+h*.71} L${x-half*.51} ${y+h*.49} L${x-half*.41} ${y+h*.46} L${x-half*.27} ${y+h*.24} L${x-half*.18} ${y+h*.25} L${x-half*.06} ${y+h*.07} L${x} ${y} L${x+half*.11} ${y+h*.12} L${x+half*.18} ${y+h*.1} L${x+half*.34} ${y+h*.33} L${x+half*.42} ${y+h*.31} L${x+half*.61} ${y+h*.61} L${x+half*.69} ${y+h*.58} L${x+half} ${base}Z`;
shapes.insertAdjacentHTML('beforeend',`<g class="mountain" data-mountain="${p.id}"><defs><clipPath id="clip-${p.id}"><path d="${silhouette}"/></clipPath><linearGradient id="rock-${p.id}" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="#d5c5d2"/><stop offset=".28" stop-color="${p.color}"/><stop offset="1" stop-color="#3c354b"/></linearGradient></defs><g clip-path="url(#clip-${p.id})"><path d="${silhouette}" fill="url(#rock-${p.id})"/><path d="M${x} ${y}l${half*.08} ${h*.25} -${half*.05} ${h*.12} ${half*.2} ${h*.25} -${half*.03} ${h*.1} ${half*.22} ${h*.28}H${x+half}Z" fill="#242235" opacity=".48"/><path d="M${x} ${y}l-${half*.13} ${h*.3} -${half*.2} ${h*.12} -${half*.08} ${h*.22} -${half*.38} ${h*.36}H${x-half}Z" fill="#e9dbe7" opacity=".1"/><path d="M${x-70} ${y+110}L${x-25} ${y+38}L${x} ${y}L${x+34} ${y+39}L${x+80} ${y+117}L${x+41} ${y+87}L${x+29} ${y+104}L${x+7} ${y+59}L${x-8} ${y+86}L${x-20} ${y+70}L${x-44} ${y+103}L${x-43} ${y+78}Z" fill="#e8e4ee" opacity=".88"/><path d="M${x+3} ${y+16}l15 43 12 22 25 18 -28-45Z" fill="#a8a5c2" opacity=".6"/>${Array.from({length:7},(_,j)=>{const dx=(j-3)*half*.17;return `<path d="M${x+dx*.3} ${y+100+Math.abs(j-3)*18}l${dx*.4-8} ${h*.18} ${dx*.35+14} ${h*.19} ${dx*.45-9} ${h*.23}" fill="none" stroke="${j%2?'#1f1c30':'#f4dfec'}" stroke-width="${j%2?3:1.5}" opacity=".18"/>`}).join('')}<rect x="${x-half}" y="${y}" width="${half*2}" height="${h}" filter="url(#rock-texture)" opacity=".16" style="mix-blend-mode:soft-light"/><rect x="${x-half}" y="${y+h*.5}" width="${half*2}" height="${h*.5}" fill="url(#valley-haze)"/></g></g>`);
const b=document.createElement('button');b.className='peak';b.dataset.id=p.id;b.dataset.category=p.category;b.style.left=p.x/12+'%';b.style.top=p.y/7.3+'%';b.setAttribute('aria-label',`Explore ${p.name}`);b.setAttribute('aria-pressed','false');b.innerHTML=`<span class="flag" aria-hidden="true">⚑</span><span class="peak-label"><small>${String(i+1).padStart(2,'0')}</small>${p.name}</span>`;b.onclick=()=>select(p.id);buttons.append(b);
const item=document.createElement('button');item.className='index-item';item.dataset.id=p.id;item.dataset.category=p.category;item.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span>${p.name}`;item.setAttribute('aria-pressed','false');item.onclick=()=>select(p.id);index.append(item);
});
let climberPosition=null,hopAnimation=null;
function hopTo(p){
 const target={left:(p.x-29)/12,top:(p.y-5)/7.3};
 const climber=document.querySelector('#climber');
 if(hopAnimation)hopAnimation.cancel();
 if(climberPosition&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const from=climberPosition;
 const apex=Math.max(1,Math.min(from.top,target.top)-14);
 hopAnimation=climber.animate([{left:from.left+'%',top:from.top+'%',rotate:'-8deg'},{left:(from.left+target.left)/2+'%',top:apex+'%',rotate:'8deg',offset:.48},{left:target.left+'%',top:target.top+'%',rotate:'0deg',offset:.9},{left:target.left+'%',top:target.top+'%',rotate:'0deg'}],{duration:850,easing:'cubic-bezier(.3,.05,.35,1)'});
 }
 climber.style.left=target.left+'%';climber.style.top=target.top+'%';climberPosition=target;
 const scroll=document.querySelector('.map-scroll');
 if(scroll.scrollWidth>scroll.clientWidth)scroll.scrollTo({left:p.x/1200*scroll.scrollWidth-scroll.clientWidth/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
let selected=projects[0].id,filter='all';
function visible(){return projects.filter(p=>filter==='all'||p.category===filter)}
function select(id){const p=projects.find(p=>p.id===id);if(!p)return;hopTo(p);selected=id;document.querySelectorAll('[data-id]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===id)));document.querySelector('#project-details').innerHTML=`<div class="project-icon" aria-hidden="true">${p.icon}</div><p class="project-type">${p.type}</p><h3>${p.name}</h3><p class="description">${p.description}</p><div class="detail-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p class="field-note">✦ Part of my growing collection of experiments, stories, and things I’ve built.</p>`;const list=visible();document.querySelector('#detail-position').textContent=`${String(list.findIndex(v=>v.id===id)+1).padStart(2,'0')} / ${String(list.length).padStart(2,'0')}`;const url=new URL(location.href);url.hash=p.id;history.replaceState(null,'',url);}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));document.querySelectorAll('.peak').forEach(t=>t.classList.toggle('filtered',filter!=='all'&&t.dataset.category!==filter));document.querySelectorAll('.index-item').forEach(t=>t.hidden=filter!=='all'&&t.dataset.category!==filter);projects.forEach(p=>document.querySelector(`[data-mountain="${p.id}"]`).classList.toggle('dimmed',filter!=='all'&&p.category!==filter));document.querySelector('#map-count').textContent=String(visible().length).padStart(2,'0')+' SUMMITS';if(!visible().some(p=>p.id===selected))select(visible()[0].id);else select(selected)});
function step(offset){const list=visible(),i=list.findIndex(p=>p.id===selected);select(list[(i+offset+list.length)%list.length].id)}
document.querySelector('#previous').onclick=()=>step(-1);document.querySelector('#next').onclick=()=>step(1);select(projects.some(p=>p.id===location.hash.slice(1))?location.hash.slice(1):projects[0].id);

// Space hops to the next project without scrolling the document.
document.addEventListener('keydown',event=>{
 if(event.code!=='Space'||event.altKey||event.ctrlKey||event.metaKey)return;
 if(event.target.closest('input,textarea,select,[contenteditable="true"],a'))return;
 event.preventDefault();
 if(event.repeat||hopAnimation?.playState==='running')return;
 step(1);
});
