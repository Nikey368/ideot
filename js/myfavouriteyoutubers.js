channelListDiv = document.getElementById("channelList")
channels = [
    [
        channelName = `jay foreman`,
        nationality = [`british`],
        typesOfContent = [`educational`,`edutainment`],
        languages = [`english`],
        subscriberCount = `1460000`,
        lastWritten = `2023/12/08`,
        description = `
        map men is probably one of the more popular series, as well as unifinished london.
        if you want to know more about geography, british politics or, uh, other stuff, then jay foreman
        is cool i guess. oh yeah, his songs are nice too.`,
        link = `https://www.youtube.com/@JayForeman`
    ],
    [
        channelName = `tom scott`,
        nationality = [`british`],
        typesOfContent = [`educational`,"edutainment","linguistics"],
        languages = [`english`],
        subscriberCount = `6210000`,
        lastWritten = `2023/12/08`,
        description = `do i really need to introduce him? just a great guy, and a great channel with some really cool videos. cool.`,
        link = `https://www.youtube.com/@TomScottGo`
    ],
    [
        channelName = `jobaba`,
        nationality = [`unknown`],
        typesOfContent = [`animation`,"memes","comedy"],
        languages = [`english`],
        subscriberCount = `34000`,
        lastWritten = `2023/12/08`,
        description = `these are some of the most smoothest animations i've ever seen, and their character design is great as well (also i love their art style)`,
        link = `https://www.youtube.com/@JoblazeBaba`
    ],
    [
        channelName = `jeaney collects`,
        nationality = [`british`],
        typesOfContent = ["memes","comedy","voice acting"],
        languages = [`english`],
        subscriberCount = `550000`,
        lastWritten = `2023/12/08`,
        description = `the funny british man say the funny things. no, not matt rose, the other one.`,
        link = `https://www.youtube.com/@JeaneyCollects`
    ],
    [
        channelName = `matt rose`,
        nationality = [`british`],
        typesOfContent = ["memes","comedy","reading"],
        languages = [`english`],
        subscriberCount = `781000`,
        lastWritten = `2023/12/08`,
        description = `the funny british man say the funny things. no, not jeaney collects, the other one.`,
        link = `https://www.youtube.com/@Matt_Rose`
    ],
    [
        channelName = `cgp grey`,
        nationality = [`british`,`american`],
        typesOfContent = ["educational","edutainment","political"],
        languages = [`english`],
        subscriberCount = `6040000`,
        lastWritten = `2023/12/08`,
        description = `he makes really cool smart videos`,
        link = `https://www.youtube.com/@CGPGrey`
    ],
    [
        channelName = `jan misali`,
        nationality = [`american`],
        typesOfContent = ["educational","edutainment","linguistics","memes","music","essay"],
        languages = [`english`],
        subscriberCount = `317000`,
        lastWritten = `2023/12/08`,
        description = `pronounced yan misali, they're the one who got me into linguistics. thanks i guess.`,
        link = `https://www.youtube.com/@HBMmaster`
    ],
    [
        channelName = `hbomberguy`,
        nationality = [`american`],
        typesOfContent = ["educational","edutainment","political","essay","critical"],
        languages = [`english`],
        subscriberCount = `1450000`,
        lastWritten = `2023/12/08`,
        description = `he's a really cool guy with some really cool shtuff go look at them`,
        link = `https://www.youtube.com/@hbomberguy`
    ],
    [
        channelName = `brian david gilbert`,
        nationality = [`american`],
        typesOfContent = ["educational","edutainment","essay","music","comedy"],
        languages = [`english`],
        subscriberCount = `1090000`,
        lastWritten = `2023/12/08`,
        description = `look! its the unraveled guy! the guy who ranked pokemon edibility! and went total psychotic over small things! it's him! look! right now!!!`,
        link = `https://www.youtube.com/@briandavidgilbert`
    ],
    [
        channelName = `therealsullyG`,
        nationality = [`american`],
        typesOfContent = ["music","comedy","memes","animation"],
        languages = [`english`],
        subscriberCount = `2360000`,
        lastWritten = `2023/12/08`,
        description = `do you love otamatones? then you probably already heard of this guy! don't know what an otamatone is? go watch his content, you'll be more confused!`,
        link = `https://www.youtube.com/@TheRealSullyG`
    ],
    [
        channelName = `하범HABUM`,
        nationality = [`south korean`],
        typesOfContent = ["animation"],
        languages = [`korean`],
        subscriberCount = `64800`,
        lastWritten = `2023/12/08`,
        description = `okay... this one may be a bit more... gayer... than the others...`,
        link = `https://www.youtube.com/@habum1130`
    ],
    [
        channelName = `channelcaststation`,
        nationality = [`japanese`],
        typesOfContent = ["animation"],
        languages = [`japanese`],
        subscriberCount = `401000`,
        lastWritten = `2023/12/08`,
        description = `its the person who made that one miku playlist video!!! it's them!!!`,
        link = `https://www.youtube.com/@channelcaststation`
    ],
    [
        channelName = `cudlil`,
        nationality = [`unknown`],
        typesOfContent = ["animation"],
        languages = [`english`],
        subscriberCount = `635000`,
        lastWritten = `2023/12/08`,
        description = `i absolutely abdore her animations, it's amazing.`,
        link = `https://www.youtube.com/@cudlil`
    ],
    [
        channelName = `maggie sea`,
        nationality = [`south korean`],
        typesOfContent = ["animation",`music`,`memes`,`comedy`,`cats!!!!!!!!!`],
        languages = [`english`,`korean`],
        subscriberCount = `121000`,
        lastWritten = `2023/12/08`,
        description = `i mean, have you see their character designs? their portal designs, their tf2 designs... i love it.`,
        link = `https://www.youtube.com/@maggiesea`
    ],
    [
        channelName = `emerson brophy`,
        nationality = [`australian`],
        typesOfContent = ["political",`music`],
        languages = [`english`],
        subscriberCount = `222000`,
        lastWritten = `2023/12/08`,
        description = `his songs are great. also nice to see a fellow australian.`,
        link = `https://www.youtube.com/channel/UCqksHV6MVMSu4T2BMFk3nmQ`
    ],
    [
        channelName = `louie zong`,
        nationality = [`american`],
        typesOfContent = ["animation",`music`,`comedy`],
        languages = [`english`],
        subscriberCount = `1000000`,
        lastWritten = `2023/12/08`,
        description = `you HAVE heard his songs, right? you know why he is amazing, right?`,
        link = `https://www.youtube.com/channel/UCdkkQvJoB0kGgYHCYwSkdww`
    ],
    [
        channelName = `halfasleepchris`,
        nationality = [`british`],
        typesOfContent = ["animation",`music`,`cats!!!!!!!!!`,`edutainment`,`educational`],
        languages = [`english`],
        subscriberCount = `2840000`,
        lastWritten = `2023/12/08`,
        description = `I LOVE CATS I LOVE CATS I LOVE CATS I LOVE CATS (and this man is great)`,
        link = `https://www.youtube.com/@HalfAsleepChris`
    ],
    [
        channelName = `i did a thing`,
        nationality = [`australian`],
        typesOfContent = ["political",`edutainment`,`educational`],
        languages = [`english`],
        subscriberCount = `4930000`,
        lastWritten = `2023/12/08`,
        description = `i mean, who doesn't love insane australians doing insane things?`,
        link = `https://www.youtube.com/@Ididathing`
    ],
    [
        channelName = `boy boy`,
        nationality = [`australian`],
        typesOfContent = ["political",`edutainment`,`educational`,`essay`,`comedy`],
        languages = [`english`],
        subscriberCount = `798000`,
        lastWritten = `2023/12/08`,
        description = `places a lot of introspectives into society, while also being very satirical and sarcastic. i love it.`,
        link = `https://www.youtube.com/@Boy_Boy`
    ],
    [
        channelName = `ryan george`,
        nationality = [`canadian`],
        typesOfContent = ["political",`comedy`,`commentary`],
        languages = [`english`,`french`],
        subscriberCount = `1670000`,
        lastWritten = `2023/12/11`,
        description = `way too good at making basic human concepts needlessly complicated and makes you question life. fun!`,
        link = `https://www.youtube.com/@RyanGeorge`
    ],
    [
        channelName = `carykh`,
        nationality = [`american`],
        typesOfContent = ["animation",`edutainment`,`educational`,`coding`],
        languages = [`english`],
        subscriberCount = `594000`,
        lastWritten = `2023/12/11`,
        description = `makes some really cool AI-y stuff (pre 2020), and has a lot of other videos on other subjects too that are fun. similar to jan Misali in a way`,
        link = `https://www.youtube.com/@carykh`
    ],
    [
        channelName = `niko and kotaro and toro`,
        nationality = [`japanese`],
        typesOfContent = ["cats!!!!!!!!!",`memes`],
        languages = [`japanese`],
        subscriberCount = `5530`,
        lastWritten = `2023/12/11`,
        description = `this is where the wawa cat came from!!! i love wawa cat! i love cat!!!!!!!`,
        link = `https://www.youtube.com/@nikoandkotaroandtoro5473`
    ],
    [
        channelName = `drew gooden`,
        nationality = [`american`],
        typesOfContent = ["commentary",`comedy`,`critical`],
        languages = [`english`],
        subscriberCount = `4100000`,
        lastWritten = `2023/12/11`,
        description = `ngl, he is actally my favourite commentary youtuber out of all of them, probably because me and him both like dry humour. his videos is able to consistently make me laugh, which is not easy to do`,
        link = `https://www.youtube.com/@drewisgooden`
    ]
]

