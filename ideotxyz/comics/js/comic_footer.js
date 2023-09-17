//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>here's the footer where i'm supposed to put copyright.</p>
        <p>however, i'm dumb and therefore do not know how to set up copyright. let's just pretend that i did set up a copyright. ideot 2023.</p> 
        <p><strong>this part of the website is run on rarebit, go check it out it's pretty cool.</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
    </footer>
`;
