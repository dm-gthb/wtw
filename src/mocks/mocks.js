import {getRandomNum} from '../util/util';

const MILISECONDS_IN_DAY = 86400000;
const LeftDays = {
  MIN: 1,
  MAX: 10
};
const Rating = {
  MIN: 1,
  MAX: 10
};

const generateDate = () => Date.now() - getRandomNum(LeftDays.MIN * MILISECONDS_IN_DAY, LeftDays.MAX * MILISECONDS_IN_DAY);

export const generateComment = () => ({
  rating: getRandomNum(Rating.MIN, Rating.MAX),
  comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo tempore cum.`,
  date: generateDate(),
});

export const admin = {
  'name': `Admin Name`,
  'email': `test@test.com`,
  'avatar_url': `./img/avatar.jpg`,
  'isAuth': false
};

export const user = {
  'name': `User Name`,
  'email': `test@test.com`,
  'avatar_url': `./img/avatar.jpg`,
};

export const films = [
  {
    "name": `Aviator`,
    "poster_image": `./img/poster/Aviator.jpg`,
    "preview_image": `./img/preview/aviator.jpg`,
    "background_image": `./img/background/Aviator.jpg`,
    "background_color": `#D6CDAF`,
    "description": `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    "rating": 9.8,
    "scores_count": 307174,
    "director": `Martin Scorsese`,
    "starring": [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    "run_time": 170,
    "genre": `Drama`,
    "released": 2014,
    "id": 1,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Fantastic Beasts: The Crimes of Grindelwald`,
    "poster_image": `./img/poster/Fantastic_Beasts.jpg`,
    "preview_image": `./img/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    "background_image": `./img/background/Fantastic_Beasts.jpg`,
    "background_color": `#B6A99F`,
    "description": `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    "rating": 3.4,
    "scores_count": 160757,
    "director": `David Yates`,
    "starring": [
      `Eddie Redmayne`,
      `Katherine Waterston`,
      `Dan Fogler`
    ],
    "run_time": 134,
    "genre": `Fantasy`,
    "released": 2018,
    "id": 2,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Seven Years in Tibet`,
    "poster_image": `./img/poster/Seven_Years_in_Tibet.jpg`,
    "preview_image": `./img/preview/seven-years-in-tibet.jpg`,
    "background_image": `./img/background/Seven_Years_in_Tibet.jpg`,
    "background_color": `#C6CADF`,
    "description": `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    "rating": 3.6,
    "scores_count": 112612,
    "director": `Jean-Jacques Annaud`,
    "starring": [
      `Brad Pitt`,
      `David Thewlis`,
      `BD Wong`
    ],
    "run_time": 136,
    "genre": `Adventure`,
    "released": 1997,
    "id": 3,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `The Revenant`,
    "poster_image": `./img/poster/Revenant.jpg`,
    "preview_image": `./img/preview/revenant.jpg`,
    "background_image": `./img/background/Revenant.jpg`,
    "background_color": `#92918B`,
    "description": `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    "rating": 4,
    "scores_count": 618498,
    "director": `Alejandro G. Iñárritu`,
    "starring": [
      `Leonardo DiCaprio`,
      `Tom Hardy`,
      `Will Poulter`
    ],
    "run_time": 156,
    "genre": `Action`,
    "released": 2015,
    "id": 4,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Once Upon a Time in America`,
    "poster_image": `./img/poster/Once_Upon_a_Time_in_America.jpg`,
    "preview_image": `./img/preview/Once_Upon_a_Time_in_America.jpg`,
    "background_image": `./img/background/ones_upon_a_time_in_america.jpg`,
    "background_color": `#CBAC79`,
    "description": `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    "rating": 9.9,
    "scores_count": 276395,
    "director": `Sergio Leone`,
    "starring": [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    "run_time": 229,
    "genre": `Crime`,
    "released": 1984,
    "id": 5,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Bohemian Rhapsody`,
    "poster_image": `./img/poster/Bohemian_Rhapsody.jpg`,
    "preview_image": `./img/preview/bohemian_rhapsody.jpg`,
    "background_image": `./img/background/Bohemian_Rhapsody.jpg`,
    "background_color": `#929FA5`,
    "description": `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.`,
    "rating": 6.1,
    "scores_count": 338903,
    "director": `Bryan Singer`,
    "starring": [
      `Rami Malek`,
      `Lucy Boynton`,
      `Gwilym Lee`
    ],
    "run_time": 134,
    "genre": `Drama`,
    "released": 2018,
    "id": 6,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `We need to talk about Kevin`,
    "poster_image": `./img/poster/We_need_to_talk_about_Kevin.jpg`,
    "preview_image": `./img/preview/we-need-to-talk-about-kevin.jpg`,
    "background_image": `./img/background/We_need_to_talk_about_Kevin.jpg`,
    "background_color": `#E1DFDE`,
    "description": `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    "rating": 3.8,
    "scores_count": 123240,
    "director": `Lynne Ramsay`,
    "starring": [
      `Tilda Swinton`,
      `John C. Reilly`,
      `Ezra Miller`
    ],
    "run_time": 112,
    "genre": `Drama`,
    "released": 2011,
    "id": 7,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Snatch`,
    "poster_image": `./img/poster/Snatch.jpg`,
    "preview_image": `./img/preview/snatch.jpg`,
    "background_image": `./img/background/Snatch.jpg`,
    "background_color": `#FDFDFC`,
    "description": `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    "rating": 0.2,
    "scores_count": 716577,
    "director": `Guy Ritchie`,
    "starring": [
      `Jason Statham`,
      `Brad Pitt`,
      `Benicio Del Toro`
    ],
    "run_time": 104,
    "genre": `Comedy`,
    "released": 2000,
    "id": 8,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `A Star Is Born`,
    "poster_image": `./img/poster/A_Star_Is_Born.jpg`,
    "preview_image": `./img/preview/A_Star_Is_Born.jpg`,
    "background_image": `./img/background/A_Star_is_Born.jpg`,
    "background_color": `#C4C0C0`,
    "description": `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
    "rating": 3.9,
    "scores_count": 244484,
    "director": `Bradley Cooper`,
    "starring": [
      `Lady Gaga`,
      `Bradley Cooper`,
      `Sam Elliott`
    ],
    "run_time": 136,
    "genre": `Drama`,
    "released": 2018,
    "id": 9,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Moonrise Kingdom`,
    "poster_image": `./img/poster/Moonrise_Kingdom.jpg`,
    "preview_image": `./img/preview/moonrise-kingdom.jpg`,
    "background_image": `./img/background/Moonrise_Kingdom.jpg`,
    "background_color": `#D8E3E5`,
    "description": `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`,
    "rating": 7.9,
    "scores_count": 291183,
    "director": `Wes Anderson`,
    "starring": [
      `Jared Gilman`,
      `Kara Hayward`,
      `Bruce Willis`
    ],
    "run_time": 94,
    "genre": `Adventure`,
    "released": 2012,
    "id": 10,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Bronson`,
    "poster_image": `./img/poster/bronson.jpg`,
    "preview_image": `./img/preview/bronson.jpg`,
    "background_image": `./img/background/bronson.jpg`,
    "background_color": `#73B39A`,
    "description": `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    "rating": 3.6,
    "scores_count": 109661,
    "director": `Nicolas Winding Refn`,
    "starring": [
      `Tom Hardy`,
      `Kelly Adams`,
      `Luing Andrews`
    ],
    "run_time": 92,
    "genre": `Action`,
    "released": 2008,
    "id": 11,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Pulp Fiction`,
    "poster_image": `./img/poster/Pulp_Fiction.jpg`,
    "preview_image": `./img/preview/pulp-fiction.jpg`,
    "background_image": `./img/background/Pulp_Fiction.jpg`,
    "background_color": `#795433`,
    "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    "rating": 1.5,
    "scores_count": 1635992,
    "director": `Quentin Tarantino`,
    "starring": [
      `John Travolta`,
      `Uma Thurman`,
      `Samuel L. Jackson`
    ],
    "run_time": 153,
    "genre": `Crime`,
    "released": 1994,
    "id": 12,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `War of the Worlds`,
    "poster_image": `./img/poster/War_of_the_Worlds.jpg`,
    "preview_image": `./img/preview/war-of-the-worlds.jpg`,
    "background_image": `./img/background/War_of_the_Worlds.jpg`,
    "background_color": `#9B7E61`,
    "description": `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    "rating": 9.3,
    "scores_count": 386834,
    "director": `Steven Spielberg`,
    "starring": [
      `Tom Cruise`,
      `Dakota Fanning`,
      `Tim Robbins`
    ],
    "run_time": 116,
    "genre": `Adventure`,
    "released": 2005,
    "id": 13,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Macbeth`,
    "poster_image": `./img/poster/Macbeth.jpg`,
    "preview_image": `./img/preview/macbeth.jpg`,
    "background_image": `./img/background/Macbeth.jpg`,
    "background_color": `#F1E9CE`,
    "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    "rating": 3.3,
    "scores_count": 48798,
    "director": `Justin Kurzel`,
    "starring": [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    "run_time": 113,
    "genre": `Drama`,
    "released": 2015,
    "id": 14,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Johnny English`,
    "poster_image": `./img/poster/Johnny_English.jpg`,
    "preview_image": `./img/preview/johnny-english.jpg`,
    "background_image": `./img/background/Johnny_English.jpg`,
    "background_color": `#F0DBA2`,
    "description": `After a sudden attack on the MI5, Johnny English, Britain's most confident yet unintelligent spy, becomes Britain's only spy.`,
    "rating": 10,
    "scores_count": 136843,
    "director": `Peter Howitt`,
    "starring": [
      `Rowan Atkinson`,
      `John Malkovich`,
      `Natalie Imbruglia`
    ],
    "run_time": 88,
    "genre": `Comedy`,
    "released": 2003,
    "id": 15,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Legend`,
    "poster_image": `./img/poster/Legend.jpg`,
    "preview_image": `./img/preview/legend.jpg`,
    "background_image": `./img/background/legend.jpg`,
    "background_color": `#E1DAD7`,
    "description": `Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.`,
    "rating": 3.5,
    "scores_count": 138487,
    "director": `Brian Helgeland`,
    "starring": [
      `Tom Hardy`,
      `Emily Browning`,
      `Taron Egerton`
    ],
    "run_time": 132,
    "genre": `Crime`,
    "released": 2015,
    "id": 16,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Matrix`,
    "poster_image": `./img/poster/matrix.jpg`,
    "preview_image": `./img/preview/matrix.jpg`,
    "background_image": `./img/background/matrix.jpg`,
    "background_color": `#B9B27E`,
    "description": `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    "rating": 4.4,
    "scores_count": 1503092,
    "director": `Wachowski Brothers`,
    "starring": [
      `Keanu Reeves`,
      `Laurence Fishburne`,
      `Carrie-Anne Moss`
    ],
    "run_time": 136,
    "genre": `Action`,
    "released": 1999,
    "id": 17,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Shutter Island`,
    "poster_image": `./img/poster/Shutter_Island.jpg`,
    "preview_image": `./img/preview/shutter-island.jpg`,
    "background_image": `./img/background/Shutter_Island.jpg`,
    "background_color": `#977461`,
    "description": `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    "rating": 4.1,
    "scores_count": 1002557,
    "director": `Martin Scorsese`,
    "starring": [
      `Leonardo DiCaprio`,
      `Emily Mortimer`,
      `Mark Ruffalo`
    ],
    "run_time": 138,
    "genre": `Thriller`,
    "released": 2010,
    "id": 18,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `No Country for Old Men`,
    "poster_image": `./img/poster/No_Country_for_Old_Men.jpg`,
    "preview_image": `./img/preview/no-country-for-old-men.jpg`,
    "background_image": `./img/background/No_Country_for_Old_Men.jpg`,
    "background_color": `#BDAD8F`,
    "description": `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    "rating": 4.1,
    "scores_count": 764976,
    "director": `Ethan Coen`,
    "starring": [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    "run_time": 122,
    "genre": `Crime`,
    "released": 2007,
    "id": 19,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Midnight Special`,
    "poster_image": `./img/poster/Midnight_Special.jpg`,
    "preview_image": `./img/preview/midnight-special.jpg`,
    "background_image": `./img/background/Midnight_Special.jpg`,
    "background_color": `#828585`,
    "description": `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
    "rating": 3.3,
    "scores_count": 67815,
    "director": `Jeff Nichols`,
    "starring": [
      `Michael Shannon`,
      `Joel Edgerton`,
      `Kirsten Dunst `
    ],
    "run_time": 112,
    "genre": `Action`,
    "released": 2016,
    "id": 20,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `What We Do in the Shadows`,
    "poster_image": `./img/poster/What-We-Do-in-the-Shadows.jpg`,
    "preview_image": `./img/preview/what-we-do-in-the-shadows.jpg`,
    "background_image": `./img/background/What-We-Do-in-the-Shadows.jpg`,
    "background_color": `#A39E81`,
    "description": `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    "rating": 7.2,
    "scores_count": 6173,
    "director": `Jemaine Clement`,
    "starring": [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    "run_time": 30,
    "genre": `Comedy`,
    "released": 2019,
    "id": 21,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Gangs of new york`,
    "poster_image": `./img/poster/Gangs_of_New_York_Poster.jpg`,
    "preview_image": `./img/preview/gangs_of_new_york.jpg`,
    "background_image": `./img/background/gangs_of_new_york.jpg`,
    "background_color": `#A6B7AC`,
    "description": `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    "rating": 8.8,
    "scores_count": 370881,
    "director": `Martin Scorsese`,
    "starring": [
      `Leonardo DiCaprio`,
      `Cameron Diaz`,
      `Daniel Day-Lewis`
    ],
    "run_time": 167,
    "genre": `Crime`,
    "released": 2002,
    "id": 22,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Orlando`,
    "poster_image": `./img/poster/Orlando.jpg`,
    "preview_image": `./img/preview/orlando.jpg`,
    "background_image": `./img/background/Orlando.jpg`,
    "background_color": `#D8D3BD`,
    "description": `Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.`,
    "rating": 2.6,
    "scores_count": 12292,
    "director": `Sally Potter`,
    "starring": [
      `Tilda Swinton`,
      `Billy Zane`,
      `Quentin Crisp`
    ],
    "run_time": 94,
    "genre": `Drama`,
    "released": 1992,
    "id": 23,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Beach`,
    "poster_image": `./img/poster/beach.jpg`,
    "preview_image": `./img/preview/beach.jpg`,
    "background_image": `./img/background/beach.jpg`,
    "background_color": `#EBC996`,
    "description": `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    "rating": 3.3,
    "scores_count": 207824,
    "director": `Danny Boyle`,
    "starring": [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    "run_time": 119,
    "genre": `Adventure`,
    "released": 2000,
    "id": 24,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    "name": `Dardjeeling Limited`,
    "poster_image": `./img/poster/Dardjeeling_Limited.jpg`,
    "preview_image": `./img/preview/dardjeeling_limited.jpg`,
    "background_image": `./img/background/Dardjeeling_Limited.jpg`,
    "background_color": `#AD9F8B`,
    "description": `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
    "rating": 3.6,
    "scores_count": 165106,
    "director": `Wes Anderson`,
    "starring": [
      `Owen Wilson`,
      `Adrien Brody`,
      `Jason Schwartzman`
    ],
    "run_time": 91,
    "genre": `Adventure`,
    "released": 2007,
    "id": 25,
    "is_favorite": false,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];