const abbrNum = (number, decPlaces) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces)
  
    // Enumerate number abbreviations
    var abbrev = ['K', 'M', 'B', 'T']
  
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3)
  
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces
  
        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1
          i++
        }
  
        // Add the letter for the abbreviation
        number += abbrev[i]
  
        // absolutely STOLEN from https://www.skillthrive.com/snippets/abbreviate-number-javascript
        break
      }
    }
  
    return number
  }

function getFilter(filter){
    filterGroup = document.querySelectorAll("div."+filter+" > input")
    checkFor = []
    for (thisElement of filterGroup){
        if (thisElement.checked) {
            labelGroup = document.querySelector("div."+filter+" > label[for="+thisElement.id+"]")
            checkFor.push(labelGroup.innerHTML)
        }
    }
    console.log(checkFor)
    return checkFor
}

function newYoutuber(channelName,nationality,typesOfContent,languages,subscriberCount,lastWritten,description,link){
    template = 
    `
        <div>
            <h2><a target="_blank" href="${link}">${channelName}</a></h2>
            <h4>${nationality} ${typesOfContent} channel</h4>
            <h5>makes videos in ${languages}</h>
            <h5>${subscriberCount} subscribers (as of ${lastWritten})</h5>
            <p>
                ${description}
            </p>
        </div>
    `
    channelListDiv.innerHTML += template
}

