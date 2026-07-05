const fs=require('fs'),p=require('path'),h=require('http');
const m={'html':'text/html','js':'application/javascript','css':'text/css','png':'image/png','jpg':'image/jpeg','mp4':'video/mp4','webm':'video/webm'};
h.createServer((req,res)=>{let f=p.join('outputs',req.url==='/'?'celeste.html':req.url);try{let c=fs.readFileSync(f);let ext=p.extname(f).slice(1);res.writeHead(200,{'Content-Type':m[ext]||'text/plain'});res.end(c)}catch(e){res.writeHead(404);res.end('Not Found')}}).listen(5555,()=>console.log('Server ready at :5555'))
