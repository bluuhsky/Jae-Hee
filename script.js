const CONFIG={
 avatar:"https://pin.it/23y5clO1A",
 banner:"https://pin.it/1nu4X0cKS",
 artists:[
  {name:"Ariana Grande",image:"https://pin.it/6BwhnBoqN",songs:["Honeymoon Avenue","we can't be friends","bloodlines","everyday","goodnight n go","right there","The Way","thank u, next","Almost Is Never Enough","Love Me Harder","Tattooed Heart"]},
  {name:"Camila Cabello",image:"https://pin.it/5JWrc0Dwq",songs:["Havana","Never Be the Same","Bad Things","Beautiful","Baby Pink","Crying in the Club","Find U Again","SeÃ±orita"]},
  {name:"YOASOBI",image:"https://pin.it/6bIAnKcIl",songs:["Gunjou","Idol","Tabun","Yoru ni Kakeru","Ano Yume wo Nazotte","Yasashii Suisei"]}
 ],
 anime:[
  ["Black Clover","Magic, friendship, rivalry, and a determined boy who refuses to give up on his dream of becoming Wizard King."],
  ["Mairimashita! Iruma-kun","A kind human boy is sent to the demon world and begins a surprisingly wholesome new life at demon school."],
  ["That Time I Got Reincarnated as a Slime","After an unexpected reincarnation, Rimuru builds a new life, gathers friends, and grows into a powerful leader."],
  ["SPY x FAMILY","A secret agent creates a fake family for a mission, unaware that every member has a secret of their own."],
  ["Katekyo Hitman Reborn!","An ordinary student is thrown into the strange world of the mafia and trains with a tiny but powerful tutor."],
  ["Jujutsu Kaisen","A student enters the dangerous world of cursed spirits and jujutsu sorcery after a supernatural encounter."],
  ["Demon Slayer","A young swordsman joins the Demon Slayer Corps while searching for a way to restore his sister."],
  ["Haikyuu!!","A short but energetic volleyball player works toward becoming a formidable player and finding his place on the court."],
  ["Ascendance of a Bookworm","A book-loving girl is reborn in a world where books are scarce and decides to create them herself."]
 ],
 games:[["Mobile Legends","âš”ï¸"],["Honor of Kings","ðŸ‘‘"],["Genshin Impact","âœ¨"],["Wordscapes","ðŸ”¤"]],
 socials:[
  ["Instagram","â—Ž","@jayy_zorr","https://www.instagram.com/jayy_zorr"],
  ["Discord","â—‰","846391844052533268","https://discord.com/users/846391844052533268"],
  ["Spotify","â™«","Spotify profile","https://open.spotify.com/user/lmrqau5u2fcn2fhn2zuyj4i0d"],
  ["X","ð•","@bluuhhsky","https://x.com/bluuhhsky"],
  ["Crunchyroll","â—ˆ","Jae Hee","#"],
  ["YouTube","â–¶","Jae Hee","#"]
 ]
};

document.getElementById("avatar").src=CONFIG.avatar;
document.querySelector(".banner").style.backgroundImage=`url("${CONFIG.banner}")`;

const particles=document.getElementById("particles");
for(let i=0;i<35;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.bottom=(-10-Math.random()*30)+"px";p.style.animationDelay=Math.random()*7+"s";p.style.animationDuration=(5+Math.random()*7)+"s";particles.appendChild(p)}

const artists=document.getElementById("artists"), songs=document.getElementById("artistSongs");
CONFIG.artists.forEach((a,i)=>{
 const card=document.createElement("button");card.className="artist";card.innerHTML=`<img src="${a.image}" alt="${a.name}"><strong>${a.name}</strong>`;
 card.onclick=()=>{document.querySelectorAll(".artist").forEach(x=>x.classList.remove("selected"));card.classList.add("selected");songs.classList.remove("empty");songs.innerHTML=`<h3>${a.name} â™¡</h3><div class="song-list">${a.songs.map((s,n)=>`<div class="song">${String(n+1).padStart(2,"0")}ã€€${s}</div>`).join("")}</div>`};
 artists.appendChild(card);
});

const animeGrid=document.getElementById("animeGrid"), animeInfo=document.getElementById("animeInfo");
CONFIG.anime.forEach(([name,plot],i)=>{
 const fig=document.createElement("figure");fig.className="polaroid";fig.style.setProperty("--r",(i%2?2:-2)+"deg");
 // Placeholder cover is generated from title so the layout works even without external artwork.
 fig.innerHTML=`<div class="anime-cover">${name.split(" ").map(x=>x[0]).slice(0,3).join("")}</div><figcaption>${name}</figcaption>`;
 fig.onclick=()=>{document.querySelectorAll(".polaroid").forEach(x=>x.classList.remove("selected"));fig.classList.add("selected");animeInfo.classList.remove("empty");animeInfo.innerHTML=`<strong>âœ¦ ${name}</strong><p>${plot}</p>`};
 animeGrid.appendChild(fig);
});
document.querySelectorAll(".anime-cover").forEach(x=>Object.assign(x.style,{aspectRatio:"4/3",display:"grid",placeItems:"center",font:"700 35px Comfortaa",background:"linear-gradient(135deg,#b9e9ff,#315c92)",color:"#05203a"}));

const games=document.getElementById("games");CONFIG.games.forEach(([n,ic])=>{games.innerHTML+=`<div class="game"><span class="icon">${ic}</span>${n}</div>`});
const socials=document.getElementById("socials");
CONFIG.socials.forEach(([n,ic,u,l])=>{
 const b=document.createElement("button");b.className="social";b.innerHTML=`<span class="icon">${ic}</span><span>${n}</span>`;
 b.onclick=()=>{
  const old=document.querySelector(".social-info"); if(old) old.remove();
  document.querySelectorAll(".social").forEach(x=>x.classList.remove("open"));b.classList.add("open");
  const info=document.createElement("div");info.className="social-info";info.innerHTML=`<strong>${n}</strong> Â· ${u} ${l!=="#" ? `Â· <a href="${l}" target="_blank" rel="noopener">open â†—</a>`:""}`;
  socials.appendChild(info);
 };socials.appendChild(b);
});

let playing=false;document.getElementById("playBtn").onclick=()=>{playing=!playing;document.getElementById("playBtn").textContent=playing?"â…¡":"â–¶"};

const intro=document.getElementById("intro"),welcome=document.getElementById("welcomeText"),sub=document.getElementById("introSub"),enter=document.getElementById("enterBtn");
const lines=["Voice of the World detectedâ€¦","Raphael-style system online.","A new little world has been created.","Welcome, Jae Hee â™¡"];
let n=0;function typeLine(){welcome.textContent=lines[n];n++;if(n<lines.length)setTimeout(typeLine,1500);else{setTimeout(()=>{sub.textContent="The blue universe is ready for you.";enter.classList.remove("hidden")},900)}}setTimeout(typeLine,900);
enter.onclick=()=>{intro.classList.add("fade");document.getElementById("site").classList.remove("hidden");setTimeout(()=>intro.remove(),900)};
