//Quotes to be picked randomly
var quotes = ["\"Show me your scars and I won't walk away...every promise don't work out that way.\"<br> - Sandcastles",
"\"You can taste the dishonesty it’s on your breath as you pass it off so cavalier..\"<br> - Pray You Catch Me",
"\"I don't know when love became elusive.  All I know is no one I know has seen it....My father's arm around my mother's neck. Fruit too ripe to eat.\"<br> - Intuition",
"\"I tried to change. Closed my mouth more. Tried to be softer, prettier, less awake.  Plugged my menses with pages from the Holy Book but still coiled inside me was the need to know: Are you cheating on me?.\"<br> - Anger",
"\"Ashes to ashes, dust to side chicks.\"<br> - Apathy",
"\"Mother dearest, let me inherit the earth.  Teach me how to make him beg.  Let me make up for the years he made you wait.  Did he bend your reflection? .\"<br> - Accountability",
"\"Why do you deny yourself heaven?  Why do you consider yourself undeserving?  Why are you afraid of live?  You think it's not possible for someone like you?.\"<br> - Reformation",
"\"Grandmother, the alchemist.  You spun gold out of this hard life.  Conjured beauty from the things left behind. Found healing where it did not live.\"<br> - Redemption",
"\"My grandma said nothing real can be threatened. True love brought salvation back into me. With every tear came redemption. And my torture became my remedy.\"<br> - Redemption",
"\"If this is what you truly want. I can wear her skin over mine. Her hair over mine, her hands as gloves.\"<br> - Anger",
"\"Her shroud is lonliness, her God was listening. Her heaven would be a love without betrayal.\"<br> - Apathy",
"\"Suck on my balls, pause.\"<br> - Sorry",
"\"She sleeps all day dreams of you in both worlds.\"<br> - Emptiness",
"\"Why can't you see me, Everybody else can.\"<br> - Anger",
"\"Do his eyes close like doors? Are you a slave to the back of his hand?.\"<br> - Accountability",
"\"You, you, you, you and me could stop this Love Drought.\"<br> - Love Drought",
"\"Baptize me. Now that reconciliation is possible. If we're gonna heal let it be glorious.\"<br> - 6 Forgiveness",
"\"It's time to listen, time to fight, Forward.\"<br> - Forward",
"\"The nail technician pushes my cuticle back, turns my hand over. Stretches the skins on my palm and says, I see your daughters and their daughters .\"<br> - Hope",
"\"So we're gonna heal, we're gonna start again.\"<br> - Redemption",
"\"You've brought the orchestra, synchronized swimmers, you're the magician. Pull me back together again the way you cut me in half.\"<br> - 6 Inch",
"\"Make the woman in doubt disappear. Pull the sorrow from between my legs like silk. Knot after knot after knot.\"<br> - Redemption",
"\"Do you remember being born? Are you thankful for the hips that cracked, the deep velvet of your mother.\"<br> - Forgiveness",
"\"My Daddy warned me about men like you he said baby girl he's playing you.\"<br> - Daddy lessons",
"\"Can't you see there is no other men above you what a wicked way to treat the girl who loves you.\"<br> - Hold Up",
"\"Dear moon we blame you for floods, for the flush of blood, for men who are also wolves.\"<br> - Emptiness",
"\"Where do you go when you go quiet? You remind me of my father, a magician. able to exist in two places at once .\"<br> - Intuition",
"\"The past and the future merge to meet us here.\"<br> - Intuition",
"\"She fights and she sweats those sleepless nights but she don’t mind, she loves the grind.\"<br> - 6 Inch",
"\"Who the fuck do you think I am, you ain't married to no average bitch boy.\"<br> - Don't Hurt Yourself"]

//Background colors to be picked on button click
var backgColor = ['rgb(66, 48, 7)',
'rgb(11, 49, 87)',
'rgb(100, 230, 20)',
'rgb(128, 38, 46)',
'rgb(50, 82, 140)',
'rgb(152, 142, 84)',
'rgb(10, 201, 55)',
'rgb(221, 199, 202)',
'rgb(87, 43, 101)',
'rgb(244, 214, 129)',
'rgb(27, 128, 102)'];
//Jquery function to generate quote and change background color on button click
$('#quotebtn').on('click', function () {
  var rand = quotes[Math.floor(Math.random()*quotes.length)];
  var randCol = backgColor[Math.floor(Math.random()*backgColor.length)];
//Change quote and background color
  $('#quote').html(rand);
  $('body').css('background-color', randCol);
   var tweetRand = rand.split('<br>').join('');
  $('#tweetQuote').attr('href','https://twitter.com/intent/tweet?text='+tweetRand).attr('target','_blank');
});
