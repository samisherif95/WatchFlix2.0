# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
VideoGenre.destroy_all
Genre.destroy_all


comedy = Genre.create!({genre: 'Comedy'})
action = Genre.create!({genre: 'Action'})
animation = Genre.create!({genre: 'Animation'})
drama = Genre.create!({genre: 'Drama'})
romance = Genre.create!({genre: 'Romance'})


inception =  Video.create!({title: 'Inception', description:'trippy subconscious movie', year: 2014 ,video_type:'Movie' ,rating:'7/10'})
test = open('/Users/samisherif/Desktop/test.mp4')
# debugger
inception.video_url.attach(io: test, filename: 'test.mp4', content_type: 'video')
inception.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/inception.jpg'), filename: 'inception.jpg')

alaadin =  Video.create!({title: 'Alaadin', description:'begger tries to get princess to fall for him with the help of a genie ', year: 1998 ,video_type:'Movie' ,rating:'9/10'})
alaadin.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/alaadin.jpg'), filename: 'alaadin.jpg')

superman = Video.create!({title: 'Superman: The Red Son', description:'A version of the superman stroy but superman being being part of the soviet union', year: 2019 ,video_type:'Movie' ,rating:'7/10'})
superman.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/superman.jpg'), filename: 'superman.jpg')

thesimpsons =  Video.create!({title: 'The Simpsons', description:'the life of the idiot homer and his family', year: 1989 ,video_type:'TvShow' ,rating:'7/10'})
thesimpsons.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/simprosn.jpg'), filename: 'simprosn.jpg')

got =  Video.create!({title: 'Game Of thrones', description:'a story of fire and ice drangons and alot of other awesome shit', year: 2011 ,video_type:'TvShow' ,rating:'7/10'})
got.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/got.jpg'), filename: 'got.jpg')

naruto = Video.create!({title: 'Naruto', description:' It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village.', year: 2002 ,video_type:'TvShow' ,rating:'9/10'})
naruto.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/narutp.jpg'), filename: 'naruto.jpg')

titanic =  Video.create!({title: 'Titanic', description:'Story of the titanic with a romance twist', year: 1999 ,video_type:'Movie' ,rating:'9/10'})
titanic.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/titanic.jpg'), filename: 'titanic.jpg')

friends = Video.create!({title: 'Friends', description:'6 friends go about their lives in NewYork', year: 1999 ,video_type:'TvShow' ,rating:'10/10'})
friends.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/friends.jpg'), filename: 'friends.jpg')

theOffice = Video.create!({title: 'The Office', description:'This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original.', year: 2005 ,video_type:'TvShow' ,rating:'8.8/10'})
theOffice.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/theoffice.jpg'), filename: 'theoffice.jpg')

starTrek = Video.create!({title: 'Star Trek: Deep Space Nine', description:'This time, Commander Benjamin Sisko is in charge of a diverse crew. But unlike other Star Trek series, theres no USS Enterprise to help them.', year: 1993 ,video_type:'TvShow' ,rating:'7.9/10'})
starTrek.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/startrek.jpg'), filename: 'startrek.jpg')

siliconValley = Video.create!({title: 'Silicon Valley', description:'this comedy series follows the misadventures of introverted computer programmer Richard and his brainy friends as they attempt to strike it rich in a high-tech gold rush. ', year: 2014 ,video_type:'TvShow' ,rating:'8.1/10'})
siliconValley.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/siliconvalley.jpg'), filename: 'siliconvalley.jpg')

bbt = Video.create!({title: 'The Big Bang Theory', description:'Comedy series that revolves around a group of scientists and their hot neighbor', year: 2007 ,video_type:'TvShow' ,rating:'8.5/10'})
bbt.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/bbt.jpg'), filename: 'bbt.jpg')

pearlHarbor = Video.create!({title: 'Pearl Harbor', description:'The story of the Attack on Pearl Harbor and how America retailated with dramatic twist', year: 2001 ,video_type:'Movie' ,rating:'6.2/10'})
pearlHarbor.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/pearlHarbor.jpg'), filename: 'pearlHarbor.jpg')

avengers =  Video.create!({title: 'Avengers', description:'Group of heroes come together to protect the earth', year: 2012 ,video_type:'Movie' ,rating:'8.4/10'})
avengers.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/avengers.jpg'), filename: 'avengers.jpg')

