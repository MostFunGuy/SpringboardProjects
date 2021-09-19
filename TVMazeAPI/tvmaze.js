/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  // DONETODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.

  // Add the query to the request
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`); 

  //console.log(response);

  if (response){ // If valid response
    // Narrow to the shows
    let allShows = response.data;
  
    //console.log(`All shows:`);
    //console.log(allShows);

    const returnArray = [];

    for (loopshow of allShows){ // allShows
      //console.log(loopshow);
      const newAddition = {
        id: loopshow.show.id,
        name: loopshow.show.name,
        summary: loopshow.show.summary,
        image: loopshow.show.image ? loopshow.show.image.medium : `https://i.imgur.com/xDHFGVl.jpeg`  // Got an error for missing image, so added a safety feature
      }
      returnArray.push(newAddition);
    }
    //console.log(returnArray)
    return returnArray;
  }
  else{
    console.log(`Invalid response!`)
  }

  /*

  Individual returns from the array of response.data

  0:
    score: 0.6081634
    show:
      averageRuntime: 45
      dvdCountry: null
      externals: {tvrage: 32530, thetvdb: 262168, imdb: "tt2275990"}
      genres: (3) ["Drama", "Crime", "Mystery"]
      id: 1767
      image: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/147/369403.jpg", 
        original: "https://static.tvmaze.com/uploads/images/original_untouched/147/369403.jpg"}
      language: "English"
      name: "The Bletchley Circle"
      network: {
        id: 35, 
        name: "ITV", 
        country: {…}}
      officialSite: null
      premiered: "2012-09-06"
      rating: {average: 7.7}
      runtime: 45
      schedule: {
        time: "", 
        days: Array(0)}
      status: "Ended"
      summary: "<p><b>The Bletchley Circle</b> follows the journey of four ordinary women with extraordinary skills that helped to end World War II.</p><p>Set in 1952, Susan, Millie, Lucy and Jean have returned to their normal lives, modestly setting aside the part they played in producing crucial intelligence, which helped the Allies to victory and shortened the war. When Susan discovers a hidden code behind an unsolved murder she is met by skepticism from the police. She quickly realises she can only begin to crack the murders and bring the culprit to justice with her former friends.</p>"
      type: "Scripted"
      updated: 1592134322
      url: "https://www.tvmaze.com/shows/1767/the-bletchley-circle"
      webChannel: null
      weight: 0
      _links: {
        self: {…}, 
        previousepisode: {…}}
    [[Prototype]]: Object
*/





  /* This came from my Ajax Giphy Party project
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchInput // What the user inputed
     ,api_key: "0IjljI12IfIGLrC4DlzU0bZY0YJAkA0P" // My (MostFunGuy)'s giphy API key Key
                //0IjljI12IfIGLrC4DlzU0bZY0YJAkA0P // Richard's listed key
                //MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym // Springboard's listed key
       ,rating:"pg-13" // Safetyify the results for reasonably SFW results
    }});
  */

  // // This came with the default code for this project, instructions were to replace this
  // return [
  //   {
  //     id: 1767,
  //     name: "The Bletchley Circle",
  //     summary: "<p><b>The Bletchley Circle</b> follows the journey of four ordinary women with extraordinary skills that helped to end World War II.</p><p>Set in 1952, Susan, Millie, Lucy and Jean have returned to their normal lives, modestly setting aside the part they played in producing crucial intelligence, which helped the Allies to victory and shortened the war. When Susan discovers a hidden code behind an unsolved murder she is met by skepticism from the police. She quickly realises she can only begin to crack the murders and bring the culprit to justice with her former friends.</p>",
  //     image: "http://static.tvmaze.com/uploads/images/medium_portrait/147/369403.jpg"
  //   }
  // ]
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <h5 class="card-title">${show.name} (${show.id})</h5>
             <p class="card-text">${show.summary}</p>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

  //The Boys (15299)
  //    const response = await axios.get(`http://api.tvmaze.com/shows/15299/episodes`);
  
  //    getEpisodes(15299);

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

  // TODO: return array-of-episode-info, as described in docstring above

  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`); 
  //console.log(response);
  
  if (response){ // If valid response

    const allShows = response.data; // Get the show array from the overal response

    const returnArray = [];

    for (loopshow of allShows){ // allShows
      //console.log(loopshow);
      const newAddition = {
        id: loopshow.id,
        name: loopshow.name,
        season: loopshow.season,
        number: loopshow.number
      }
      returnArray.push(newAddition);
    }
    //console.log(returnArray)
    return returnArray;
  }
  else{
    console.log(`Invalid response from getEpisodes()`);
  }
}
