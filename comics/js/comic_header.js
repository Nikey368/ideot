//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
	<header align="center">
		<a href="index.html"><img src="./img/logo.png" alt="" /></a>
        <nav>
            <div id="nav">
                <a href="../index.html" style="float:left">main website</a> |
                <a href="home.html">home</a> |
                <a href="archive.html">archive (comic list)</a> |
                <a href="about.html">about</a> |
                <!--<a href="characters.html">cast</a>-->
            </div>
        </nav>
    </header>
`;