starwars =  Video.create!({title: 'Star Wars: The Rise of Skywalker', description:'the final movie of the new Star Wars trilogy', year: 2019 ,video_type:'Movie' ,rating:'6.3/10'})
starwars.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/starwars.jpg'), filename: 'starwars.jpg')

badBoys =  Video.create!({title: 'Bad Boys For Life', description:'mike and marcus are back to save the day', year: 2020 ,video_type:'Movie' ,rating:'6.3/10'})
badBoys.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/badBoys.jpg'), filename: 'badBoys.jpg')

breakingBad = Video.create!({title: 'Breaking Bad', description:'dying man creates perfect meth and creates drug empire', year: 2008 ,video_type:'TvShow' ,rating:'6.3/10'})
breakingBad.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/breakingbad.jpg'), filename: 'breakingbad.jpg')

johnwick = Video.create!({title: 'John Wick', description:'Assassin Fucks up alot of people', year: 2015 ,video_type:'Movie' ,rating:'7.5/10'})
johnwick.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/johnwick.jpg'), filename: 'johnwick.jpg')

blackpanther = Video.create!({title: 'Black Panther', description:'Black Panther superhero protects his country from threats', year: 2018 ,video_type:'Movie' ,rating:'7.3/10'})
blackpanther.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/blackpanther.jpg'), filename: 'blackpanther.jpg')

daredevil = Video.create!({title: 'Dare Devil', description:'Blind superhero goes against king pin', year: 2015 ,video_type:'TvShow' ,rating:'8.6/10'})
daredevil.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/daredevil.jpg'), filename: 'daredevil.jpg')

arrow = Video.create!({title: 'Arrow', description:'arrow slinging superhero', year: 2012 ,video_type:'TvShow' ,rating:'7.6/10'})
arrow.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/arrow.jpg'), filename: 'arrow.jpg')

lionKing = Video.create!({title: 'The Lion King', description:'simba comes back to pride rock to take his place as king', year: 1998 ,video_type:'Movie' ,rating:'7/10'})
lionKing.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/lionking.jpg'), filename: 'lionking.jpg')

wreckItRalph = Video.create!({title: 'Wreck It Ralph', description:'wreck it ralph goes from bad guy to good guy', year: 2018 ,video_type:'Movie' ,rating:'7/10'}) 
wreckItRalph.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/wreckitralph.jpg'), filename: 'wreckitralph.jpg')

legoMovie = Video.create!({title: 'The Lego Movie', description:'a nobody piece of lego becomes the ONE', year: 2017 ,video_type:'Movie' ,rating:'7/10'})
legoMovie.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/legomovie.jpg'), filename: 'legomovie.jpg')

moana =  Video.create!({title: 'Moana', description:'Moana sails the seas to return the heart of a goddess', year: 2016 ,video_type:'Movie' ,rating:'9/10'})
moana.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/moana.jpg'), filename: 'moana.jpg')

bighero =  Video.create!({title: 'Big Hero 6', description:'hero builds robot ot avenge brothers death and team joins', year: 2014 ,video_type:'Movie' ,rating:'7/10'})
bighero.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/bighero.jpg'), filename: 'bighero.jpg')


thedictator =  Video.create!({title: 'The Dictator', description:'a dictator escapes his country and movies to america to love in hiding', year: 2012 ,video_type:'Movie' ,rating:'7/10'})
thedictator.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/thedictator.jpg'), filename: 'thedictator.jpg')

jumpstreet =  Video.create!({title: '21 Jump Street', description:'idiot cops take on their first undercover op in highschool', year: 2012 ,video_type:'Movie' ,rating:'7/10'})
jumpstreet.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/jumpstreet.jpg'), filename: 'jumpstreet.jpg')

hangover =  Video.create!({title: 'Hangover', description:'friends go to a bachelor party in vegas and shit gets crazy', year: 2009 ,video_type:'Movies' ,rating:'7/10'})
hangover.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/hangover.jpg'), filename: 'hangover.jpg')

otherguys =  Video.create!({title: 'The Other Guys', description:'another idiot cop movie', year: 2010 ,video_type:'Movie' ,rating:'7/10'})
otherguys.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/otherguys.jpg'), filename: 'otherguys.jpg')