function reload(){

    channelListDiv.innerHTML = ""

    wantedTypes = getFilter("genres")
    wantedNationalities = getFilter("nationalities")
    wantedLanguages = getFilter("languages")

    mostToLeast = document.getElementById("mostSubscribedToLeast").checked ? 1 : -1;

    channels.sort(function(a, b){
        firstNumber = Number(a[4])
        secondNumber = Number(b[4])
        return (secondNumber - firstNumber) * mostToLeast
    });

    for (channel of channels){
        nats = ""
        compatible = false
        for (nat in channel[1]) {
            nats += channel[1][nat]
            if (wantedNationalities.includes(channel[1][nat])) {compatible = true}
            if (nat < channel[1].length - 1){
                nats += "/"
            }
        }
        if (!compatible) {continue}
        types = ""
        compatible = false
        for (type in channel[2]) {
            types += channel[2][type]
            if (wantedTypes.includes(channel[2][type])) {compatible = true}
            if (type < channel[2].length - 1){
                types += "/"
            }
        }
        if (!compatible) {continue}
        langs = ""
        compatible = false
        for (lang in channel[3]) {
            langs += channel[3][lang]
            if (wantedLanguages.includes(channel[3][lang])) {compatible = true}
            if (lang == channel[3].length - 2 && channel[3].length > 1) {
                langs += " and "
            } else if (lang < channel[3].length - 1){
                langs += ", "
            } 
        }
        if (!compatible) {continue}
        newYoutuber(channel[0],nats,types,langs,abbrNum(Number(channel[4]),2),channel[5],channel[6],channel[7])
    }

}