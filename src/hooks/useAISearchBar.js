import openai from '../openAI'
import { MOVIE_API_OPTION } from '../utils/constants'

const useAISearchBar = ()=>{
    const getMovieData = async(moviename)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+moviename+'&include_adult=false&language=en-US&page=1', MOVIE_API_OPTION)
    const json = await data.json();
    return json.results
  }
  const getAISearchMovies = async(searchText) =>{
        const queryText = "Act as a Movie Recommnedation System for the query : " + searchText + "and suggest some movie names seperated by comma as example given ahead 'koi mil gya, ajnabee, hum tum'"
    let AIsearchTextResult=""
      try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4.1-mini", // or another supported model
            messages: [
              {
                role: "user",
                content: queryText,
              },
            ],
          });

        AIsearchTextResult = (completion.choices[0].message.content);
      }catch(err){
         console.error("OpenAI failed:", err.status, err.message);
        AIsearchTextResult = "Stree, Stree 2, Bhool Bhulaiyaa, Bhool Bhulaiyaa 2, Bhool Bhulaiyaa 3, Golmaal Again, Roohi, Bhediya, Kakuda, Phone Bhoot, Bhoot Police, Laxmii, Ragini MMS, Great Grand Masti, Boo Sabki Phategi, Ghost Stories, The Bhootnii, Munjya, Chandramukhi 2, Devi (2016)"

      }

      const moviesName = AIsearchTextResult.split(",")
      const PromiseArray = moviesName.map((moviename)=>getMovieData(moviename))
      const moviesResult = await Promise.all(PromiseArray)
      return {moviesName:moviesName, moviesResult:moviesResult}
  }
  return {getAISearchMovies}
}
export default useAISearchBar