zombieland =  Video.create!({title: 'Zombieland', description:'a group of 4 take on teh zombvie apocalpse together', year: 2009 ,video_type:'Movie' ,rating:'7/10'})
zombieland.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/zombieland.jpg'), filename: 'zombieland.jpg')


thecrown =  Video.create!({title: 'The Crown', description:'the story of queen elizabeth and how she became queen', year: 2016 ,video_type:'TvShow' ,rating:'7/10'})
thecrown.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/thecrown.jpg'), filename: 'thecrown.jpg')

thewitcher =  Video.create!({title: 'The Witcher', description:'based on a book and video game the story of geralt of rivia', year: 2019 ,video_type:'TvShow' ,rating:'7/10'})
thewitcher.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/thewitcher.jpg'), filename: 'thewitcher.jpg')

blackmirror =  Video.create!({title: 'Black Mirror', description:'each episode is a different stroy in alternate universes', year: 2011 ,video_type:'TvShow' ,rating:'7/10'})
blackmirror.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/blackmirror.jpg'), filename: 'blackmirror.jpg')

rocketman =  Video.create!({title: 'Rocketman', description:'the bio of sir Elton John', year: 2019 ,video_type:'Movie' ,rating:'7/10'})
rocketman.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/rocketman.jpg'), filename: 'rocketman.jpg')

theirshman =  Video.create!({title: 'The Irshman', description:'bio of the ichman who was a hitman for the mob', year: 2019 ,video_type:'Movie' ,rating:'7/10'})
theirshman.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/irshman.png'), filename: 'irshman.png')

boheman =  Video.create!({title: 'The Boheman Rhapsody', description:'the bio of freddie mercury', year: 2018 ,video_type:'Movie' ,rating:'7/10'})
boheman.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/boheman.jpg'), filename: 'boheman.jpg')

crazyasians =  Video.create!({title: 'Crazy Rich Asians', description:'woman engaged to prince of singapore and challenges from mother in law', year: 2018 ,video_type:'Movie' ,rating:'7/10'})
crazyasians.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/CRA.png'), filename: 'CRA.png')

abouttime =  Video.create!({title: 'About Time', description:'story of a time traveler trying to fall in love', year: 2013 ,video_type:'Movie' ,rating:'7/10'})
abouttime.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/abouttime.jpg'), filename: 'abouttime.jpg')

silverlining =  Video.create!({title: 'Silver Lining Playbook', description:'mental challenegd man falls in love with depressed woman', year: 2012 ,video_type:'Movie' ,rating:'7/10'})
silverlining.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/silverlinings.jpg'), filename: 'silverlinings.jpg')

notebook =  Video.create!({title: 'The Notebook', description:'poor man tries to get the daughter of rich man', year: 2004 ,video_type:'Movie' ,rating:'7/10'})
notebook.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/thenotebook.jpg'), filename: 'thenotebook.jpg')

hitch =  Video.create!({title: 'Hitch', description:'charismatic love doctor helps fat idiot get gorgeous model', year: 2005 ,video_type:'Movie' ,rating:'7/10'})
hitch.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/hitch.jpg'), filename: 'hitch.jpg')

prettywoman =  Video.create!({title: 'Pretty Woman', description:'rich man falls in love with prostitute crazy twist am i right', year: 1990 ,video_type:'Movie' ,rating:'7/10'})
prettywoman.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/prettywoman.jpg'), filename: 'prettywoman.jpg')

walktoremember =  Video.create!({title: 'A Walk to Remember', description:'love story of cool jock and dying girl', year: 2002 ,video_type:'Movie' ,rating:'7/10'})
walktoremember.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/walktoremember.jpg'), filename: 'walktoremember.jpg')

loveactually =  Video.create!({title: 'Love Actually', description:'stupid british love story', year: 2003 ,video_type:'Movie' ,rating:'7/10'})
loveactually.photo.attach(io: open('https://watchflix-seeds.s3-us-west-1.amazonaws.com/loveactually.jpg'), filename: 'loveactually.jpg')








