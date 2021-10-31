var poster,posterImg,logo,gameState,bg,bgm,profile,part2;

function preload() {
    logo = loadImage("logo.png");
    posterImg = loadImage("poster.jpg");
    bg = loadImage("bg.jpg");
    bgm = loadSound("bgm.mp3");
}

function setup() {
    createCanvas(1500,1000);
    poster = createSprite(990,350,10,10);
    poster.addImage(posterImg);
    poster.scale = 0.47;
    poster.visible = false;
    gameState = 1;
    profile = createInput("https://community.whitehatjr.com/project/9ac76715-f93d-4255-a5c0-96b549f4fa1d");
    profile.position(1060,775);
    part2 = createInput("https://community.whitehatjr.com/project/5a738cb9-da87-4125-8798-7c50ec22f837");
    part2.position(30,640);
}

function draw() {
    if(gameState === 2) {
        profile.show();
    }
    else {
        profile.hide();
    }

    if(gameState === 1) {
        background(bg);
        fill("white");
        textFont("forte");
        textSize(50);
        textAlign(CENTER);
        text("Click anywhere",1190,320);
        text("to continue",1190,370);

        if(mouseWentDown("leftButton")) {
            gameState = 2;
            bgm.play();
        }
    }
    
    if(gameState === 2) {
        background("black");
        image(logo,-280,5);
        poster.visible = true;

        fill("white");
        textAlign(LEFT);
        textStyle(BOLD);
        textSize(20);
        textFont("georgia");
        text("[PART II]",185,240);
        fill("lightBlue");
        textStyle(NORMAL);
        textFont("cursive");
        text("Releasing on 31st October, 2021 at 7:30 pm",30,280);
        fill("red");
        text("Story By:",20,330);
        text("Developed By:",20,360);
        text("Soundtracks taken from:",20,400);
        textSize(18);
        text("Play Batman: The Joker Rises:",1050,760);
        text("Play Batman: The Joker's Secret:",20,625);
        fill("white");
        textFont("segoe print");
        textSize(17);
        text("Saaransh Saxena",120,328);
        text("Saaransh Saxena",160,358);
        textSize(16);
        text("Zack Snyder's Justice League (2021)",20,430);
        text("The Dark Knight (2008)",20,460);
        fill("lightGreen");
        text("(The story of this game is inspired from various",20,500);
        text("movies, games and comic books related to Batman",20,530);
        text("and its characters created by DC Comics)",20,560);
        text("(Copy & Paste this link on your browser to play",1050,815);
        text('the first part of the Batman Game Series,',1050,840);
        text('"Batman: The Joker Rises")',1050,865);
        text("(Copy & Paste this link on your browser to play",20,675);
        text("Batman: The Joker's Secret)",20,695);

        fill(rgb(69,2,152));
        textFont("forte");
        textSize(35);
        text("Extras:",660,720);
        fill("red");
        textFont("cursive");
        textSize(20);
        text("My Top 3 Recommended Batman Movies:",20,760);
        text("My Top 3 Recommended DC Movies:",20,890);
        text("My Top 3 Recommended Superhero Movies:",500,760);
        fill("white");
        textSize(16);
        textFont("segoe print");
        text("1. The Dark Knight",20,790);
        text("2. The Dark Knight Rises",20,820);
        text("3. Batman V Superman: Dawn Of Justice",20,850);
        text("1. Zack Snyder's Justice League",20,920);
        text("2. The Dark Knight",20,950);
        text("3. Man Of Steel",20,980);
        text("1. Zack Snyder's Justice League",500,790);
        text("2. Avengers: Infinity War",500,820);
        text("3. The Dark Knight",500,850);
    }

    drawSprites();
}