# action
videoGenre01 = VideoGenre.create!({video_id: inception.id, genre_id: action.id})
videoGenre02 = VideoGenre.create!({video_id: badBoys.id, genre_id: action.id})
videoGenre03 = VideoGenre.create!({video_id: avengers.id, genre_id: action.id})
videoGenre04 = VideoGenre.create!({video_id: starwars.id, genre_id: action.id})
videoGenre05 = VideoGenre.create!({video_id: starTrek.id, genre_id: action.id})
videoGenre06 = VideoGenre.create!({video_id: johnwick.id, genre_id: action.id})
videoGenre07 = VideoGenre.create!({video_id: blackpanther.id, genre_id: action.id})
videoGenre08 = VideoGenre.create!({video_id: daredevil.id, genre_id: action.id})
videoGenre09 = VideoGenre.create!({video_id: arrow.id, genre_id: action.id})

#animation
videoGenre11 = VideoGenre.create!({video_id: naruto.id, genre_id: animation.id})
videoGenre12 = VideoGenre.create!({video_id: alaadin.id, genre_id: animation.id})
videoGenre13 = VideoGenre.create!({video_id: superman.id, genre_id: animation.id})
videoGenre14 = VideoGenre.create!({video_id: lionKing.id, genre_id: animation.id})
videoGenre15 = VideoGenre.create!({video_id: wreckItRalph.id, genre_id: animation.id})
videoGenre16 = VideoGenre.create!({video_id: legoMovie.id, genre_id: animation.id})
videoGenre17 = VideoGenre.create!({video_id: moana.id, genre_id: animation.id})
videoGenre18 = VideoGenre.create!({video_id: bighero.id, genre_id: animation.id})
videoGenre19 = VideoGenre.create!({video_id: thesimpsons.id, genre_id: animation.id})

# comedy
videoGenre21 = VideoGenre.create!({video_id: friends.id, genre_id: comedy.id})
videoGenre22 = VideoGenre.create!({video_id: theOffice.id, genre_id: comedy.id})
videoGenre23 = VideoGenre.create!({video_id: siliconValley.id, genre_id: comedy.id})
videoGenre24 = VideoGenre.create!({video_id: bbt.id, genre_id: comedy.id})
videoGenre25 = VideoGenre.create!({video_id: thedictator.id, genre_id: comedy.id})
videoGenre26 = VideoGenre.create!({video_id: jumpstreet.id, genre_id: comedy.id})
videoGenre27 = VideoGenre.create!({video_id: hangover.id, genre_id: comedy.id})
videoGenre28 = VideoGenre.create!({video_id: otherguys.id, genre_id: comedy.id})
videoGenre29 = VideoGenre.create!({video_id: zombieland.id, genre_id: comedy.id})

#drama
videoGenre31 = VideoGenre.create!({video_id: pearlHarbor.id, genre_id: drama.id})
videoGenre32 = VideoGenre.create!({video_id: breakingBad.id, genre_id: drama.id})
videoGenre33 = VideoGenre.create!({video_id: got.id, genre_id: drama.id})
videoGenre34 = VideoGenre.create!({video_id: thecrown.id, genre_id: drama.id})
videoGenre35 = VideoGenre.create!({video_id: thewitcher.id, genre_id: drama.id})
videoGenre36 = VideoGenre.create!({video_id: blackmirror.id, genre_id: drama.id})
videoGenre37 = VideoGenre.create!({video_id: rocketman.id, genre_id: drama.id})
videoGenre38 = VideoGenre.create!({video_id: theirshman.id, genre_id: drama.id})
videoGenre39 = VideoGenre.create!({video_id: boheman.id, genre_id: drama.id})

#romance
videoGenre41 = VideoGenre.create!({video_id: titanic.id, genre_id: romance.id})
videoGenre42 = VideoGenre.create!({video_id: crazyasians.id, genre_id: romance.id})
videoGenre43 = VideoGenre.create!({video_id: abouttime.id, genre_id: romance.id})
videoGenre44 = VideoGenre.create!({video_id: silverlining.id, genre_id: romance.id})
videoGenre45 = VideoGenre.create!({video_id: notebook.id, genre_id: romance.id})
videoGenre46 = VideoGenre.create!({video_id: hitch.id, genre_id: romance.id})
videoGenre47 = VideoGenre.create!({video_id: prettywoman.id, genre_id: romance.id})
videoGenre48 = VideoGenre.create!({video_id: walktoremember.id, genre_id: romance.id})
videoGenre49 = VideoGenre.create!({video_id: loveactually.id, genre_id: romance.id})